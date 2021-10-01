// Activate owlCarousel Slider 
$( document ).ready(function() {
  // Slider Activate
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    items:1,
    responsive : {
      0 :{
        nav:false,
        dots:false,
      },
      1000 :{
        nav:true,
        dots:true,
      }
    }
  });

  // Meanmenu Activate
  $('nav').meanmenu({
    meanMenuContainer: '#mobileMenu',
    meanScreenWidth: 991,
  });
});