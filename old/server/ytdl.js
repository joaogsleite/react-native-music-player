'use strict'

const ytdl      = require('ytdl-core')
const ffmpeg    = require('ffmpeg-stream').ffmpeg
const fs        = require('fs')


module.exports = (server,items)=>{

const send = (id,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ state: 1 }));
}
const send_error = (info,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ error:info }));
}
const check = (id,res)=>{
    if(!items[id]) return
    if(!items[id].stream) send(id,res)
    else if(items[id].stream.bytesWritten>1*1024*1024) send(id,res)
    else setTimeout(()=>{ check(id,res) },100)
}

server.get('/api/ytdl/:id',(req,res)=>{

    let id = req.params.id

    if(items[id]){ check(id,res); return; }

    ytdl.getInfo('http://youtu.be/'+id,{filter:(a)=>{return a.itag===140;}},(e,info)=>{

        let converter = ffmpeg()


        let input = converter.input({ f:'m4a', acodec:'aac' })

        try{
            let stream = ytdl('http://youtu.be/'+id, { filter:(b)=>{return b.itag==='140';}})
            stream.on('error',(e)=>{
                items[id] = null;
                send_error('cant download video',res)
            })
            stream.pipe(input)
            let file = fs.createWriteStream(__dirname + '/tmp/'+id+'.mp3')
            converter.output({ f: 'mp3', acodec: 'libmp3lame' }).pipe(file)

            converter.run()

            items[id]={
                stream      : file,
                timeout     : Date.now(),
                total       : info.formats.filter((f)=>{ return f.itag==='140'; })[0].clen,
                converter   : converter,
                requests    : {},
                statistics  : {}
            }

            file.once('open',()=>{
                check(id,res)
            })
            file.once('close',()=>{
                items[id].stream = false
            })
        }catch(e){
            items[id] = null;
            send_error('cant download video',res)
            return;
        }
    })

})

}
