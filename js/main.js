const container = document.querySelector(".container");
const newGrid = document.querySelector(".newGrid");
const clear = document.querySelector(".clear");
const lines = document.querySelector(".lines");
const grids = document.getElementsByClassName('grid');
const random = document.querySelector('.random');
const picker = document.getElementById('colorpicker');
const increment = document.querySelector('.incremental');
let newSize;
const defaultSize = 16;

function createGrid(size) {
    container.style.setProperty("--size", `${size}`);
    container.replaceChildren();
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add('grid');
        container.appendChild(div);
    }
}


newGrid.addEventListener('click', () => {
    newSize = prompt('Enter the number of grid you want from 1 to 100');
    if (newSize === null || isNaN(newSize) || newSize < 1 || newSize > 100) {
        newSize = defaultSize;
    }
    createGrid(newSize);
});



window.onload = function() {
    createGrid(defaultSize);
};

picker.addEventListener('input', () => {
    const color = picker.value;
    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mouseover', () => {

            grids[i].style.backgroundColor = color;
        })
    }

});



clear.addEventListener('click', function() {

    for (let i = 0; i < grids.length; i++) {
        grids[i].style.backgroundColor = 'white';
    }
});

lines.addEventListener('click', function() {
    for (let i = 0; i < grids.length; i++) {
        if (grids[i].style.borderStyle === 'none') {
            grids[i].style.borderStyle = 'solid';
        } else {
            grids[i].style.borderStyle = 'none';
        }
    }
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


random.addEventListener('click', function() {
    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mouseover', () => {
            grids[i].style.backgroundColor = getRandomColor();
        })
    }
});

increment.addEventListener('click', () => {
    for (let i = 0; i < grids.length; i++) {
        let colorValue = 160;
        grids[i].addEventListener('mouseover', () => {
            if (colorValue > 0) {
                colorValue -= 10;
            }
            grids[i].style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
        })
    }
});