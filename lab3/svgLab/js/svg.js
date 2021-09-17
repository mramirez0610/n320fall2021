//game-logic class
class Game {

    foundCirc = 0;
    totalCirc = 0;
    searchColor = "#9cc2ff";
    normalColor = "#ff4a4a";
    idleColor = "#000"
    svgZone = document.getElementById("svgZone");
    foundBar = new FoundBar();

    constructor(){
        //creating circles
        for(var i = 0; i < 25; i++)
        {
            //actual creation + adding attributes
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            newCirc.classList.add("gameCirc");

            newCirc.setAttribute("radius", 15);
            newCirc.setAttribute("cx", Math.random() * 400);
            newCirc.setAttribute("cy", Math.random() * 400);
            
            //generates which circles are hidden
            if(Math.random() < .3){
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalCirc++
            } else{
                newCirc.dataset.hiddenColor = this.normalColor;
            }

            //mouse events - mouseover, mouseout, click all do their respective actions
            newCirc.addEventListener("mouseover", (event) =>{
                event.target.style.fill = event.target.dataset.hiddenColor;
            })

            newCirc.addEventListener("mouseout", (event) =>{
                event.target.style.fill = this.idleColor ;
            })

            newCirc.addEventListener("click", (event) =>{
                if(event.target.dataset.hiddenColor == this.searchColor){
                    event.target.remove();

                    this.foundCirc++

                    //updating foundBar
                    this.foundBar.setPercent(this.foundCirc / this.totalCirc);
                }
            })
            //appending the circle to the svg zone
            this.svgZone.appendChild(newCirc);
        }
    }
}

class FoundBar{
    element = document.getElementById("foundBar");
    maxSize = 130;
    percent = 0;

    setPercent(percent){
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize);
    }
}

let g = new Game;