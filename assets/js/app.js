$(document).ready(function() {
  $('#fullpage').fullpage({
    scrollOverflow: true,
  	afterLoad: function(anchorLink, index){
  		var loadedSection = $(this);
      console.log("Section=" + index);
      if(index==4) {
         $('#nav').css("visibility", "visible");
      }

      if(index<4) {
        $('#nav').css("visibility", "hidden");
      }
  	}
  });


  

});
