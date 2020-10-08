
$(".text1").animate({
    opacity: '1',
  },"slow");




    setTimeout(function(){
        $(".text2").animate({
            opacity: '1',
          },"slow");
        }, 1500);

  
  
      setTimeout(function(){
          $(".text3").animate({
              opacity: '1',
            },"slow");
          }, 3000);


          setTimeout(function(){
            $(".baner--btn").css({display: 'block'})
            $(".baner--btn").animate({

                opacity: '1',
              },"slow");
            }, 4000);

