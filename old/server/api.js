
'use strict'

module.exports = (server,youtube)=>{


    server.get('/api/search/:query',(req,res)=>{

        let query = req.params.query
        let data = {}
        
        youtube.search(query,(result)=>{
            data.videos = result
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(data));
        })
    })
}
