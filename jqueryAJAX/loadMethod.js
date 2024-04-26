$(document).ready(function() {
    // $(selector).load(URL,data,callback);
    
    // $("button").click(function(){
    //     $("#div1").load("test.txt");
    //   });

    $("#btn").click(function(){
        $("#div2").load("test.txt", function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success")
            alert("External content loaded successfully!");
          if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
      });
});