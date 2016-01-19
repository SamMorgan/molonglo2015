// @codekit-prepend "/lib/jquery.magnific-popup.custom.min.js";
// @codekit-prepend "/lib/jquery.lazyloadxt.min.js";
// @codekit-prepend "/lib/js.cookie.js";

jQuery(document).ready(function($){

	var $win = $(window),
		homeURL = $('#logo').attr('href')+'/',
		//$slidewrap = $('#slidewrap');
		$homeWrap = $('.homewrap');


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
			$(this).next('.footnote').remove();
			$(this).removeClass('footnote_open');
			$('.article_contents').removeClass('footnote_visible');	
		}else{				
	    	var fig = $(this).text();
			var footnote = $('#footnote-'+fig).clone();
			$(this).addClass('footnote_open').after(footnote);
			$('.article_contents').addClass('footnote_visible');
		}		
	});

	function stopImgReflow(){

		$('.popup_img').each(function(){
			var $img = $(this).find('img'),
				h = $img.attr('height'),
				w = $img.attr('width'),
				r = h/$img.height(),
				nw = w/r;
			$img.css('width',nw); 					
		});
		$('.article_contents').addClass('images_ready');
	}
	stopImgReflow();

	// function positionFootnotes(){
	// 	if($('.footnote_marker').length){
	// 		$('.footnote_marker').each(function(){
	// 	    	var fig = $(this).text();
	// 			$('#footnote-'+fig).appendTo($(this).parent());
	// 		});
	// 	}	
	// }
	// positionFootnotes();

	// $('.article_contents').imagesLoaded( function() {
	//   $(this).addClass('ready');
	// });				

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
		//if(mainNavPadding > 90){	
			mainNav.css('padding-top',mainNavPadding+"px").addClass('ready');
		//}else{
			//mainNav.show();
		//}
	}	
	mainNavCenter();


    // Really nasty moving elements for mobile //
    function moveWidgets(){
    	if($win.width() < 480){
    		$('.categorywrap').each(function(){
    			var $widget = $(this).find('.widget'),
    				$desc = $(this).find('.category_description'),
    				$catPosts = $(this).find('.category_posts');
    			
    			$catPosts.prepend($desc).prepend($widget);	
    		});
    	}else{
    		if($('.category_posts .widget').length){
	    		$('.categorywrap').each(function(){
	    			//if($(this).find('.category_posts .widget')){ 
		    			var $widget = $(this).find('.category_posts .widget'),
		    				$desc = $(this).find('.category_posts .category_description'),
		    				$heading = $(this).find('h2');
		    			
		    			$desc.insertAfter($heading);
		    			$widget.insertAfter($heading);	
		    		//}	
	    		});    			
    		}
    	}
    }
    moveWidgets();

	$win.resize(function(){
		mainNavCenter();
		gm();
		moveWidgets();
	});

	// about page stuff //

    //function aboutSlider(){


	  //   $('#about-slider').royalSlider({
			// autoHeight: true,
			// arrowsNav: false,
			// imageScaleMode: 'none',
			// imageAlignCenter:false,
			// loop: false,
			// loopRewind: true,
			// keyboardNavEnabled: true,
			// usePreloader: false,
			// startSlideId:1,
			// deeplinking: {
			// 	// deep linking options go gere
			// 	enabled: true,
			// 	change: true,
			// 	//prefix: 'slider-'
			// },

	        // visibleNearby: {
	        //     enabled: true,
	        //     centerArea: 0.8,
	        //     center: true,
	        //     //breakpoint: 650,
	        //     //breakpointCenterArea: 0.64,
	        //     navigateByCenterClick: true
	        // }
	    //});
	    
	    
	    //$('#about-slider').royalSlider('updateSliderSize', true);



	    // $('#about-slider').slick({
			  // dots: false,
			  // arrows: false,
			  // infinite: false,
			  // speed: 300,
			  // slidesToShow: 1,
			  // adaptiveHeight: true,
	    // });
	//}

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
	   

	var typing = true;

	function type() {
		
		if (!typing){ return; }

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
	    			    
	    
		char = text.slice(-1);
		if( char === '<' ){ isTag = true; }
		if( char === '>' ){ isTag = false; }
		
		if (isTag){ return type(); }			   
		typeTimer = setTimeout(type,80);


							   
	}

	function runTypewriter(){
	    if (i > 1) {
	        typing = true;
	        return type();
	    }		
		strSlow = $('#type-string .slow').html();
		strFast = $('#type-string .fast').html();
		$typeAnimSlow = $('#type-anim-slow');
		$typeAnimFast = $('#type-anim-fast');
		i = 0;
		isTag = 0;
		typeTimer = 0;
		char = 0;

        type();

	}

	var $aboutSlider = $('#about-slider');

	function aboutSliderPos(){			
		var aboutTop = $aboutSlider.offset().top;
		$('.slide.fixed').each(function(){
			//if($(this).css('top') > 0 && aboutTop > 0){
				$(this).css('top',aboutTop);
			//}
		});

	}

	$('#about-slider .slide').click(function(){
		if($(this).hasClass('fixed')){
			var currentHeight = $aboutSlider.height(),
				$slide = $(this),
				slideHash = $slide.data('hash'),
				slideHeight = $slide.height();

			$aboutSlider.css('height',currentHeight);
			
			$('#about-slider .slide.current').removeClass('current').addClass('fixed');
			aboutSliderPos();	
					
			$aboutSlider.attr('class',slideHash);
			$aboutSlider.animate({'height':slideHeight},300,function(){
				$slide.removeClass('fixed').addClass('current');
				window.location.hash = slideHash;
			});
			
		}
	});


	$('.about_slider_nav a').click(function(){
		var href = $(this).attr('href'),
			hash = href.substring(1);
		
		$('.about_slider_nav a.current').removeClass('current');
		$(this).addClass('current');	

		$('#about-slider .slide.' + hash).trigger("click");
	});


	// function aboutSizing(){
	// 	$('#about-wrap').height($win.height());
	// }
	// aboutSizing();
	// $win.resize(function(){
	// 	aboutSizing();
	// });
	$('#back-to-top').click(function(){
		var aboutTop = parseInt($('.main_nav').css('padding-top')) - 80;
		$homeWrap.animate({scrollTop:aboutTop},500);
	});


	function backToTop(){
		var s = $homeWrap.scrollTop();
		if(s > $win.height()){
			$('#back-to-top').fadeIn();
		}else{
			$('#back-to-top').fadeOut();				
		}
	}	
	function openAbout(){
		$('#about.categorywrap').addClass('open');
		$('#about-wrap').slideDown(500,function(){

			runTypewriter();
			aboutSliderPos();
			$homeWrap.bind('scroll',function(){
				aboutSliderPos();
				backToTop();
			});
			$(window).bind('resize',function(){
				aboutSliderPos();
			});			
			//$('#about-slider').royalSlider('updateSliderSize', true);
			var offset = $('#about.categorywrap').offset().top - 80;
			$homeWrap.animate({scrollTop:offset},500);
			if(window.location.hash){
				var hash = window.location.hash.substring(1);
				$('#about-slider .slide.' + hash).trigger("click");
			}			
		});		
	}

	



	function closeAbout(){
		$('#about-wrap').slideUp(500,function(){
			$('#about.categorywrap').removeClass('open');
			//clearTimeout(typeTimer);
			//$('#type-anim-slow,#type-anim-fast').empty();
			typing = false;
			mainNavCenter();
			$homeWrap.unbind('scroll',function(){
				aboutSliderPos();
				backToTop();
			});
			$(window).unbind('resize',function(){
				aboutSliderPos();
			});			
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
				$categoryOpen.find('.category_posts').slideUp(500,function(){
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

	// Thumbnail Captions //
	$("#about-contents .image_wrapper img").each(function(i) {	
		var caption = $(this).data('caption');  
	    $(this).data('caption',i+1 + '.&nbsp;&nbsp;&nbsp;' + caption); 
	});
	if($('body').hasClass('not_mobile')){
		$('.has_caption').mouseenter(function(){
			var category = $(this).closest('.categorywrap').find('.category_toggle').text().toLowerCase();	
			var cap = $(this).data('caption');
			$('body').append('<div id="caption" class="'+category+'">'+cap+'</div>');	
		});

		$('.has_caption').mouseout(function(){
		    $('#caption').remove();	
		});
	}	
		
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


	// Open and close categories //
	function openCategory(cat){
		
		var $catwrap = $('.categorywrap.'+cat);
		$('header').removeClass('clear_bg');
		$catwrap.addClass('open');
		$catwrap.find('.category_posts').slideDown(500,function(){				
			var offset = $catwrap.offset().top - 80;
			$homeWrap.animate({scrollTop:offset},500);
			window.location.hash = cat;
			$('#back').attr('href',window.location.href);
			history.pushState({path:window.location.href},'',window.location.href);
		});		
	}
	function categoryAccordion(cat){
		var $catOpen = $('.categorywrap.open');
		if($catOpen.length){

			if($catOpen.attr('id') === 'about'){
				closeAbout();
			}else{							
				$catOpen.find('.category_posts').slideUp(500,function(){
					mainNavCenter();
				});
				$catOpen.removeClass('open');	
			}
			setTimeout(function(){
				openCategory(cat);				
			}, 500);

		}else{
			openCategory(cat);
			mainNavCenter();
		}		
	}
	// kill scrollTop animation if user scrolls //
	// $homeWrap.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
	//     if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel" || e.type === 'touchstart' ){
	//         $homeWrap.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup'); // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
	//     }
	// });


	$('.category_toggle').click(function(){
		var cat = $(this).text().toLowerCase(),
			$category = $(this).closest('.categorywrap'),
			$targetElem = $category.find('.category_posts');

		if($targetElem.is(':visible')){			
			$targetElem.slideUp(function(){
				$category.removeClass('open');
				window.location.hash = '';
				$('#back').attr('href',window.location.href);
			});
			
		}else{
			categoryAccordion(cat);																		
		}		
		return false;
	});

	// $win.on('hashchange', function() {
	// 	if(!toggling){
	// 		toggling = true;
	// 		var cat = window.location.hash.substring(1);
	// 		categoryAccordion(cat);
	// 	}
	// });


	function openActiveNavItem(hash){
		var cat = hash.substring(1);
		$('.categorywrap.open').removeClass('open').find('.category_posts').hide();
		$('.categorywrap.'+cat).addClass('open').find('.category_posts').show();		

		//var offset = $('.categorywrap.'+cat).offset().top - 90;
		//$('.homewrap').scrollTop(offset);			
	}

	if(window.location.hash && !$('body').hasClass('about')){
		openActiveNavItem(window.location.hash);
		$('#back').attr('href',window.location.href);
		$win.load(function() {
			var offset = $('.categorywrap.open').offset().top - 90;
			$homeWrap.animate({scrollTop:offset},500);
			//$('.homewrap').scrollTop(offset);	
		});			
	}
	if($('body').hasClass('not_mobile') && $win.width() > 480){
		$('.category_toggle,.about_link').hoverIntent(function(){
			if($('.categorywrap.hover').length === 0 && $('.categorywrap.open').length === 0){
				$(this).closest('.categorywrap').addClass('hover');
				$('header').addClass('clear_bg');
			}
		},function(){
			$(this).closest('.categorywrap').removeClass('hover');
			$('header').removeClass('clear_bg');
		});
	

		// $('.about_link').hover(function(){
		// 	if($('.categorywrap.hover').length === 0 && $('.categorywrap.open').length === 0){
		// 		$(this).closest('.categorywrap').addClass('hover');
		// 		$('.about_rollover').show();
		// 		$('header').addClass('clear_bg');
		// 	}
		// },function(){
		// 	$(this).closest('.categorywrap').removeClass('hover');
		// 	$('.about_rollover').hide();
		// 	$('header').removeClass('clear_bg');
		// });
	}	



    // save articles //

    function addSaveArticleButton(){
    	if($('.save_article_wrap').length){ $('.save_article_wrap').remove(); }
    	var $article = $('.article.postwrap'),
    		postId = $article.data('id'),
    		postIdStr = '-'+$article.data('id')+'-',
    		savedArticles = Cookies.get('molonglo_save_articles');
    		if(savedArticles){
    			var count = (savedArticles.split("-").length - 1)*0.5,
    				vewSavedHtml = '<br><a id="saved-count" href="'+sitevars.homeurl+'/saved-articles?saved='+savedArticles+'">View Saved <span>'+count+'</span></a>';
	    		if(savedArticles.indexOf(postId) === -1){    	
	    			$article.after('<div class="save_article_wrap"><a href="#" class="save_article" data-postid="'+postId+'">+ Save</a>' + vewSavedHtml + '</div>');
	    		}else{
	    			$article.after('<div class="save_article_wrap"><a href="#" class="save_article" data-postid="'+postId+'">- Remove</a>' + vewSavedHtml + '</div>');
	    		}

	    	}else{
	    		$article.after('<div class="save_article_wrap">' +
	    					   '<a href="#" class="save_article" data-postid="'+postId+'">+ Save</a>' +  
	    					   '<br><a id="saved-count" style="display:none;" href="'+sitevars.homeurl+
	    					   '/saved-articles/#'+postIdStr+'">View Saved <span>1</span></a></div>');
	    	}			
    }
    if($('.articlewrap .article.postwrap').length){
    	addSaveArticleButton();
    }

    $(document).on('click','.save_article',function(){
    	var savedArticles = Cookies.get('molonglo_save_articles'),
    		postId = $(this).data('postid'),
    		postIdStr = '-'+postId+'-',
    		newCount;
    		

    	if(savedArticles){    
    		if($(this).text() === '+ Save' ){	    		
	    		if(savedArticles.indexOf(postIdStr) === -1){
	    			savedArticles += postIdStr;
	    			Cookies.remove('molonglo_save_articles');
	    			Cookies.set('molonglo_save_articles', savedArticles, { expires:28 } );
	    			$(this).text('- Remove');
	    			$('#saved-count').attr('href',sitevars.homeurl+'/saved-articles?saved='+savedArticles+postIdStr);
	    			newCount = (savedArticles.split("-").length - 1)*0.5;
	    			$('#saved-count span').text(newCount);	    			
	    		}
	    	}else{
	    		var index = savedArticles.indexOf(postIdStr);
	    		if (index > -1) {
    				savedArticles = savedArticles.replace(postIdStr, "");
	    			Cookies.remove('molonglo_save_articles');
	    			Cookies.set('molonglo_save_articles', savedArticles, { expires:28 } );		    			
	    			$(this).text('+ Save');
	    			newCount = (savedArticles.split("-").length - 1)*0.5;
	    			if(newCount === 0){
	    				$('#saved-count').hide();
	    			}else{
	    				$('#saved-count').attr('href',sitevars.homeurl+'/saved-articles?saved='+savedArticles);
	    				$('#saved-count span').text(newCount);
	    			}
				}
	    	}	
    	}else{
    		Cookies.set('molonglo_save_articles', postIdStr, { expires:28 } );
    		$(this).text('- Remove');
    		$('#saved-count span').text(1);
    		$('#saved-count').attr('href',sitevars.homeurl+'/saved-articles?saved='+postIdStr).show();
    	}
    	return false;
	});

	/**
	 * Get the value of a querystring
	 * @param  {String} field The field to get the value of
	 * @param  {String} url   The URL to get the value from (optional)
	 * @return {String}       The field value
	 */
	var getQueryString = function ( field, url ) {
	    var href = url ? url : window.location.href;
	    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	    var string = reg.exec(href);
	    return string ? string[1] : null;
	};


	$('.remove_saved_article').click(function(){		
		var querytStr = getQueryString('saved'),
			postId = $(this).data('id'),
			postIdStr = '-'+postId+'-';

		querytStr = querytStr.replace(postIdStr, "");
		$(this).closest('.saved_article_wrap').fadeOut(function(){ $(this).remove(); });
		Cookies.set('molonglo_save_articles', querytStr, { expires:28 } );
		var updatedUrl = sitevars.homeurl+'/saved-articles?saved='+querytStr;
		window.history.pushState({path:updatedUrl},'',updatedUrl);
		return false;
	});

	$(document).on('click','.email_selection',function(){
		var mail_str = "mailto:?subject= Check this link --> " + document.title; 
			mail_str += "&body= " + document.title; 
			mail_str += "... at: " + location.href; 
		window.open(mail_str);	
		//location.href = mail_str;
		return false; 
	});	
	



	function loadArticle($this){
		var href = $this.attr('href'),
			post_id = $this.data('id'),
			cat = $this.closest('.categorywrap').find('.category_toggle').text().toLowerCase();

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
		        	$('body').removeClass('home').addClass('single');
		        	$this.css('cursor', 'auto');
					window.history.pushState({path:href},'',href);
		            popups(); 
		            stopImgReflow();
		            addSaveArticleButton(); 
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
	$win.on("popstate", function(e) {
		if (e.originalEvent.state !== null) {
			if(e.originalEvent.state.path === homeURL || e.originalEvent.state.path === homeURL+'/'){
				$('body').removeClass('single').addClass('home');
				if($('#about-wrap').is(':visible')){			
					closeAbout();
				}											
				return false;				
			}else if(e.originalEvent.state.path === homeURL+'/about' || e.originalEvent.state.path === homeURL+'/about/'){
				openAbout();
			}else if(location.hash.length){
				var cat = location.hash.substring(1);

				categoryAccordion(cat);	

			}else{
				var $this = $('a[href^="'+e.originalEvent.state.path+'"]');
				loadArticle($this);
			}
		}
	});

	if($('body').hasClass('about')){
		//$(window).load(function(){
			openAbout();
			//$('.about_link').trigger("click");
		//});	
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