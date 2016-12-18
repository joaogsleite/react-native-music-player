
var id = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
var playing = false;
var data_usage_timeout = false;

jsonGET('/api/ytdl/'+id,function(data){
    if(!playing){
        playing = true;
        var player = '<audio controls autoplay><source src="/api/mp3/'+id+'"></audio>';
        var media = document.getElementById('media');
        media.innerHTML=player;
        data_usage_timeout = setInterval(function(){ data_usage(); },1000)
        setTimeout(function(){
            document.getElementsByTagName('audio')[0].play();
        },1000);
    }

})

function data_usage(){
    jsonGET('/api/traffic/'+id,function(data){
        if(data.status==='error'){
            clearInterval(data_usage_timeout);
            alert('Cant play this video!');
        }else{
            var e = document.getElementById('statistics');
            var traffic = data.traffic;
            el('ytify_data').innerHTML=bytesToSize(traffic.ytify_usage);
            v=100*traffic.ytify_usage*3/(traffic.yt_total);
            el('ytify_bar').style.width=v+'%';
            el('yt_data').innerHTML=bytesToSize(traffic.yt_usage);
            v=100*traffic.yt_usage*0.8/(traffic.yt_total);
            el('yt_bar').style.width=v+'%';
            el('saved_data').innerHTML=bytesToSize(traffic.yt_usage-traffic.ytify_usage);
            v=100*(traffic.yt_usage*0.8-traffic.ytify_usage*3)/(traffic.yt_total);
            el('saved_bar').style.width=v+'%';
        }
    })
}

var description_toggle = false
var description_text = el('description').innerHTML;
function description(){
    if(description_text.length<=80){
        el('toggle').style.display="none";
    }
    if(description_toggle){
        el('description').innerHTML=description_text;
    }else{
        el('description').innerHTML=description_text.substring(0,80)+'...';
    }
    description_toggle=!description_toggle;
}
(function(){
description();
})();
