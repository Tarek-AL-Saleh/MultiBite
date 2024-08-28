counter = 1

function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.body.classList.add('popup-active');
    
    const number = document.getElementById("counterText");
    counter = 1;
    number.textContent = counter;

}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove('popup-active');
}

function increaseNumber() {
    const number = document.getElementById("counterText");
    counter += 1;
    number.textContent = counter;
}

function decreaseNumber() {
    const number = document.getElementById("counterText");
    if (counter > 1) {
        counter -= 1;
    }
    

    number.textContent = counter;
}