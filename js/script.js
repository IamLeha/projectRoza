/*Крестик на специальном предложении*/
let cross = document.getElementById('close');

cross.onclick = function() {
    cross.parentElement.remove();
};

$('.main-slider').slick({
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    infinite: true,
	dots: true
});