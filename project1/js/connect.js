class Game  {
    connectZone = document.getElementById("connectZone");
    clickCounter = 0;
    boardGrid = [];
    currentColor = "";

    /* breaks the entire thing lol
    redPlayer = new RedPlayer();
    bluePlayer = new BluePlayer();
    */

    constructor(){
        for(let y = 0; y < 7; y++)
        { 
            this.boardGrid[y] = [];

            for(let x = 0; x < 5; x++)
            {
                //setting up the board & empty spaces -- works !!!
                var emptyCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                emptyCirc.classList.add("empCirc");
                emptyCirc.dataset.columnNum = y;
                emptyCirc.dataset.rowNum = x;
                emptyCirc.dataset.clicked = false;
                
                //attributes of the circles
                emptyCirc.setAttribute("cy", (x + .8) * 125);
                emptyCirc.setAttribute("cx", (y + .85) * 91);
                
                //sets up arrays that outline the board
                this.boardGrid[y] [x] = emptyCirc;
                

                //adds click event listener on each empty space. drop logic & turns are determined here
                emptyCirc.addEventListener("click", (event) => 
                {
                    this.clickCounter++;

                    //trying to simplify colors -- oh my god it works
                    var colors = {
                        redChip : "#CF0000",
                        blueChip : "#003BCF",
                    }

                    if(this.clickCounter % 2 == 0)
                    {
                        var currentColor = colors.redChip;
                        console.log(currentColor);
                    } else
                    {
                        var currentColor = colors.blueChip;
                        console.log(currentColor);
                    }
                    
                    //allows the datasets to be used as variables
                    var columnNum = event.target.dataset.columnNum;
                    var rowNum = event.target.dataset.rowNum;

                    
                    /*allows me to specify which row and number the selected space is in, then logs them as variables 
                    -- hey present marco, fyi i deleted selectedSpace - -past marco */
                    let theBoard = this.boardGrid;
                    var selectedColumn = theBoard[columnNum];
                    var lastSpace = selectedColumn [4];

                    /* changes the hidden dataset "clicked" into true, which can be used in chip collision function
                    console.log(this.boardGrid[columnNum][4].dataset.clicked);
                    console.log(theBoard[columnNum][4]); */

                    // theBoard[columnNum][4].dataset.clicked & lastSpace.dataset.clicked are the same things, just neater
                    lastSpace.dataset.clicked = true ;
                    console.log(lastSpace);

                    //what is the move position?
                        //figure out what column is clicked (you know the col now)
                            //Loop upwards until you see an open column -
                            //Use an if/else if to check each one, starting from the bottom
                            // Using one of those.. you know the row
                            // Generate a piece data that might look like this: { row: 3, col: 2 }
                        

                    //what is the move color?
                        //current color

                    //make the move.
                        //give each of your elements a unique ID that matches their row-col. id="el33"
                        //let space = document.getElementById( "el"+pos.row+pos.col )
                        //space.style.fill = currentColor;

                    
                    //allows me to check through the entire selected column, in order to see if it goes to the bottom or goes ontop of another
                    function chipCollision() 
                    {   
                        
                        /* the simplest way to iterate through the spaces would be using multiple if-then statements, but that would be gross ??
                        i should probably still try and do it though */ 

                        if (lastSpace.dataset.clicked = true) 
                        {
                            var newChip = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                            newChip.classList.add("empCirc");
                            newChip.setAttribute("cx", lastSpace.cx);
                            connectZone.appendChild(newChip);
                            TweenMax.to(newChip, {duration: 2, backgroundColor: currentColor, x: lastSpace.cx});
                            
                            lastSpace.previousElementSibling.dataset.clicked = true;
                            
                            console.log("working");
                        }
                        
                        /* backwards for loop --
                         
                        
                        lets circles be numbered by descending from the
                        top instead ascending -- if this doesn't work just
                        use a regular for loop

                        let o = selectedColumn.length; o >=  0; o--
                        let o = 0; o < selectedColumn.length; o++

                        */

                        for(let o = selectedColumn.length; o >=  0; o--)
                        {
                            console.log(o)
                            console.log(selectedColumn[o])
                            if(selectedColumn[o -1].dataset.clicked = true){
                                selectedColumn[o - 1].style.fill = currentColor
                            }
                        }

                    }


                    
                    /* 
                    no longer needed after simplification, but should maybe keep them for archival purpose
                    
                    function temporaryRed() 
                    {
                        lastSpace.style.fill = redChip;
                        
                    }

                    function temporaryBlue() 
                    {
                        lastSpace.style.fill = blueChip;
                        
                    }

                    */

                    chipCollision();
                })

                this.connectZone.appendChild(emptyCirc);
            }
        } 
        console.log(this.boardGrid)
    }
}

class RedPlayer extends Game 
{
    redCounter = document.getElementById("redCounter");
    rCount = 0;
}

class BluePlayer extends Game 
{
    blueCounter = document.getElementById("blueCounter");
    bCount = 0;
}

let startTheGame = new Game();