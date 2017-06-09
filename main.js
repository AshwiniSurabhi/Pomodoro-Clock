$(document).ready(function(){
  var sb = $("#sise1").html();
  var buzzer = $("#audioclip")[0];
  $("#cli").click(function(){
     var count = $("#sise").html(); 
     var bb = count
    var counter = setInterval(firstfun,1000);
    function firstfun()
      {
      count = count - 1;
      if(count === 0)
      {
        buzzer.play();
        clearInterval(counter);
        $("#sise").html(bb);
        count = $("#sise").html();   
         var bcount = $("#sise1").html();
          var sb = bcount
        var bcounter = setInterval(function(){
          bcount = bcount - 1;
          if(bcount === 0)
            {
              buzzer.play();
              clearInterval(bcounter);
              $("#sise1").html(sb);
              bcount = $("#sise1").html();  
              counter = setInterval(firstfun,1000);
            }
          $("#sise1").html(bcount);
        }, 1000);        
    }      
     $("#sise").html(count);
      } 
  });
  $("#splus").click(function(){
    var curv=$("#sise1").html();
    var c=parseInt(curv)+parseInt(1);
    $("#sise1").html(c);
  });
  $("#sminus").click(function(){
    var curv=$("#sise1").html();
    var c=parseInt(curv)-parseInt(1);
  //  $("#sise1").html(c);
  });
  $("#bplus").click(function(){
    var curv=$("#sise").html();
    var c=parseInt(curv)+parseInt(1);
    $("#sise").html(c);
//     var count =  $("#sise").html();
   // console.log($("#sise").html());
  });
  $("#bminus").click(function(){
    var curv=$("#sise").html();
    var c=parseInt(curv)-parseInt(1);
    $("#sise").html(c);
  });
  
});
