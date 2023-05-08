
// hamburger

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menu = document.querySelector(".sidebar");

hamburger.addEventListener("click", function () {

    menu.style.left = "0";
    document.body.style.overflow = "hidden";

});

close.addEventListener("click", function () {

    menu.style.left = "-40%";
    document.body.style.overflow = "auto";

});


window.addEventListener("resize", function () {

    if (window.innerWidth > 1024) {

        hamburger.classList.add("hidden");
        hamburger.classList.remove("hidden");

    }

});
// slick

$('.clientcards').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autospeed: 1000,
    autoplay: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

// slick-button
$(".prev-btn").click(function () {

    $(".clientcards").slick("slickPrev");

});




$(".next-btn").click(function () {

    $(".clientcards").slick("slickNext");

});




$(".prev-btn").addClass("slick-disabled");

$(".clientcards").on("afterChange", function () {

    if ($(".slick-prev").hasClass("slick-disabled")) {

        $(".prev-btn").addClass("slick-disabled");

    } else {

        $(".prev-btn").removeClass("slick-disabled");

    }

    if ($(".slick-next").hasClass("slick-disabled")) {

        $(".next-btn").addClass("slick-disabled");

    } else {

        $(".next-btn").removeClass("slick-disabled");

    }

});