//document.write("what is wrong");
//alert('@ 이 웹 페이지는 Google Chrome 브라우저, 1920*1080 화면에 최적화되어있습니다. @');

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


var animateHTML = function() {
  var elems,windowHeight;
  
  var init = function() {
    elems = document.getElementsByClassName("myinfo");
    windowHeight = window.innerHeight;
    _addEventHandlers();
  }
  
  var _addEventHandlers = function() {
      window.addEventListener("scroll", _checkPosition);
      window.addEventListener("resize", init)
  }
  var _checkPosition = function() {
    for ( var i = 0; i < elems.length; i++ ) {
   
      var posFromTop = elems[i].getBoundingClientRect().top;

      if ( posFromTop - windowHeight <= 0) { 
        $('.myinfo').addClass('animate');   
        //alert('@ scroll. @');
      }

      if ( posFromTop - windowHeight < -300) { 
        $("#downBtn").css({"opacity" : "0"});
      }
      else{$("#downBtn").css({"opacity" : "1"});}

      if ( posFromTop - windowHeight <= -300) { 
        $('h1').addClass('animate');  
      }

      if ( posFromTop - windowHeight <= -600) { 
        $('#img01').addClass('animate');  
      }
      if ( posFromTop - windowHeight <= -650) { 
        $('#img02').addClass('animate');  
      }
      if ( posFromTop - windowHeight <= -700) { 
        $('#img03').addClass('animate');  
      }
      
      
    }   
  
      
      
    }

  
  return {
    init: init
  }
}

animateHTML().init();

/*
$(function(){



  var info = $('.myinfo');

  /*윈도우 높이*/
  //var winH = window.innerHeight;
  /*스크롤 값 - 점점 커짐(0 부터)*/
  //var scrollY = window.pageYOffset;
  /*원하는 것의 top값 - 점점 작아짐*/
  //var posFromTop = info.getBoundingClientRect().top;
  /*윈하는 것의 절대좌표 값*/
  //var absolutePos = scrollY + posFromTop;

  
/*

  $(window).scroll(function(){
    
    alert('@ scroll. @');

      if(posFromTop> winH){
          $('.myinfo').addClass('animate');      
         }

      else
      {
        $(".myinfo").css({"opacity" : "1"});

      }
      
   
  });
  
  
});
*/

  
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