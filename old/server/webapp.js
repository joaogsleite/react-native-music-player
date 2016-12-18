'use strict'
const path = require('path')
const ejs  = require('ejs')

const makeid = ()=>{
    let t="";
    let p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0;i<5;i++)
        t+=p.charAt(Math.floor(Math.random()*p.length));
    return t;
}

module.exports = (server,express,youtube)=>{


server.use('/js', express.static(path.join(__dirname,'../webapp/js/')))
server.use('/css', express.static(path.join(__dirname,'../webapp/css/')))
server.use('/images', express.static(path.join(__dirname,'../webapp/images/')))

server.set('view engine', 'html');
server.engine('html', ejs.renderFile);
server.set('views', path.join(__dirname,'../webapp/views/'));

server.get('/',(req,res)=>{
    res.redirect('/search')
})
server.get('/search',(req,res)=>{
        res.render('search',{videos:[]})
})

server.get('/player/:id',(req,res)=>{

    let cookie = makeid()
    let id = req.params.id
    res.clearCookie('youtubify');
    res.cookie('youtubify', cookie, { maxAge: 20*60*1000 });

    youtube.video_info(id,(info)=>{
        youtube.related(id,(items)=>{
            info.related = items
            res.render('player',info)
        })
    })
})

}
