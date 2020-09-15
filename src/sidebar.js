$(document).ready(function() {
      new StickySidebar("#sidebar", {
        topSpacing : 30,
        bottomSpacing : 0,
        containerSelector : "#all_content",
        innerWrapperSelector : "#sidebar__inner",
        stickyClass : "is-affixed",
        resizeSensor : true
      });
      var projectsContainer = $("html, body");
      $('a[href*="#"]').click(function() {
        return projectsContainer.animate({
          scrollTop : $($.attr(this, "href")).offset().top
        }, 400), false;
      });
      $(".show_dropdown").click(function(canCreateDiscussions) {
        $(this).next(".custom_dropdown").toggleClass("active");
      });
      $("#sidebar__inner").mouseover(function() {
        $(".arrow_part svg").css({
          "-webkit-transform" : "rotate(180deg)",
          "-moz-transform" : "rotate(180deg)",
          transform : "rotate(180deg)",
          transition : "1s"
        });
      });
      $("#sidebar__inner").mouseout(function() {
        $("#sidebar__inner").css({
          transform : "unset",
          transition : "0.6s"
        });
        $(".arrow_part svg").css({
          "-webkit-transform" : "rotate(360deg)",
          "-moz-transform" : "rotate360deg)",
          transform : "rotate(360deg)",
          transition : "1s"
        });
      });
    });
