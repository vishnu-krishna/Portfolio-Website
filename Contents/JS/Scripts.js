$(document).ready(function () {

    /*
  

var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})


  */

    /*Sticky Navigation*/
    $('.section-skills').waypoint(function (direction) {
        if (direction == 'down') {
            $('.navbar').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    }, {
        offset: '25%'
    })



    /*Scrolling element*/
    $('.button').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".aboutme").offset().top - 100
        }, 1000, 'easeInSine');

    });

    $('.about').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".aboutme").offset().top - 100
        }, 1000, 'easeInSine');

    });
    $('.works').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".section-works").offset().top - 100
        }, 1000, 'easeInSine');

    });
    $('.skills').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".section-skills").offset().top - 100
        }, 1000, 'easeInSine');

    });
    $('.test').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".testimonials").offset().top - 100
        }, 1000, 'easeInSine');

    });
    $('.contacts').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".contact").offset().top - 100
        }, 1000, 'easeInSine');

    });
    $('.copyright img').click(function (e) {
        e.preventDefault();
        e
        $('html, body').animate({
            scrollTop: $("header").offset().top - 100
        }, 1500, 'easeInSine');

    });

});