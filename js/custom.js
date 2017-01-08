$(document).ready(function() {
  $("#welp").addClass("animated slideInLeft");
  $("#target1").addClass("fadeInRight");
  $('body').scrollspy({ target: '#spy'});

 var $grid = $('.grid').masonry({
  // options...
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-sizer',
	  perventPosition: true,
	  gutter: 10
	});
 $grid.imagesLoaded().progress( function() {
	  $grid.masonry();
	});

  });

