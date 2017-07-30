$(function () {
    // 开屏动效
    $(".cover1").animate({"height":"0"},1000,function () {
        $(this).css("z-index","0")
    });
    $(".cover2").animate({"height":"0"},1000,function () {
        $(this).css("z-index","0")
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

    //logo背景
    $(".logo").mouseover(function () {
        $(this).css("background","#c6ba9a");
        $(".logo a").stop().animate({"backgroundPositionY":"0px"},500)
    }).mouseout(function () {
        $(this).css("background","");
        $(".logo a").stop().animate({"backgroundPositionY":"-20px"},500)
    });

    
    //产品下拉
    $(".goods").click(function () {
        if($(this).hasClass("closeup")){
            $(".list").css("transform","perspective(800px) rotateX(0deg)");
            $(this).removeClass("closeup");
        }else{
            $(this).addClass("closeup");
            $(".list").css("transform","perspective(800px) rotateX(-90deg)");
        }
    })

});