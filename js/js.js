// @codekit-prepend "/lib/jquery.magnific-popup.custom.min.js";
// @codekit-prepend "/lib/jquery.transit.min.js";


jQuery(document).ready(function($){

	var $win = $(window),
		$slidewrap = $('#slidewrap'),
		$homewrap = $('.homewrap');

	// clock //
	// function setSeconds(){
	// 	var seconds = new Date().getSeconds();
	// 	var sdegree = seconds * 6;
	// 	var srotate = "rotate(" + sdegree + "deg)";

	// 	$('#sec').css({ "transform": srotate });
	// }
	function setMinutes(){
		var mins = new Date().getMinutes();
		var mdegree = mins * 6;
		var mrotate = "rotate(" + mdegree + "deg)";

		$('#min').css({ "transform" : mrotate });		
	}	
	function setHours(){
		var hours = new Date().getHours();
		var mins = new Date().getMinutes();
		var hdegree = hours * 30 + (mins / 2);
		var hrotate = "rotate(" + hdegree + "deg)";

		$('#hour').css({ "transform": hrotate});
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

	// Load article //
	$(document).on('click','.post_link',function(){
	//$('.post_link').click(function(){
		var homewrapH = $homewrap.height(),
			winW = $win.width(),
			s = $win.scrollTop(),
			$widget = $('.widget:visible'),
			widgetOffset = $widget.offset();

		$slidewrap.data('scroll',s);
		
		$widget.appendTo('body').css({
			'position':'fixed',
			'top':widgetOffset.top+'px',
			'left':widgetOffset.left+'px'
		})
		.data('top',widgetOffset.top)
		.data('left',widgetOffset.left)
		.animate({'top':'90px'},1000);


		$('.articlewrap').show();
		$('html,body').animate({'scrollTop':0},1000);
		$slidewrap.transition({ x:-winW, height:homewrapH },1000,function(){
			$('.breadcrumbs').fadeIn();
			$(this).height('auto');
		});
		var post_id = $(this).attr('data-id');
		if(!$('.article#post-'+post_id).length){
			if($('.article').length){
				$('.article').remove();
			}
		    $.ajax({
		        type: 'POST',
		        url: sitevars.ajaxurl,
		        context: this,
		        data: {'action': 'load_post', post_id: post_id },
		        success: function(response) {
		        	$(response).fadeTo(0,0).appendTo('.articlewrap'); 
		        	$slidewrap.animate({'height':$('.article').height()},300);
		        	$('.article').fadeTo(300,1); 
		            popups();

		        }
		    });
		}
				
		return false;
	});

	$(document).on('click','#back',function(){

		var homewrapH = $homewrap.height(),
			scrollPos = $slidewrap.data('scroll'),
			$widget = $('.widget:visible'),
			$widgetTop = $widget.data('top');
		
		//$slidewrap.removeClass('moving');
		$('.breadcrumbs').fadeOut();
		$('html,body').animate({'scrollTop':scrollPos},1000);
		$widget.animate({'top':$widgetTop},1000,function(){
			$widget.prependTo('.category_posts:visible').attr('style','');
			$('.articlewrap').hide();
		});		
		$slidewrap.transition({ x: 0, height: homewrapH },1000,function(){
			$(this).height('auto');
		});

		return false;
	});

});	