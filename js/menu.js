$(document).ready(function(){$(window).width()<1024&&$("#mainNav").addClass("show"),$("#navbar-burger").click(function(){$("#navbar-burger").toggleClass("is-active"),$("#mainNav").toggleClass("show")}),$(".navbar-item").click(function(){$("#mainNav").removeClass("show")})});