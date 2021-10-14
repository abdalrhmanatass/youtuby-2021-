$(document).ready(function () {
  $(".icon-filter").click(function () {
    $("#filter").slideToggle("slow");
    $("#filter").css("display", "flex");
  });

  $(":checkbox").click(function () {
    var box = $(this);
    if (box.is(":checked")) {
      var groube = "[name='" + box.attr("name") + "']";
      $(groube).prop("checked", false);
      box.prop("checked", true);
    }
  });
});
