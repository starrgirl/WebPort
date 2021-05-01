//document.write("what is wrong");

$(function(){
$(".window01").mouseenter(function(){
  $(".l1").addClass("color-on");
  $(".l1").removeClass("color-off");
});
$(".window01").mouseleave(function(){
  $(".l1").removeClass("color-on");
  $(".l1").addClass("color-off");
});
$(".window02").mouseenter(function(){
  $(".l2").addClass("color-on");
  $(".l2").removeClass("color-off");
});
$(".window02").mouseleave(function(){
  $(".l2").removeClass("color-on");
  $(".l2").addClass("color-off");
});
$(".window03").mouseenter(function(){
  $(".l3").addClass("color-on");
  $(".l3").removeClass("color-off");
});
$(".window03").mouseleave(function(){
  $(".l3").removeClass("color-on");
  $(".l3").addClass("color-off");
});
$(".window04").mouseenter(function(){
  $(".l4").addClass("color-on");
  $(".l4").removeClass("color-off");
});
$(".window04").mouseleave(function(){
  $(".l4").removeClass("color-on");
  $(".l4").addClass("color-off");
});


});
  
/*
$(".l1").css({"color" : "#CBB5FF","animation": "fadeIn 0.2s forwards ease-in","transition": "0.8s ease-in-out"});
});
$(".window02").hover(function(){
  $(".l2").css({"color" : "#CBB5FF","animation": "fadeIn 0.2s forwards ease-in","transition": "0.8s ease-in-out"});
});
$(".window03").hover(function(){
  $(".l3").css({"color" : "#CBB5FF","animation": "fadeIn 0.2s forwards ease-in","transition": "0.8s ease-in-out"});
});
$(".window04").hover(function(){
  $(".l4").css({"color" : "#CBB5FF","animation": "fadeIn 0.2s forwards ease-in","transition": "0.8s ease-in-out"});
});


});





          /*
$(function(){
    $('.window01').hover(function(){
      $('.Home').css({"transform": "translateX(-50px)","animation": "fadeIn 1s forwards ease-in","transition": "0.8s ease-in-out"})
    });

    $('.window02').hover(function(){
         $('.Home').css({"transform": "translateX(50px)","animation": "fadeOut 1s forwards ease-in","transition": "1s ease-in-out"}); 
      });
      
  }); */