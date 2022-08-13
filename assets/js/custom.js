// home slide
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let slideSection = document.querySelector("#slider"),
    slideContainer = document.querySelector("#slider-container"),
    tween;

const slide = gsap.utils.toArray("#slider-container .slide");
tween = gsap.to(slide, {
    xPercent: -100 * (slide.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: "#slider-container",
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
            snapTo: 1 / (slide.length - 1),
            inertia: false,
            duration: {
                min: 0.4,
                max: 0.4
            }
        },
        end: () => "+=" + (slideContainer.offsetWidth - innerWidth)
    }
});


$(document).ready(function() {
    $(".hamburger__toggle").click(function() {
        $(".hamburger__toggle").toggleClass("change")
    })
});
$(document).ready(function() {
    $(".hamburger__toggle").click(function() {
        $(".navigation").slideToggle(500)
        $(".navigations").toggleClass("menu-active")
    })
    $(".menu-item-has-children").click(function() {
        $(this).siblings().children('ul').css("display", "none")
        $(this).siblings().children('ul').removeClass("drop-up")
        $(this).children('ul').toggle()
        $(this).children('ul').toggleClass("drop-up")
    })
    $(".menu-item-has-children").mouseleave(function() {
        $(".menu-item-has-children ul").css('display', 'none');
        $(this).children('ul').toggleClass("drop-up");
    });
    $(".menu-item-has-children").mouseenter(function() {
        $(this).children('ul').css('display', 'block');
        $(this).children('ul').toggleClass("drop-up")
    });

});
// home slide end
//header
$(window).bind('scroll', function() {
    if ($(window).scrollTop() >= $('#header-visible').offset().top - 50) {
        $(".header").css("display", "block");
        setTimeout(function() {
            $(".header").addClass("load");
        }, 10);
    } else {
        $(".header").css("display", "none");
        $(".header").removeClass("load");
    }
});
//header end
//responsive header

var viewport_width = window.innerWidth;
// console.log(viewport_width);
if (viewport_width < 1141) {
    $(".left-nav > .navigations > ul.navigation").detach().prependTo(".right-nav > .navigations");

    $(".menu-item-has-children > ul > li > a").click(function() {
        $(".navigation").slideToggle(500)
        $(".navigations").toggleClass("menu-active")
        $(".hamburger__toggle").toggleClass("change")
    })
}
//responsive header end

window.onload = function() {
    $("#preloader").hide();
}

$(document).ready(function() {
    var btn2t = $('#button2top');

    var scroll_posi = 0;
    $(document).scroll(function() {
        scroll_posi = $(this).scrollTop();
        if (scroll_posi > 300) {
            btn2t.show();
        } else {
            btn2t.hide();
        }
    });

    btn2t.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
})