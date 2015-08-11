!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t="Close",n="BeforeClose",i="AfterClose",o="BeforeAppend",r="MarkupParse",a="Open",s="Change",c="mfp",l="."+c,u="mfp-ready",p="mfp-removing",d="mfp-prevent-close",f,m=function(){},g=!!window.jQuery,h,v=e(window),y,b,w,C,I=function(e,t){f.ev.on(c+e+l,t)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},x=function(t,n){f.ev.triggerHandler(c+t,n),f.st.callbacks&&(t=t.charAt(0).toLowerCase()+t.slice(1),f.st.callbacks[t]&&f.st.callbacks[t].apply(f,e.isArray(n)?n:[n]))},T=function(t){return t===C&&f.currTemplate.closeBtn||(f.currTemplate.closeBtn=e(f.st.closeMarkup.replace("%title%",f.st.tClose)),C=t),f.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(f=new m,f.init(),e.magnificPopup.instance=f)},z=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};m.prototype={constructor:m,init:function(){var t=navigator.appVersion;f.isIE7=-1!==t.indexOf("MSIE 7."),f.isIE8=-1!==t.indexOf("MSIE 8."),f.isLowIE=f.isIE7||f.isIE8,f.isAndroid=/android/gi.test(t),f.isIOS=/iphone|ipad|ipod/gi.test(t),f.supportsTransition=z(),f.probablyMobile=f.isAndroid||f.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),y=e(document),f.popupsCache={}},open:function(t){var n;if(t.isObj===!1){f.items=t.items.toArray(),f.index=0;var i=t.items,o;for(n=0;n<i.length;n++)if(o=i[n],o.parsed&&(o=o.el[0]),o===t.el[0]){f.index=n;break}}else f.items=e.isArray(t.items)?t.items:[t.items],f.index=t.index||0;if(f.isOpen)return void f.updateItemHTML();f.types=[],w="",t.mainEl&&t.mainEl.length?f.ev=t.mainEl.eq(0):f.ev=y,t.key?(f.popupsCache[t.key]||(f.popupsCache[t.key]={}),f.currTemplate=f.popupsCache[t.key]):f.currTemplate={},f.st=e.extend(!0,{},e.magnificPopup.defaults,t),f.fixedContentPos="auto"===f.st.fixedContentPos?!f.probablyMobile:f.st.fixedContentPos,f.st.modal&&(f.st.closeOnContentClick=!1,f.st.closeOnBgClick=!1,f.st.showCloseBtn=!1,f.st.enableEscapeKey=!1),f.bgOverlay||(f.bgOverlay=k("bg").on("click"+l,function(){f.close()}),f.wrap=k("wrap").attr("tabindex",-1).on("click"+l,function(e){f._checkIfClose(e.target)&&f.close()}),f.container=k("container",f.wrap)),f.contentContainer=k("content"),f.st.preloader&&(f.preloader=k("preloader",f.container,f.st.tLoading));var s=e.magnificPopup.modules;for(n=0;n<s.length;n++){var c=s[n];c=c.charAt(0).toUpperCase()+c.slice(1),f["init"+c].call(f)}x("BeforeOpen"),f.st.showCloseBtn&&(f.st.closeBtnInside?(I(r,function(e,t,n,i){n.close_replaceWith=T(i.type)}),w+=" mfp-close-btn-in"):f.wrap.append(T())),f.st.alignTop&&(w+=" mfp-align-top"),f.fixedContentPos?f.wrap.css({overflow:f.st.overflowY,overflowX:"hidden",overflowY:f.st.overflowY}):f.wrap.css({top:v.scrollTop(),position:"absolute"}),(f.st.fixedBgPos===!1||"auto"===f.st.fixedBgPos&&!f.fixedContentPos)&&f.bgOverlay.css({height:y.height(),position:"absolute"}),f.st.enableEscapeKey&&y.on("keyup"+l,function(e){27===e.keyCode&&f.close()}),v.on("resize"+l,function(){f.updateSize()}),f.st.closeOnContentClick||(w+=" mfp-auto-cursor"),w&&f.wrap.addClass(w);var p=f.wH=v.height(),d={};if(f.fixedContentPos&&f._hasScrollBar(p)){var m=f._getScrollbarSize();m&&(d.marginRight=m)}f.fixedContentPos&&(f.isIE7?e("body, html").css("overflow","hidden"):d.overflow="hidden");var g=f.st.mainClass;return f.isIE7&&(g+=" mfp-ie7"),g&&f._addClassToMFP(g),f.updateItemHTML(),x("BuildControls"),e("html").css(d),f.bgOverlay.add(f.wrap).prependTo(f.st.prependTo||e(document.body)),f._lastFocusedEl=document.activeElement,setTimeout(function(){f.content?(f._addClassToMFP(u),f._setFocus()):f.bgOverlay.addClass(u),y.on("focusin"+l,f._onFocusIn)},16),f.isOpen=!0,f.updateSize(p),x(a),t},close:function(){f.isOpen&&(x(n),f.isOpen=!1,f.st.removalDelay&&!f.isLowIE&&f.supportsTransition?(f._addClassToMFP(p),setTimeout(function(){f._close()},f.st.removalDelay)):f._close())},_close:function(){x(t);var n=p+" "+u+" ";if(f.bgOverlay.detach(),f.wrap.detach(),f.container.empty(),f.st.mainClass&&(n+=f.st.mainClass+" "),f._removeClassFromMFP(n),f.fixedContentPos){var o={marginRight:""};f.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}y.off("keyup"+l+" focusin"+l),f.ev.off(l),f.wrap.attr("class","mfp-wrap").removeAttr("style"),f.bgOverlay.attr("class","mfp-bg"),f.container.attr("class","mfp-container"),f.st.showCloseBtn&&(!f.st.closeBtnInside||f.currTemplate[f.currItem.type]===!0)&&f.currTemplate.closeBtn&&f.currTemplate.closeBtn.detach(),f._lastFocusedEl&&e(f._lastFocusedEl).focus(),f.currItem=null,f.content=null,f.currTemplate=null,f.prevHeight=0,x(i)},updateSize:function(e){if(f.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*t;f.wrap.css("height",n),f.wH=n}else f.wH=e||v.height();f.fixedContentPos||f.wrap.css("height",f.wH),x("Resize")},updateItemHTML:function(){var t=f.items[f.index];f.contentContainer.detach(),f.content&&f.content.detach(),t.parsed||(t=f.parseEl(f.index));var n=t.type;if(x("BeforeChange",[f.currItem?f.currItem.type:"",n]),f.currItem=t,!f.currTemplate[n]){var i=f.st[n]?f.st[n].markup:!1;x("FirstMarkupParse",i),i?f.currTemplate[n]=e(i):f.currTemplate[n]=!0}b&&b!==t.type&&f.container.removeClass("mfp-"+b+"-holder");var o=f["get"+n.charAt(0).toUpperCase()+n.slice(1)](t,f.currTemplate[n]);f.appendContent(o,n),t.preloaded=!0,x(s,t),b=t.type,f.container.prepend(f.contentContainer),x("AfterChange")},appendContent:function(e,t){f.content=e,e?f.st.showCloseBtn&&f.st.closeBtnInside&&f.currTemplate[t]===!0?f.content.find(".mfp-close").length||f.content.append(T()):f.content=e:f.content="",x(o),f.container.addClass("mfp-"+t+"-holder"),f.contentContainer.append(f.content)},parseEl:function(t){var n=f.items[t],i;if(n.tagName?n={el:e(n)}:(i=n.type,n={data:n,src:n.src}),n.el){for(var o=f.types,r=0;r<o.length;r++)if(n.el.hasClass("mfp-"+o[r])){i=o[r];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=i||f.st.type||"inline",n.index=t,n.parsed=!0,f.items[t]=n,x("ElementParse",n),f.items[t]},addGroup:function(e,t){var n=function(n){n.mfpEl=this,f._openClick(n,e,t)};t||(t={});var i="click.magnificPopup";t.mainEl=e,t.items?(t.isObj=!0,e.off(i).on(i,n)):(t.isObj=!1,t.delegate?e.off(i).on(i,t.delegate,n):(t.items=e,e.off(i).on(i,n)))},_openClick:function(t,n,i){var o=void 0!==i.midClick?i.midClick:e.magnificPopup.defaults.midClick;if(o||2!==t.which&&!t.ctrlKey&&!t.metaKey){var r=void 0!==i.disableOn?i.disableOn:e.magnificPopup.defaults.disableOn;if(r)if(e.isFunction(r)){if(!r.call(f))return!0}else if(v.width()<r)return!0;t.type&&(t.preventDefault(),f.isOpen&&t.stopPropagation()),i.el=e(t.mfpEl),i.delegate&&(i.items=n.find(i.delegate)),f.open(i)}},updateStatus:function(e,t){if(f.preloader){h!==e&&f.container.removeClass("mfp-s-"+h),!t&&"loading"===e&&(t=f.st.tLoading);var n={status:e,text:t};x("UpdateStatus",n),e=n.status,t=n.text,f.preloader.html(t),f.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),f.container.addClass("mfp-s-"+e),h=e}},_checkIfClose:function(t){if(!e(t).hasClass(d)){var n=f.st.closeOnContentClick,i=f.st.closeOnBgClick;if(n&&i)return!0;if(!f.content||e(t).hasClass("mfp-close")||f.preloader&&t===f.preloader[0])return!0;if(t===f.content[0]||e.contains(f.content[0],t)){if(n)return!0}else if(i&&e.contains(document,t))return!0;return!1}},_addClassToMFP:function(e){f.bgOverlay.addClass(e),f.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),f.wrap.removeClass(e)},_hasScrollBar:function(e){return(f.isIE7?y.height():document.body.scrollHeight)>(e||v.height())},_setFocus:function(){(f.st.focus?f.content.find(f.st.focus).eq(0):f.wrap).focus()},_onFocusIn:function(t){return t.target===f.wrap[0]||e.contains(f.wrap[0],t.target)?void 0:(f._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),x(r,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(l+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(l+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===f.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),f.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return f.scrollbarSize}},e.magnificPopup={instance:null,proto:m.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(t){_();var n=e(this);if("string"==typeof t)if("open"===t){var i,o=g?n.data("magnificPopup"):n[0].magnificPopup,r=parseInt(arguments[1],10)||0;o.items?i=o.items[r]:(i=n,o.delegate&&(i=i.find(o.delegate)),i=i.eq(r)),f._openClick({mfpEl:i},n,o)}else f.isOpen&&f[t].apply(f,Array.prototype.slice.call(arguments,1));else t=e.extend(!0,{},t),g?n.data("magnificPopup",t):n[0].magnificPopup=t,f.addGroup(n,t);return n};var O,E=function(t){if(t.data&&void 0!==t.data.title)return t.data.title;var n=f.st.image.titleSrc;if(n){if(e.isFunction(n))return n.call(f,t);if(t.el)return t.el.attr(n)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=f.st.image,i=".image";f.types.push("image"),I(a+i,function(){"image"===f.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)}),I(t+i,function(){n.cursor&&e(document.body).removeClass(n.cursor),v.off("resize"+l)}),I("Resize"+i,f.resizeImage),f.isLowIE&&I("AfterChange",f.resizeImage)},resizeImage:function(){var e=f.currItem;if(e&&e.img&&f.st.image.verticalFit){var t=0;f.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",f.wH-t)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,O&&clearInterval(O),e.isCheckingImgSize=!1,x("ImageHasSize",e),e.imgHidden&&(f.content&&f.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var t=0,n=e.img[0],i=function(o){O&&clearInterval(O),O=setInterval(function(){return n.naturalWidth>0?void f._onImageHasSize(e):(t>200&&clearInterval(O),t++,3===t?i(10):40===t?i(50):100===t&&i(500),void 0)},o)};i(1)},getImage:function(t,n){var i=0,o=function(){t&&(t.img[0].complete?(t.img.off(".mfploader"),t===f.currItem&&(f._onImageHasSize(t),f.updateStatus("ready")),t.hasSize=!0,t.loaded=!0,x("ImageLoadComplete")):(i++,200>i?setTimeout(o,100):r()))},r=function(){t&&(t.img.off(".mfploader"),t===f.currItem&&(f._onImageHasSize(t),f.updateStatus("error",a.tError.replace("%url%",t.src))),t.hasSize=!0,t.loaded=!0,t.loadError=!0)},a=f.st.image,s=n.find(".mfp-img");if(s.length){var c=document.createElement("img");c.className="mfp-img",t.el&&t.el.find("img").length&&(c.alt=t.el.find("img").attr("alt")),t.img=e(c).on("load.mfploader",o).on("error.mfploader",r),c.src=t.src,s.is("img")&&(t.img=t.img.clone()),c=t.img[0],c.naturalWidth>0?t.hasSize=!0:c.width||(t.hasSize=!1)}return f._parseMarkup(n,{title:E(t),img_replaceWith:t.img},t),f.resizeImage(),t.hasSize?(O&&clearInterval(O),t.loadError?(n.addClass("mfp-loading"),f.updateStatus("error",a.tError.replace("%url%",t.src))):(n.removeClass("mfp-loading"),f.updateStatus("ready")),n):(f.updateStatus("loading"),t.loading=!0,t.hasSize||(t.imgHidden=!0,n.addClass("mfp-loading"),f.findImageSize(t)),n)}}});var S,P=function(){return void 0===S&&(S=void 0!==document.createElement("p").style.MozTransform),S};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e=f.st.zoom,i=".zoom",o;if(e.enabled&&f.supportsTransition){var r=e.duration,a=function(t){var n=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+e.duration/1e3+"s "+e.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,n.css(o),n},s=function(){f.content.css("visibility","visible")},c,l;I("BuildControls"+i,function(){if(f._allowZoom()){if(clearTimeout(c),f.content.css("visibility","hidden"),o=f._getItemToZoom(),!o)return void s();l=a(o),l.css(f._getOffset()),f.wrap.append(l),c=setTimeout(function(){l.css(f._getOffset(!0)),c=setTimeout(function(){s(),setTimeout(function(){l.remove(),o=l=null,x("ZoomAnimationEnded")},16)},r)},16)}}),I(n+i,function(){if(f._allowZoom()){if(clearTimeout(c),f.st.removalDelay=r,!o){if(o=f._getItemToZoom(),!o)return;l=a(o)}l.css(f._getOffset(!0)),f.wrap.append(l),f.content.css("visibility","hidden"),setTimeout(function(){l.css(f._getOffset())},16)}}),I(t+i,function(){f._allowZoom()&&(s(),l&&l.remove(),o=null)})}},_allowZoom:function(){return"image"===f.currItem.type},_getItemToZoom:function(){return f.currItem.hasSize?f.currItem.img:!1},_getOffset:function(t){var n;n=t?f.currItem.img:f.st.zoom.opener(f.currItem.el||f.currItem);var i=n.offset(),o=parseInt(n.css("padding-top"),10),r=parseInt(n.css("padding-bottom"),10);i.top-=e(window).scrollTop()-o;var a={width:n.width(),height:(g?n.innerHeight():n[0].offsetHeight)-r-o};return P()?a["-moz-transform"]=a.transform="translate("+i.left+"px,"+i.top+"px)":(a.left=i.left,a.top=i.top),a}}});var M=function(e){var t=f.items.length;return e>t-1?e-t:0>e?t+e:e},B=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=f.st.gallery,i=".mfp-gallery",o=Boolean(e.fn.mfpFastClick);return f.direction=!0,n&&n.enabled?(w+=" mfp-gallery",I(a+i,function(){n.navigateByImgClick&&f.wrap.on("click"+i,".mfp-img",function(){return f.items.length>1?(f.next(),!1):void 0}),y.on("keydown"+i,function(e){37===e.keyCode?f.prev():39===e.keyCode&&f.next()})}),I("UpdateStatus"+i,function(e,t){t.text&&(t.text=B(t.text,f.currItem.index,f.items.length))}),I(r+i,function(e,t,i,o){var r=f.items.length;i.counter=r>1?B(n.tCounter,o.index,r):""}),I("BuildControls"+i,function(){if(f.items.length>1&&n.arrows&&!f.arrowLeft){var t=n.arrowMarkup,i=f.arrowLeft=e(t.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(d),r=f.arrowRight=e(t.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(d),a=o?"mfpFastClick":"click";i[a](function(){f.prev()}),r[a](function(){f.next()}),f.isIE7&&(k("b",i[0],!1,!0),k("a",i[0],!1,!0),k("b",r[0],!1,!0),k("a",r[0],!1,!0)),f.container.append(i.add(r))}}),I(s+i,function(){f._preloadTimeout&&clearTimeout(f._preloadTimeout),f._preloadTimeout=setTimeout(function(){f.preloadNearbyImages(),f._preloadTimeout=null},16)}),I(t+i,function(){y.off(i),f.wrap.off("click"+i),f.arrowLeft&&o&&f.arrowLeft.add(f.arrowRight).destroyMfpFastClick(),f.arrowRight=f.arrowLeft=null}),void 0):!1},next:function(){f.direction=!0,f.index=M(f.index+1),f.updateItemHTML()},prev:function(){f.direction=!1,f.index=M(f.index-1),f.updateItemHTML()},goTo:function(e){f.direction=e>=f.index,f.index=e,f.updateItemHTML()},preloadNearbyImages:function(){var e=f.st.gallery.preload,t=Math.min(e[0],f.items.length),n=Math.min(e[1],f.items.length),i;for(i=1;i<=(f.direction?n:t);i++)f._preloadItem(f.index+i);for(i=1;i<=(f.direction?t:n);i++)f._preloadItem(f.index-i)},_preloadItem:function(t){if(t=M(t),!f.items[t].preloaded){var n=f.items[t];n.parsed||(n=f.parseEl(t)),x("LazyLoad",n),"image"===n.type&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0,n.loadError=!0,x("LazyLoadError",n)}).attr("src",n.src)),n.preloaded=!0}}}}),_()}),function(e,t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(e.jQuery)}(this,function(e){function t(e){if(e in p.style)return e;for(var t=["Moz","Webkit","O","ms"],n=e.charAt(0).toUpperCase()+e.substr(1),i=0;i<t.length;++i){var o=t[i]+n;if(o in p.style)return o}}function n(){return p.style[d.transform]="",p.style[d.transform]="rotateY(90deg)",""!==p.style[d.transform]}function i(e){return"string"==typeof e&&this.parse(e),this}function o(e,t,n){t===!0?e.queue(n):t?e.queue(t,n):e.each(function(){n.call(this)})}function r(t){var n=[];return e.each(t,function(t){t=e.camelCase(t),t=e.transit.propertyMap[t]||e.cssProps[t]||t,t=c(t),d[t]&&(t=c(d[t])),-1===e.inArray(t,n)&&n.push(t)}),n}function a(t,n,i,o){var a=r(t);e.cssEase[i]&&(i=e.cssEase[i]);var s=""+u(n)+" "+i;parseInt(o,10)>0&&(s+=" "+u(o));var c=[];return e.each(a,function(e,t){c.push(t+" "+s)}),c.join(", ")}function s(t,n){n||(e.cssNumber[t]=!0),e.transit.propertyMap[t]=d.transform,e.cssHooks[t]={get:function(n){var i=e(n).css("transit:transform");return i.get(t)},set:function(n,i){var o=e(n).css("transit:transform");o.setFromString(t,i),e(n).css({"transit:transform":o})}}}function c(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function l(e,t){return"string"!=typeof e||e.match(/^[\-0-9\.]+$/)?""+e+t:e}function u(t){var n=t;return"string"!=typeof n||n.match(/^[\-0-9\.]+/)||(n=e.fx.speeds[n]||e.fx.speeds._default),l(n,"ms")}e.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var p=document.createElement("div"),d={},f=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;d.transition=t("transition"),d.transitionDelay=t("transitionDelay"),d.transform=t("transform"),d.transformOrigin=t("transformOrigin"),d.filter=t("Filter"),d.transform3d=n();var m={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},g=d.transitionEnd=m[d.transition]||null;for(var h in d)d.hasOwnProperty(h)&&"undefined"==typeof e.support[h]&&(e.support[h]=d[h]);return p=null,e.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},e.cssHooks["transit:transform"]={get:function(t){return e(t).data("transform")||new i},set:function(t,n){var o=n;o instanceof i||(o=new i(o)),"WebkitTransform"!==d.transform||f?t.style[d.transform]=o.toString():t.style[d.transform]=o.toString(!0),e(t).data("transform",o)}},e.cssHooks.transform={set:e.cssHooks["transit:transform"].set},e.cssHooks.filter={get:function(e){return e.style[d.filter]},set:function(e,t){e.style[d.filter]=t}},e.fn.jquery<"1.8"&&(e.cssHooks.transformOrigin={get:function(e){return e.style[d.transformOrigin]},set:function(e,t){e.style[d.transformOrigin]=t}},e.cssHooks.transition={get:function(e){return e.style[d.transition]},set:function(e,t){e.style[d.transition]=t}}),s("scale"),s("scaleX"),s("scaleY"),s("translate"),s("rotate"),s("rotateX"),s("rotateY"),s("rotate3d"),s("perspective"),s("skewX"),s("skewY"),s("x",!0),s("y",!0),i.prototype={setFromString:function(e,t){var n="string"==typeof t?t.split(","):t.constructor===Array?t:[t];n.unshift(e),i.prototype.set.apply(this,n)},set:function(e){var t=Array.prototype.slice.apply(arguments,[1]);this.setter[e]?this.setter[e].apply(this,t):this[e]=t.join(",")},get:function(e){return this.getter[e]?this.getter[e].apply(this):this[e]||0},setter:{rotate:function(e){this.rotate=l(e,"deg")},rotateX:function(e){this.rotateX=l(e,"deg")},rotateY:function(e){this.rotateY=l(e,"deg")},scale:function(e,t){void 0===t&&(t=e),this.scale=e+","+t},skewX:function(e){this.skewX=l(e,"deg")},skewY:function(e){this.skewY=l(e,"deg")},perspective:function(e){this.perspective=l(e,"px")},x:function(e){this.set("translate",e,null)},y:function(e){this.set("translate",null,e)},translate:function(e,t){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!==e&&void 0!==e&&(this._translateX=l(e,"px")),null!==t&&void 0!==t&&(this._translateY=l(t,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var e=(this.scale||"1,1").split(",");return e[0]&&(e[0]=parseFloat(e[0])),e[1]&&(e[1]=parseFloat(e[1])),e[0]===e[1]?e[0]:e},rotate3d:function(){for(var e=(this.rotate3d||"0,0,0,0deg").split(","),t=0;3>=t;++t)e[t]&&(e[t]=parseFloat(e[t]));return e[3]&&(e[3]=l(e[3],"deg")),e}},parse:function(e){var t=this;e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(e,n,i){t.setFromString(n,i)})},toString:function(e){var t=[];for(var n in this)if(this.hasOwnProperty(n)){if(!d.transform3d&&("rotateX"===n||"rotateY"===n||"perspective"===n||"transformOrigin"===n))continue;"_"!==n[0]&&(e&&"scale"===n?t.push(n+"3d("+this[n]+",1)"):e&&"translate"===n?t.push(n+"3d("+this[n]+",0)"):t.push(n+"("+this[n]+")"))}return t.join(" ")}},e.fn.transition=e.fn.transit=function(t,n,i,r){var s=this,c=0,l=!0,p=e.extend(!0,{},t);"function"==typeof n&&(r=n,n=void 0),"object"==typeof n&&(i=n.easing,c=n.delay||0,l="undefined"==typeof n.queue?!0:n.queue,r=n.complete,n=n.duration),"function"==typeof i&&(r=i,i=void 0),"undefined"!=typeof p.easing&&(i=p.easing,delete p.easing),"undefined"!=typeof p.duration&&(n=p.duration,delete p.duration),"undefined"!=typeof p.complete&&(r=p.complete,delete p.complete),"undefined"!=typeof p.queue&&(l=p.queue,delete p.queue),"undefined"!=typeof p.delay&&(c=p.delay,delete p.delay),"undefined"==typeof n&&(n=e.fx.speeds._default),"undefined"==typeof i&&(i=e.cssEase._default),n=u(n);var f=a(p,n,i,c),m=e.transit.enabled&&d.transition,h=m?parseInt(n,10)+parseInt(c,10):0;if(0===h){var v=function(e){s.css(p),r&&r.apply(s),e&&e()};return o(s,l,v),s}var y={},b=function(t){var n=!1,i=function(){n&&s.unbind(g,i),h>0&&s.each(function(){this.style[d.transition]=y[this]||null}),"function"==typeof r&&r.apply(s),"function"==typeof t&&t()};h>0&&g&&e.transit.useTransitionEnd?(n=!0,s.bind(g,i)):window.setTimeout(i,h),s.each(function(){h>0&&(this.style[d.transition]=f),e(this).css(p)})},w=function(e){this.offsetWidth,b(e)};return o(s,l,w),this},e.transit.getTransitionValue=a,e}),jQuery(document).ready(function($){function e(){var e=(new Date).getMinutes(),t=6*e,n="rotate("+t+"deg)";$("#min").css({transform:n})}function t(){var e=(new Date).getHours(),t=(new Date).getMinutes(),n=30*e+t/2,i="rotate("+n+"deg)";$("#hour").css({transform:i})}function n(){$(".article").each(function(){$(this).magnificPopup({delegate:"a.popup_img",type:"image",gallery:{enabled:!0,arrowMarkup:"",tCounter:""}})})}function i(){var e=$(".main_nav"),t=$(".main_nav").height(),n=(o.height()-t)/2;n>90&&e.css("padding-top",n+"px").show()}var o=$(window),r=$("#slidewrap"),a=$(".homewrap");e(),t(),setInterval(function(){e(),t()},1e3),n(),$(document).on({mouseenter:function(){var e=$(this).text();$("#footnote-"+e).show()},mouseleave:function(){$(".footnote").hide()}},".footnote_marker"),i(),o.resize(function(){i()}),$(".category_toggle").click(function(){var e=$(this).parent("h2").next();e.slideToggle()}),$(document).on("click",".post_link",function(){var e=a.height(),t=o.width(),i=o.scrollTop(),s=$(".widget:visible"),c=s.offset();r.data("scroll",i),s.appendTo("body").css({position:"fixed",top:c.top+"px",left:c.left+"px"}).data("top",c.top).data("left",c.left).animate({top:"90px"},1e3),$(".articlewrap").show(),$("html,body").animate({scrollTop:0},1e3),r.transition({x:-t,height:e},1e3,function(){$(".breadcrumbs").fadeIn(),$(this).height("auto")});var l=$(this).attr("data-id");return $(".article#post-"+l).length||($(".article").length&&$(".article").remove(),$.ajax({type:"POST",url:sitevars.ajaxurl,context:this,data:{action:"load_post",post_id:l},success:function(e){$(e).fadeTo(0,0).appendTo(".articlewrap"),r.animate({height:$(".article").height()},300),$(".article").fadeTo(300,1),n()}})),!1}),$(document).on("click","#back",function(){var e=a.height(),t=r.data("scroll"),n=$(".widget:visible"),i=n.data("top");return $(".breadcrumbs").fadeOut(),$("html,body").animate({scrollTop:t},1e3),n.animate({top:i},1e3,function(){n.prependTo(".category_posts:visible").attr("style",""),$(".articlewrap").hide()}),r.transition({x:0,height:e},1e3,function(){$(this).height("auto")}),!1})});