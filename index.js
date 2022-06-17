//Modules import
import { ResetGrid, adjustGrid } from './src/js/inputHandle';
import './src/style.css';

//Creating a grid for a pad
let main = document.querySelector('main');
let grid = document.createElement('section');
main.append(grid);

//Get access to elements

const resetBtn = document.querySelector('#btn_reset');
const changeSizeBtn = document.querySelector('#btn_change_size');

//Style for grid
grid.setAttribute('class', 'gridStyle');

//Setting up Events

resetBtn.addEventListener('click', ResetGrid()); // reset grid
changeSizeBtn.addEventListener('click', adjustGrid(grid,2,5)); // reset grid
