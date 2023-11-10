$(".nav-item").hover(function(){
    $(this).find(".nav-child").stop().slideDown();
},function(){
    $(this).find(".nav-child").stop().slideUp();
})

ScrollReveal().reveal('.l1', {
    delay: 150,
    duration: 1000,
    distance: '100px',
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    origin: 'left',
    interval: 500
    });