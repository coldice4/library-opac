$(document).ready(function() {
  $("#navbar-burger").click(function() {
    $("#navbar-burger").toggleClass("is-active");
    $("#mainNav").toggleClass("is-block");
  });
  $(".navbar-item").click(function () {
    $("#mainNav").removeClass("is-block");
  });
});
