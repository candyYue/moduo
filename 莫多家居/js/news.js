$(function () {
    //先出来两个
    $(".newsIn li:eq(0)").animate({"opacity":"1"},1000,function () {
        $(".newsIn li:eq(1)").animate({"opacity":"1"},500);
    });

    //滚动加载
    $(window).scroll(function () {
        
        $(".newsIn li").each(function () {
            console.log($(this).offset().top);
            if($(window).scrollTop()+2*$(".newsIn li").height()>$(this).offset().top){
                $(this).stop().animate({"opacity":"1"},500)
            }
        })
    })
});