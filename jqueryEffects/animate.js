$(document).ready(function () {
  // $(selector).animate({params},speed,callback);

//   $("button").click(function () {
//     $("div").animate({ left: "250px" });
//   });

// $("button").click(function(){
//     $("div").animate({
//       left: '250px',
//       opacity: '0.5',
//       height: '150px',
//       width: '150px'
//     });
//   }); 

// $("button").click(function(){
//     $("div").animate({
//       left: '250px',
//       height: '+=150px',
//       width: '+=150px'
//     });
//   }); 

// $("button").click(function(){
//     let div = $("div");
//     div.animate({left: '100px'}, "slow");
//     div.animate({fontSize: '3em'}, "slow");
//   }); 

$("div").mouseover(function(){
    var div = $("div");
    div.animate({left: '100px'}, "slow");
    div.animate({fontSize: '3em'}, "slow");
  }); 
});
