$(document).ready(function() {
  /* 这个是来动态添加那个sticky navbar的 */
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "25%"
    }
  );

  /* 给两个主要按钮添加点击下滑功能 */
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1500
    );
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1500
    );
  });

  /* 给navigation bar添加下滑 */
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

    /* 给scroll加animation */
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__bounceInDown');
    },
    {
      offset: "50%"
    })

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate__animated animate__slideInUp');
        $('.js--wp-3').addClass('animate__animated animate__slideInRight');
    },
    {
      offset: "50%"
    })

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animate__animated animate__fadeInDown');
    },
    {
      offset: "50%"
    })

    $('.js--wp-5').waypoint(function(direction){
        $('.js--wp-5').addClass('animate__animated animate__zoomIn');
    },
    {
      offset: "50%"
    })

    $('.js--wp-6').waypoint(function(direction){
        $('.js--wp-6').addClass('animate__animated animate__pulse');
    },
    {
      offset: "50%"
    })
});
