counter = 1

function showPopup() {
    

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

const cards = document.querySelectorAll(".foodphoto");
cards.forEach(card => {
    card.addEventListener("click", function() {

        document.getElementById('popup').style.display = 'block';
        document.body.classList.add('popup-active');
        
        document.getElementById("popupImage").src = card.src;
        document.getElementById("popupDishName").innerText = card.parentElement.querySelector(".name").innerText;
        document.getElementById("popupHeader").innerText = card.parentElement.querySelector(".title").innerText;
        document.getElementById("popupPrice").innerText = card.parentElement.querySelector(".price").innerText;

        const number = document.getElementById("counterText");
        counter = 1;
        number.textContent = counter;
    }); 
});

const addToCart = document.querySelectorAll(".addToCart");

addToCart.forEach(button => {
    button.addEventListener("click", function() {

        window.location.href = "Cart.html";
    });
   

});

const popupImage = document.getElementById("popupImage");
popupImage.addEventListener("click",function() {

    window.location.href = "dish_info.html";

});

