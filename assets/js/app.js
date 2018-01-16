$(document).foundation();

/*
-- mit each wird durch jede section gegangen
-- für jede wird onScreen initialisiert
-- onScreen prüft ob das Element im viewport sichtbar wird
-- falls sichtbar wird die Klasse isonScreen zugefügt
-- falls das Element wieder aus dem viewport verschwindet, wird die Klasse wieder entfernt
-- mit dieser Klasse kann im css gearbeitet werden, siehe ab Zeile 22 im app.css
*/


$("#explore").click(function() {
    $.scrollify.move("#explore");
});
//
//
// $( "section" ).each(function( index, section ) {
//      $(section).onScreen({
//         container: window,
//         direction: 'vertical',
//         doIn: function() {
//             $(section).addClass('isonScreen');
//         },
//         doOut: function() {
//             $(section).removeClass('isonScreen');
//         },
//         tolerance: 0,
//         throttle: 50,
//         lazyAttr: null,
//         debug: false
//     });
// });
//
//
// /**
//  * Created by hzuellig on 11.01.18.
//  * @author hzuellig
//  * parallax scrolling effect if elements are in viewport
//  * combined with onScreen
//  */
// var lastScrollTop = 0;
// $(window).on('scroll', function () {
//     var dir;
//     var st = $(this).scrollTop();
//     if (st > lastScrollTop){
//         dir="down";
//     }
//     else if(st < lastScrollTop){
//         dir="up";
//     }
//     lastScrollTop = st;
//
//     $( ".isonScreen .parallax" ).each(function( index, element ) {/* bloss diejenigen Elemente die im viewport sind auswählen!*/
//
//         var scrolled = $(element).parents("section").offset().top - $(window).scrollTop() - $(window).height();
//         var speed  = $(element).attr('data-attr-parallax-speed');
//         if(dir=="up"){
//             speed*=-1;
//         }
//
//         /* position des elements erfragen, verhindern, dass es aus section hinausgleitet */
//
//        var matrix = $(element).css('transform').replace(/[^0-9\-.,]/g, '').split(',');
//        var x = matrix[5];
//         if(x===undefined){
//             x=0;
//         }
//
//         var offsetTop = $(element).offset().top  - $(element).parents("section").offset().top; /* distanz zu parent section */
//         var distTop = offsetTop + x;
//         var offsetBtn  = $(element).parents("section").height() - offsetTop - $(element).height();
//         var distBtn = offsetBtn - x;
//
//
//         var dist = 0;
//         var move= scrolled/2 * speed;
//         var resTop = parseInt(distTop)+ parseInt(move);
//         var resBtn = parseInt(distBtn)- parseInt(move);
//
//         if(scrolled< 0 && ((resTop > dist && move < 0 ) || (resBtn > dist && move > 0))){
//             $(element).css({
//                 'transform': 'translate3d(0,' + move + 'px, 0)'
//             });
//         }
//
//     });
//
//
// });
