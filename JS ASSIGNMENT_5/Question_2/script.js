function ageChange(e) {
    let age = parseInt(e.target.value, 10);
    console.log(age);
    
    const errorsHolder = document.getElementById('errors-holder');
    const submitButton = document.querySelector('button[type="submit"]');
    
    if (isNaN(age) || age < 5) {
        errorsHolder.textContent = 'You need to be at least 5 years old to participate';
        submitButton.disabled = true;
    } else {
        errorsHolder.textContent = '';
        submitButton.disabled = false;
    }
}
