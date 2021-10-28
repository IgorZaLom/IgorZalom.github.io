let timer_1;
let timer_2;
let timer_3;
let time;
$(document).ready(function(){
    $(".click").on("click", function(){  //выключение
        $(".bar").css("pointer-events","none");
         $(".click").css("display", "none"); 
         $("#decor").animate({"height":"0"
        },700); 
            $("#li-4").animate({"opacity":"0",
                                "left":"100"},500);
            setTimeout(function(){
            $("#li-3").animate({"opacity":"0",
                                "left":"100"},500);    
            }, 200);                    
            setTimeout(function(){
            $("#li-2").animate({"opacity":"0",
                                "left":"100"},500);    
            }, 400);
            setTimeout(function(){
            $("#li-1").animate({"opacity":"0",
                                "left":"100"},500);    
             }, 600);
        timer_1 = setTimeout(function(){
            $(".adaptiv-menu").css("display","none");
        },1000);
        time = setTimeout(function(){
            $(".bar").css("pointer-events","visible");
        },1000); 
    });
        $(".bar").on("click", function(){ 
        $(".bar").css("pointer-events","none");         //включение
        $(".click").removeAttr("class");
            clearTimeout(timer_1);
        $("#decor").animate({"height":"680"
        },700);
        $(".adaptiv-menu").css("display","flex");
        $("#li-1").animate({"opacity":"1",
                            "left":"0"},500);
        setTimeout(function(){
        $("#li-2").animate({"opacity":"1",
                            "left":"0"},500);    
        }, 200);
        setTimeout(function(){
            $("#li-3").animate({"opacity":"1",
                                "left":"0"},500);    
        }, 400);
        setTimeout(function(){
            $("#li-4").animate({"opacity":"1",
                                    "left":"0"},500);    
        }, 600);
        time = setTimeout(function(){
            $("#click").attr("class","click");
            $(".bar").css("pointer-events","visible");
        },1000);
        $("#click").css("display", "block");
    });
});

