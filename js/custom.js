/* global $ */
$(function () {
   //  sticky navbar
  $(window).scroll(function () {
    const scrolling = $(this).scrollTop();
    const sticky = $(".sticky-top");
    if (scrolling >= 110) {
       sticky.addClass("bg-nav");
    } else {
       sticky.removeClass("bg-nav");
    }
  });
  // $(".carousel").swipe({
  //   swipe (event, direction, distance, duration, fingerCount, fingerData) {
  //     // eslint-disable-next-line eqeqeq
  //     if (direction == "left") $(this).carousel("next");
  //     // eslint-disable-next-line eqeqeq
  //     if (direction == "right") $(this).carousel("prev");
  //   },
  //   allowPageScroll: "vertical",
  // });
  // $('.carousel').carousel()
});

// document.addEventListener('scroll', function(e) {
//   // Handle scroll event
//   const scrolling = $(this).scrollTop();
//   const sticky = $(".sticky-top");
//   if (scrolling >= 110) {
//     sticky.addClass("bg-nav");
//   } else {
//     sticky.removeClass("bg-nav");
//   }
// }, true);