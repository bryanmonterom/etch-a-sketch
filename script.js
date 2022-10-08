let populateGrid = (value)=>{
    const gridContainer = document.querySelector('.grid-container');
    for (let index = 0; index < value; index++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);

       for (let j = 0; j < value; j++) {
        let grid = document.createElement('div');
        grid.addEventListener('mouseover',()=>{ grid.classList.add('hover')})
        grid.classList.add('grid');
        gridRow.appendChild(grid)
        ;
       }
    }
}


function updateGrid(){
cleanGrid();
drawGrid();
}

let slider = document.getElementById('sizeSlider');
slider.addEventListener('change',updateGrid);

function updateSliderValue(){
    let sliderValue = document.querySelector('#sliderValue');
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
}

function drawGrid(){
    updateSliderValue();
    populateGrid(slider.value);
}

function cleanGrid(){
    const grids = document.querySelectorAll('.grid-row');
    console.log(grids);
    grids.forEach(a=> a.remove());
}


drawGrid();