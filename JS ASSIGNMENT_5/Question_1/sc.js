function displayRandomNumber() {
    // Generate a random number between -20 and 20
    const randomNumber = Math.floor(Math.random() * 41) - 20;
    
    // Display the random number in the p tag with id "num"
    document.getElementById('num').textContent = randomNumber;
    
    // Display "Hot" or "Cold" based on the random number
    const resultDiv = document.getElementById('result');
    if (randomNumber < 0) {
        resultDiv.textContent = 'Cold';
    } else {
        resultDiv.textContent = 'Hot';
    }
}

// Run this script after the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create a new div for showing "Hot" or "Cold"
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    resultDiv.style.marginTop = '10px';
    document.body.appendChild(resultDiv);
});
