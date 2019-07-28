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
  responsive: [
    {
      breakpoint: 425,
      settings: {
        arrows: true,
    prevArrow: $(".prevProd"),
    nextArrow: $(".nextProd"),
      }
    }
  ]
});
$('.slider-navN').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-forN',
  focusOnSelect: true,
  vertical: true,
  arrows:false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        vertical:false,
        centerMode: true,
        }
    }
  ]
});
/*------------------------*/


/*Кнопки для прибавления и удаления количества в инпуте в карточке товара*/
$(function() {
  (function quantityProducts() {
    let $quantityArrowMinus = $(".quantity-arrow-minus");
    let $quantityArrowPlus = $(".quantity-arrow-plus");
    let $quantityNum = $(".quantity-num");
 
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

  $(window).scroll(function(){
    $('#fix-top').toggleClass('fixed-top', $(this).scrollTop() > 0);
  
    if($(window).width() < 769){
      $('#top-header__basket').toggleClass('fixed-top__basket', $(this).scrollTop() > 0);
      if( $(this).scrollTop() > 0){
        $('#image').attr('src', 'img/basket-mobile.png');
        $('#basket__number').css("color", "white"); 
      }
      else{
        $('#image').attr('src', 'img/basket.png');
        $('#basket__number').css("color", "#B10802"); 
      }
    }
  })