$(function () {
    var $indicator = $(".nav li a");
    var $item = $("#content").find(".item");

//    监听侧边栏的点击

    $indicator.click(function () {
            $(this).addClass("current");
            $(this).parents("li").siblings().children().removeClass("current");
    });
    
    


    // 监听滚动条的滚动
    $(window).scroll(function () {
        //获取滚动距离
        var scrollH = $(document).scrollTop();
        var clientH=$(window).height();
        $item.each(function () {
            var index = $(this).index(".item");
            var itemTop = $(this).offset().top;
            if(scrollH > itemTop - clientH / 2){
                $indicator.eq(index).addClass("current");
                $indicator.eq(index).parents("li").siblings().children().removeClass("current");
            }else{
                return false;
            }


        });

    });


});