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

    $('.content-item').hover(function() {
        $(this).find('.title').hide();
        $(this).find('.details').show();
        $(this).find('.action').show();
    }, function() {
        $(this).find('.title').show();
        $(this).find('.details').hide();
        $(this).find('.action').hide();       
    })


    $("#icon-menu").click(function(){
        $('.hide').slideToggle("fast");
    })

    $(".top-menu ul").hide();

    $(".top-menu").click(function(e){

        e.preventDefault();
        //hide all ul
        var $this = $(this).find('ul');
        $(".top-menu ul").not($this).hide();

        $this.toggle();

    })



});
