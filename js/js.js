// @codekit-prepend "/lib/jquery.magnific-popup.custom.min.js";


jQuery(document).ready(function($){

	var $win = $(window),
		homeURL = $('#logo').attr('href')+'/';
		//$slidewrap = $('#slidewrap');
		//$homeWrap = $('.homewrap');


	// clock //
	function setSeconds(){
		var seconds = new Date().getSeconds();
		var sdegree = seconds * 6;
		var srotate = "rotate(" + sdegree + "deg)";

		$('.sec').css({ "transform": srotate });
	}	
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
	setSeconds();
	setMinutes();
	setHours();


	// clock function //
	setInterval( function() {
		setSeconds();
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

	$('.bg_rollover').each(function(){
		var $this = $(this),
			bg = $(this).css('background-image');
			bg = bg.replace('url(','').replace(')','');
		$('<img/>').attr('src', bg).load(function() {
			$(this).remove(); 
			$this.addClass('loaded');
		});
	});
	
	$(document).on('click','.footnote_marker',function(){
		if($(this).hasClass('footnote_open')){
			$('.article_contents .footnote').remove();
			$(this).removeClass('footnote_open');	
		}else{				
	    	var fig = $(this).text();
			var footnote = $('#footnote-'+fig).clone();
			$(this).addClass('footnote_open').after(footnote);
		}		
	});			

	function gm(){
		var winWidth = $win.width();
		var winHeight = $win.height();
		//var docHeight = $(document).height();

		//var w2of3 = winWidth * 3333 / 5000;
		var w1of2 = winWidth / 2;
		var w1of3 = winWidth / 3;
		var w1of4 = winWidth / 4;
		var w1of6 = winWidth / 6;

		var ratio = (0.666/1);
		var ratio2 = (1/0.666);

		$('.image.Landscape.Small').width(w1of4);
		$('.image.Landscape.Small').height(w1of4 * ratio);
		$('.image.Landscape.Medium').width(w1of3);
		$('.image.Landscape.Medium').height(w1of3 * ratio);
		$('.image.Landscape.Large').width(w1of2);
		$('.image.Landscape.Large').height(w1of2 * ratio);

		$('.image.Portrait.Small').width(w1of6);
		$('.image.Portrait.Small').height(w1of6 * ratio2);
		$('.image.Portrait.Medium').width(w1of4);
		$('.image.Portrait.Medium').height(w1of4 * ratio2);
		$('.image.Portrait.Large').width(w1of3);
		$('.image.Portrait.Large').height(w1of3 * ratio2);

		$('.image_wrapper').height(winHeight);
		$('.image_wrapper').width(winWidth);

		
	}
	gm();

	function mainNavCenter(){
		var mainNav = $('.main_nav'),
			mainNavH = $('.main_nav').height(),
			footerPadding = $('footer').height() - $('header').height(),
			mainNavPadding = ($win.height() - mainNavH - footerPadding)/2;
		if(mainNavPadding > 90){	
			mainNav.css('padding-top',mainNavPadding+"px").addClass('ready');
		}else{
			mainNav.show();
		}
	}	
	mainNavCenter();

	$win.resize(function(){
		mainNavCenter();
		gm();
	});

	// about page stuff //

	var strSlow = $('#type-string .slow').html(),
		strFast = $('#type-string .fast').html(),
		$typeAnimSlow = $('#type-anim-slow'),
		$typeAnimFast = $('#type-anim-fast'),
	    i = 0,
	    isTag,
	    typeTimer,
	    //newh,
	    //h,
	    char;
	   


	function type() {
		
	    var text = strSlow.slice(0, ++i);			    
	    
	    if (text === strSlow){
				
			    text = strFast.slice(0, ++i);					    
			    if (text === strFast){
					return;
				}											
			    document.getElementById('type-anim-fast').innerHTML = text;

			    //var slowHeight = $typeAnimSlow.height();
			    	//newh = $typeAnimFast.height() + slowHeight;
			    	//h = 0;
			    // if(newh > h){
			    // 	$('#typewriter').height(newh);
			    // 	h = newh;
			
			    // }					    
				char = text.slice(-1);
				if( char === '<' ){ isTag = true; }
				if( char === '>' ){ isTag = false; }
				
				if (isTag){ return type(); }			   
				typeTimer = setTimeout(type,5);					
				
			return;
		}	
						
	    document.getElementById('type-anim-slow').innerHTML = text;
	    			    
	    // newh = $typeAnimSlow.height();
	    // h = 0;
	    // if(newh > h){
	    // 	$('#typewriter').height(newh);
	    // 	h = newh;			
	    // }
	    
		char = text.slice(-1);
		if( char === '<' ){ isTag = true; }
		if( char === '>' ){ isTag = false; }
		
		if (isTag){ return type(); }			   
		typeTimer = setTimeout(type,80);
							   
	}

	function runTypewriter(){
		strSlow = $('#type-string .slow').html();
		strFast = $('#type-string .fast').html();
		$typeAnimSlow = $('#type-anim-slow');
		$typeAnimFast = $('#type-anim-fast');
		i = 0;
		isTag = 0;
		typeTimer = 0;
		//newh = 0;
		//h = 0;
		char = 0;

        type();		
	}

	function openAbout(){
		$('#about.categorywrap').addClass('open');
		$('#about-wrap').slideDown(function(){
			runTypewriter();
		});		
	}
	function closeAbout(){
		$('#about-wrap').slideUp(function(){
			$('#about.categorywrap').removeClass('open');
			clearTimeout(typeTimer);
			$('#type-anim-slow,#type-anim-fast').empty();
		});
		window.history.pushState({path:homeURL},'',homeURL);
	}

	$('.about_link').click(function(){
		var $categoryOpen = $('.categorywrap.open'),
			href = $(this).attr('href');

		//$category.toggleClass('open');	
		//$targetElem.slideToggle();

		if($('#about-wrap').is(':visible')){			
			closeAbout();
		}else{
			if($categoryOpen.length){				
				$categoryOpen.find('.category_posts').slideUp(function(){
					$categoryOpen.removeClass('open');
				});			
			}
			openAbout();					
			window.history.pushState({path:href},'',href);			
		}
		//$('#back').attr('href',href);
		return false;
	});

	$('.drag').draggable({		  
		stop: function() {			
			$(this).css("left",parseInt($(this).css("left")) / ($(window).width() / 100)+"%");
			$(this).css("top",parseInt($(this).css("top")) / ($(window).height() / 100)+"%");

		}
	});

	$("#about-contents .image_wrapper img").each(function(i) {	
		var caption = $(this).data('caption');  
	    //$(this).attr("rel", i+1);
	    $(this).data('caption',i+1 + '.&nbsp;&nbsp;&nbsp;' + caption); 
	});
	
	$('.has_caption').mouseenter(function(){	
		var cap = $(this).data('caption');

		$('body').append('<div id="caption">'+cap+'</div>');	
	    //$('#caption-text').html($(this).data('caption'));
		//$('#number').html(rel);
		//$('#caption').show();
	});

	$('.has_caption').mouseout(function(){
	    $('#caption').remove();	
	});
		
	$('#about-contents .image_wrapper_background').click(function() {
		$('#about-contents .image_wrapper').hide();
		$('#about-contents .image_wrapper .image').show();
	});
		
	$('#about-contents .image').click(function() {
		$(this).hide();				

	  	if($('#about-contents .image img:visible').length === 0){
		  $('#about-contents .image_wrapper').hide();
		  $('#about-contents .image_wrapper .image').show();
		}					
	});
	
	$('#typewriter a').click(function() {
	    var elem = $(this).attr('href');
	    $(elem).show();
	    return false; 
	});

	// digital clock
	function updateClock(){
	    var currentTime = new Date ( );
	    var currentHours = currentTime.getHours ( );
	    var currentMinutes = currentTime.getMinutes ( );
	    var currentSeconds = currentTime.getSeconds ( );

	    // Pad the minutes and seconds with leading zeros, if required
	    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

	    // Choose either "AM" or "PM" as appropriate
	    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

	    // Convert the hours component to 12-hour format if needed
	    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

	    // Convert an hours component of "0" to "12"
	    currentHours = ( currentHours === 0 ) ? 12 : currentHours;

	    // Compose the string for display
	    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;


	    $("#clock").html(currentTimeString);

	}
	setInterval(updateClock(), 1000);



	// Main nav //
	$('.category_toggle').click(function(){
		var $category = $(this).closest('.categorywrap'),
			$targetElem = $category.find('.category_posts'),
			$categoryOpen = $('.categorywrap.open'),
			hash = $(this).attr('href');

		//$category.toggleClass('open');	
		//$targetElem.slideToggle();

		if($targetElem.is(':visible')){			
			$targetElem.slideUp(function(){
				$category.removeClass('open');
			});
			window.location.hash = '';
		}else{
			if($categoryOpen.length){
				if($categoryOpen.attr('id') === 'about'){
					closeAbout();
				}else{				
					$categoryOpen.find('.category_posts').slideUp(function(){
						$categoryOpen.removeClass('open');
					});	
				}			
			}
			$category.addClass('open');
			$targetElem.slideDown();						
			window.location.hash = hash;			
		}
		$('#back').attr('href',window.location);
		return false;
	});



	function openActiveNavItem(hash){
		$('.categorywrap.open').removeClass('open').find('.category_posts').hide();
		$(hash).addClass('open').find('.category_posts').show();
	}

	if(window.location.hash){
		openActiveNavItem(window.location.hash);
	}
	if($('body').hasClass('not_mobile') || $win.width() > 480){
		$('.category_toggle').hover(function(){
			if($('.categorywrap.hover').length === 0 && $('.categorywrap.open').length === 0){
				$(this).closest('.categorywrap').addClass('hover');
				$('header').addClass('clear_bg');
			}
		},function(){
			$(this).closest('.categorywrap').removeClass('hover');
			$('header').removeClass('clear_bg');
		});
	

		$('.about_link').hover(function(){
			if($('.categorywrap.hover').length === 0 && $('.categorywrap.open').length === 0){
				$(this).closest('.categorywrap').addClass('hover');
				$('.about_rollover').show();
				$('header').addClass('clear_bg');
			}
		},function(){
			$(this).closest('.categorywrap').removeClass('hover');
			$('.about_rollover').hide();
			$('header').removeClass('clear_bg');
		});
	}	

	function loadArticle($this){
		var href = $this.attr('href'),
			post_id = $this.data('id'),
			cat = $this.closest('.categorywrap').attr('id');

		$('.breadcrumbs a').removeClass('active');
		$('.breadcrumbs a.'+cat).addClass('active');	

		if($('.postwrap#post-'+post_id).length){
		    $('body').removeClass('home').addClass('single');
			window.history.pushState({path:href},'',href);
		}else{
			$this.css('cursor', 'progress');	
			if($('.postwrap').length){
				$('.postwrap').remove();
			}
		    $.ajax({
		        type: 'POST',
		        url: sitevars.ajaxurl,
		        //context: this,
		        data: {action: 'load_article', post_id: post_id },
		        //data: {action: 'load_article', post_url: href },
		        success: function(response) {
		        	$(response).appendTo('#article-container'); 
		        	//$('footer').clone().appendTo('.articlewrap');
		        	$('body').removeClass('home').addClass('single');
		        	$this.css('cursor', 'auto');
					window.history.pushState({path:href},'',href);
		            popups(); 
		        }
		    });
		}
	}

	// to article //
	$(document).on('click','.post_link',function(){
		var $this = $(this);
		loadArticle($this);
		$('#caption').remove();				
		return false;
	});

	// to home //
	$(document).on('click','.breadcrumbs a',function(){
		var href = $(this).attr('href'),
			hash = this.hash;
			
		if(hash.length){
			openActiveNavItem(hash);
		}else{
			$('.categorywrap.open').removeClass('open').find('.category_posts').hide();
			if(href.indexOf(homeURL +'about') > -1 ){
				$('#slidewrap').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function() {
					openAbout();
				});	
			}		
		}

		$('body').removeClass('single').addClass('home');							
		window.history.pushState({path:href},'',href);
		return false;
	});

	// Back button //
	$(window).on("popstate", function(e) {
		if (e.originalEvent.state !== null) {
			//var homeUrl = $('#back').attr('href');
			if(e.originalEvent.state.path === homeURL || e.originalEvent.state.path === homeURL+'/'){
				$('body').removeClass('single').addClass('home');
				if($('#about-wrap').is(':visible')){			
					closeAbout();
				}											
				return false;				
			}else if(e.originalEvent.state.path === homeURL+'/about' || e.originalEvent.state.path === homeURL+'/about/'){
				openAbout();	
			}else{
				var $this = $('a[href^="'+e.originalEvent.state.path+'"]');
				loadArticle($this);
			}
		}
	});

	if($('body').hasClass('about')){
		$win.load(function(){
			openAbout();
			runTypewriter();
		});	
	}

	// function loadAbout(){
	// 	var $this = $('.about_link');
	// 	var href = $this.attr('href');

	// 	$('.breadcrumbs a').removeClass('active');
	// 	$('.breadcrumbs a.about').addClass('active');
	// 	$('#back').attr('href',$('#logo').attr('href'));	

	// 	if($('.article#about-contents').length){
	// 	    $('body').removeClass('home').addClass('single');
	// 		window.history.pushState({path:href},'',href);
	// 		runTypewriter();
	// 	}else{
	// 		$this.css('cursor', 'progress');	
	// 		if($('.article').length){
	// 			$('.article').remove();
	// 		}
	// 	    $.ajax({
	// 	        type: 'POST',
	// 	        url: sitevars.ajaxurl,
	// 	        //context: this,
	// 	        data: {action: 'load_about' },
	// 	        //data: {action: 'load_article', post_url: href },
	// 	        success: function(response) {
	// 	        	$(response).appendTo('#article-container'); 
	// 	        	$('body').removeClass('home').addClass('single');
	// 	        	$this.css('cursor', 'auto');
	// 				window.history.pushState({path:href},'',href);
	// 				runTypewriter();
	// 	        }
	// 	    });
	// 	}
	// }
	// $(document).on('click','.about_link',function(){
	// 	//loadAbout();
	// 	$('#about-wrap').slideDown(function() {
	// 		runTypewriter();
	// 	});				
	// 	return false;
	// });

 	// get Times New Roman text from wiki //
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Times_New_Roman&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
 
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('.times_ticker').html($(blurb).find('p').first());
 
        }
    });

});	