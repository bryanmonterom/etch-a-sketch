let populateGrid = (value,color)=>{
    const gridContainer = document.querySelector('.grid-container');
    for (let index = 0; index < value; index++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);

       for (let j = 0; j < value; j++) {
        let grid = document.createElement('div');
        grid.addEventListener('mouseover',()=>{ grid.style.backgroundColor = color/*classList.add('hover')*/})
        grid.classList.add('grid');
        gridRow.appendChild(grid);
        ;
       }
    }
}


function updateGrid(){
cleanGrid();
drawGrid();
}

let slider = document.getElementById('sizeSlider');
let color = document.getElementById('favcolor');

slider.addEventListener('change',updateSliderValue);

function updateSliderValue(){
    let sliderValue = document.querySelector('#sliderValue');
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
}

function drawGrid(){
    updateSliderValue();
    populateGrid(slider.value, color.value);
}

function cleanGrid(){
    const grids = document.querySelectorAll('.grid-row');
    console.log(grids);
    grids.forEach(a=> a.remove());
}

function applyColor(){}

drawGrid();