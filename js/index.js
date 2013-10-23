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
        if (!$("#icon-menu").is(":visible")) {
            $(this).find('ul').show();
            $('.sub-background').show();
            $('.slides-overlay').show();            
        }

    }, function(e) {
        if (!$("#icon-menu").is(":visible")) {
            $(this).find('ul').hide();
            $('.sub-background').hide(); 
            $('.slides-overlay').hide(); 
        }
  
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
        $('.navigation').slideToggle("fast");
    })

    $(".top-menu ul").addClass('hide'); 

    
    $(".top-menu").click(function(e){
        
        if ($(e.target).parent().find('ul').length > 0 && !$("#icon-menu").is(":visible")) {
            e.preventDefault();
        }
        

        if($("#icon-menu").is(":visible")) {
            //hide all ul
            var $this = $(this).find('ul');
            $(".top-menu ul").not($this).hide();

            $this.toggle();
            
            if ($(e.target).parent().find('ul').length > 0) {
                e.preventDefault();               
            }

        }

    })

    $('.hover').hover(function() {
        $(this).find('.extended').show();
    }, function() {
        $(this).find('.extended').hide();     
    })



});
