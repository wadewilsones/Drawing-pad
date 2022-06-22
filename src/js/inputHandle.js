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
    let col = document.querySelector('#columns');
    let row = document.querySelector('#row');
    let grid = document.querySelector('section');
    //Clean section from children
    while(grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
    //Create a new grid
    createGrid(grid, col.value, row.value);

    //After creating a grid - clear input

    document.querySelector('#columns').value = null;
    document.querySelector('#row').value = null;


}



//Creation of grid

export function createGrid(gridName, col, row, color){
    const cellNumber = col * row;
    const sizeCell = 25;
    const width = col * sizeCell;
    const height = row * sizeCell;

    for (let i = 0; i < cellNumber; i++){
        let cell = document.createElement('div');
        gridName.append(cell);
        gridName.style.cssText = 'grid-template-columns: repeat(' + col + ',' + sizeCell + 'px); grid-template-rows: repeat(' + row + ',' + sizeCell + 'px); width:'+ width +'px; height:' + height +'px;';
        //gridName.style.cssText = 'grid-template-columns: repeat(' + col + ',' + cellWidth + '%); grid-template-rows: repeat(' + row + ',' + cellWidth + '%); width:500px; margin:auto' 
        cell.setAttribute('class', 'gridCell');

        //Drawing a cell when mousemove
        cell.addEventListener('mouseover', function drawingStart(e){
            e.preventDefault();
            draw(cell);
    })

    }
}


//Setting up drawing and clearing


export function draw(cell){
    
    cell.style.cssText = `background-color:black`;
}

export function clear(cell){
    cell.style.cssText = 'background-color:white';
}
