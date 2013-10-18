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


    $('.parent-menu').hover(function(e) {

        e.preventDefault();
        $('.sub-background').show();
        $('.slides-overlay').show();
    }, function(e) {
        e.preventDefault();
        $('.sub-background').hide(); 
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
        if (!$(this).hasClass('clickable')) {
            e.preventDefault();   
        } 
        

        if($("#icon-menu").is(":visible")) {
        //hide all ul
        var $this = $(this).find('ul');
        $(".top-menu ul").not($this).hide();

        $this.toggle();

    }
        

    })



});
