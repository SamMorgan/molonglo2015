!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t="Close",o="BeforeClose",n="AfterClose",i="BeforeAppend",a="MarkupParse",r="Open",s="Change",l="mfp",c="."+l,d="mfp-ready",p="mfp-removing",u="mfp-prevent-close",f,m=function(){},g=!!window.jQuery,h,v=e(window),w,y,C,b,I=function(e,t){f.ev.on(l+e+c,t)},k=function(t,o,n,i){var a=document.createElement("div");return a.className="mfp-"+t,n&&(a.innerHTML=n),i?o&&o.appendChild(a):(a=e(a),o&&a.appendTo(o)),a},_=function(t,o){f.ev.triggerHandler(l+t,o),f.st.callbacks&&(t=t.charAt(0).toLowerCase()+t.slice(1),f.st.callbacks[t]&&f.st.callbacks[t].apply(f,e.isArray(o)?o:[o]))},x=function(t){return t===b&&f.currTemplate.closeBtn||(f.currTemplate.closeBtn=e(f.st.closeMarkup.replace("%title%",f.st.tClose)),b=t),f.currTemplate.closeBtn},T=function(){e.magnificPopup.instance||(f=new m,f.init(),e.magnificPopup.instance=f)},E=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};m.prototype={constructor:m,init:function(){var t=navigator.appVersion;f.isIE7=-1!==t.indexOf("MSIE 7."),f.isIE8=-1!==t.indexOf("MSIE 8."),f.isLowIE=f.isIE7||f.isIE8,f.isAndroid=/android/gi.test(t),f.isIOS=/iphone|ipad|ipod/gi.test(t),f.supportsTransition=E(),f.probablyMobile=f.isAndroid||f.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),w=e(document),f.popupsCache={}},open:function(t){var o;if(t.isObj===!1){f.items=t.items.toArray(),f.index=0;var n=t.items,i;for(o=0;o<n.length;o++)if(i=n[o],i.parsed&&(i=i.el[0]),i===t.el[0]){f.index=o;break}}else f.items=e.isArray(t.items)?t.items:[t.items],f.index=t.index||0;if(f.isOpen)return void f.updateItemHTML();f.types=[],C="",t.mainEl&&t.mainEl.length?f.ev=t.mainEl.eq(0):f.ev=w,t.key?(f.popupsCache[t.key]||(f.popupsCache[t.key]={}),f.currTemplate=f.popupsCache[t.key]):f.currTemplate={},f.st=e.extend(!0,{},e.magnificPopup.defaults,t),f.fixedContentPos="auto"===f.st.fixedContentPos?!f.probablyMobile:f.st.fixedContentPos,f.st.modal&&(f.st.closeOnContentClick=!1,f.st.closeOnBgClick=!1,f.st.showCloseBtn=!1,f.st.enableEscapeKey=!1),f.bgOverlay||(f.bgOverlay=k("bg").on("click"+c,function(){f.close()}),f.wrap=k("wrap").attr("tabindex",-1).on("click"+c,function(e){f._checkIfClose(e.target)&&f.close()}),f.container=k("container",f.wrap)),f.contentContainer=k("content"),f.st.preloader&&(f.preloader=k("preloader",f.container,f.st.tLoading));var s=e.magnificPopup.modules;for(o=0;o<s.length;o++){var l=s[o];l=l.charAt(0).toUpperCase()+l.slice(1),f["init"+l].call(f)}_("BeforeOpen"),f.st.showCloseBtn&&(f.st.closeBtnInside?(I(a,function(e,t,o,n){o.close_replaceWith=x(n.type)}),C+=" mfp-close-btn-in"):f.wrap.append(x())),f.st.alignTop&&(C+=" mfp-align-top"),f.fixedContentPos?f.wrap.css({overflow:f.st.overflowY,overflowX:"hidden",overflowY:f.st.overflowY}):f.wrap.css({top:v.scrollTop(),position:"absolute"}),(f.st.fixedBgPos===!1||"auto"===f.st.fixedBgPos&&!f.fixedContentPos)&&f.bgOverlay.css({height:w.height(),position:"absolute"}),f.st.enableEscapeKey&&w.on("keyup"+c,function(e){27===e.keyCode&&f.close()}),v.on("resize"+c,function(){f.updateSize()}),f.st.closeOnContentClick||(C+=" mfp-auto-cursor"),C&&f.wrap.addClass(C);var p=f.wH=v.height(),u={};if(f.fixedContentPos&&f._hasScrollBar(p)){var m=f._getScrollbarSize();m&&(u.marginRight=m)}f.fixedContentPos&&(f.isIE7?e("body, html").css("overflow","hidden"):u.overflow="hidden");var g=f.st.mainClass;return f.isIE7&&(g+=" mfp-ie7"),g&&f._addClassToMFP(g),f.updateItemHTML(),_("BuildControls"),e("html").css(u),f.bgOverlay.add(f.wrap).prependTo(f.st.prependTo||e(document.body)),f._lastFocusedEl=document.activeElement,setTimeout(function(){f.content?(f._addClassToMFP(d),f._setFocus()):f.bgOverlay.addClass(d),w.on("focusin"+c,f._onFocusIn)},16),f.isOpen=!0,f.updateSize(p),_(r),t},close:function(){f.isOpen&&(_(o),f.isOpen=!1,f.st.removalDelay&&!f.isLowIE&&f.supportsTransition?(f._addClassToMFP(p),setTimeout(function(){f._close()},f.st.removalDelay)):f._close())},_close:function(){_(t);var o=p+" "+d+" ";if(f.bgOverlay.detach(),f.wrap.detach(),f.container.empty(),f.st.mainClass&&(o+=f.st.mainClass+" "),f._removeClassFromMFP(o),f.fixedContentPos){var i={marginRight:""};f.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}w.off("keyup"+c+" focusin"+c),f.ev.off(c),f.wrap.attr("class","mfp-wrap").removeAttr("style"),f.bgOverlay.attr("class","mfp-bg"),f.container.attr("class","mfp-container"),f.st.showCloseBtn&&(!f.st.closeBtnInside||f.currTemplate[f.currItem.type]===!0)&&f.currTemplate.closeBtn&&f.currTemplate.closeBtn.detach(),f._lastFocusedEl&&e(f._lastFocusedEl).focus(),f.currItem=null,f.content=null,f.currTemplate=null,f.prevHeight=0,_(n)},updateSize:function(e){if(f.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,o=window.innerHeight*t;f.wrap.css("height",o),f.wH=o}else f.wH=e||v.height();f.fixedContentPos||f.wrap.css("height",f.wH),_("Resize")},updateItemHTML:function(){var t=f.items[f.index];f.contentContainer.detach(),f.content&&f.content.detach(),t.parsed||(t=f.parseEl(f.index));var o=t.type;if(_("BeforeChange",[f.currItem?f.currItem.type:"",o]),f.currItem=t,!f.currTemplate[o]){var n=f.st[o]?f.st[o].markup:!1;_("FirstMarkupParse",n),n?f.currTemplate[o]=e(n):f.currTemplate[o]=!0}y&&y!==t.type&&f.container.removeClass("mfp-"+y+"-holder");var i=f["get"+o.charAt(0).toUpperCase()+o.slice(1)](t,f.currTemplate[o]);f.appendContent(i,o),t.preloaded=!0,_(s,t),y=t.type,f.container.prepend(f.contentContainer),_("AfterChange")},appendContent:function(e,t){f.content=e,e?f.st.showCloseBtn&&f.st.closeBtnInside&&f.currTemplate[t]===!0?f.content.find(".mfp-close").length||f.content.append(x()):f.content=e:f.content="",_(i),f.container.addClass("mfp-"+t+"-holder"),f.contentContainer.append(f.content)},parseEl:function(t){var o=f.items[t],n;if(o.tagName?o={el:e(o)}:(n=o.type,o={data:o,src:o.src}),o.el){for(var i=f.types,a=0;a<i.length;a++)if(o.el.hasClass("mfp-"+i[a])){n=i[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=n||f.st.type||"inline",o.index=t,o.parsed=!0,f.items[t]=o,_("ElementParse",o),f.items[t]},addGroup:function(e,t){var o=function(o){o.mfpEl=this,f._openClick(o,e,t)};t||(t={});var n="click.magnificPopup";t.mainEl=e,t.items?(t.isObj=!0,e.off(n).on(n,o)):(t.isObj=!1,t.delegate?e.off(n).on(n,t.delegate,o):(t.items=e,e.off(n).on(n,o)))},_openClick:function(t,o,n){var i=void 0!==n.midClick?n.midClick:e.magnificPopup.defaults.midClick;if(i||2!==t.which&&!t.ctrlKey&&!t.metaKey){var a=void 0!==n.disableOn?n.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(f))return!0}else if(v.width()<a)return!0;t.type&&(t.preventDefault(),f.isOpen&&t.stopPropagation()),n.el=e(t.mfpEl),n.delegate&&(n.items=o.find(n.delegate)),f.open(n)}},updateStatus:function(e,t){if(f.preloader){h!==e&&f.container.removeClass("mfp-s-"+h),!t&&"loading"===e&&(t=f.st.tLoading);var o={status:e,text:t};_("UpdateStatus",o),e=o.status,t=o.text,f.preloader.html(t),f.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),f.container.addClass("mfp-s-"+e),h=e}},_checkIfClose:function(t){if(!e(t).hasClass(u)){var o=f.st.closeOnContentClick,n=f.st.closeOnBgClick;if(o&&n)return!0;if(!f.content||e(t).hasClass("mfp-close")||f.preloader&&t===f.preloader[0])return!0;if(t===f.content[0]||e.contains(f.content[0],t)){if(o)return!0}else if(n&&e.contains(document,t))return!0;return!1}},_addClassToMFP:function(e){f.bgOverlay.addClass(e),f.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),f.wrap.removeClass(e)},_hasScrollBar:function(e){return(f.isIE7?w.height():document.body.scrollHeight)>(e||v.height())},_setFocus:function(){(f.st.focus?f.content.find(f.st.focus).eq(0):f.wrap).focus()},_onFocusIn:function(t){return t.target===f.wrap[0]||e.contains(f.wrap[0],t.target)?void 0:(f._setFocus(),!1)},_parseMarkup:function(t,o,n){var i;n.data&&(o=e.extend(n.data,o)),_(a,[t,o,n]),e.each(o,function(e,o){if(void 0===o||o===!1)return!0;if(i=e.split("_"),i.length>1){var n=t.find(c+"-"+i[0]);if(n.length>0){var a=i[1];"replaceWith"===a?n[0]!==o[0]&&n.replaceWith(o):"img"===a?n.is("img")?n.attr("src",o):n.replaceWith('<img src="'+o+'" class="'+n.attr("class")+'" />'):n.attr(i[1],o)}}else t.find(c+"-"+e).html(o)})},_getScrollbarSize:function(){if(void 0===f.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),f.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return f.scrollbarSize}},e.magnificPopup={instance:null,proto:m.prototype,modules:[],open:function(t,o){return T(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=o||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,o){o.options&&(e.magnificPopup.defaults[t]=o.options),e.extend(this.proto,o.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(t){T();var o=e(this);if("string"==typeof t)if("open"===t){var n,i=g?o.data("magnificPopup"):o[0].magnificPopup,a=parseInt(arguments[1],10)||0;i.items?n=i.items[a]:(n=o,i.delegate&&(n=n.find(i.delegate)),n=n.eq(a)),f._openClick({mfpEl:n},o,i)}else f.isOpen&&f[t].apply(f,Array.prototype.slice.call(arguments,1));else t=e.extend(!0,{},t),g?o.data("magnificPopup",t):o[0].magnificPopup=t,f.addGroup(o,t);return o};var S,P=function(t){if(t.data&&void 0!==t.data.title)return t.data.title;var o=f.st.image.titleSrc;if(o){if(e.isFunction(o))return o.call(f,t);if(t.el)return t.el.attr(o)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var o=f.st.image,n=".image";f.types.push("image"),I(r+n,function(){"image"===f.currItem.type&&o.cursor&&e(document.body).addClass(o.cursor)}),I(t+n,function(){o.cursor&&e(document.body).removeClass(o.cursor),v.off("resize"+c)}),I("Resize"+n,f.resizeImage),f.isLowIE&&I("AfterChange",f.resizeImage)},resizeImage:function(){var e=f.currItem;if(e&&e.img&&f.st.image.verticalFit){var t=0;f.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",f.wH-t)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,S&&clearInterval(S),e.isCheckingImgSize=!1,_("ImageHasSize",e),e.imgHidden&&(f.content&&f.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var t=0,o=e.img[0],n=function(i){S&&clearInterval(S),S=setInterval(function(){return o.naturalWidth>0?void f._onImageHasSize(e):(t>200&&clearInterval(S),t++,3===t?n(10):40===t?n(50):100===t&&n(500),void 0)},i)};n(1)},getImage:function(t,o){var n=0,i=function(){t&&(t.img[0].complete?(t.img.off(".mfploader"),t===f.currItem&&(f._onImageHasSize(t),f.updateStatus("ready")),t.hasSize=!0,t.loaded=!0,_("ImageLoadComplete")):(n++,200>n?setTimeout(i,100):a()))},a=function(){t&&(t.img.off(".mfploader"),t===f.currItem&&(f._onImageHasSize(t),f.updateStatus("error",r.tError.replace("%url%",t.src))),t.hasSize=!0,t.loaded=!0,t.loadError=!0)},r=f.st.image,s=o.find(".mfp-img");if(s.length){var l=document.createElement("img");l.className="mfp-img",t.el&&t.el.find("img").length&&(l.alt=t.el.find("img").attr("alt")),t.img=e(l).on("load.mfploader",i).on("error.mfploader",a),l.src=t.src,s.is("img")&&(t.img=t.img.clone()),l=t.img[0],l.naturalWidth>0?t.hasSize=!0:l.width||(t.hasSize=!1)}return f._parseMarkup(o,{title:P(t),img_replaceWith:t.img},t),f.resizeImage(),t.hasSize?(S&&clearInterval(S),t.loadError?(o.addClass("mfp-loading"),f.updateStatus("error",r.tError.replace("%url%",t.src))):(o.removeClass("mfp-loading"),f.updateStatus("ready")),o):(f.updateStatus("loading"),t.loading=!0,t.hasSize||(t.imgHidden=!0,o.addClass("mfp-loading"),f.findImageSize(t)),o)}}});var z,O=function(){return void 0===z&&(z=void 0!==document.createElement("p").style.MozTransform),z};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e=f.st.zoom,n=".zoom",i;if(e.enabled&&f.supportsTransition){var a=e.duration,r=function(t){var o=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+e.duration/1e3+"s "+e.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},a="transition";return i["-webkit-"+a]=i["-moz-"+a]=i["-o-"+a]=i[a]=n,o.css(i),o},s=function(){f.content.css("visibility","visible")},l,c;I("BuildControls"+n,function(){if(f._allowZoom()){if(clearTimeout(l),f.content.css("visibility","hidden"),i=f._getItemToZoom(),!i)return void s();c=r(i),c.css(f._getOffset()),f.wrap.append(c),l=setTimeout(function(){c.css(f._getOffset(!0)),l=setTimeout(function(){s(),setTimeout(function(){c.remove(),i=c=null,_("ZoomAnimationEnded")},16)},a)},16)}}),I(o+n,function(){if(f._allowZoom()){if(clearTimeout(l),f.st.removalDelay=a,!i){if(i=f._getItemToZoom(),!i)return;c=r(i)}c.css(f._getOffset(!0)),f.wrap.append(c),f.content.css("visibility","hidden"),setTimeout(function(){c.css(f._getOffset())},16)}}),I(t+n,function(){f._allowZoom()&&(s(),c&&c.remove(),i=null)})}},_allowZoom:function(){return"image"===f.currItem.type},_getItemToZoom:function(){return f.currItem.hasSize?f.currItem.img:!1},_getOffset:function(t){var o;o=t?f.currItem.img:f.st.zoom.opener(f.currItem.el||f.currItem);var n=o.offset(),i=parseInt(o.css("padding-top"),10),a=parseInt(o.css("padding-bottom"),10);n.top-=e(window).scrollTop()-i;var r={width:o.width(),height:(g?o.innerHeight():o[0].offsetHeight)-a-i};return O()?r["-moz-transform"]=r.transform="translate("+n.left+"px,"+n.top+"px)":(r.left=n.left,r.top=n.top),r}}});var M=function(e){var t=f.items.length;return e>t-1?e-t:0>e?t+e:e},B=function(e,t,o){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,o)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var o=f.st.gallery,n=".mfp-gallery",i=Boolean(e.fn.mfpFastClick);return f.direction=!0,o&&o.enabled?(C+=" mfp-gallery",I(r+n,function(){o.navigateByImgClick&&f.wrap.on("click"+n,".mfp-img",function(){return f.items.length>1?(f.next(),!1):void 0}),w.on("keydown"+n,function(e){37===e.keyCode?f.prev():39===e.keyCode&&f.next()})}),I("UpdateStatus"+n,function(e,t){t.text&&(t.text=B(t.text,f.currItem.index,f.items.length))}),I(a+n,function(e,t,n,i){var a=f.items.length;n.counter=a>1?B(o.tCounter,i.index,a):""}),I("BuildControls"+n,function(){if(f.items.length>1&&o.arrows&&!f.arrowLeft){var t=o.arrowMarkup,n=f.arrowLeft=e(t.replace(/%title%/gi,o.tPrev).replace(/%dir%/gi,"left")).addClass(u),a=f.arrowRight=e(t.replace(/%title%/gi,o.tNext).replace(/%dir%/gi,"right")).addClass(u),r=i?"mfpFastClick":"click";n[r](function(){f.prev()}),a[r](function(){f.next()}),f.isIE7&&(k("b",n[0],!1,!0),k("a",n[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),f.container.append(n.add(a))}}),I(s+n,function(){f._preloadTimeout&&clearTimeout(f._preloadTimeout),f._preloadTimeout=setTimeout(function(){f.preloadNearbyImages(),f._preloadTimeout=null},16)}),I(t+n,function(){w.off(n),f.wrap.off("click"+n),f.arrowLeft&&i&&f.arrowLeft.add(f.arrowRight).destroyMfpFastClick(),f.arrowRight=f.arrowLeft=null}),void 0):!1},next:function(){f.direction=!0,f.index=M(f.index+1),f.updateItemHTML()},prev:function(){f.direction=!1,f.index=M(f.index-1),f.updateItemHTML()},goTo:function(e){f.direction=e>=f.index,f.index=e,f.updateItemHTML()},preloadNearbyImages:function(){var e=f.st.gallery.preload,t=Math.min(e[0],f.items.length),o=Math.min(e[1],f.items.length),n;for(n=1;n<=(f.direction?o:t);n++)f._preloadItem(f.index+n);for(n=1;n<=(f.direction?t:o);n++)f._preloadItem(f.index-n)},_preloadItem:function(t){if(t=M(t),!f.items[t].preloaded){var o=f.items[t];o.parsed||(o=f.parseEl(t)),_("LazyLoad",o),"image"===o.type&&(o.img=e('<img class="mfp-img" />').on("load.mfploader",function(){o.hasSize=!0}).on("error.mfploader",function(){o.hasSize=!0,o.loadError=!0,_("LazyLoadError",o)}).attr("src",o.src)),o.preloaded=!0}}}}),T()}),jQuery(document).ready(function($){function e(){var e=(new Date).getMinutes(),t=6*e,o="rotate("+t+"deg)";$(".min").css({transform:o})}function t(){var e=(new Date).getHours(),t=(new Date).getMinutes(),o=30*e+t/2,n="rotate("+o+"deg)";$(".hour").css({transform:n})}function o(){$(".article").each(function(){$(this).magnificPopup({delegate:"a.popup_img",type:"image",gallery:{enabled:!0,arrowMarkup:"",tCounter:""}})})}function n(){var e=$(".main_nav"),t=$(".main_nav").height(),o=(r.height()-t)/2;o>90&&e.css("padding-top",o+"px").show()}function i(e){$(".categorywrap.open").removeClass("open").find(".category_posts").hide(),$(e).addClass("open").find(".category_posts").show()}function a(e){var t=e.attr("href"),n=e.data("id"),i=e.closest(".categorywrap").attr("id");$(".breadcrumbs a").removeClass("active"),$(".breadcrumbs a."+i).addClass("active"),$(".article#post-"+n).length?($("body").removeClass("home").addClass("single"),window.history.pushState({path:t},"",t)):(e.css("cursor","progress"),$(".article").length&&$(".article").remove(),$.ajax({type:"POST",url:sitevars.ajaxurl,data:{action:"load_article",post_id:n},success:function(n){$(n).appendTo("#article-container"),$("body").removeClass("home").addClass("single"),e.css("cursor","auto"),window.history.pushState({path:t},"",t),o()}}))}var r=$(window);e(),t(),setInterval(function(){e(),t()},1e3),o(),$(document).on({mouseenter:function(){var e=$(this).text();$("#footnote-"+e).show()},mouseleave:function(){$(".footnote").hide()}},".footnote_marker"),n(),r.resize(function(){n()}),$(".category_toggle").click(function(){var e=$(this).closest(".categorywrap"),t=e.find(".category_posts"),o=$(".categorywrap.open"),n=$(this).attr("href");return t.is(":visible")?(e.removeClass("open"),t.slideUp(),window.location.hash=""):(o.length&&(o.removeClass("open"),o.find(".category_posts").slideUp()),e.addClass("open"),t.slideDown(),window.location.hash=n),$("#back").attr("href",window.location),!1}),window.location.hash&&i(window.location.hash),$(".category_toggle").hover(function(){$(this).closest(".categorywrap").addClass("hover")},function(){$(this).closest(".categorywrap").removeClass("hover")}),$(document).on("click",".post_link",function(){var e=$(this);return a(e),!1}),$(document).on("click",".breadcrumbs a",function(){var e=$(this).attr("href"),t=this.hash;return t.length&&i(t),$("body").removeClass("single").addClass("home"),window.history.pushState({path:e},"",e),!1}),$(window).on("popstate",function(e){if(null!==e.originalEvent.state){var t=$("#back").attr("href");if(e.originalEvent.state.path===t||e.originalEvent.state.path===t+"/")return $("body").removeClass("single").addClass("home"),window.history.pushState({path:e.originalEvent.state.path},"",e.originalEvent.state.path),!1;var o=$('a[href^="'+e.originalEvent.state.path+'"]');a(o)}})});