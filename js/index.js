$(function() {

    function slideSwitch() {
        var $active = $('#slideshow img.active');

        if ( $active.length == 0 ) {
            $active = $('#slideshow img:last');   
        } 
        var $next = $active.next().length ? $active.next() : $('#slideshow img:first');
                    
        $active.addClass('last-active');
        $next.css({opacity: 0.0}).addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
    }

    setInterval(function() {
        slideSwitch();
    }, 5000);

    $('.parent-menu,.sub-background').hover(function() {
        $('.sub-background').show();
    }, function() {
        $('.sub-background').hide();
    })

    $('.parent-menu').hover(function() {
        $('.slides-overlay').show();
    }, function() {
        $('.slides-overlay').hide();
    })

    $(".div1").mouseover(function()
    {
        $(".title1").css({"visibility":"hidden"});
        $(".tHover1 a").css({"visibility":"visible"});
        $(".bHoverDiv1").css({"visibility":"visible"});
    })
    $(".div1").mouseout(function()
    {
        $(".title1").css({"visibility":"visible"});
        $(".tHover1 a").css({"visibility":"hidden"});
        $(".bHoverDiv1").css({"visibility":"hidden"});
    })
    $(".div2").mouseover(function()
    {
        $(".title2").css({"visibility":"hidden"});
        $(".div2 .tHoverDiv2").css({"visibility":"visible"});
        $(".div2 .bHoverDiv2").css({"visibility":"visible"});
    })
    $(".div2").mouseout(function()
    {
        $(".title2").css({"visibility":"visible"});
        $(".div2 .tHoverDiv2").css({"visibility":"hidden"});
        $(".div2 .bHoverDiv2").css({"visibility":"hidden"});
    })


});
