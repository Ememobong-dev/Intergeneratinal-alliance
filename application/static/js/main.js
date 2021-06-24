(function($) {
  AOS.init({
    duration: 800,
    easing: 'slide',
    once: false
  });

  "use strict";


  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


   // Search Btn Active Code
   $('#search-btn, #closeBtn').on('click', function () {
       $('body').toggleClass('search-form-on');
   });

  var fullHeight = function() {

      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function(){
          $('.js-fullheight').css('height', $(window).height());
      });

  };
  fullHeight();

  // loader
  var loader = function() {
      setTimeout(function() { 
          if($('#ftco-loader').length > 0) {
              $('#ftco-loader').removeClass('show');
          }
      }, 1);
  };
  loader();

  // Scrollax
 $.Scrollax();

 $("a").on('click', function(event) {
   if (this.hash !== "") {
     event.preventDefault();
     var hash = this.hash;

     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 600, 'easeInOutExpo', function(){
       window.location.hash = hash;
     });
   } // End if
 });


 $('.popup-video').magnificPopup({
   disableOn: 200,
   type: 'iframe',
   mainClass: 'mfp-fade',
   removalDelay: 160,
   preloader: false,

   fixedContentPos: false
 });





  var $window = $(window);

  //  active code
  $window.on('load', function () {
      $('#preloader').fadeOut('slow', function () {
          $(this).remove();
      });
  });
 

})(jQuery);

