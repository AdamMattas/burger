$(document).on('ready', function(){

  window.onload = function burgerTime(){
    $('.chef').animate({left: '85%'}, 1000);
    $('.burger-top').delay( 500 ).animate({top: '460px'}, 500);
    $('.title').animate({left: '10%'}, 1000);
  };

});