// Activate owlCarousel Slider 
$( document ).ready(function() {
  // Slider Activate
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    items:1,
    dots:false,
  });

  // Meanmenu Activate
  $('nav').meanmenu({
    meanMenuContainer: '#mobileMenu',
    meanScreenWidth: 991,
  });
});