$(function () {
    $(window).scroll(function () {
        if($(window).scrollTop()>$(".product").offset().top-3*$("nav").height()){
            $("nav").css("backgroundColor","#fff");
            $(".navbar-default .navbar-nav > li > a").css("color","#4a4a4a");
            $(".logo a").stop().animate({"backgroundPositionY":"-20px"},500)
        }
        else{
            $("nav").css("backgroundColor","rgba(255,255,255,0.1)");
            $(".navbar-default .navbar-nav > li > a").css("color","#fff");
            $(".logo a").stop().animate({"backgroundPositionY":"0"},500)
        }
    });
    
    //滚动加载
    $(".wulun").animate({"opacity":"1"},1000);
    $(window).scroll(function () {
        if($(window).scrollTop()>$(".wulun").height()){
            $(".swiper-container").stop().animate({"opacity":"1"},1000);
        }
        if($(window).scrollTop()>$(".wulun").height()+$(".swiper-container").height()){
            $(".wenzi").stop().animate({"opacity":"1"},1000);
        }
    })


});