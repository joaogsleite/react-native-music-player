
'use strict'

const youtube       = require('./youtube.js')
const fs            = require('fs')
const express       = require('express')
const server        = express()

server.use(require('cookie-parser')())
youtube.init()

const items = {}

let clear_items = setInterval(()=>{
    for(let id in items){
        if(Date.now()-10*60*1000 >= items[id].timeout){
            delete items[id]
            fs.unlink(__dirname+'/tmp/'+id+'.mp3')
        }
    }
},10*60*1000)

server.get('/api/stop/:id',(req,res)=>{
    items[req.params.id].converter.cancel();
    res.send('ok!')
})

server.get('/api/traffic/:id',(req,res)=>{
    let cookie = req.cookies.youtubify
    let id = req.params.id

    res.setHeader('Content-Type', 'application/json');

    if(!items[id]){
        res.send(JSON.stringify({
            status: 'error',
            traffic: {
                ytify_usage: 0,
                yt_usage:0,
                ytify_total: 0,
                yt_total: 0
            }
        }))
        return
    }

    if(!items[id].statistics[cookie]){
        items[id].statistics[cookie]={
            last_usage  : 0,
            total       : 0
        }
    }

    let last_usage = items[id].statistics[cookie].last_usage;
    let dispatched = items[id].requests[cookie].connection._bytesDispatched
    if(last_usage>dispatched) items[id].statistics[cookie].total+=last_usage
    items[id].statistics[cookie].last_usage = dispatched

    let usage = items[id].statistics[cookie].total+dispatched
    let total = items[id].total

    res.send(JSON.stringify({
        status: 'success',
        traffic: {
            ytify_usage: usage,
            yt_usage:usage*32,
            ytify_total: total,
            yt_total: total*33
        }
    }))
})

require('./ytdl.js')(server,items)
require('./api.js')(server,youtube)
require('./mp3.js')(server,items)
require('./webapp.js')(server,express,youtube)

server.listen(80,()=>{
    console.log('Server running...')
})
