

// portfolio owl carousel js
var portfolio = $('.owl-carousel');
portfolio.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            loop:true,
        },
        600:{
            items:2,
            loop:true,
        },
        1000:{
            items:3,
            loop:true
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})





