// @codekit-prepend "/lib/jquery.magnific-popup.custom.min.js";



jQuery(document).ready(function($){

	var $win = $(window);
		//$slidewrap = $('#slidewrap');
		//$homeWrap = $('.homewrap');


	// clock //
	function setMinutes(){
		var mins = new Date().getMinutes();
		var mdegree = mins * 6;
		var mrotate = "rotate(" + mdegree + "deg)";

		$('.min').css({ "transform" : mrotate });		
	}	
	function setHours(){
		var hours = new Date().getHours();
		var mins = new Date().getMinutes();
		var hdegree = hours * 30 + (mins / 2);
		var hrotate = "rotate(" + hdegree + "deg)";

		$('.hour').css({ "transform": hrotate});
	}	
	//setSeconds();
	setMinutes();
	setHours();


	// clock function //
	setInterval( function() {
		//setSeconds();
		setMinutes();
		setHours();	  
	}, 1000 );


	function popups(){
		$('.article').each(function() { 
		    $(this).magnificPopup({
		        delegate: 'a.popup_img', 
		        type: 'image',
		        gallery: {
		          enabled:true,
		          arrowMarkup:'',
		          tCounter:''
		        }
		    });
		});
	}
	popups();	

	// footnotes //
	$(document).on({
	    mouseenter: function () {
			var fig = $(this).text();
			$('#footnote-'+fig).show();
	    },
	    mouseleave: function () {
	        $('.footnote').hide();
	    }
	}, ".footnote_marker");


	// main nav positioning //
	function mainNavCenter(){
		var mainNav = $('.main_nav'),
			mainNavH = $('.main_nav').height(),
			mainNavPadding = ($win.height() - mainNavH)/2;
		if(mainNavPadding > 90){	
			mainNav.css('padding-top',mainNavPadding+"px").show();
		}
	}
	
	mainNavCenter();

	$win.resize(function(){
		mainNavCenter();
	});

	$('.category_toggle').click(function(){
		var targetElem = $(this).parent('h2').next();
		targetElem.slideToggle();
	});


	// slide left //
	$(document).on('click','.post_link',function(){
		var $this = $(this),
			href = $(this).attr('href'),
			post_id = $(this).data('id');

		if($('.article#post-'+post_id).length){
		    $('body').removeClass('home').addClass('single');
			window.history.pushState({path:href},'',href);
		}else{
			$this.css('cursor', 'progress');	
			if($('.article').length){
				$('.article').remove();
			}
		    $.ajax({
		        type: 'POST',
		        url: sitevars.ajaxurl,
		        //context: this,
		        data: {action: 'load_article', post_id: post_id },
		        success: function(response) {
		        	$(response).appendTo('#article-container'); 
		        	$('body').removeClass('home').addClass('single');
		        	$this.css('cursor', 'auto');
					window.history.pushState({path:href},'',href);
		            popups();
		            	           
		        }
		    });
		}				
		return false;
	});


	// slide right //
	$(document).on('click','#back',function(){
		var href = $(this).attr('href');

		$('body').removeClass('single').addClass('home');							
		window.history.pushState({path:href},'',href);
		return false;
	});

});	