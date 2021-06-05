(function($) {

   "use strict";

    //    Naviation
  //  var OnePageNavigation = function() {
  //   $('body').scrollspy({target:'#ftco-navbar'});
  //   $('#ftco-navbar li a').on('click', function(e){
  //       if(this.hash !== ''){
  //           e.preventDefault();

  //       const hash= this.hash;

  //       $('html,body').animate({
  //           scrollTop: $(hash).offset().top
  //       }, 800, function(){
  //           window.location.hash= hash;
  //       });
  //       }
  //   });
  // };

  	// navigation
    var OnePageNavigation = function() {
      var navToggler = $('.site-menu-toggle');
       $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
        e.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          'scrollTop': $(hash).offset().top
        }, 600, 'easeInOutExpo', function(){
          window.location.hash = hash;
        });
  
      });
    };
    OnePageNavigation();


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

  OnePageNavigation();

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

   var carousel = function() {
       $('.wwd-slider').owlCarousel({
           loop: true,
           dots: true,
           items: 1,
           margin: 30,
           stagePadding: 0,
           nav: false,
           navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
           responsive:{
               0:{
                   items: 1
               },
               768: {
                items: 2,
                },
               1200:{
                   items: 3
               }
           }
       });

       $('.slide-one-item').owlCarousel({
        center: false,
        items: 1,
        dots: true,
        loop: true,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1000,
        autoplay: true,
        pauseOnHover: false,
        autoHeight: true,
        nav: false,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
      });

   };
   carousel();

   var $window = $(window);

   //  active code
   $window.on('load', function () {
       $('#preloader').fadeOut('slow', function () {
           $(this).remove();
       });
   });
  

})(jQuery);

