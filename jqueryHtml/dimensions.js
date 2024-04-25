$(document).ready(function () {

    // $("button").click(function(){
    //     var txt = "";
    //     txt += "Document width/height: " + $(document).width();
    //     txt += "x" + $(document).height() + "\n";
    //     txt += "Window width/height: " + $(window).width();
    //     txt += "x" + $(window).height();
    //     alert(txt);
    //   });

      
    // $("button").click(function(){
    //     var txt = "";
    //     txt += "Width: " + $("#div1").width() + "</br>";
    //     txt += "Height: " + $("#div1").height();
    //     $("#div1").html(txt);
    //   });

    // $("button").click(function(){
    //     var txt = "";
    //     txt += "Inner width: " + $("#div1").innerWidth() + "</br>";
    //     txt += "Inner height: " + $("#div1").innerHeight();
    //     $("#div1").html(txt);
    //   });

    // $("button").click(function(){
    //     var txt = "";
    //     txt += "Outer width: " + $("#div1").outerWidth() + "</br>";
    //     txt += "Outer height: " + $("#div1").outerHeight();
    //     $("#div1").html(txt);
    //   });

    $("button").click(function(){
        $("#div1").width(500).height(500);
      });
});
