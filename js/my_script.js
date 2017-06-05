$(document).ready(function(){

    $('.center-block-second a img').click(function (event) {

        event.preventDefault();

        if ($(this).attr('src') !== 'img/star-empty.png') {
            $(this).attr('src', 'img/star-empty.png');
        } else {
            $(this).attr('src', 'img/star-full.png');
        }

    });

    $('.button_black').mouseover(function () {
        $(this).css({"border":"2px dashed white", "font-size":"27px"})
    });

    $('.button_black').mouseleave(function () {
        $(this).css({"border":"1px dashed white", "font-size":"20px"})
    });

    $('.button_transparent').mouseover(function () {
        $(this).css({"border":"2px solid black", "font-size":"27px"})
    });

    $('.button_transparent').mouseleave(function () {
        $(this).css({"border":"1px solid black", "font-size":"20px"})
    });
    $('.button_white').mouseover(function () {
        $(this).css({"border":"2px dashed #dfc691", "font-size":"27px"})
    });

    $('.button_white').mouseleave(function () {
        $(this).css({"border":"1px dashed #dfc691", "font-size":"20px"})
    });

    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    });
});
