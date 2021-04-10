/* bootstap dropdown */

$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
  
  /* scroll menu */

$(window).scroll(function(){
    if ($(this).scrollTop() > 50){
      $('#menu').addClass('fixed');
      $('.navbar-brand').css({"padding-top": "1px"});
      $('#logo').css({"width": "60%"});
    } else {
      $('#menu').removeClass('fixed');
      $('.navbar-brand').css({"padding-top": "15px"});
      $('#logo').css({"width": "100%"});
    }  
}); 

  /*  corousel */

$(document).ready(function(){
  $("#owl-career2").owlCarousel({
    items: 2,
    loop: true,
    lazyload: true,
    center: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayHoverPause: true,
    responsive: {
      0: {
          items: 1,
          center: true
      },
      767: {
          items: 2,
          center: true
      },
  }
  });
});

  /*  about_us dropdown */

$(document).ready(function(){
  var $allFooterAcco = $(".service_feature ul");
  var $allFooterAccoItems = $(".service_feature h4");

  $allFooterAcco.css('display', 'none');
  $allFooterAccoItems.on("click", function() {
    if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().stop(true, false).slideUp(300);
    } else {
        $allFooterAcco.slideUp(300);
        $allFooterAccoItems.removeClass('open');

        $(this).addClass('open');
        $(this).next().stop(true, false).slideDown(300);

        return false;
      }
  });
});