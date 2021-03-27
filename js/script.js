/* bootstap dropdown */

$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
  
  /* scroll menu */

$(window).scroll(function(){
    if ($(this).scrollTop() > 100){
      $('#menu').addClass('fixed');
      $('.navbar-brand').css({"padding-top": "1px"});
      $('#logo').css({"width": "60%"});
    } else {
      $('#menu').removeClass('fixed');
      $('.navbar-brand').css({"padding-top": "15px"});
      $('#logo').css({"width": "100%"});
    }  
}); 