//Sticky Nav
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 232) {
            $('.centered-navigation').addClass('stickytop');
        }
        else {
            $('.centered-navigation').removeClass('stickytop');
        }
    });
});

smoothScroll();

// Smooth Scroll
function smoothScroll(){
   $(function() {
    $('a[href*="#"]:not([href="#"])').click(function( e ) {
      e.preventDefault();

      //Add sticktop class so offset calculates the correct position
      $('.centered-navigation').addClass('stickytop');

      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        console.log(target.offset().top);
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 80
          }, 500);
          // window.history.pushState("","", this.hash.slice(1));
          return false;
        }
      }
    });
  });
}

$(window).on("load resize",function(e) {
  var more = document.getElementById("js-centered-more");

  if ($(more).length > 0) {
    var windowWidth = $(window).width();
    var moreLeftSideToPageLeftSide = $(more).offset().left;
    var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

    if (moreLeftSideToPageRightSide < 330) {
      $("#js-centered-more .submenu .submenu").removeClass("fly-out-right");
      $("#js-centered-more .submenu .submenu").addClass("fly-out-left");
    }

    if (moreLeftSideToPageRightSide > 330) {
      $("#js-centered-more .submenu .submenu").removeClass("fly-out-left");
      $("#js-centered-more .submenu .submenu").addClass("fly-out-right");
    }
  }

  var menuToggle     = $("#js-centered-navigation-mobile-menu").unbind();
  var menuItemToggle = $(".nav-link a").unbind();

  smoothScroll();

  $("#js-centered-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    menuSlide();
  });

  menuItemToggle.on("click", function(e) {
    e.preventDefault();
    if($("#js-centered-navigation-mobile-menu").css("display") != "none") {
      menuSlide();
    }
  });

  function menuSlide(){
    $("#js-centered-navigation-menu").slideToggle(function(){
      if($("#js-centered-navigation-menu").is(":hidden")) {
        $("#js-centered-navigation-menu").removeAttr("style");
      }
    });
  }

});
