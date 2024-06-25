var myNav = document.getElementById("nav");
window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 155 || document.documentElement.scrollTop >= 155) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};


$(document).ready(function(){
  $(".nav-link").on("click", function(){
    $(".nav-link.active").removeClass(".active");
    $(this).addClass("active");
  });
  
  $(".booknow-btn").click(function(){
    window.location = "book.html";
  });

  $(".contactus-btn").click(function(){
    window.location = "contact.html";
  });
});
