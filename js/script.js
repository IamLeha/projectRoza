/*Крестик на специальном предложении*/
let cross = document.getElementById('close');

cross.onclick = function() {
    cross.parentElement.remove();
};
/*----------------------------------*/

/*Главный слайдер*/
$('.main-slider').slick({
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    infinite: true,
	dots: true
});
/*----------------*/

/*Слайдер в карточке товара*/
$('.slider-forN').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
});
$('.slider-navN').slick({
  slidesToShow: 1000,
  slidesToScroll: 1,
  asNavFor: '.slider-forN',
  centerMode: true,
  focusOnSelect: true,
  vertical: true,
  arrows:true
});
/*------------------------*/

/*Кнопки для прибавления и удаления количества в инпуте в карточке товара*/
$(function() {
  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }
 
    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});
/*---------------------------------------------------------------------------*/