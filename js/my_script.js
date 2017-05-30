// 1 - визначити обэкт наа яким треба щось зробити
// 2 - визнаити подію при якій має щось статися
// 3 - визначити що саме має статися з обєктом при події


 $(document).ready(function(){

     /*$('.block_img_first a img').click(function (event) {
        // function body
        event.preventDefault(); // запобігання стандартній поведінці елемента (в даному випадку перехід по посиланню

        if ($(this).attr('src') !== 'img/star-empty.png') {
            $(this).attr('src', 'img/star-empty.png');
        } else {
            $(this).attr('src', 'img/star-full.png');
        }

        // end

        // при наведенні на зірку її колір змінються на протилежний і навпаки коли забираєш курсор

    });*/

     $('.block_img_first a img').mouseover(function () {

         if ($(this).attr('src') !== 'img/star-empty.png') {

             //$(this).onmouseover(function () {
                 $(this).attr('src', 'img/star-empty.png');
             //});
         } else
             {
                 //$(this).mouseleave(function () {
                     $(this).attr('src', 'img/star-full.png');
             }
     })

$('.block_img_first a img').mouseleave(function () {
    if ($(this).attr('src') !== 'img/star-empty.png') {
        $(this).attr('src', 'img/star-empty.png');
    } else
    {
        $(this).attr('src', 'img/star-full.png');
    }
});
     $('.button_black').mouseover(function () {
         $(this).css({"border":"3px dashed white", "font-size":"27px"})
     })
     $('.button_black').mouseleave(function () {
         $(this).css({"border":"1px dashed white", "font-size":"20px"})
     })
 });