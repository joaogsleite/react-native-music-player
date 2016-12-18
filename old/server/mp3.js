'use strict'

const fs = require('fs')
const Throttle = require('./throttle.js')

module.exports = (server,items) => {

server.get('/api/mp3/:id', (req, res)=>{

    const id    = req.params.id
    const path  = __dirname + '/tmp/'+ id +'.mp3'
    if(!items[id]){
        res.status(403)
        res.send('error!')
        return
    }
    const total = items[id].total

    items[id].timeout = Date.now()

    let cookie = req.cookies.youtubify
    items[id].requests[cookie]=req

    if (req.headers['range']) {
        let range = req.headers.range
        let parts = range.replace(/bytes=/, "").split("-")
        let partialstart = parts[0]
        let partialend = parts[1]

        let start = parseInt(partialstart, 10)
        let end = partialend ? parseInt(partialend, 10) : total-1
        let chunksize = (end-start)+1

        //console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize)

        let file = fs.createReadStream(path, {start: start, end: end});
        res.status(206)
        res.set({
            'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'audio/mp3',
            'Content-Disposition': 'inline;filename="'+id+'.mp3"'
        });
        let t = new Throttle(370*1024)
        t.limit(500*1024,100*1024)
        t.limit(1024*1024,1.5*128*1024/8)
        file.pipe(t).pipe(res);
    } else {
        //console.log('ALL: ' + total);
        res.status(200)
        res.set({
            'Content-Length': total,
            'Content-Type': 'audio/mp3',
            'Content-Disposition': 'inline;filename="'+id+'.mp3"'
        })
        let t = new Throttle(370*1024)
        t.limit(500*1024,100*1024)
        t.limit(1024*1024,1.5*128*1024/8)
        fs.createReadStream(path).pipe(t).pipe(res)
    }
})

}
