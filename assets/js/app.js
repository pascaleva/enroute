$(document).foundation();

$(document).ready(function() {
  $.scrollify({
    section : ".scrollify-section",
    before:function(index, sections) {
      if(index <= 1) {
        $("#nav").hide();
      }

      $("#label").show();
      if(index > 1) {
        $("#label").hide();
        return;
      }
      $("#label-text").text("");
      $("#label-container").removeClass("wechsel");
    },
    after:function(index, sections) {

      if(index > 1) {
        $("#nav").show();
        return;
      }
      $("#label-container").addClass("wechsel");

      if(index === 0) {
        $("#label-text").html("<br>1987");
      }

      if(index === 1) {
        $("#label-text").html("<br>2017");
      }
    },
  });

  var rellax = new Rellax('.rellax');
});

/*
  Linking / Navigation
*/
$("#explore").click(function() {
    $.scrollify.move("#explore");
});

$("#up-icon").click(function() {
    $.scrollify.move("#1987");
});

$("#das-projekt").click(function() {
    $.scrollify.move("#about");
});


/*
-- mit each wird durch jede section gegangen
-- für jede wird onScreen initialisiert
-- onScreen prüft ob das Element im viewport sichtbar wird
-- falls sichtbar wird die Klasse isonScreen zugefügt
-- falls das Element wieder aus dem viewport verschwindet, wird die Klasse wieder entfernt
-- mit dieser Klasse kann im css gearbeitet werden, siehe ab Zeile 22 im app.css
*/

$( "section" ).each(function( index, section ) {
     $(section).onScreen({
        container: window,
        direction: 'vertical',
        doIn: function() {
            $(section).addClass('onScreen');
        },
        doOut: function() {
            $(section).removeClass('onScreen');
        },
        tolerance: 0,
        throttle: 50,
        lazyAttr: null,
        debug: false
    });
});
