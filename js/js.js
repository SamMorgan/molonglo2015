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
			var fig = $(this).text(),
				t = $(this).position().top;
				//h = $('#footnote-'+fig).height(),
				//top = t - h;

			$('#footnote-'+fig).css('top',t).show();
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
				$categoryOpen.find('.category_posts').slideUp(function(){
					$categoryOpen.removeClass('open');
				});			
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

	function loadArticle($this){
		var href = $this.attr('href'),
			post_id = $this.data('id'),
			cat = $this.closest('.categorywrap').attr('id');

		$('.breadcrumbs a').removeClass('active');
		$('.breadcrumbs a.'+cat).addClass('active');	

		if($('.article#post-'+post_id).length){
		    $('body').removeClass('home').addClass('single');
			window.history.pushState({path:href},'',href);
		}else{
			$('*').css('cursor', 'progress');	
			if($('.article').length){
				$('.article').remove();
			}
		    $.ajax({
		        type: 'POST',
		        url: sitevars.ajaxurl,
		        //context: this,
		        data: {action: 'load_article', post_id: post_id },
		        //data: {action: 'load_article', post_url: href },
		        success: function(response) {
		        	$(response).appendTo('#article-container'); 
		        	$('footer').clone().appendTo('.articlewrap');
		        	$('body').removeClass('home').addClass('single');
		        	$('*').css('cursor', 'auto');
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
		return false;
	});

	// to home //
	$(document).on('click','.breadcrumbs a',function(){
		var href = $(this).attr('href'),
			hash = this.hash;
			
		if(hash.length){
			openActiveNavItem(hash);
		}

		$('body').removeClass('single').addClass('home');							
		window.history.pushState({path:href},'',href);
		return false;
	});

	// Back button //
	$(window).on("popstate", function(e) {
		if (e.originalEvent.state !== null) {
			var homeUrl = $('#back').attr('href');
			if(e.originalEvent.state.path === homeUrl || e.originalEvent.state.path === homeUrl+'/'){
				$('body').removeClass('single').addClass('home');							
				window.history.pushState({path:e.originalEvent.state.path},'',e.originalEvent.state.path);
				return false;				
			}else if(e.originalEvent.state.path === homeUrl+'/about' || e.originalEvent.state.path === homeUrl+'/about/'){
				loadAbout();
			}else{
				var $this = $('a[href^="'+e.originalEvent.state.path+'"]');
				loadArticle($this);
			}
		}
	});


	// About //
	var strSlow = $('#type-string .slow').html(),
		strFast = $('#type-string .fast').html(),
		$typeAnimSlow = $('#type-anim-slow'),
		$typeAnimFast = $('#type-anim-fast'),
	    i = 0,
	    isTag,typeTimer,newh,h,char;
	   


	function type() {
		
	    var text = strSlow.slice(0, ++i);			    
	    
	    if (text === strSlow){
				
			    text = strFast.slice(0, ++i);					    
			    if (text === strFast){
					return;
				}											
			    document.getElementById('type-anim-fast').innerHTML = text;

			    var slowHeight = $typeAnimSlow.height();
			    	newh = $typeAnimFast.height() + slowHeight;
			    	h = 0;
			    if(newh > h){
			    	$('#typewriter').height(newh);
			    	h = newh;
			
			    }					    
				char = text.slice(-1);
				if( char === '<' ){ isTag = true; }
				if( char === '>' ){ isTag = false; }
				
				if (isTag){ return type(); }			   
				typeTimer = setTimeout(type,1);					
				
			return;
		}	
						
	    document.getElementById('type-anim-slow').innerHTML = text;
	    			    
	    newh = $typeAnimSlow.height();
	    h = 0;
	    if(newh > h){
	    	$('#typewriter').height(newh);
	    	h = newh;			
	    }
	    
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
		typeTimer = 0;newh = 0;h = 0;char = 0;

        type();		
	}
				
	//type();

	if($('body').hasClass('page-id-86')){
		runTypewriter();
	}

	function loadAbout(){
		var $this = $('.about_link');
		var href = $this.attr('href');

		$('.breadcrumbs a').removeClass('active');
		$('.breadcrumbs a.about').addClass('active');	

		if($('.article#about-contents').length){
		    $('body').removeClass('home').addClass('single');
			window.history.pushState({path:href},'',href);
			runTypewriter();
		}else{
			$this.css('cursor', 'progress');	
			if($('.article').length){
				$('.article').remove();
			}
		    $.ajax({
		        type: 'POST',
		        url: sitevars.ajaxurl,
		        //context: this,
		        data: {action: 'load_about' },
		        //data: {action: 'load_article', post_url: href },
		        success: function(response) {
		        	$(response).appendTo('#article-container'); 
		        	$('body').removeClass('home').addClass('single');
		        	$this.css('cursor', 'auto');
					window.history.pushState({path:href},'',href);
					runTypewriter();
		        }
		    });
		}
	}
	$(document).on('click','.about_link',function(){
		loadAbout();				
		return false;
	});



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