

//Setting up drawing

export function draw(cell){
    cell.style.cssText = 'background-color:black';
}

export function clear(cell){
    cell.style.cssText = 'background-color:white';
}


//If reset button was clicked

export function ResetGrid(e){
    e.preventDefault();
    //Select grid
    let createdGrid = document.querySelector('section')
    for(let i = 0; i <  createdGrid.children.length; i++){
        clear(createdGrid.children[i]);
    }
}

//Adjusting size for a grid
export function adjustGrid(e){

    e.preventDefault() ;
    console.log('Form was submitted');
      /*
    let adjustedGrid = document.querySelector('section');
    let columns = document.querySelector('#columns').value;
    let rows = document.querySelector('#rows').value;

    console.log('Form submitted');
    //Adding rows and columns
    for(let i = 0; i < columns*rows; i++){
        let cell = document.createElement('div')
        cell.setAttribute('class', 'gridCell')
        adjustedGrid.append(cell)
        adjustedGrid.style.cssText = "grid-template-columns:" + columns + "; grid-template-rows:" + rows + ";";
    }
    return adjustedGrid
        */
}

