$(document).ready(function () {
  $(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });
  $("#togger").click(function () {
    $("#wrop").toggleClass("toggled");
    var togg = $("#wrop");
    if (togg.hasClass("toggled")) {
      $(".layer").fadeIn("100000");
    } else {
      $(".layer").fadeOut("100000");
    }
  });
  $(".search-icon").click(function () {
    $(".search-input").slideToggle("slow");
  });
  $(".layer").click(function () {
    $("#wrop").toggleClass("toggled");
    $(".layer").fadeOut("100000");
  });
});
function test() {
  document.location.href = "search.html";
}
