//Modules import
import {ResetGrid, adjustGrid, createGrid, draw } from './src/js/inputHandle';
import './src/style.css';

//Creating a grid for a pad
let main = document.querySelector('main');
let grid = document.createElement('section');

//Style for grid
grid.setAttribute('class', 'gridStyle');

main.append(grid);

//Add blocks to grid
window.onload = createGrid(grid, 16, 16);

//Reset or Adjust the grid.

document.querySelector('#form').addEventListener('submit', adjustGrid);
document.querySelector('#btn_reset').addEventListener('click',  ResetGrid);
