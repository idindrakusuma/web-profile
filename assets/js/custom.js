$(window).load(function(){"use strict";$(".preloader-outer").delay(350).fadeOut("slow")}),$(function(){"use strict";if($(".navigation").onePageNav({currentClass:"current",changeHash:!1,scrollSpeed:700,scrollThreshold:.5,easing:"easeInOutCubic"}),0<$("#works .item-outer").length)$("#works .item-outer").filterizr({filter:1,delay:50,delayMode:"progressive"});$(".control ul li").on("click",function(){$(this).parent().find("li.active").removeClass("active"),$(this).addClass("active")}),$(".hamburger-menu, .main-nav ul li a").on("click",function(){$(".header").toggleClass("pushed"),$(".main-content").toggleClass("main-pushed"),$(".bar").toggleClass("animate")}),$(".resume-download").tooltip(),$(".customer-carousel").owlCarousel({items:6,lazyLoad:!0,dots:!1}),$(".resume-carousel").owlCarousel({singleItem:!0}),$(".testimonial-carousel").owlCarousel({singleItem:!0,loop:!0,autoPlay:!0}),$("#welcome").backstretch(["../assets/images/indra-1.JPG","../assets/images/indra-2.JPG","../assets/images/indra-3.JPG"],{duration:5e3,fade:1e3}),$("#welcome").css({height:$(window).height()+"px"}),$(".header").css({height:$(window).height()+"px"}),$(".work-image").magnificPopup({type:"image"}),$(".work-video").magnificPopup({type:"iframe",iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"http://www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"}})});