//Write your code here
function createDiv(width, height, text) {
	const newDiv = document.createElement('div');

    // Set the width and height with 'px' unit
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    newDiv.textContent = text;
    newDiv.style.color="blue";
    const container = document.getElementById('container');
    container.appendChild(newDiv);
    
}
createDiv(500,200,"lakshmi");

// Do not change this code
Window.createDiv = createDiv;