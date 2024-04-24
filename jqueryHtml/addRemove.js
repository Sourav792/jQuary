$(document).ready(function () {
  $(".para1").append("Some appended text.");
  $(".para2").prepend("Some prepended text.");

  // function appendText() {
  //     var txt1 = "<p>Text.</p>";        // Create text with HTML
  //     var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
  //     var txt3 = document.createElement("p");
  //     txt3.innerHTML = "Text.";         // Create text with DOM
  //     $("body").append(txt1, txt2, txt3);   // Append new elements
  // }
  // $('#button').click(appendText)

//   $("img").after("Some text after");
//   $("img").before("Some text before");

  function afterText() {
    var txt1 = "<b>I </b>"; // Create element with HTML 
    var txt2 = $("<i></i>").text("love ");     // Create with jQuery
    var txt3 = document.createElement("b");    // Create with DOM
    txt3.innerHTML = "jQuery!";
    $("img").after(txt1, txt2, txt3);          // Insert new elements after <img>
  }

//   $('.btn').click(afterText)
  $('.btn').click(function () {
    $("h1").remove(".color")
  });
});
