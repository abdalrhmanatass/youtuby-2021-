$().ready(function () {
  $(".reply").click(function () {
    $(this).parents(".row").next(".card-inner").toggle();
  });
});

function read() {
  var myBtn = document.getElementById("myBtn");
  var Dots = document.getElementById("dots");
  var More = document.getElementById("more");
  var test = Dots.style.display;
  if (test == "none") {
    Dots.style.display = "inline";
    More.style.display = "none";
    myBtn.innerHTML = "عرض المزيد";
  } else {
    Dots.style.display = "none";
    More.style.display = "inline";
    myBtn.innerHTML = "عرض اقل";
  }
}
