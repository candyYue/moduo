$(function () {
    //nav
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

    /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
    var html = document.getElementsByTagName('html')[0];
    /*取到屏幕的宽度*/
    var width = window.innerWidth;
    /* 640 100  320 50 */
    var fontSize = 50/640*width;
    /*设置fontsize*/

    html.style.fontSize = fontSize +'px';
    window.onresize = function(){
        var html = document.getElementsByTagName('html')[0];
        console.log(html);
        /*取到屏幕的宽度*/
        var width = window.innerWidth;
        console.log(width);
        /* 640 100  320 50 */
        var fontSize = 50/640 * width;
        console.log(fontSize);
        /*设置fontsize*/
        html.style.fontSize = fontSize +'px';

    };


    //滚动加载
    //先出来1个
    $(".productsIn li:eq(0)").animate({"opacity":"1"},1000);

    //滚动加载
    $(window).scroll(function () {

        $(".productsIn li").each(function () {
            console.log($(this).offset().top);
            if($(window).scrollTop()+2*$(".productsIn li").height()>$(this).offset().top){
                $(this).stop().animate({"opacity":"1"},300)
            }
        })
    })
    


});