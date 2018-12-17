"use strict";

(function($){
  console.log("hi");

  $(document).ready(function() {
    $("#nav-instruction-menu").click(function(){
      console.log("click");
      $("#instruction-sidebar").toggleClass("close");
    });
  });
})(jQuery);
