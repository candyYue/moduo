$(function () {

   //  // 开屏动效
    $(".cover1").animate({"height":"0"},1000,function () {
        $(this).css("z-index","0")
    });
    $(".cover2").animate({"height":"0"},1000,function () {
        $(this).css("z-index","0")
    });

   //logo背景
    $(".logo").mouseover(function () {
        $(this).css("background","#c6ba9a")
    }).mouseout(function () {
        $(this).css("background","")
    });

    //滚动导航栏颜色等切换
    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        // console.log($(".banner").height()-$("nav").height());
        if($(window).scrollTop()>$(".banner").height()-$("nav").height()){

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

    var width=$(window).width();
    if(width<768){
        $(".goods").find("a")[0].href="minproduct.html"
    }else{
        $(".goods").click(function () {
            if($(this).hasClass("closeup")){
                $(".list").css("transform","perspective(800px) rotateX(0deg)");
                $(this).removeClass("closeup");
            }else{
                $(this).addClass("closeup");
                $(".list").css("transform","perspective(800px) rotateX(-90deg)");
            }
        });
    }




    //滚动加载
    var h=$(".productIn li:eq(0)").innerWidth()/2;
    $(".productIn li").each(function () {
        $(this).height(h);
    });
    $(".productIn a").each(function () {
        $(this).height(h);
    });
    console.log(h);
    $(window).scroll(function () {

        if($(window).scrollTop()+$(window).height()>$(".productIn").offset().top){
            $(".productIn a:eq(0)").stop().animate({"opacity":"1"},500,function () {
                $(".productIn a:eq(1)").stop().animate({"opacity":"1"},500,function () {
                    $(".productIn a:eq(2)").stop().animate({"opacity":"1"},500)
                })
            });
        }
        if($(window).scrollTop()+$(window).height()>$(".productIn").offset().top+2*h+10){
            $(".productIn a:eq(3)").stop().animate({"opacity":"1"},500,function () {
                $(".productIn a:eq(4)").stop().animate({"opacity":"1"},500,function () {
                    $(".productIn a:eq(5)").stop().animate({"opacity":"1"},500)
                })
            });
        }
        if($(window).scrollTop()+$(window).height()>$(".productIn").offset().top+4*h+10){
            $(".productIn a:eq(6)").stop().animate({"opacity":"1"},500,function () {
                $(".productIn a:eq(7)").stop().animate({"opacity":"1"},500,function () {
                    $(".productIn a:eq(8)").stop().animate({"opacity":"1"},500)
                })
            });
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



});
