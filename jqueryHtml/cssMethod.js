$(document).ready(function () {
  $("button").click(function () {
    // alert("Background color = " + $("p").css("background-color"));
    $("p").css("background-color", "yellow");

    $("p").css({ "background-color": "yellow", "font-size": "200%" });
    // css({"propertyname":"value","propertyname":"value",...});
  });
});
