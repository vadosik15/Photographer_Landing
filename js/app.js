var ul = document.querySelector('.menu');
var home = ul.childNodes[1];
var hom = ul.childNodes[1].children[0];
var abou = ul.childNodes[3];
var about = ul.childNodes[3].children[0];
console.dir(ul);
var service = ul.childNodes[5];
var services = ul.childNodes[5].children[0];
var galer = ul.childNodes[7];
var galery = ul.childNodes[7].children[0];
var contac = ul.childNodes[9];
var contact = ul.childNodes[9].children[0];
home.addEventListener("mouseover", function (e) {
    console.dir(e.target)
    hom.classList.add("active");
})
home.addEventListener("mouseout", function (e) {
    console.dir(e.target)
    hom.classList.remove("active");
})
abou.addEventListener("mouseover", function (e) {
    console.dir(e.target)
    about.classList.add("active");
})
abou.addEventListener("mouseout", function (e) {
    console.dir(e.target)
    about.classList.remove("active");
})
service.addEventListener("mouseover", function (e) {
    console.dir(e.target)
    services.classList.add("active");
})
service.addEventListener("mouseout", function (e) {
    console.dir(e.target)
    services.classList.remove("active");
})
galer.addEventListener("mouseover", function (e) {
    console.dir(e.target)
    galery.classList.add("active");
})
galer.addEventListener("mouseout", function (e) {
    console.dir(e.target)
    galery.classList.remove("active");
})
contac.addEventListener("mouseover", function (e) {
    console.dir(e.target)
    contact.classList.add("active");
})
contac.addEventListener("mouseout", function (e) {
    console.dir(e.target)
    contact.classList.remove("active");
})

$('document').ready(function () {
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        pauseOnFocus: true,
        //  fade: true,

        adaptiveHeight: true,
    });
});





var btn = document.querySelector(".byt-youtbe");
var box = document.querySelector(".box-btn");
btn.addEventListener('click', function (e) {
    if (box.className !== "btn-youtudeActive") {
        box.classList.add("btn-youtudeActive");
    }
})
var btnCloseVideo = document.querySelector(".btn-closeVideo");
btnCloseVideo.addEventListener('click', function (e) {
    box.classList.remove("btn-youtudeActive")
})
var arrowTop = document.querySelector("#arrow-top");

var arowSkroll = document.querySelector(".arowSkroll");
console.dir(arowSkroll)

arrowTop.addEventListener('click', function (e) {

    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;

});
var open = document.querySelector(".topNavBar")


var head = document.querySelector(".header");
const topOfNav = head.offsetTop;
function fixNav() {
    console.log(topOfNav)
    if (window.scrollY >= 150) {
        open.classList.add("activeTop");
        open.classList.remove("nonerotate")
        setTimeout(() => {
            open.classList.add('rotated');
        }, 1);
    }

    else {
        open.classList.remove('rotated');
        open.classList.add('nonerotate');
        setTimeout(() => {
            //open.classList.remove("activeTop");
        }, 1);

    }

}

window.addEventListener('scroll', fixNav);

var btnBurger = document.querySelector('.burger');
var burgerTop = document.querySelector('.burger-top');
console.dir(btnBurger)
var overlay = document.querySelector('.overlay');
var menyuWrap = document.querySelector('.slide-menyu')
burgerTop.addEventListener('click', function (e) {

    console.log("lol")
    overlay.classList.add("overlayActive")
    menyuWrap.classList.add("active-wrapper-menu");

});
btnBurger.addEventListener('click', function (e) {

    console.log("lol")
    overlay.classList.add("overlayActive")
    menyuWrap.classList.add("active-wrapper-menu");

});

var closeRightMenu = document.querySelector('.close-wrapper');
closeRightMenu.addEventListener('click', function (e) {
    e.preventDefault
    overlay.classList.remove("overlayActive")
    menyuWrap.classList.remove("active-wrapper-menu");
})

var sizeX = document.documentElement.clientWidth

if (sizeX < 768) {
    console.log("heh")

}
