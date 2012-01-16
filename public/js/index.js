$(function() {

  var toc = $('#toc-content');

  $(document).scroll(function() {

    if ($(document).scrollTop() >= 247) {
      toc.addClass('fixed-toc');
    }
    else {
      toc.removeClass('fixed-toc');
    }
  });


  $('[href="#home"]').click(function() {
    $('html, body').animate({"scrollTop": 0 }, 400);
    return false;
  });


});
