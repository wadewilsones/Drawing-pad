
//Creating a grid for a pad
let main = document.querySelector('main');
let grid = document.createElement('section');
main.append(grid);

//Style for grid
grid.setAttribute('class', 'gridStyle');



//Adjusting size for a grid
function adjustGrid(columns, rows){
    //Adding rows
    for(let i = 0; i < columns*rows; i++){
        grid.append('div')
    }
}

