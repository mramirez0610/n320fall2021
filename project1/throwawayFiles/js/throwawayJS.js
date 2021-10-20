/*

if you think about it, any file can be a text file ;-]

i'll be putting in some shitty code snippets 
here in attempt to finish connect four

*/

//thinking about making click counter a bit more complicated, example being 

clickCounter = 0;
clickCounter++;
currentColor = "";

var colors = [
    redChip = "#CF0000",
    blueChip = "#003BCF",
]

if(clickCounter % 2 == 0)
{
    let currentColor = colors.redChip;
    console.log(currentColor);
} else
{
    let currentColor = colors.blueChip;
    console.log(currentColor);
}

/* or something like that. That could get rid of hardcoded values, like tempBlue and 
tempRed. This could also be used in chipCollision in order to cut down some code. */ 
