$(document).ready(function() {
    // $(selector).stop(stopAll,goToEnd);

    $("#flip").click(function(){
        $("#panel").slideDown(3000);
      });
      $("#stop").click(function(){
        $("#panel").stop();
      });
})