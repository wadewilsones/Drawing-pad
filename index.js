//Modules import
import {ResetGrid, adjustGrid, draw, clear } from './src/js/inputHandle';
import './src/style.css';

//Creating a grid for a pad
let main = document.querySelector('main');
let grid = document.createElement('section');
//Style for grid
grid.setAttribute('class', 'gridStyle');

main.append(grid);

//Add blocks to grid

for (let i = 0; i < 256; i++){
    let cell = document.createElement('div');
    grid.append(cell);
    cell.setAttribute('class', 'gridCell');
    //Drawing a cell when mousemove
    cell.addEventListener('mousemove', function drawing(e){
        e.preventDefault();
        draw(cell); 
    })
}



//Reset or Adjust the grid.

document.querySelector('#btn_change_size').addEventListener('submit', adjustGrid);
document.querySelector('#btn_reset').addEventListener('click',  ResetGrid);
