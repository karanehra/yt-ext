// var port = chrome.runtime.connect();

// window.addEventListener("message", function(event) {
//   // We only accept messages from ourselves
//   if (event.source != window)
//     return;

//   if (event.data.type && (event.data.type == "FROM_PAGE")) {
//     console.log("Content script received: " + event.data.text);
//     port.postMessage(event.data.text);
//   }
// }, false);
// document.addEventListener("DOMContentLoaded", function(event) {
//     // Your code to run since DOM is loaded and ready
// });


// window.alert(likes,dislikes

var callback = function(){
    // Handler when the DOM is fully loaded
    console.log("hello")
    var a = document.querySelectorAll("yt-formatted-string#text");
    var p = document.querySelectorAll("video.html5-main-video");
    // var header_ = document.querySelector("div#top");
    var header_ = document.querySelector("ytd-searchbox#search");
    var likes = a[0].innerHTML;
    var dislikes = a[1].innerHTML;
    setTimeout(function(){
        header_.innerHTML+='<div style="height: 200px;width: 200px;background-color: gray;position: absolute;top: 0;right: 50%;">'+likes+' '+dislikes+'</div>';
        var e = new KeyboardEvent('keydown',{'keyCode':32,'which':32});
        console.log(e);
        document.dispatchEvent(e);
    },3000)
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}