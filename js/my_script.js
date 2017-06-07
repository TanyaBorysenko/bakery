$(document).ready(function(){

    $('.center-block-second a img').click(function (event) {

        event.preventDefault();

        if ($(this).attr('src') !== 'img/star-empty.png') {
            $(this).attr('src', 'img/star-empty.png');
        } else {
            $(this).attr('src', 'img/star-full.png');
        }

    });

    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    });
});
