//If reset button was clicked

export function ResetGrid(e){
    e.preventDefault();
    //Select grid
    let createdGrid = document.querySelector('section')
    for(let i = 0; i <  createdGrid.children.length; i++){
        clear(createdGrid.children[i]);
    }
}

//If grid create button was clicked

export function adjustGrid(e){
    e.preventDefault();
    //Get values from column and row input
    let col = document.querySelector('#columns').value;
    let row = document.querySelector('#row').value;
    let grid = document.querySelector('section');
    createGrid(grid, col, row)
    
}

//Creation of grid

export function createGrid(gridName, col, row){

    let cellNumber = col * row;
    for (let i = 0; i < cellNumber; i++){
        let cell = document.createElement('div');
        gridName.append(cell);
        gridName.style.cssText = 'grid-template-columns: repeat(' + col +',  30px); grid-template-rows: repeat(' + row +', 30px);'
        cell.setAttribute('class', 'gridCell');
        //Drawing a cell when mousemove
        cell.addEventListener('mousemove', function drawing(e){
            e.preventDefault();
            draw(cell); 
        })
    }
}


//Setting up drawing and clearing

export function draw(cell){
    cell.style.cssText = 'background-color:black';
}

export function clear(cell){
    cell.style.cssText = 'background-color:white';
}
