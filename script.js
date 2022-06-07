
// this function determines the size of the 
function determineSize(size){
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for (i = 0; i < size*size; i++){
        
        let square = document.createElement('div');
        
        square.style.backgroundColor = 'white';
        square.style.borderColor = 'black';
        // function that changes the color of the box when you mouse over the box
        square.onmouseover=function(){
            square.style.backgroundColor = "black";
            
        }
        grid.insertAdjacentElement("beforeend",square);
    }
}