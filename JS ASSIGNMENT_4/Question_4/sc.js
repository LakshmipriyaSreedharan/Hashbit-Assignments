// javascript code goes here
// Change color of text
document.getElementById('colorchange').addEventListener('click', () => {
    const color = document.getElementById('colorbox').value;
    document.getElementById('text-container').style.color = color;
});

// Change font size of text
document.getElementById('fontsize').addEventListener('input', () => {
    const fontSize = document.getElementById('fontsize').value;
    document.getElementById('text-container').style.fontSize = fontSize + 'px';
});

// Toggle text styles
document.getElementById('italic').addEventListener('click', () => {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

document.getElementById('underline').addEventListener('click', () => {
    const textContainer = document.getElementById('text-container');
    textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
});

document.getElementById('bold').addEventListener('click', () => {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

// Change font family of text
document.getElementById('list').addEventListener('change', () => {
    const fontFamily = document.getElementById('list').value;
    document.getElementById('text-container').style.fontFamily = fontFamily;
});

// Get CSS properties
document.getElementById('getstyle').addEventListener('click', () => {
    const textContainer = document.getElementById('text-container');
    const style = window.getComputedStyle(textContainer);
    const cssProps = `color: ${style.color}; font-size: ${style.fontSize}; font-style: ${style.fontStyle}; text-decoration: ${style.textDecoration}; font-weight: ${style.fontWeight}; font-family: ${style.fontFamily};`;
    document.getElementById('css-props').textContent = cssProps;
});
