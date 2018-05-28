var callback = function () {

    var a = document.querySelectorAll("yt-formatted-string#text");
    var header_ = document.querySelector("ytd-searchbox#search");
    var likes = a[0].innerHTML;
    var dislikes = a[1].innerHTML;

    setTimeout(function () {
        header_.innerHTML += '<div id="main" style="position: absolute;top: 0;left: 0;width: 100%;height: 150px;display: flex;justify-content: center"><div style="height: inherit;width: 500px;background-color: lightgray;text-align: center"><h3>Continue?</h3><h4> Likes</h4><h4> Dislikes</h4><div id="close">Close</div></div></div>';
        $('video.html5-main-video').click();
        $('#close').click(function(){
            $('video.html5-main-video').click();
            $('#main').hide();
        });
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