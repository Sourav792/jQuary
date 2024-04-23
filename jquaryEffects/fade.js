$(document).ready(function () {
  // $(selector).fadeOut(speed,callback);

//   $("button").click(function(){
//     $("#one").fadeIn();
//     $("#two").fadeIn("slow");
//     $("#three").fadeIn(3000);
//   });


//   $("button").click(function(){
//     $("#one").fadeOut();
//     $("#two").fadeOut("slow");
//     $("#three").fadeOut(3000);
//   });

//   $("button").click(function(){
//     $("#one").fadeToggle();
//     $("#two").fadeToggle("slow");
//     $("#three").fadeToggle(3000);
//   });

//   $(selector).fadeTo(speed,opacity,callback);

$("button").click(function(){
    $("#one").fadeTo("slow", 0.15);
    $("#two").fadeTo("slow", 0.4);
    $("#three").fadeTo("slow", 0.7);
  });

});
