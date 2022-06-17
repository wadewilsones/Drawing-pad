
//Reset data

export function ResetGrid(){
    console.log('Grid was cleared')
}


//Adjusting size for a grid
export function adjustGrid(gridName,columns, rows){
    //Adding rows
    for(let i = 0; i < columns*rows; i++){
        gridName.append('div')
    }
    return gridName
}

