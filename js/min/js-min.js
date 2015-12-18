!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t="Close",o="BeforeClose",i="AfterClose",n="BeforeAppend",a="MarkupParse",r="Open",s="Change",c="mfp",l="."+c,p="mfp-ready",d="mfp-removing",u="mfp-prevent-close",f,m=function(){},g=!!window.jQuery,h,v=e(window),w,y,b,C,_=function(e,t){f.ev.on(c+e+l,t)},I=function(t,o,i,n){var a=document.createElement("div");return a.className="mfp-"+t,i&&(a.innerHTML=i),n?o&&o.appendChild(a):(a=e(a),o&&a.appendTo(o)),a},k=function(t,o){f.ev.triggerHandler(c+t,o),f.st.callbacks&&(t=t.charAt(0).toLowerCase()+t.slice(1),f.st.callbacks[t]&&f.st.callbacks[t].apply(f,e.isArray(o)?o:[o]))},T=function(t){return t===C&&f.currTemplate.closeBtn||(f.currTemplate.closeBtn=e(f.st.closeMarkup.replace("%title%",f.st.tClose)),C=t),f.currTemplate.closeBtn},x=function(){e.magnificPopup.instance||(f=new m,f.init(),e.magnificPopup.instance=f)},E=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};m.prototype={constructor:m,init:function(){var t=navigator.appVersion;f.isIE7=-1!==t.indexOf("MSIE 7."),f.isIE8=-1!==t.indexOf("MSIE 8."),f.isLowIE=f.isIE7||f.isIE8,f.isAndroid=/android/gi.test(t),f.isIOS=/iphone|ipad|ipod/gi.test(t),f.supportsTransition=E(),f.probablyMobile=f.isAndroid||f.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),w=e(document),f.popupsCache={}},open:function(t){var o;if(t.isObj===!1){f.items=t.items.toArray(),f.index=0;var i=t.items,n;for(o=0;o<i.length;o++)if(n=i[o],n.parsed&&(n=n.el[0]),n===t.el[0]){f.index=o;break}}else f.items=e.isArray(t.items)?t.items:[t.items],f.index=t.index||0;if(f.isOpen)return void f.updateItemHTML();f.types=[],b="",t.mainEl&&t.mainEl.length?f.ev=t.mainEl.eq(0):f.ev=w,t.key?(f.popupsCache[t.key]||(f.popupsCache[t.key]={}),f.currTemplate=f.popupsCache[t.key]):f.currTemplate={},f.st=e.extend(!0,{},e.magnificPopup.defaults,t),f.fixedContentPos="auto"===f.st.fixedContentPos?!f.probablyMobile:f.st.fixedContentPos,f.st.modal&&(f.st.closeOnContentClick=!1,f.st.closeOnBgClick=!1,f.st.showCloseBtn=!1,f.st.enableEscapeKey=!1),f.bgOverlay||(f.bgOverlay=I("bg").on("click"+l,function(){f.close()}),f.wrap=I("wrap").attr("tabindex",-1).on("click"+l,function(e){f._checkIfClose(e.target)&&f.close()}),f.container=I("container",f.wrap)),f.contentContainer=I("content"),f.st.preloader&&(f.preloader=I("preloader",f.container,f.st.tLoading));var s=e.magnificPopup.modules;for(o=0;o<s.length;o++){var c=s[o];c=c.charAt(0).toUpperCase()+c.slice(1),f["init"+c].call(f)}k("BeforeOpen"),f.st.showCloseBtn&&(f.st.closeBtnInside?(_(a,function(e,t,o,i){o.close_replaceWith=T(i.type)}),b+=" mfp-close-btn-in"):f.wrap.append(T())),f.st.alignTop&&(b+=" mfp-align-top"),f.fixedContentPos?f.wrap.css({overflow:f.st.overflowY,overflowX:"hidden",overflowY:f.st.overflowY}):f.wrap.css({top:v.scrollTop(),position:"absolute"}),(f.st.fixedBgPos===!1||"auto"===f.st.fixedBgPos&&!f.fixedContentPos)&&f.bgOverlay.css({height:w.height(),position:"absolute"}),f.st.enableEscapeKey&&w.on("keyup"+l,function(e){27===e.keyCode&&f.close()}),v.on("resize"+l,function(){f.updateSize()}),f.st.closeOnContentClick||(b+=" mfp-auto-cursor"),b&&f.wrap.addClass(b);var d=f.wH=v.height(),u={};if(f.fixedContentPos&&f._hasScrollBar(d)){var m=f._getScrollbarSize();m&&(u.marginRight=m)}f.fixedContentPos&&(f.isIE7?e("body, html").css("overflow","hidden"):u.overflow="hidden");var g=f.st.mainClass;return f.isIE7&&(g+=" mfp-ie7"),g&&f._addClassToMFP(g),f.updateItemHTML(),k("BuildControls"),e("html").css(u),f.bgOverlay.add(f.wrap).prependTo(f.st.prependTo||e(document.body)),f._lastFocusedEl=document.activeElement,setTimeout(function(){f.content?(f._addClassToMFP(p),f._setFocus()):f.bgOverlay.addClass(p),w.on("focusin"+l,f._onFocusIn)},16),f.isOpen=!0,f.updateSize(d),k(r),t},close:function(){f.isOpen&&(k(o),f.isOpen=!1,f.st.removalDelay&&!f.isLowIE&&f.supportsTransition?(f._addClassToMFP(d),setTimeout(function(){f._close()},f.st.removalDelay)):f._close())},_close:function(){k(t);var o=d+" "+p+" ";if(f.bgOverlay.detach(),f.wrap.detach(),f.container.empty(),f.st.mainClass&&(o+=f.st.mainClass+" "),f._removeClassFromMFP(o),f.fixedContentPos){var n={marginRight:""};f.isIE7?e("body, html").css("overflow",""):n.overflow="",e("html").css(n)}w.off("keyup"+l+" focusin"+l),f.ev.off(l),f.wrap.attr("class","mfp-wrap").removeAttr("style"),f.bgOverlay.attr("class","mfp-bg"),f.container.attr("class","mfp-container"),f.st.showCloseBtn&&(!f.st.closeBtnInside||f.currTemplate[f.currItem.type]===!0)&&f.currTemplate.closeBtn&&f.currTemplate.closeBtn.detach(),f._lastFocusedEl&&e(f._lastFocusedEl).focus(),f.currItem=null,f.content=null,f.currTemplate=null,f.prevHeight=0,k(i)},updateSize:function(e){if(f.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,o=window.innerHeight*t;f.wrap.css("height",o),f.wH=o}else f.wH=e||v.height();f.fixedContentPos||f.wrap.css("height",f.wH),k("Resize")},updateItemHTML:function(){var t=f.items[f.index];f.contentContainer.detach(),f.content&&f.content.detach(),t.parsed||(t=f.parseEl(f.index));var o=t.type;if(k("BeforeChange",[f.currItem?f.currItem.type:"",o]),f.currItem=t,!f.currTemplate[o]){var i=f.st[o]?f.st[o].markup:!1;k("FirstMarkupParse",i),i?f.currTemplate[o]=e(i):f.currTemplate[o]=!0}y&&y!==t.type&&f.container.removeClass("mfp-"+y+"-holder");var n=f["get"+o.charAt(0).toUpperCase()+o.slice(1)](t,f.currTemplate[o]);f.appendContent(n,o),t.preloaded=!0,k(s,t),y=t.type,f.container.prepend(f.contentContainer),k("AfterChange")},appendContent:function(e,t){f.content=e,e?f.st.showCloseBtn&&f.st.closeBtnInside&&f.currTemplate[t]===!0?f.content.find(".mfp-close").length||f.content.append(T()):f.content=e:f.content="",k(n),f.container.addClass("mfp-"+t+"-holder"),f.contentContainer.append(f.content)},parseEl:function(t){var o=f.items[t],i;if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var n=f.types,a=0;a<n.length;a++)if(o.el.hasClass("mfp-"+n[a])){i=n[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||f.st.type||"inline",o.index=t,o.parsed=!0,f.items[t]=o,k("ElementParse",o),f.items[t]},addGroup:function(e,t){var o=function(o){o.mfpEl=this,f._openClick(o,e,t)};t||(t={});var i="click.magnificPopup";t.mainEl=e,t.items?(t.isObj=!0,e.off(i).on(i,o)):(t.isObj=!1,t.delegate?e.off(i).on(i,t.delegate,o):(t.items=e,e.off(i).on(i,o)))},_openClick:function(t,o,i){var n=void 0!==i.midClick?i.midClick:e.magnificPopup.defaults.midClick;if(n||2!==t.which&&!t.ctrlKey&&!t.metaKey){var a=void 0!==i.disableOn?i.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(f))return!0}else if(v.width()<a)return!0;t.type&&(t.preventDefault(),f.isOpen&&t.stopPropagation()),i.el=e(t.mfpEl),i.delegate&&(i.items=o.find(i.delegate)),f.open(i)}},updateStatus:function(e,t){if(f.preloader){h!==e&&f.container.removeClass("mfp-s-"+h),!t&&"loading"===e&&(t=f.st.tLoading);var o={status:e,text:t};k("UpdateStatus",o),e=o.status,t=o.text,f.preloader.html(t),f.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),f.container.addClass("mfp-s-"+e),h=e}},_checkIfClose:function(t){if(!e(t).hasClass(u)){var o=f.st.closeOnContentClick,i=f.st.closeOnBgClick;if(o&&i)return!0;if(!f.content||e(t).hasClass("mfp-close")||f.preloader&&t===f.preloader[0])return!0;if(t===f.content[0]||e.contains(f.content[0],t)){if(o)return!0}else if(i&&e.contains(document,t))return!0;return!1}},_addClassToMFP:function(e){f.bgOverlay.addClass(e),f.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),f.wrap.removeClass(e)},_hasScrollBar:function(e){return(f.isIE7?w.height():document.body.scrollHeight)>(e||v.height())},_setFocus:function(){(f.st.focus?f.content.find(f.st.focus).eq(0):f.wrap).focus()},_onFocusIn:function(t){return t.target===f.wrap[0]||e.contains(f.wrap[0],t.target)?void 0:(f._setFocus(),!1)},_parseMarkup:function(t,o,i){var n;i.data&&(o=e.extend(i.data,o)),k(a,[t,o,i]),e.each(o,function(e,o){if(void 0===o||o===!1)return!0;if(n=e.split("_"),n.length>1){var i=t.find(l+"-"+n[0]);if(i.length>0){var a=n[1];"replaceWith"===a?i[0]!==o[0]&&i.replaceWith(o):"img"===a?i.is("img")?i.attr("src",o):i.replaceWith('<img src="'+o+'" class="'+i.attr("class")+'" />'):i.attr(n[1],o)}}else t.find(l+"-"+e).html(o)})},_getScrollbarSize:function(){if(void 0===f.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),f.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return f.scrollbarSize}},e.magnificPopup={instance:null,proto:m.prototype,modules:[],open:function(t,o){return x(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=o||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,o){o.options&&(e.magnificPopup.defaults[t]=o.options),e.extend(this.proto,o.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(t){x();var o=e(this);if("string"==typeof t)if("open"===t){var i,n=g?o.data("magnificPopup"):o[0].magnificPopup,a=parseInt(arguments[1],10)||0;n.items?i=n.items[a]:(i=o,n.delegate&&(i=i.find(n.delegate)),i=i.eq(a)),f._openClick({mfpEl:i},o,n)}else f.isOpen&&f[t].apply(f,Array.prototype.slice.call(arguments,1));else t=e.extend(!0,{},t),g?o.data("magnificPopup",t):o[0].magnificPopup=t,f.addGroup(o,t);return o};var S,P=function(t){if(t.data&&void 0!==t.data.title)return t.data.title;var o=f.st.image.titleSrc;if(o){if(e.isFunction(o))return o.call(f,t);if(t.el)return t.el.attr(o)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var o=f.st.image,i=".image";f.types.push("image"),_(r+i,function(){"image"===f.currItem.type&&o.cursor&&e(document.body).addClass(o.cursor)}),_(t+i,function(){o.cursor&&e(document.body).removeClass(o.cursor),v.off("resize"+l)}),_("Resize"+i,f.resizeImage),f.isLowIE&&_("AfterChange",f.resizeImage)},resizeImage:function(){var e=f.currItem;if(e&&e.img&&f.st.image.verticalFit){var t=0;f.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",f.wH-t)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,S&&clearInterval(S),e.isCheckingImgSize=!1,k("ImageHasSize",e),e.imgHidden&&(f.content&&f.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var t=0,o=e.img[0],i=function(n){S&&clearInterval(S),S=setInterval(function(){return o.naturalWidth>0?void f._onImageHasSize(e):(t>200&&clearInterval(S),t++,3===t?i(10):40===t?i(50):100===t&&i(500),void 0)},n)};i(1)},getImage:function(t,o){var i=0,n=function(){t&&(t.img[0].complete?(t.img.off(".mfploader"),t===f.currItem&&(f._onImageHasSize(t),f.updateStatus("ready")),t.hasSize=!0,t.loaded=!0,k("ImageLoadComplete")):(i++,200>i?setTimeout(n,100):a()))},a=function(){t&&(t.img.off(".mfploader"),t===f.currItem&&(f._onImageHasSize(t),f.updateStatus("error",r.tError.replace("%url%",t.src))),t.hasSize=!0,t.loaded=!0,t.loadError=!0)},r=f.st.image,s=o.find(".mfp-img");if(s.length){var c=document.createElement("img");c.className="mfp-img",t.el&&t.el.find("img").length&&(c.alt=t.el.find("img").attr("alt")),t.img=e(c).on("load.mfploader",n).on("error.mfploader",a),c.src=t.src,s.is("img")&&(t.img=t.img.clone()),c=t.img[0],c.naturalWidth>0?t.hasSize=!0:c.width||(t.hasSize=!1)}return f._parseMarkup(o,{title:P(t),img_replaceWith:t.img},t),f.resizeImage(),t.hasSize?(S&&clearInterval(S),t.loadError?(o.addClass("mfp-loading"),f.updateStatus("error",r.tError.replace("%url%",t.src))):(o.removeClass("mfp-loading"),f.updateStatus("ready")),o):(f.updateStatus("loading"),t.loading=!0,t.hasSize||(t.imgHidden=!0,o.addClass("mfp-loading"),f.findImageSize(t)),o)}}});var M,O=function(){return void 0===M&&(M=void 0!==document.createElement("p").style.MozTransform),M};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e=f.st.zoom,i=".zoom",n;if(e.enabled&&f.supportsTransition){var a=e.duration,r=function(t){var o=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+e.duration/1e3+"s "+e.easing,n={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},a="transition";return n["-webkit-"+a]=n["-moz-"+a]=n["-o-"+a]=n[a]=i,o.css(n),o},s=function(){f.content.css("visibility","visible")},c,l;_("BuildControls"+i,function(){if(f._allowZoom()){if(clearTimeout(c),f.content.css("visibility","hidden"),n=f._getItemToZoom(),!n)return void s();l=r(n),l.css(f._getOffset()),f.wrap.append(l),c=setTimeout(function(){l.css(f._getOffset(!0)),c=setTimeout(function(){s(),setTimeout(function(){l.remove(),n=l=null,k("ZoomAnimationEnded")},16)},a)},16)}}),_(o+i,function(){if(f._allowZoom()){if(clearTimeout(c),f.st.removalDelay=a,!n){if(n=f._getItemToZoom(),!n)return;l=r(n)}l.css(f._getOffset(!0)),f.wrap.append(l),f.content.css("visibility","hidden"),setTimeout(function(){l.css(f._getOffset())},16)}}),_(t+i,function(){f._allowZoom()&&(s(),l&&l.remove(),n=null)})}},_allowZoom:function(){return"image"===f.currItem.type},_getItemToZoom:function(){return f.currItem.hasSize?f.currItem.img:!1},_getOffset:function(t){var o;o=t?f.currItem.img:f.st.zoom.opener(f.currItem.el||f.currItem);var i=o.offset(),n=parseInt(o.css("padding-top"),10),a=parseInt(o.css("padding-bottom"),10);i.top-=e(window).scrollTop()-n;var r={width:o.width(),height:(g?o.innerHeight():o[0].offsetHeight)-a-n};return O()?r["-moz-transform"]=r.transform="translate("+i.left+"px,"+i.top+"px)":(r.left=i.left,r.top=i.top),r}}});var z=function(e){var t=f.items.length;return e>t-1?e-t:0>e?t+e:e},L=function(e,t,o){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,o)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var o=f.st.gallery,i=".mfp-gallery",n=Boolean(e.fn.mfpFastClick);return f.direction=!0,o&&o.enabled?(b+=" mfp-gallery",_(r+i,function(){o.navigateByImgClick&&f.wrap.on("click"+i,".mfp-img",function(){return f.items.length>1?(f.next(),!1):void 0}),w.on("keydown"+i,function(e){37===e.keyCode?f.prev():39===e.keyCode&&f.next()})}),_("UpdateStatus"+i,function(e,t){t.text&&(t.text=L(t.text,f.currItem.index,f.items.length))}),_(a+i,function(e,t,i,n){var a=f.items.length;i.counter=a>1?L(o.tCounter,n.index,a):""}),_("BuildControls"+i,function(){if(f.items.length>1&&o.arrows&&!f.arrowLeft){var t=o.arrowMarkup,i=f.arrowLeft=e(t.replace(/%title%/gi,o.tPrev).replace(/%dir%/gi,"left")).addClass(u),a=f.arrowRight=e(t.replace(/%title%/gi,o.tNext).replace(/%dir%/gi,"right")).addClass(u),r=n?"mfpFastClick":"click";i[r](function(){f.prev()}),a[r](function(){f.next()}),f.isIE7&&(I("b",i[0],!1,!0),I("a",i[0],!1,!0),I("b",a[0],!1,!0),I("a",a[0],!1,!0)),f.container.append(i.add(a))}}),_(s+i,function(){f._preloadTimeout&&clearTimeout(f._preloadTimeout),f._preloadTimeout=setTimeout(function(){f.preloadNearbyImages(),f._preloadTimeout=null},16)}),_(t+i,function(){w.off(i),f.wrap.off("click"+i),f.arrowLeft&&n&&f.arrowLeft.add(f.arrowRight).destroyMfpFastClick(),f.arrowRight=f.arrowLeft=null}),void 0):!1},next:function(){f.direction=!0,f.index=z(f.index+1),f.updateItemHTML()},prev:function(){f.direction=!1,f.index=z(f.index-1),f.updateItemHTML()},goTo:function(e){f.direction=e>=f.index,f.index=e,f.updateItemHTML()},preloadNearbyImages:function(){var e=f.st.gallery.preload,t=Math.min(e[0],f.items.length),o=Math.min(e[1],f.items.length),i;for(i=1;i<=(f.direction?o:t);i++)f._preloadItem(f.index+i);for(i=1;i<=(f.direction?t:o);i++)f._preloadItem(f.index-i)},_preloadItem:function(t){if(t=z(t),!f.items[t].preloaded){var o=f.items[t];o.parsed||(o=f.parseEl(t)),k("LazyLoad",o),"image"===o.type&&(o.img=e('<img class="mfp-img" />').on("load.mfploader",function(){o.hasSize=!0}).on("error.mfploader",function(){o.hasSize=!0,o.loadError=!0,k("LazyLoadError",o)}).attr("src",o.src)),o.preloaded=!0}}}}),x()}),jQuery(document).ready(function($){function e(){var e=(new Date).getSeconds(),t=6*e,o="rotate("+t+"deg)";$(".sec").css({transform:o})}function t(){var e=(new Date).getMinutes(),t=6*e,o="rotate("+t+"deg)";$(".min").css({transform:o})}function o(){var e=(new Date).getHours(),t=(new Date).getMinutes(),o=30*e+t/2,i="rotate("+o+"deg)";$(".hour").css({transform:i})}function i(){$(".article").each(function(){$(this).magnificPopup({delegate:"a.popup_img",type:"image",gallery:{enabled:!0,arrowMarkup:"",tCounter:""}})})}function n(){$(".popup_img").each(function(){var e=$(this).find("img"),t=e.attr("height"),o=e.attr("width"),i=t/e.height(),n=o/i;console.log(t,o,i,n,e.height()),e.css("width",n)}),$(".article_contents").addClass("images_ready")}function a(){var e=v.width(),t=v.height(),o=e/2,i=e/3,n=e/4,a=e/6,r=.666,s=1/.666;$(".image.Landscape.Small").width(n),$(".image.Landscape.Small").height(n*r),$(".image.Landscape.Medium").width(i),$(".image.Landscape.Medium").height(i*r),$(".image.Landscape.Large").width(o),$(".image.Landscape.Large").height(o*r),$(".image.Portrait.Small").width(a),$(".image.Portrait.Small").height(a*s),$(".image.Portrait.Medium").width(n),$(".image.Portrait.Medium").height(n*s),$(".image.Portrait.Large").width(i),$(".image.Portrait.Large").height(i*s),$(".image_wrapper").height(t),$(".image_wrapper").width(e)}function r(){var e=$(".main_nav"),t=$(".main_nav").height(),o=$("footer").height()-$("header").height(),i=(v.height()-t-o)/2;e.css("padding-top",i+"px").addClass("ready")}function s(){v.width()<480?$(".categorywrap").each(function(){var e=$(this).find(".widget"),t=$(this).find(".category_description"),o=$(this).find(".category_posts");o.prepend(t).prepend(e)}):$(".category_posts .widget").length&&$(".categorywrap").each(function(){var e=$(this).find(".category_posts .widget"),t=$(this).find(".category_posts .category_description"),o=$(this).find("h2");t.insertAfter(o),e.insertAfter(o)})}function c(){if(S){var e=b.slice(0,++k);if(e===b){if(e=C.slice(0,++k),e===C)return;return document.getElementById("type-anim-fast").innerHTML=e,E=e.slice(-1),"<"===E&&(T=!0),">"===E&&(T=!1),T?c():void(x=setTimeout(c,5))}return document.getElementById("type-anim-slow").innerHTML=e,E=e.slice(-1),"<"===E&&(T=!0),">"===E&&(T=!1),T?c():void(x=setTimeout(c,80))}}function l(){return k>1?(S=!0,c()):(b=$("#type-string .slow").html(),C=$("#type-string .fast").html(),_=$("#type-anim-slow"),I=$("#type-anim-fast"),k=0,T=0,x=0,E=0,void c())}function p(){$("#about.categorywrap").addClass("open"),$("#about-wrap").slideDown(500,function(){l();var e=$("#about.categorywrap").offset().top-80;y.animate({scrollTop:e},500)})}function d(){$("#about-wrap").slideUp(500,function(){$("#about.categorywrap").removeClass("open"),S=!1,r()}),window.history.pushState({path:w},"",w)}function u(){var e=new Date,t=e.getHours(),o=e.getMinutes(),i=e.getSeconds();o=(10>o?"0":"")+o,i=(10>i?"0":"")+i;var n=12>t?"AM":"PM";t=t>12?t-12:t,t=0===t?12:t;var a=t+":"+o+":"+i+" "+n;$("#clock").html(a)}function f(e){var t=$(".categorywrap."+e);$("header").removeClass("clear_bg"),t.addClass("open"),t.find(".category_posts").slideDown(500,function(){var o=t.offset().top-80;y.animate({scrollTop:o},500),window.location.hash="#"+e,$("#back").attr("href",window.location.href),history.pushState({path:window.location.href},"",window.location.href)})}function m(e){var t=$(".categorywrap.open");t.length?("about"===t.attr("id")?d():(t.find(".category_posts").slideUp(500,function(){r()}),t.removeClass("open")),setTimeout(function(){f(e)},500)):(f(e),r())}function g(e){var t=e.substring(1);$(".categorywrap.open").removeClass("open").find(".category_posts").hide(),$(".categorywrap."+t).addClass("open").find(".category_posts").show()}function h(e){var t=e.attr("href"),o=e.data("id"),a=e.closest(".categorywrap").find(".category_toggle").text().toLowerCase();$(".breadcrumbs a").removeClass("active"),$(".breadcrumbs a."+a).addClass("active"),$(".postwrap#post-"+o).length?($("body").removeClass("home").addClass("single"),window.history.pushState({path:t},"",t)):(e.css("cursor","progress"),$(".postwrap").length&&$(".postwrap").remove(),$.ajax({type:"POST",url:sitevars.ajaxurl,data:{action:"load_article",post_id:o},success:function(o){$(o).appendTo("#article-container"),$("body").removeClass("home").addClass("single"),e.css("cursor","auto"),window.history.pushState({path:t},"",t),i(),n()}}))}var v=$(window),w=$("#logo").attr("href")+"/",y=$(".homewrap");e(),t(),o(),setInterval(function(){e(),t(),o()},1e3),i(),$(".bg_rollover").each(function(){var e=$(this),t=$(this).css("background-image");t=t.replace("url(","").replace(")",""),$("<img/>").attr("src",t).load(function(){$(this).remove(),e.addClass("loaded")})}),$(document).on("click",".footnote_marker",function(){if($(this).hasClass("footnote_open"))$(this).next(".footnote").remove(),$(this).removeClass("footnote_open"),$(".article_contents").removeClass("footnote_visible");else{var e=$(this).text(),t=$("#footnote-"+e).clone();$(this).addClass("footnote_open").after(t),$(".article_contents").addClass("footnote_visible")}}),n(),a(),r(),s(),v.resize(function(){r(),a(),s()});var b=$("#type-string .slow").html(),C=$("#type-string .fast").html(),_=$("#type-anim-slow"),I=$("#type-anim-fast"),k=0,T,x,E,S=!0;$(".about_link").click(function(){var e=$(".categorywrap.open"),t=$(this).attr("href");return $("#about-wrap").is(":visible")?d():(e.length&&e.find(".category_posts").slideUp(500,function(){e.removeClass("open")}),p(),window.history.pushState({path:t},"",t)),!1}),$(".drag").draggable({stop:function(){$(this).css("left",parseInt($(this).css("left"))/($(window).width()/100)+"%"),$(this).css("top",parseInt($(this).css("top"))/($(window).height()/100)+"%")}}),$("#about-contents .image_wrapper img").each(function(e){var t=$(this).data("caption");$(this).data("caption",e+1+".&nbsp;&nbsp;&nbsp;"+t)}),$("body").hasClass("not_mobile")&&($(".has_caption").mouseenter(function(){var e=$(this).closest(".categorywrap").find(".category_toggle").text().toLowerCase(),t=$(this).data("caption");$("body").append('<div id="caption" class="'+e+'">'+t+"</div>")}),$(".has_caption").mouseout(function(){$("#caption").remove()})),$("#about-contents .image_wrapper_background").click(function(){$("#about-contents .image_wrapper").hide(),$("#about-contents .image_wrapper .image").show()}),$("#about-contents .image").click(function(){$(this).hide(),0===$("#about-contents .image img:visible").length&&($("#about-contents .image_wrapper").hide(),$("#about-contents .image_wrapper .image").show())}),$("#typewriter a").click(function(){var e=$(this).attr("href");return $(e).show(),!1}),setInterval(u(),1e3),y.bind("scroll mousedown DOMMouseScroll mousewheel keyup",function(e){(e.which>0||"mousedown"===e.type||"mousewheel"===e.type||"touchstart"===e.type)&&y.stop().unbind("scroll mousedown DOMMouseScroll mousewheel keyup")}),$(".category_toggle").click(function(){var e=$(this).text().toLowerCase(),t=$(this).closest(".categorywrap"),o=t.find(".category_posts");return o.is(":visible")?o.slideUp(function(){t.removeClass("open"),window.location.hash="",$("#back").attr("href",window.location)}):m(e),!1}),window.location.hash&&(g(window.location.hash),$("#back").attr("href",window.location.href),v.load(function(){var e=$(".categorywrap.open").offset().top-90;y.animate({scrollTop:e},500)})),$("body").hasClass("not_mobile")&&v.width()>480&&$(".category_toggle,.about_link").hoverIntent(function(){0===$(".categorywrap.hover").length&&0===$(".categorywrap.open").length&&($(this).closest(".categorywrap").addClass("hover"),$("header").addClass("clear_bg"))},function(){$(this).closest(".categorywrap").removeClass("hover"),$("header").removeClass("clear_bg")}),$(document).on("click",".post_link",function(){var e=$(this);return h(e),$("#caption").remove(),!1}),$(document).on("click",".breadcrumbs a",function(){var e=$(this).attr("href"),t=this.hash;return t.length?g(t):($(".categorywrap.open").removeClass("open").find(".category_posts").hide(),e.indexOf(w+"about")>-1&&$("#slidewrap").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){p()})),$("body").removeClass("single").addClass("home"),window.history.pushState({path:e},"",e),!1}),v.on("popstate",function(e){if(null!==e.originalEvent.state){if(e.originalEvent.state.path===w||e.originalEvent.state.path===w+"/")return $("body").removeClass("single").addClass("home"),$("#about-wrap").is(":visible")&&d(),!1;if(e.originalEvent.state.path===w+"/about"||e.originalEvent.state.path===w+"/about/")p();else if(location.hash.length){var t=location.hash.substring(1);m(t)}else{var o=$('a[href^="'+e.originalEvent.state.path+'"]');h(o)}}}),$("body").hasClass("about")&&p(),$.ajax({type:"GET",url:"http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Times_New_Roman&callback=?",contentType:"application/json; charset=utf-8",async:!1,dataType:"json",success:function(e){var t=e.parse.text["*"],o=$("<div></div>").html(t);o.find("a").each(function(){$(this).replaceWith($(this).html())}),o.find("sup").remove(),o.find(".mw-ext-cite-error").remove(),$(".times_ticker").html($(o).find("p").first())}})});