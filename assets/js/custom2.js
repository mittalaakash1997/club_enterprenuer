$(document).ready(function() {
    $(".hamburger__toggle").click(function() {
        $(".hamburger__toggle").toggleClass("change")
    })
});
$(document).ready(function() {
    $(".hamburger__toggle").click(function() {
        $(".navigation").toggle(500)
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

$(document).ready(function() {
    $(".header").css("display", "block");
    setTimeout(function() {
        $(".header").addClass("load");
    }, 10);
    $("#loginForm").click(function() {
        $("#login").slideToggle(300)
        $(".banner").addClass("blur")
        $(".header").addClass("blur")
    })
    $("#joinForm").click(function() {
        $("#join").slideToggle(300)
        $(".banner").addClass("blur")
        $(".header").addClass("blur")
    })
    $(".cancel").click(function() {
        $(".pop-up-modal").hide(300)
        $(".banner").removeClass("blur")
        $(".header").removeClass("blur")
    })
    $(".close-icon").click(function() {
        $(".pop-up-modal").hide(300)
        $(".banner").removeClass("blur")
        $(".header").removeClass("blur")
    })

})
$(document).ready(function() {
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 50) {
            $(".header").css('background-color', 'rgba(0,0,0,0.8)');
        } else {
            $(".header").css('background-color', 'rgba(0,0,0,0)');
        }
    });
});
var viewport_width = window.innerWidth;
if (viewport_width < 1141) {
    $(".left-nav > .navigations > ul.navigation").detach().prependTo(".right-nav > .navigations");

    $(".menu-item-has-children > ul > li > a").click(function() {
        $(".navigation").toggle(500)
        $(".navigations").toggleClass("menu-active")
        $(".hamburger__toggle").toggleClass("change")
    })
}

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

// Custom select


var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);