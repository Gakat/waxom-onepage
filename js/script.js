$(document).ready(function(){
  $(".slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true
  });
  $("button.owl-prev span").replaceWith("<img src=\"img\\prev.png\\\" alt=\"\"></img>");
  $("button.owl-next span").replaceWith("<img src=\"img\\next.png\\\" alt=\"\"></img>");
});