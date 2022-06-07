
let color = "black";



// this function determines the size of the 
function determineSize(size){
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for (i = 0; i < size*size; i++){
        
        let square = document.createElement('div');
        
       
        square.style.borderColor = 'black';
        // function that changes the color of the box when you mouse over the box
        
        square.addEventListener("mouseover" , colorsquare);
        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement("beforeend",square);
    }
}

document.querySelector('.25').click();



function colorsquare(){

        this.style.backgroundColor = color;
 
   
}

function changecolor(choice){
    color = choice;
}


function reset(){
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");

}