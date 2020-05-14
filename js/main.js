$(document).ready(function(){
        
    $('.mobile-nav--trigger').click(function() {
        $('.nav__list').toggleClass('nav__list--active');
    });

    $(window).on('resize', function () {
            var win = $(this);
            if (win.width() > 601 - 18) {
                $('.nav__list').removeClass('nav__list--active');
            }
            else {
                $('.nav__list');
            }
    });

    
    $('.home__brain--left').hover(function(){
        $('.home__brain--right').addClass('opacity--low');
        $('.home__brain--left').removeClass('opacity--low');
        $('.home__h2--right').addClass('opacity--low');
        $('.home__h2--left').removeClass('opacity--low');
    });
    

    $('.home__brain--right').hover(function(){
        $('.home__brain--left').addClass('opacity--low');
        $('.home__brain--right').removeClass('opacity--low');
        $('.home__h2--left').addClass('opacity--low');
        $('.home__h2--right').removeClass('opacity--low');
    });

    $('.home__brain--left').mouseout(function(){
        $('.home__h2--left').removeClass('opacity--low');
        $('.home__h2--right').removeClass('opacity--low');
        $('.home__brain--left').removeClass('opacity--low');
        $('.home__brain--right').removeClass('opacity--low');
    });

    $('.home__brain--right').mouseout(function(){
        $('.home__h2--left').removeClass('opacity--low');
        $('.home__h2--right').removeClass('opacity--low');
        $('.home__brain--left').removeClass('opacity--low');
        $('.home__brain--right').removeClass('opacity--low');
    });

    $('.home__h2--left').hover(function(){
        $('.home__brain--right').addClass('opacity--low');
        $('.home__brain--left').removeClass('opacity--low');
        $('.home__h2--right').addClass('opacity--low');
        $('.home__h2--left').removeClass('opacity--low');
    });

    $('.home__h2--right').hover(function(){
        $('.home__brain--left').addClass('opacity--low');
        $('.home__brain--right').removeClass('opacity--low');
        $('.home__h2--left').addClass('opacity--low');
        $('.home__h2--right').removeClass('opacity--low');
    });

    $('.home__h2--right').mouseout(function(){
        $('.home__h2--left').removeClass('opacity--low');
        $('.home__h2--right').removeClass('opacity--low');
        $('.home__brain--left').removeClass('opacity--low');
        $('.home__brain--right').removeClass('opacity--low');
    });

    $('.home__h2--left').mouseout(function(){
        $('.home__h2--left').removeClass('opacity--low');
        $('.home__h2--right').removeClass('opacity--low');
        $('.home__brain--left').removeClass('opacity--low');
        $('.home__brain--right').removeClass('opacity--low');
    });

    $('.work__video').cycle({ 
        timeout: 0, 
        speed:   300,
        prev:    '#prev',
        next:    '#next', 
        startingSlide: 0 
    });

    $('#goto-slide1').click(function() { 
        $('.work__video').cycle(0); 
        return false; 
    }); 

    $('#goto-slide2').click(function() { 
        $('.work__video').cycle(1); 
        return false; 
    }); 

    $('#goto-slide3').click(function() { 
        $('.work__video').cycle(2); 
        return false; 
    }); 

    $('#goto-slide4').click(function() { 
        $('.work__video').cycle(3); 
        return false; 
    }); 

    $('#goto-slide5').click(function() { 
        $('.work__video').cycle(4); 
        return false; 
    }); 

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
   
})