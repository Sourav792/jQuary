$(document).ready(function () {
    // $(selector).hide(speed,callback);
    // $(selector).show(speed,callback);
    // speed is optional (miliseconds)
    $("#one").click(function(){
        $(this).hide();
    });
    // $("button").click(function(){
    //     $('#one').show();
    // });

    // $("button").click(function(){
    //     $("p").hide(1000, function () {
    //        alert('thanks for click')
    //     });
    //   });

    $("button").click(function(){
        $("p").toggle(1000, function () {
           alert('thanks for click')
        });
      });
})