$(document).ready(function () {
    $("button.add").click(function(){
        $("h1, p, li").addClass("blue");
        $("div").addClass("important");
      });

      $("button.remove").click(function(){
        $("h1, p, li").removeClass("blue");
      });

      $("button.toggle").click(function(){
        $("h1, p, li").toggleClass("blue");
      });
})