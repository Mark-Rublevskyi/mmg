// login modal

let modal = document.getElementById('myModal');
let btn = document.getElementById("loginModal");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none"
}

// example modal 

let exampleModal = document.getElementById('myExampleModal');
let viewBtn = document.getElementsByClassName('view-bot');
let exampleClose = document.getElementsByClassName("close-example")[0];

viewBtn.onclick = function () {
    exampleModal.style.display = "block"
}

exampleClose.onclick = function() {
    exampleModal.style.display = "none"
}

// slick

$(".slick-bar").slick ({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:  false,
    dots: true
})