let populateGrid = ()=>{
    const gridContainer = document.querySelector('.grid-container');
    for (let index = 0; index < 9; index++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);

       for (let j = 0; j < 9; j++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        gridRow.appendChild(grid)
        ;
       }
    }
}

populateGrid();