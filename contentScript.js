var callback = function () {

    var a = document.querySelectorAll("yt-formatted-string#text");
    var header_ = document.querySelector("ytd-searchbox#search");
    var likes = a[0].innerHTML;
    var dislikes = a[1].innerHTML;

    setTimeout(function () {
        // fetch('file:///home/karan/Desktop/yt-ext/background.js').then(function(data){
        //     console.log(data)
        // })
        console.log(chrome.extension.getURL('some_folder/some_file.js'))
        header_.innerHTML += '<div id="main" style="position: absolute;top: 0;left: 0;width: 100%;height: 150px;display: flex;justify-content: center">\
        <div style="height: inherit;width: 500px;background-color: lightgray;text-align: center"> \
            <h2>Continue?</h2> \
            <h3>' + likes + ' Likes</h3><h4>'+dislikes+' Dislikes</h4>\
            <div id="close">Close</div><br>\
            <div id="back">Back</div>\
        </div>\
    </div>';
        $('video.html5-main-video').click();
        $('#close').click(function(){
            $('video.html5-main-video').click();
            $('#main').hide();
        });
        $('#back').click(function(){
            window.history.back()
            $('#main').hide();
        })
    }, 3000);

}

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    callback();
} else {
    document.addEventListener("DOMContentLoaded", callback);
}


