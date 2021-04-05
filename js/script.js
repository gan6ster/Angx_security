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

  /*  about us */

const openBtnStyle = document.querySelector(".fas .fa-angle-double-down");

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = openBtnStyle;
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = openBtnStyle;
    moreText.style.display = "inline";
  }
}

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

//   let footerAcc = function() {
//     var $allFooterAcco = $(".mob-device ul");
//     var $allFooterAccoItems = $(".mob-device h4");
//     if (window.innerWidth < 991) {
//         $allFooterAcco.css('display', 'none');
//         $allFooterAccoItems.on("click", function() {
//             if ($(this)
//                 .hasClass('open')) {
//                 $(this)
//                     .removeClass('open');
//                 $(this)
//                     .next()
//                     .stop(true, false)
//                     .slideUp(300);
//             } else {
//                 $allFooterAcco.slideUp(300);
//                 $allFooterAccoItems.removeClass('open');
//                 $(this)
//                     .addClass('open');
//                 $(this)
//                     .next()
//                     .stop(true, false)
//                     .slideDown(300);
//                 return false;
//             }
//         });
//     } else {
//         $allFooterAcco.css('display', 'block');
//         $allFooterAccoItems.off();
//     }
// }
// $(window).on('resize', function() {
//     footerAcc();
// });

// $(window).resize(footerAcc);
// footerAcc();

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