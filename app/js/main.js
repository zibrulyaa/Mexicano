$(function () {
  new WOW().init();
  if ($(window).width() < 992) {
    var wow = new WOW({
      mobile: false,
    });
    new WOW().init();
  }
  $(".header__btn").on("click", function () {
    $(".menu__list").slideToggle(".active");
  });
});
