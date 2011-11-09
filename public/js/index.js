
$(function() {
  $("#nav a, #diagram a").click(function(event) {
    $("#scrolling-content").animate({"scrollTop": ($(this.hash)[0].offsetTop - 150) }, 400);
    return false;
  });
});
