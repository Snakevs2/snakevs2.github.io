var Count = 0;
var Likes = function(){
    Count += 1;

return document.getElementsByClassName("like-count")[0].innerHTML = ("Likes:" + Count);
};