var color = 'black';

function populateGridPanel(size){
let gridPanel = document.querySelector('.gridPanel');
//clear existing squares
let squares = gridPanel.querySelectorAll('div');
squares.forEach(div=> div.remove());
//16x16 grid of square divs
gridPanel.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
gridPanel.style.gridTemplateRows = `repeat(${size}, 1fr)`;

//div colour
function colourMe(){
    if((color == 'random')){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color
    }}

let amount = size*size;

 for(let i = 0; i< amount; i++){
    let square = document.createElement('div');
    square.addEventListener('mouseover', colourMe)
    square.style.backgroundColor = 'white';
    gridPanel.insertAdjacentElement('beforeend', square);
 }
}

populateGridPanel(16);

function changeSize(input){
    if(input >=2 && input <= 100){
    populateGridPanel(input);
} else { 
    console.log('That is not within range')
}}

function changeColor(choice){
  color = choice;
}

function reset(){
    let gridPanel = document.querySelector('.gridPanel');
    //clear existing squares
    let squares = gridPanel.querySelectorAll('div');
    squares.forEach(div=> div.style.backgroundColor = 'white');
}


