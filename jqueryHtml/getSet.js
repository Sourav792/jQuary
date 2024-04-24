// Get Content and Attributes

// $(document).ready(function(){
//     // $("#btn1").click(function(){
//     //   alert("Text: " + $("#test").text());
//     // });
//     // $("#btn2").click(function(){
//     //   alert("HTML: " + $("#test").html());
//     // });

//     $("#btn").click(function(){
//         alert($("#btn").attr("href"));
//       });
//   });


$(document).ready(function() {
    // $("#btn1").click(function(){
    //     $("#test1").text("Hello world!");
    //   });
    //   $("#btn2").click(function(){
    //     $("#test2").html("<b>sourav singh!</b>");
    //   });
    //   $("#btn3").click(function(){
    //     $("#test3").val("Dolly Duck");
    //   });

    //   $("#btn1").click(function(){
    //     $("#test1").text(function(i, origText){
    //       return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
    //     });
    //   });
    
    //   $("#btn2").click(function(){
    //     $("#test2").html(function(i, origText){
    //       return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
    //     });
    //   });

    //   $("a").click(function(){
    //     $("a").attr("href", "https://www.w3schools.com/jquery/");
    //   });

      $("button").click(function(){
        $("a").attr({
          "href" : "https://www.w3schools.com/jquery/",
          "title" : "W3Schools jQuery Tutorial"
        });
      });
});