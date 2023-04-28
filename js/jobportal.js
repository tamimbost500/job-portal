//Start Top To Scroll Button
let calcScrollValue = () => {
	let scrollProgress = document.getElementById("progress");
	let progressValue = document.getElementById("progress-value");
	let pos = document.documentElement.scrollTop;
	let calcHeight =
	   document.documentElement.scrollHeight -
	   document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if (pos > 100) {
	   scrollProgress.style.display = "grid";
	} else {
	   scrollProgress.style.display = "none";
	}
	scrollProgress.addEventListener("click", () => {
	   document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = `conic-gradient(#02416a ${scrollValue}%, #f9a908 ${scrollValue}%)`;
 };
 window.onscroll = calcScrollValue;
 window.onload = calcScrollValue;
 
 
 // Preloader
 var preLoder = $(".preloader");
 preLoder.fadeOut(0);
 
 
 // Start Sticky Menu
 $(window).on("scroll", function () {
	var ScrollBarPostion = $(window).scrollTop();
	if (ScrollBarPostion > 150) {
	   $(".jpl-second-menu").addClass("header-sticky");
	} else {
	   $(".jpl-second-menu").removeClass("header-sticky");
	}
 })
 
 
 // Start Wow  Animitian
 new WOW().init();
 
 
 // Start Brand
 $(".jpl-brand-slider").slick({
	slidesToShow: 8,
	autoplay: true,
	dots: true,
	arrows: false,
	responsive: [{
		  breakpoint: 1199,
		  settings: {
			 slidesToShow: 5,
		  }
	   },
	   {
		  breakpoint: 767,
		  settings: {
			 slidesToShow: 3,
		  }
	   }
	]
 });
 
 // Start Testimonial
 $(".jpl-testimonial-slider").slick({
	slidesToShow: 1,
	autoplay: true,
	dots: true,
	arrows: false,
	responsive: [{
		  breakpoint: 1199,
		  settings: {
			 slidesToShow: 1,
		  }
	   },
	   {
		  breakpoint: 767,
		  settings: {
			 slidesToShow: 1,
		  }
	   }
	]
 });
 
 // Mobile Menu 
 $(window).on('resize', function () {
	var windowWidth = $(window).width();
 
	if (windowWidth > 768) {
	   $(".jpl-mobile-menu.jpl-mobile-menu-active").removeClass("jpl-mobile-menu-active");
	}
 
 });
 
 $(".jpl-mobile-menu-toggle").on("click", function () {
	$(".jpl-mobile-menu").addClass("jpl-mobile-menu-active");
 });
 
 $(".jpl-has-mobile-submenu a").each(function () {
	$(this).on("click", function () {
	   $(this).siblings('ul').slideToggle("swing");
	});
 });
 
 $(".jpl-close-menu").on("click", function () {
	$(".jpl-mobile-menu").removeClass("jpl-mobile-menu-active");
 })
 
 // Start Hero
 $(".jpl-hero-slider").slick({
	slidesToShow: 1,
	autoplay: true,
	dots: true,
	arrows: false,
	responsive: [{
		  breakpoint: 1199,
		  settings: {
			 slidesToShow: 1,
		  }
	   },
	   {
		  breakpoint: 767,
		  settings: {
			 slidesToShow: 1,
		  }
	   }
	]
 });
 //  Start Counter js
 $('.counter-cc').counterUp({
	time: 1000
 });
 
 
 $(".category-dropdown .dropdown-menu li a").each(function () {
	$(this).on("click", function () {
	   var selected_value = $(this).text();
	   $(this).parents(".category-dropdown").find(".ct-dropdown-btn").text(selected_value);
 
	});
 })