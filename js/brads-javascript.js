// code for slideshow on homepage
$(".slideshow").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  nextArrow: '<button type="button" class="slick-next">&raquo;</button>',
  prevArrow: '<button type="button" class="slick-prev">&laquo;</button>'
});

// code for FAQ toggle on FAQ page
$(".question").click(function() {
  $(this).next(".answer").slideToggle();
});

// Mobile menu overlay
$(".mobile-menu-button").click(function() {
  $(".mobile-menu").addClass("mobile-menu-visible");
  $("body").addClass("no-scroll");
});

$(".close-menu").click(closeMenu);

function closeMenu() {
  $(".mobile-menu").removeClass("mobile-menu-visible");
  $("body").removeClass("no-scroll");
}

$(document).keyup(function(event) {
  if (event.keyCode == 27) {
    closeMenu();
  }
});

// Contact Form AJAX
$(".contact-form").on("submit", function(event) {
  event.preventDefault();

  var theirName = $("input[name=name]").val();
  var theirEmail = $("input[name=_replyto]").val();
  var theirMessage = $("textarea[name=message]").val();

  $.ajax({
      url: $(".contact-form").attr("action"),
      method: "POST",
      data: {Name: theirName, Email: theirEmail, Message: theirMessage},
      dataType: "json",
      success: function() {
        $(".contact-form").slideUp();
        $("<h3>Thank you! We will get back to you shortly.</h3>").insertBefore(".contact-form");
      }
  });
})