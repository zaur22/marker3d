// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require jquery.slick	
//= require_tree .


$(function(){
	$('body').scrollspy({ target: '#navbar-example' });
  
  var $video = $("video");
  $video.on('canplaythrough', function() {this.play();});


	$('.slick-carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
    	autoplaySpeed: 0,
    	speed: 20000,
    	//variableWidth: true,
    	infinite: true,
    	cssEase: 'linear',
    	easing: 'linear',
    	//adaptiveHeight: true
  	});

	$('.slick-3dpen-carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		pauseOnHover: false,
		autoplay: true,
    	autoplaySpeed: 0,
    	speed: 10000,
    	variableWidth: true,
    	infinite: true,
    	cssEase: 'linear',
    	easing: 'linear',
    	adaptiveHeight: true
  	});
  	$( window ).scroll(function(){
		if($("#navbar").offset().top > 0){
			$("#navbar").addClass("white-nav");
		}else{
			$("#navbar").removeClass("white-nav");
		}
  	})

  $('.modal-body .btn-block').click(function(){
    $(this).closest(".modal-body").addClass('success-wrap')
  })
  $('.duo-block .btn-block').click(function(){
    $(this).closest(".duo-block").addClass('msg-send')
  })
});