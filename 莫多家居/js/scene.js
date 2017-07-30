$(function () {
    //先出来四个
    $(".scene a:eq(0)").animate({"opacity":"1"},1000,function () {
        $(".scene a:eq(1)").animate({"opacity":"1"},500,function () {
            $(".scene a:eq(2)").animate({"opacity":"1"},500,function () {
                $(".scene a:eq(3)").animate({"opacity":"1"},500);
            });
        });
    });

    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        // console.log($(window).height());
        $(".scene a").each(function () {
            if($(window).scrollTop()+$(window).height()>$(this).offset().top){
                $(this).stop().animate({"opacity":"1"},1000)
            }
            // console.log($(this).offset().top);
        })
    })
});