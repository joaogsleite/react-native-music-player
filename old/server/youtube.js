'use strict'
let youtube = null

module.exports.init = ()=>{

    let google = require('googleapis')
    let data = JSON.parse(require('fs').readFileSync(__dirname+'/google.json', 'utf8'))
    let OAuth2 = google.auth.OAuth2
    let oauth2Client = new OAuth2(data.client_id, data.client_secret, data.redirect_uri)

    oauth2Client.setCredentials({ refresh_token: data.refresh_token })
    google.options({ auth: oauth2Client })

    youtube = google.youtube('v3')
}

module.exports.video_info = (id,done)=>{
    let info = {}
    youtube.videos.list({part:'snippet',id:id},(err,res)=>{
        for(let i in res.items){
            info.id = res.items[i].id
            info.title = res.items[i].snippet.title
            info.description = res.items[i].snippet.description
            info.thumbnail = res.items[i].snippet.thumbnails['medium'].url
            info.user = res.items[i].snippet.channelTitle
            info.date = res.items[i].snippet.publishedAt
        }
        done(info)
    })
}

module.exports.search = (query,done)=>{
    let results = []
    youtube.search.list({part:'snippet',q:query,type:'video',maxResults:40},(err,res)=>{
        for(let i in res.items){
            results.push({
                id: res.items[i].id.videoId,
                title: res.items[i].snippet.title,
                description: res.items[i].snippet.description,
                thumbnail: res.items[i].snippet.thumbnails['medium'].url,
                user: res.items[i].snippet.channelTitle,
                date: res.items[i].snippet.publishedAt,
            })
        }
        done(results)
    })
}

module.exports.related = (id,done)=>{
    let results = []
    youtube.search.list({part:'snippet',relatedToVideoId:id,type:'video',maxResults:20},(err,res)=>{
        if(!res){ done(results); return; }
        for(let i in res.items){
            results.push({
                id: res.items[i].id.videoId,
                title: res.items[i].snippet.title,
                description: res.items[i].snippet.description,
                thumbnail: res.items[i].snippet.thumbnails['medium'].url,
                user: res.items[i].snippet.channelTitle,
                date: res.items[i].snippet.publishedAt,
            })
        }
        done(results)
    })
}
