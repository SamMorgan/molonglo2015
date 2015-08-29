// Magnific Popup v1.0.0 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=image+gallery
(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):typeof exports=="object"?a(require("jquery")):a(window.jQuery||window.Zepto)})(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.jQuery,q,r=a(window),s,t,u,v,w=function(a,b){n.ev.on(i+a+j,b)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},z=function(b){if(b!==v||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),v=b;return n.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isIE7=b.indexOf("MSIE 7.")!==-1,n.isIE8=b.indexOf("MSIE 8.")!==-1,n.isLowIE=n.isIE7||n.isIE8,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=B(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),s=a(document),n.popupsCache={}},open:function(b){var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],u="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=s,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=x("bg").on("click"+j,function(){n.close()}),n.wrap=x("wrap").attr("tabindex",-1).on("click"+j,function(a){n._checkIfClose(a.target)&&n.close()}),n.container=x("container",n.wrap)),n.contentContainer=x("content"),n.st.preloader&&(n.preloader=x("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}y("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(w(f,function(a,b,c,d){c.close_replaceWith=z(d.type)}),u+=" mfp-close-btn-in"):n.wrap.append(z())),n.st.alignTop&&(u+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:s.height(),position:"absolute"}),n.st.enableEscapeKey&&s.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(u+=" mfp-auto-cursor"),u&&n.wrap.addClass(u);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.marginRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),y("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo||a(document.body)),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),n._setFocus()):n.bgOverlay.addClass(k),s.on("focusin"+j,n._onFocusIn)},16),n.isOpen=!0,n.updateSize(l),y(g),b},close:function(){if(!n.isOpen)return;y(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){y(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={marginRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}s.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,y(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),y("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;y("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;y("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}t&&t!==b.type&&n.container.removeClass("mfp-"+t+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,y(h,b),t=b.type,n.container.prepend(n.contentContainer),y("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(z()):n.content=a:n.content="",y(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d;c.tagName?c={el:a(c)}:(d=c.type,c={data:c,src:c.src});if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,y("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};y("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_checkIfClose:function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?s.height():document.body.scrollHeight)>(a||r.height())},_setFocus:function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},_onFocusIn:function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return n._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(f,[b,c,d]),a.each(c,function(a,c){if(c===undefined||c===!1)return!0;e=a.split("_");if(e.length>1){var d=b.find(j+"-"+e[0]);if(d.length>0){var f=e[1];f==="replaceWith"?d[0]!==c[0]&&d.replaceWith(c):f==="img"?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(j+"-"+a).html(c)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return A(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(b){A();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var C,D=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=n.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(n,b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=n.st.image,d=".image";n.types.push("image"),w(g+d,function(){n.currItem.type==="image"&&c.cursor&&a(document.body).addClass(c.cursor)}),w(b+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),r.off("resize"+j)}),w("Resize"+d,n.resizeImage),n.isLowIE&&w("AfterChange",n.resizeImage)},resizeImage:function(){var a=n.currItem;if(!a||!a.img)return;if(n.st.image.verticalFit){var b=0;n.isLowIE&&(b=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",n.wH-b)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,C&&clearInterval(C),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(n.content&&n.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){C&&clearInterval(C),C=setInterval(function(){if(c.naturalWidth>0){n._onImageHasSize(a);return}b>200&&clearInterval(C),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("ready")),b.hasSize=!0,b.loaded=!0,y("ImageLoadComplete")):(d++,d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=n.st.image,h=c.find(".mfp-img");if(h.length){var i=document.createElement("img");i.className="mfp-img",b.el&&b.el.find("img").length&&(i.alt=b.el.find("img").attr("alt")),b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone()),i=b.img[0],i.naturalWidth>0?b.hasSize=!0:i.width||(b.hasSize=!1)}return n._parseMarkup(c,{title:D(b),img_replaceWith:b.img},b),n.resizeImage(),b.hasSize?(C&&clearInterval(C),b.loadError?(c.addClass("mfp-loading"),n.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),n.updateStatus("ready")),c):(n.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),n.findImageSize(b)),c)}}});var E,F=function(){return E===undefined&&(E=document.createElement("p").style.MozTransform!==undefined),E};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;w("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,y("ZoomAnimationEnded")},16)},f)},16)}}),w(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),w(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return F()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}});var G=function(a){var b=n.items.length;return a>b-1?a-b:a<0?b+a:a},H=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=n.st.gallery,d=".mfp-gallery",e=Boolean(a.fn.mfpFastClick);n.direction=!0;if(!c||!c.enabled)return!1;u+=" mfp-gallery",w(g+d,function(){c.navigateByImgClick&&n.wrap.on("click"+d,".mfp-img",function(){if(n.items.length>1)return n.next(),!1}),s.on("keydown"+d,function(a){a.keyCode===37?n.prev():a.keyCode===39&&n.next()})}),w("UpdateStatus"+d,function(a,b){b.text&&(b.text=H(b.text,n.currItem.index,n.items.length))}),w(f+d,function(a,b,d,e){var f=n.items.length;d.counter=f>1?H(c.tCounter,e.index,f):""}),w("BuildControls"+d,function(){if(n.items.length>1&&c.arrows&&!n.arrowLeft){var b=c.arrowMarkup,d=n.arrowLeft=a(b.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(m),f=n.arrowRight=a(b.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(m),g=e?"mfpFastClick":"click";d[g](function(){n.prev()}),f[g](function(){n.next()}),n.isIE7&&(x("b",d[0],!1,!0),x("a",d[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),n.container.append(d.add(f))}}),w(h+d,function(){n._preloadTimeout&&clearTimeout(n._preloadTimeout),n._preloadTimeout=setTimeout(function(){n.preloadNearbyImages(),n._preloadTimeout=null},16)}),w(b+d,function(){s.off(d),n.wrap.off("click"+d),n.arrowLeft&&e&&n.arrowLeft.add(n.arrowRight).destroyMfpFastClick(),n.arrowRight=n.arrowLeft=null})},next:function(){n.direction=!0,n.index=G(n.index+1),n.updateItemHTML()},prev:function(){n.direction=!1,n.index=G(n.index-1),n.updateItemHTML()},goTo:function(a){n.direction=a>=n.index,n.index=a,n.updateItemHTML()},preloadNearbyImages:function(){var a=n.st.gallery.preload,b=Math.min(a[0],n.items.length),c=Math.min(a[1],n.items.length),d;for(d=1;d<=(n.direction?c:b);d++)n._preloadItem(n.index+d);for(d=1;d<=(n.direction?b:c);d++)n._preloadItem(n.index-d)},_preloadItem:function(b){b=G(b);if(n.items[b].preloaded)return;var c=n.items[b];c.parsed||(c=n.parseEl(b)),y("LazyLoad",c),c.type==="image"&&(c.img=a('<img class="mfp-img" />').on("load.mfploader",function(){c.hasSize=!0}).on("error.mfploader",function(){c.hasSize=!0,c.loadError=!0,y("LazyLoadError",c)}).attr("src",c.src)),c.preloaded=!0}}}),A()})

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
		char = 0;

        type();		
	}

	function openAbout(){
		$('#about.categorywrap').addClass('open');
		$('#about-wrap').slideDown(500,function(){
			runTypewriter();
			var offset = $('#about.categorywrap').offset().top - 80;
			$('.homewrap').animate({scrollTop:offset},500);			
		});		
	}
	function closeAbout(){
		$('#about-wrap').slideUp(500,function(){
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
		
		$catwrap.addClass('open');
		$catwrap.find('.category_posts').slideDown(500,function(){				
			var offset = $catwrap.offset().top - 80;
			$('.homewrap').animate({scrollTop:offset},500);
			window.location.hash = '#'+cat;
			$('#back').attr('href',window.location.href);
			history.pushState({path:window.location.href},'',window.location.href);
			//toggling = false;
		});		
	}
	function categoryAccordion(cat){
		var $catOpen = $('.categorywrap.open');
		if($catOpen.length){

			if($catOpen.attr('id') === 'about'){
				closeAbout();
			}else{							
				$catOpen.find('.category_posts').slideUp(500);
				$catOpen.removeClass('open');	
			}
			setTimeout(function(){
				openCategory(cat);				
			}, 500);

		}else{
			openCategory(cat);
		}		
	}
	$('.category_toggle').click(function(){
		var cat = $(this).text().toLowerCase(),
			$category = $(this).closest('.categorywrap'),
			$targetElem = $category.find('.category_posts');

		if($targetElem.is(':visible')){			
			$targetElem.slideUp(function(){
				$category.removeClass('open');
				window.location.hash = '';
				$('#back').attr('href',window.location);
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

	if(window.location.hash){
		openActiveNavItem(window.location.hash);
		//$win.load(function() {
			var offset = $('.categorywrap.open').offset().top - 90;
			//$('.homewrap').animate({scrollTop:offset},500);
			$('.homewrap').scrollTop(offset);	
		//});			
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
	$win.on("popstate", function(e) {
		//console.log(e.originalEvent);
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
		openAbout();	
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

