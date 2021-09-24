let jsHeader = document.getElementById("jsHeader");
let jsH1 = document.getElementById("jsH1");
let cssBlocks = document.getElementsByClassName("cssBlocks");


TweenMax.from(jsH1, {duration: 1.75, alpha:0})
TweenMax.from(jsHeader, {duration: .8, x: 300, alpha:0});
TweenMax.from(cssBlocks, { duration: .8, y:-500, alpha:0});

function exitAni(){
    for(let i=0; i < cssBlocks.length; i++)
    {
        cssBlocks[i].addEventListener("click", (event) => 
        {
            TweenMax.to(event.target, {duration: .8, alpha: 0})
        })
    }
}
