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


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";


}

var acc = document.getElementsByClassName("accordion");
var i;

$(".accordion").click(function() {
  $(".accordion").removeClass("active");

  $(".panel").each(function() {
    this.style.maxHeight = null;
  });
});



for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    //changeImage('images/maglock.png');
    $("#imageReplace").attr('src', this.dataset.photo);

    this.classList.add("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      //close
  	  panel.style.maxHeight = null;
    } else {
      // open
  	  panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}

function changeImage(element) {
document.getElementById('imageReplace').src = element;
}

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})
