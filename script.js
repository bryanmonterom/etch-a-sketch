let slider = document.getElementById('sizeSlider');
let color = document.getElementById('favcolor');


let populateGrid = (value, color) => {
    const gridContainer = document.querySelector('.grid-container');

    for (let i = 0; i < value; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);
        for (let j = 0; j < value; j++) {
            let grid = document.createElement('div');
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = color
            });
            grid.classList.add('grid');
            gridRow.appendChild(grid);
        }
    }
}

slider.addEventListener('change', updateSliderValue);

function updateSliderValue() {
    let sliderValue = document.querySelector('#sliderValue');
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
}


function updateGrid() {
    cleanGrid();
    drawGrid();
}

function drawGrid() {
    updateSliderValue();
    populateGrid(slider.value, color.value);
}

function cleanGrid() {
    const grids = document.querySelectorAll('.grid-row');
    grids.forEach(a => a.remove());

}

drawGrid();

