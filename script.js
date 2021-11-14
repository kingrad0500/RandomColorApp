let button = document.getElementById('colorClick');
let randomColor = document.getElementById('colorWheel');
let resultFavorite = document.getElementById('result');
let rgbText = document.getElementById('resultRGB');
let resetButton = document.getElementById('reset');

function randomNumbers(){
    return Math.floor(Math.random() * 256);
}

function colorChange(event){
    let colorResult = `rgb(${randomNumbers()}, ${randomNumbers()}, ${randomNumbers()})`;
    event.target.style.backgroundColor = colorResult;
    resultFavorite.style.display = 'block';
    resultFavorite.style.backgroundColor = colorResult;
    rgbText.innerHTML = colorResult;
    resetButton.style.display = 'flex';
}

function reset(){
    button.style.backgroundColor = 'blueviolet';
    randomColor.style.backgroundColor = 'blueviolet';
    resultFavorite.style.display = 'none';
    resetButton.style.display = 'none';
}

button.addEventListener('click', colorChange);
randomColor.addEventListener('wheel', colorChange);
resetButton.onclick = reset;