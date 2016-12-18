

function search(query){
    var q = query;
    el('results').innerHTML = "<div class='col-sm-12 text'>Loading results...</div>";
    if(q==="" || q.length<2){
        el('results').innerHTML = "<div class='col-sm-12 text'>Search for something on youtube...</div>";
        return;
    }
    jsonGET('/api/search/'+q,function(data){
        el('results').innerHTML = "";
        for(var i in data.videos){
            add_result(data.videos[i]);
        }
        if(data.videos.length==0){
            el('results').innerHTML="<div class='col-sm-12 text'>No videos found!</div>"
        }
    })
}

function add_result(video){
    var div = document.createElement("div");
    div.innerHTML = `
    <div class="col-sm-12 col-md-6">
        <a href="/player/`+video.id+`" class="thumbnail">
            <div class="image">
                <img src="`+video.thumbnail+`" />
            </div>
            <div class="caption">
                <h4>`+video.title+`</h4>
                <p class="author">
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                    &nbsp;`+video.user.substring(0,11)+`
                    &nbsp;&nbsp;
                    <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                    &nbsp;`+video.date.substring(0,10)+`
                </p>
            </div>
        </a>
    </div>
    `;
    el('results').appendChild(div);
}

var last_search;
var last_query="";
el('search').addEventListener("keyup", function(){
    clearTimeout(last_search);
    last_search = setTimeout(function () {
        if(el('search').value!=last_query){
            last_query=el('search').value;
            search(last_query);
        }
    }, 600);
});
el('form').addEventListener("submit", function(){
    clearTimeout(last_search);
    if(el('search').value!=last_query){
        last_query=el('search').value;
        search(last_query);
    }
    el('search').blur();
    return false;
});
(function(){
    el('search').focus();
})();
