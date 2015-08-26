!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t="Close",o="BeforeClose",a="AfterClose",i="BeforeAppend",n="MarkupParse",r="Open",s="Change",l="mfp",c="."+l,p="mfp-ready",d="mfp-removing",u="mfp-prevent-close",m,f=function(){},g=!!window.jQuery,h,v=e(window),w,y,C,b,_=function(e,t){m.ev.on(l+e+c,t)},I=function(t,o,a,i){var n=document.createElement("div");return n.className="mfp-"+t,a&&(n.innerHTML=a),i?o&&o.appendChild(n):(n=e(n),o&&n.appendTo(o)),n},k=function(t,o){m.ev.triggerHandler(l+t,o),m.st.callbacks&&(t=t.charAt(0).toLowerCase()+t.slice(1),m.st.callbacks[t]&&m.st.callbacks[t].apply(m,e.isArray(o)?o:[o]))},T=function(t){return t===b&&m.currTemplate.closeBtn||(m.currTemplate.closeBtn=e(m.st.closeMarkup.replace("%title%",m.st.tClose)),b=t),m.currTemplate.closeBtn},x=function(){e.magnificPopup.instance||(m=new f,m.init(),e.magnificPopup.instance=m)},E=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};f.prototype={constructor:f,init:function(){var t=navigator.appVersion;m.isIE7=-1!==t.indexOf("MSIE 7."),m.isIE8=-1!==t.indexOf("MSIE 8."),m.isLowIE=m.isIE7||m.isIE8,m.isAndroid=/android/gi.test(t),m.isIOS=/iphone|ipad|ipod/gi.test(t),m.supportsTransition=E(),m.probablyMobile=m.isAndroid||m.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),w=e(document),m.popupsCache={}},open:function(t){var o;if(t.isObj===!1){m.items=t.items.toArray(),m.index=0;var a=t.items,i;for(o=0;o<a.length;o++)if(i=a[o],i.parsed&&(i=i.el[0]),i===t.el[0]){m.index=o;break}}else m.items=e.isArray(t.items)?t.items:[t.items],m.index=t.index||0;if(m.isOpen)return void m.updateItemHTML();m.types=[],C="",t.mainEl&&t.mainEl.length?m.ev=t.mainEl.eq(0):m.ev=w,t.key?(m.popupsCache[t.key]||(m.popupsCache[t.key]={}),m.currTemplate=m.popupsCache[t.key]):m.currTemplate={},m.st=e.extend(!0,{},e.magnificPopup.defaults,t),m.fixedContentPos="auto"===m.st.fixedContentPos?!m.probablyMobile:m.st.fixedContentPos,m.st.modal&&(m.st.closeOnContentClick=!1,m.st.closeOnBgClick=!1,m.st.showCloseBtn=!1,m.st.enableEscapeKey=!1),m.bgOverlay||(m.bgOverlay=I("bg").on("click"+c,function(){m.close()}),m.wrap=I("wrap").attr("tabindex",-1).on("click"+c,function(e){m._checkIfClose(e.target)&&m.close()}),m.container=I("container",m.wrap)),m.contentContainer=I("content"),m.st.preloader&&(m.preloader=I("preloader",m.container,m.st.tLoading));var s=e.magnificPopup.modules;for(o=0;o<s.length;o++){var l=s[o];l=l.charAt(0).toUpperCase()+l.slice(1),m["init"+l].call(m)}k("BeforeOpen"),m.st.showCloseBtn&&(m.st.closeBtnInside?(_(n,function(e,t,o,a){o.close_replaceWith=T(a.type)}),C+=" mfp-close-btn-in"):m.wrap.append(T())),m.st.alignTop&&(C+=" mfp-align-top"),m.fixedContentPos?m.wrap.css({overflow:m.st.overflowY,overflowX:"hidden",overflowY:m.st.overflowY}):m.wrap.css({top:v.scrollTop(),position:"absolute"}),(m.st.fixedBgPos===!1||"auto"===m.st.fixedBgPos&&!m.fixedContentPos)&&m.bgOverlay.css({height:w.height(),position:"absolute"}),m.st.enableEscapeKey&&w.on("keyup"+c,function(e){27===e.keyCode&&m.close()}),v.on("resize"+c,function(){m.updateSize()}),m.st.closeOnContentClick||(C+=" mfp-auto-cursor"),C&&m.wrap.addClass(C);var d=m.wH=v.height(),u={};if(m.fixedContentPos&&m._hasScrollBar(d)){var f=m._getScrollbarSize();f&&(u.marginRight=f)}m.fixedContentPos&&(m.isIE7?e("body, html").css("overflow","hidden"):u.overflow="hidden");var g=m.st.mainClass;return m.isIE7&&(g+=" mfp-ie7"),g&&m._addClassToMFP(g),m.updateItemHTML(),k("BuildControls"),e("html").css(u),m.bgOverlay.add(m.wrap).prependTo(m.st.prependTo||e(document.body)),m._lastFocusedEl=document.activeElement,setTimeout(function(){m.content?(m._addClassToMFP(p),m._setFocus()):m.bgOverlay.addClass(p),w.on("focusin"+c,m._onFocusIn)},16),m.isOpen=!0,m.updateSize(d),k(r),t},close:function(){m.isOpen&&(k(o),m.isOpen=!1,m.st.removalDelay&&!m.isLowIE&&m.supportsTransition?(m._addClassToMFP(d),setTimeout(function(){m._close()},m.st.removalDelay)):m._close())},_close:function(){k(t);var o=d+" "+p+" ";if(m.bgOverlay.detach(),m.wrap.detach(),m.container.empty(),m.st.mainClass&&(o+=m.st.mainClass+" "),m._removeClassFromMFP(o),m.fixedContentPos){var i={marginRight:""};m.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}w.off("keyup"+c+" focusin"+c),m.ev.off(c),m.wrap.attr("class","mfp-wrap").removeAttr("style"),m.bgOverlay.attr("class","mfp-bg"),m.container.attr("class","mfp-container"),m.st.showCloseBtn&&(!m.st.closeBtnInside||m.currTemplate[m.currItem.type]===!0)&&m.currTemplate.closeBtn&&m.currTemplate.closeBtn.detach(),m._lastFocusedEl&&e(m._lastFocusedEl).focus(),m.currItem=null,m.content=null,m.currTemplate=null,m.prevHeight=0,k(a)},updateSize:function(e){if(m.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,o=window.innerHeight*t;m.wrap.css("height",o),m.wH=o}else m.wH=e||v.height();m.fixedContentPos||m.wrap.css("height",m.wH),k("Resize")},updateItemHTML:function(){var t=m.items[m.index];m.contentContainer.detach(),m.content&&m.content.detach(),t.parsed||(t=m.parseEl(m.index));var o=t.type;if(k("BeforeChange",[m.currItem?m.currItem.type:"",o]),m.currItem=t,!m.currTemplate[o]){var a=m.st[o]?m.st[o].markup:!1;k("FirstMarkupParse",a),a?m.currTemplate[o]=e(a):m.currTemplate[o]=!0}y&&y!==t.type&&m.container.removeClass("mfp-"+y+"-holder");var i=m["get"+o.charAt(0).toUpperCase()+o.slice(1)](t,m.currTemplate[o]);m.appendContent(i,o),t.preloaded=!0,k(s,t),y=t.type,m.container.prepend(m.contentContainer),k("AfterChange")},appendContent:function(e,t){m.content=e,e?m.st.showCloseBtn&&m.st.closeBtnInside&&m.currTemplate[t]===!0?m.content.find(".mfp-close").length||m.content.append(T()):m.content=e:m.content="",k(i),m.container.addClass("mfp-"+t+"-holder"),m.contentContainer.append(m.content)},parseEl:function(t){var o=m.items[t],a;if(o.tagName?o={el:e(o)}:(a=o.type,o={data:o,src:o.src}),o.el){for(var i=m.types,n=0;n<i.length;n++)if(o.el.hasClass("mfp-"+i[n])){a=i[n];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=a||m.st.type||"inline",o.index=t,o.parsed=!0,m.items[t]=o,k("ElementParse",o),m.items[t]},addGroup:function(e,t){var o=function(o){o.mfpEl=this,m._openClick(o,e,t)};t||(t={});var a="click.magnificPopup";t.mainEl=e,t.items?(t.isObj=!0,e.off(a).on(a,o)):(t.isObj=!1,t.delegate?e.off(a).on(a,t.delegate,o):(t.items=e,e.off(a).on(a,o)))},_openClick:function(t,o,a){var i=void 0!==a.midClick?a.midClick:e.magnificPopup.defaults.midClick;if(i||2!==t.which&&!t.ctrlKey&&!t.metaKey){var n=void 0!==a.disableOn?a.disableOn:e.magnificPopup.defaults.disableOn;if(n)if(e.isFunction(n)){if(!n.call(m))return!0}else if(v.width()<n)return!0;t.type&&(t.preventDefault(),m.isOpen&&t.stopPropagation()),a.el=e(t.mfpEl),a.delegate&&(a.items=o.find(a.delegate)),m.open(a)}},updateStatus:function(e,t){if(m.preloader){h!==e&&m.container.removeClass("mfp-s-"+h),!t&&"loading"===e&&(t=m.st.tLoading);var o={status:e,text:t};k("UpdateStatus",o),e=o.status,t=o.text,m.preloader.html(t),m.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),m.container.addClass("mfp-s-"+e),h=e}},_checkIfClose:function(t){if(!e(t).hasClass(u)){var o=m.st.closeOnContentClick,a=m.st.closeOnBgClick;if(o&&a)return!0;if(!m.content||e(t).hasClass("mfp-close")||m.preloader&&t===m.preloader[0])return!0;if(t===m.content[0]||e.contains(m.content[0],t)){if(o)return!0}else if(a&&e.contains(document,t))return!0;return!1}},_addClassToMFP:function(e){m.bgOverlay.addClass(e),m.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),m.wrap.removeClass(e)},_hasScrollBar:function(e){return(m.isIE7?w.height():document.body.scrollHeight)>(e||v.height())},_setFocus:function(){(m.st.focus?m.content.find(m.st.focus).eq(0):m.wrap).focus()},_onFocusIn:function(t){return t.target===m.wrap[0]||e.contains(m.wrap[0],t.target)?void 0:(m._setFocus(),!1)},_parseMarkup:function(t,o,a){var i;a.data&&(o=e.extend(a.data,o)),k(n,[t,o,a]),e.each(o,function(e,o){if(void 0===o||o===!1)return!0;if(i=e.split("_"),i.length>1){var a=t.find(c+"-"+i[0]);if(a.length>0){var n=i[1];"replaceWith"===n?a[0]!==o[0]&&a.replaceWith(o):"img"===n?a.is("img")?a.attr("src",o):a.replaceWith('<img src="'+o+'" class="'+a.attr("class")+'" />'):a.attr(i[1],o)}}else t.find(c+"-"+e).html(o)})},_getScrollbarSize:function(){if(void 0===m.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),m.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return m.scrollbarSize}},e.magnificPopup={instance:null,proto:f.prototype,modules:[],open:function(t,o){return x(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=o||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,o){o.options&&(e.magnificPopup.defaults[t]=o.options),e.extend(this.proto,o.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(t){x();var o=e(this);if("string"==typeof t)if("open"===t){var a,i=g?o.data("magnificPopup"):o[0].magnificPopup,n=parseInt(arguments[1],10)||0;i.items?a=i.items[n]:(a=o,i.delegate&&(a=a.find(i.delegate)),a=a.eq(n)),m._openClick({mfpEl:a},o,i)}else m.isOpen&&m[t].apply(m,Array.prototype.slice.call(arguments,1));else t=e.extend(!0,{},t),g?o.data("magnificPopup",t):o[0].magnificPopup=t,m.addGroup(o,t);return o};var S,P=function(t){if(t.data&&void 0!==t.data.title)return t.data.title;var o=m.st.image.titleSrc;if(o){if(e.isFunction(o))return o.call(m,t);if(t.el)return t.el.attr(o)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var o=m.st.image,a=".image";m.types.push("image"),_(r+a,function(){"image"===m.currItem.type&&o.cursor&&e(document.body).addClass(o.cursor)}),_(t+a,function(){o.cursor&&e(document.body).removeClass(o.cursor),v.off("resize"+c)}),_("Resize"+a,m.resizeImage),m.isLowIE&&_("AfterChange",m.resizeImage)},resizeImage:function(){var e=m.currItem;if(e&&e.img&&m.st.image.verticalFit){var t=0;m.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",m.wH-t)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,S&&clearInterval(S),e.isCheckingImgSize=!1,k("ImageHasSize",e),e.imgHidden&&(m.content&&m.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var t=0,o=e.img[0],a=function(i){S&&clearInterval(S),S=setInterval(function(){return o.naturalWidth>0?void m._onImageHasSize(e):(t>200&&clearInterval(S),t++,3===t?a(10):40===t?a(50):100===t&&a(500),void 0)},i)};a(1)},getImage:function(t,o){var a=0,i=function(){t&&(t.img[0].complete?(t.img.off(".mfploader"),t===m.currItem&&(m._onImageHasSize(t),m.updateStatus("ready")),t.hasSize=!0,t.loaded=!0,k("ImageLoadComplete")):(a++,200>a?setTimeout(i,100):n()))},n=function(){t&&(t.img.off(".mfploader"),t===m.currItem&&(m._onImageHasSize(t),m.updateStatus("error",r.tError.replace("%url%",t.src))),t.hasSize=!0,t.loaded=!0,t.loadError=!0)},r=m.st.image,s=o.find(".mfp-img");if(s.length){var l=document.createElement("img");l.className="mfp-img",t.el&&t.el.find("img").length&&(l.alt=t.el.find("img").attr("alt")),t.img=e(l).on("load.mfploader",i).on("error.mfploader",n),l.src=t.src,s.is("img")&&(t.img=t.img.clone()),l=t.img[0],l.naturalWidth>0?t.hasSize=!0:l.width||(t.hasSize=!1)}return m._parseMarkup(o,{title:P(t),img_replaceWith:t.img},t),m.resizeImage(),t.hasSize?(S&&clearInterval(S),t.loadError?(o.addClass("mfp-loading"),m.updateStatus("error",r.tError.replace("%url%",t.src))):(o.removeClass("mfp-loading"),m.updateStatus("ready")),o):(m.updateStatus("loading"),t.loading=!0,t.hasSize||(t.imgHidden=!0,o.addClass("mfp-loading"),m.findImageSize(t)),o)}}});var M,z=function(){return void 0===M&&(M=void 0!==document.createElement("p").style.MozTransform),M};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e=m.st.zoom,a=".zoom",i;if(e.enabled&&m.supportsTransition){var n=e.duration,r=function(t){var o=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),a="all "+e.duration/1e3+"s "+e.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},n="transition";return i["-webkit-"+n]=i["-moz-"+n]=i["-o-"+n]=i[n]=a,o.css(i),o},s=function(){m.content.css("visibility","visible")},l,c;_("BuildControls"+a,function(){if(m._allowZoom()){if(clearTimeout(l),m.content.css("visibility","hidden"),i=m._getItemToZoom(),!i)return void s();c=r(i),c.css(m._getOffset()),m.wrap.append(c),l=setTimeout(function(){c.css(m._getOffset(!0)),l=setTimeout(function(){s(),setTimeout(function(){c.remove(),i=c=null,k("ZoomAnimationEnded")},16)},n)},16)}}),_(o+a,function(){if(m._allowZoom()){if(clearTimeout(l),m.st.removalDelay=n,!i){if(i=m._getItemToZoom(),!i)return;c=r(i)}c.css(m._getOffset(!0)),m.wrap.append(c),m.content.css("visibility","hidden"),setTimeout(function(){c.css(m._getOffset())},16)}}),_(t+a,function(){m._allowZoom()&&(s(),c&&c.remove(),i=null)})}},_allowZoom:function(){return"image"===m.currItem.type},_getItemToZoom:function(){return m.currItem.hasSize?m.currItem.img:!1},_getOffset:function(t){var o;o=t?m.currItem.img:m.st.zoom.opener(m.currItem.el||m.currItem);var a=o.offset(),i=parseInt(o.css("padding-top"),10),n=parseInt(o.css("padding-bottom"),10);a.top-=e(window).scrollTop()-i;var r={width:o.width(),height:(g?o.innerHeight():o[0].offsetHeight)-n-i};return z()?r["-moz-transform"]=r.transform="translate("+a.left+"px,"+a.top+"px)":(r.left=a.left,r.top=a.top),r}}});var O=function(e){var t=m.items.length;return e>t-1?e-t:0>e?t+e:e},L=function(e,t,o){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,o)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var o=m.st.gallery,a=".mfp-gallery",i=Boolean(e.fn.mfpFastClick);return m.direction=!0,o&&o.enabled?(C+=" mfp-gallery",_(r+a,function(){o.navigateByImgClick&&m.wrap.on("click"+a,".mfp-img",function(){return m.items.length>1?(m.next(),!1):void 0}),w.on("keydown"+a,function(e){37===e.keyCode?m.prev():39===e.keyCode&&m.next()})}),_("UpdateStatus"+a,function(e,t){t.text&&(t.text=L(t.text,m.currItem.index,m.items.length))}),_(n+a,function(e,t,a,i){var n=m.items.length;a.counter=n>1?L(o.tCounter,i.index,n):""}),_("BuildControls"+a,function(){if(m.items.length>1&&o.arrows&&!m.arrowLeft){var t=o.arrowMarkup,a=m.arrowLeft=e(t.replace(/%title%/gi,o.tPrev).replace(/%dir%/gi,"left")).addClass(u),n=m.arrowRight=e(t.replace(/%title%/gi,o.tNext).replace(/%dir%/gi,"right")).addClass(u),r=i?"mfpFastClick":"click";a[r](function(){m.prev()}),n[r](function(){m.next()}),m.isIE7&&(I("b",a[0],!1,!0),I("a",a[0],!1,!0),I("b",n[0],!1,!0),I("a",n[0],!1,!0)),m.container.append(a.add(n))}}),_(s+a,function(){m._preloadTimeout&&clearTimeout(m._preloadTimeout),m._preloadTimeout=setTimeout(function(){m.preloadNearbyImages(),m._preloadTimeout=null},16)}),_(t+a,function(){w.off(a),m.wrap.off("click"+a),m.arrowLeft&&i&&m.arrowLeft.add(m.arrowRight).destroyMfpFastClick(),m.arrowRight=m.arrowLeft=null}),void 0):!1},next:function(){m.direction=!0,m.index=O(m.index+1),m.updateItemHTML()},prev:function(){m.direction=!1,m.index=O(m.index-1),m.updateItemHTML()},goTo:function(e){m.direction=e>=m.index,m.index=e,m.updateItemHTML()},preloadNearbyImages:function(){var e=m.st.gallery.preload,t=Math.min(e[0],m.items.length),o=Math.min(e[1],m.items.length),a;for(a=1;a<=(m.direction?o:t);a++)m._preloadItem(m.index+a);for(a=1;a<=(m.direction?t:o);a++)m._preloadItem(m.index-a)},_preloadItem:function(t){if(t=O(t),!m.items[t].preloaded){var o=m.items[t];o.parsed||(o=m.parseEl(t)),k("LazyLoad",o),"image"===o.type&&(o.img=e('<img class="mfp-img" />').on("load.mfploader",function(){o.hasSize=!0}).on("error.mfploader",function(){o.hasSize=!0,o.loadError=!0,k("LazyLoadError",o)}).attr("src",o.src)),o.preloaded=!0}}}}),x()}),jQuery(document).ready(function($){function e(){var e=(new Date).getSeconds(),t=6*e,o="rotate("+t+"deg)";$(".sec").css({transform:o})}function t(){var e=(new Date).getMinutes(),t=6*e,o="rotate("+t+"deg)";$(".min").css({transform:o})}function o(){var e=(new Date).getHours(),t=(new Date).getMinutes(),o=30*e+t/2,a="rotate("+o+"deg)";$(".hour").css({transform:a})}function a(){$(".article").each(function(){$(this).magnificPopup({delegate:"a.popup_img",type:"image",gallery:{enabled:!0,arrowMarkup:"",tCounter:""}})})}function i(){var e=m.width(),t=m.height(),o=e/2,a=e/3,i=e/4,n=e/6,r=.666,s=1/.666;$(".image.Landscape.Small").width(i),$(".image.Landscape.Small").height(i*r),$(".image.Landscape.Medium").width(a),$(".image.Landscape.Medium").height(a*r),$(".image.Landscape.Large").width(o),$(".image.Landscape.Large").height(o*r),$(".image.Portrait.Small").width(n),$(".image.Portrait.Small").height(n*s),$(".image.Portrait.Medium").width(i),$(".image.Portrait.Medium").height(i*s),$(".image.Portrait.Large").width(a),$(".image.Portrait.Large").height(a*s),$(".image_wrapper").height(t),$(".image_wrapper").width(e)}function n(){var e=$(".main_nav"),t=$(".main_nav").height(),o=$("footer").height()-$("header").height(),a=(m.height()-t-o)/2;a>90?e.css("padding-top",a+"px").show():e.show()}function r(){var e=g.slice(0,++y);if(e===g){if(e=h.slice(0,++y),e===h)return;return document.getElementById("type-anim-fast").innerHTML=e,_=e.slice(-1),"<"===_&&(C=!0),">"===_&&(C=!1),C?r():void(b=setTimeout(r,1))}return document.getElementById("type-anim-slow").innerHTML=e,_=e.slice(-1),"<"===_&&(C=!0),">"===_&&(C=!1),C?r():void(b=setTimeout(r,80))}function s(){g=$("#type-string .slow").html(),h=$("#type-string .fast").html(),v=$("#type-anim-slow"),w=$("#type-anim-fast"),y=0,C=0,b=0,_=0,r()}function l(){$("#about.categorywrap").addClass("open"),$("#about-wrap").slideDown(function(){s()})}function c(){$("#about-wrap").slideUp(function(){$("#about.categorywrap").removeClass("open"),clearTimeout(b),$("#type-anim-slow,#type-anim-fast").empty()}),window.history.pushState({path:f},"",f)}function p(){var e=new Date,t=e.getHours(),o=e.getMinutes(),a=e.getSeconds();o=(10>o?"0":"")+o,a=(10>a?"0":"")+a;var i=12>t?"AM":"PM";t=t>12?t-12:t,t=0===t?12:t;var n=t+":"+o+":"+a+" "+i;$("#clock").html(n)}function d(e){$(".categorywrap.open").removeClass("open").find(".category_posts").hide(),$(e).addClass("open").find(".category_posts").show()}function u(e){var t=e.attr("href"),o=e.data("id"),i=e.closest(".categorywrap").attr("id");$(".breadcrumbs a").removeClass("active"),$(".breadcrumbs a."+i).addClass("active"),$(".article#post-"+o).length?($("body").removeClass("home").addClass("single"),window.history.pushState({path:t},"",t)):(e.css("cursor","progress"),$(".article").length&&$(".article").remove(),$.ajax({type:"POST",url:sitevars.ajaxurl,data:{action:"load_article",post_id:o},success:function(o){$(o).appendTo("#article-container"),$("body").removeClass("home").addClass("single"),e.css("cursor","auto"),window.history.pushState({path:t},"",t),a()}}))}var m=$(window),f=$("#logo").attr("href");e(),t(),o(),setInterval(function(){e(),t(),o()},1e3),a(),$(".bg_rollover").each(function(){var e=$(this),t=$(this).css("background-image");t=t.replace("url(","").replace(")",""),$("<img/>").attr("src",t).load(function(){$(this).remove(),e.addClass("loaded")})}),$(document).on("click",".footnote_marker",function(){if($(this).hasClass("footnote_open"))$(".article_contents .footnote").remove(),$(this).removeClass("footnote_open");else{var e=$(this).text(),t=$("#footnote-"+e).clone();$(this).addClass("footnote_open").after(t)}}),i(),n(),m.resize(function(){n(),i()});var g=$("#type-string .slow").html(),h=$("#type-string .fast").html(),v=$("#type-anim-slow"),w=$("#type-anim-fast"),y=0,C,b,_;$(".about_link").click(function(){var e=$(".categorywrap.open"),t=$(this).attr("href");return $("#about-wrap").is(":visible")?c():(e.length&&e.find(".category_posts").slideUp(function(){e.removeClass("open")}),l(),window.history.pushState({path:t},"",t)),!1}),$(".drag").draggable({stop:function(){$(this).css("left",parseInt($(this).css("left"))/($(window).width()/100)+"%"),$(this).css("top",parseInt($(this).css("top"))/($(window).height()/100)+"%")}}),$("#about-contents .image_wrapper img").each(function(e){var t=$(this).data("caption");$(this).data("caption",e+1+".&nbsp;&nbsp;&nbsp;"+t)}),$(".has_caption").mouseenter(function(){var e=$(this).data("caption");$("body").append('<div id="caption">'+e+"</div>")}),$(".has_caption").mouseout(function(){$("#caption").remove()}),$("#about-contents .image_wrapper_background").click(function(){$("#about-contents .image_wrapper").hide(),$("#about-contents .image_wrapper .image").show()}),$("#about-contents .image").click(function(){$(this).hide(),0===$("#about-contents .image img:visible").length&&($("#about-contents .image_wrapper").hide(),$("#about-contents .image_wrapper .image").show())}),$("#typewriter a").click(function(){var e=$(this).attr("href");return $(e).show(),!1}),setInterval(p(),1e3),$(".category_toggle").click(function(){var e=$(this).closest(".categorywrap"),t=e.find(".category_posts"),o=$(".categorywrap.open"),a=$(this).attr("href");return t.is(":visible")?(t.slideUp(function(){e.removeClass("open")}),window.location.hash=""):(o.length&&("about"===o.attr("id")?c():o.find(".category_posts").slideUp(function(){o.removeClass("open")})),e.addClass("open"),t.slideDown(),window.location.hash=a),$("#back").attr("href",window.location),!1}),window.location.hash&&d(window.location.hash),($("body").hasClass("not_mobile")||m.width()>480)&&($(".category_toggle").hover(function(){0===$(".categorywrap.hover").length&&0===$(".categorywrap.open").length&&($(this).closest(".categorywrap").addClass("hover"),$("header").addClass("clear_bg"))},function(){$(this).closest(".categorywrap").removeClass("hover"),$("header").removeClass("clear_bg")}),$(".about_link").hover(function(){0===$(".categorywrap.hover").length&&0===$(".categorywrap.open").length&&($(this).closest(".categorywrap").addClass("hover"),$(".about_rollover").show(),$("header").addClass("clear_bg"))},function(){$(this).closest(".categorywrap").removeClass("hover"),$(".about_rollover").hide(),$("header").removeClass("clear_bg")})),$(document).on("click",".post_link",function(){var e=$(this);return u(e),$("#caption").remove(),!1}),$(document).on("click",".breadcrumbs a",function(){var e=$(this).attr("href"),t=this.hash;return t.length?d(t):$(".categorywrap.open").removeClass("open").find(".category_posts").hide(),$("body").removeClass("single").addClass("home"),window.history.pushState({path:e},"",e),!1}),$(window).on("popstate",function(e){if(null!==e.originalEvent.state){if(e.originalEvent.state.path===f||e.originalEvent.state.path===f+"/")return $("body").removeClass("single").addClass("home"),$("#about-wrap").is(":visible")&&c(),!1;if(e.originalEvent.state.path===f+"/about"||e.originalEvent.state.path===f+"/about/")l();else{var t=$('a[href^="'+e.originalEvent.state.path+'"]');u(t)}}}),$("body").hasClass("about")&&m.load(function(){l(),s()}),$.ajax({type:"GET",url:"http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Times_New_Roman&callback=?",contentType:"application/json; charset=utf-8",async:!1,dataType:"json",success:function(e){var t=e.parse.text["*"],o=$("<div></div>").html(t);o.find("a").each(function(){$(this).replaceWith($(this).html())}),o.find("sup").remove(),o.find(".mw-ext-cite-error").remove(),$(".times_ticker").html($(o).find("p").first())}})});