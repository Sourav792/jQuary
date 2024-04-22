$(document).ready(function () {
    $("p").click(function(){
        alert('hello buddy')
      });

    //   $("div").on("click", function(){
    //     $(this).hide();
    //   });
    
      $("div").on({
        mouseenter: function(){
          $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
          $(this).css("background-color", "lightblue");
        },
        click: function(){
          $(this).css("background-color", "yellow");
        }
      });
})
