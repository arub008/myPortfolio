$(window).scroll(function(){

  var wScroll= $(this).scrollTop();
 // console.log(1);
  $('.moneki').css({
    'transform': 'translate(0px, '+wScroll/2 +'%)'
  });
  if (wScroll >0){
$('#scroller').fadeIn();
      }
  else{
    $('#scroller').fadeOut();
  }
});
$('#scroller').click(function(){ $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
                     });
