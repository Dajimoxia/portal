//scroll_scaleup
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('#top').css({
        transform: 'scale('+(80 + scroll/15)/80+')',
        top: -(scroll/10) + "%",
    });
});
//page_loading_point
window.onload = function() {
    window.location.hash = "top"
};
//scroll_effect
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('#secondr');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 100;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });