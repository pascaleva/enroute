


$(document).ready(function() {


  $('#fullpage').fullpage({

    scrollOverflow: true,


  	afterLoad: function(anchorLink, index){
  		var loadedSection = $(this);

      console.log(loadedSection);
      console.log(index)


  	}
  });

  //
  // // When the user scrolls the page, execute myFunction
  // window.onscroll = function() {
  //   alert("onscroll");
  //   console.log("hoi muesli");
  //   myFunction();
  // };
  //
  // // Get the nav
  // var nav = document.getElementById("nav");
  //
  // // Get the offset position of the nav
  // var sticky = nav.offsetTop;
  //
  // // Add the sticky class to the nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // function myFunction() {
  //   alert("hello");
  //   if (window.pageYOffset >= sticky) {
  //     nav.classList.add("sticky")
  //   } else {
  //     nav.classList.remove("sticky");
  //   }
  // }


});
