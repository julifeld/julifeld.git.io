$(document).ready(function() {
  // Un-obfuscate email address
  var email = $("#email").text().split("").reverse().join("").trim();
  $("#email").text(email);
  $("#email").attr("href", "mailto:" + email);

  // Smooth scrolling anchors
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 300);
        return false;
      }
    }
  });
});
