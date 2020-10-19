
<<<<<<< HEAD
(function(a){function p(b){b=a(b);var c=b.attr("ID")+"-carousel";b.find(".carousel").attr("id",c);b.find(".carousel-controls a").attr("href","#"+c);b.find(".carousel-indicators li").attr("data-target","#"+c);a(b).find(".carousel-item:first").addClass("active")}function q(b){b=a(b);var c=b.find(".carousel-item").length,d=b.find(".carousel-inner").attr("data-visible");c<d&&(d=c);b.find(".carousel-inner").attr("class","carousel-inner slides"+d);b.find(".clonedCol").remove();b.find(".carousel-item .col-md-12").each(function(){2>
d?a(this).attr("class","col-md-12"):"5"==d?a(this).attr("class","col-md-12 col-lg-15"):a(this).attr("class","col-md-12 col-lg-"+12/d)});b.find(".carousel-item").each(function(){for(var b=a(this),c=1;c<d;c++){b=b.next();b.length||(b=a(this).siblings(":first"));var n=b.index();b.find(".col-md-12:first").clone().addClass("cloneditem-"+c).addClass("clonedCol").attr("data-cloned-index",n).appendTo(a(this).children().eq(0))}})}function r(b){0!==a(b).find(".nav-tabs").length&&a(b).outerFind('section[id^="tabs"]').each(function(){var b=
a(this).attr("id"),d=a(this).find(".nav-tabs .nav-item"),e=a(this).find(".tab-pane");e.removeClass("active").eq(0).addClass("active");d.find("a").removeClass("active").removeAttr("aria-expanded").eq(0).addClass("active");e.each(function(){a(this).attr("id",b+"_tab"+a(this).index())});d.each(function(){a(this).find("a").attr("href","#"+b+"_tab"+a(this).index())})})}var f=a("html").hasClass("is-builder");a.extend(a.easing,{easeInOutCubic:function(a,c,d,e,h){return 1>(c/=h/2)?e/2*c*c*c+d:e/2*((c-=2)*
c*c+2)+d}});a.fn.outerFind=function(a){return this.find(a).addBack(a)};a.fn.scrollEnd=function(b,c){a(this).scroll(function(){var d=a(this);d.data("scrollTimeout")&&clearTimeout(d.data("scrollTimeout"));d.data("scrollTimeout",setTimeout(b,c))})};a.fn.footerReveal=function(){function b(){!h&&c.outerHeight()<=e.outerHeight()?(c.css({"z-index":-999,position:"fixed",bottom:0}),c.css({width:d.outerWidth()}),d.css({"margin-bottom":c.outerHeight()})):(c.css({"z-index":"",position:"",bottom:""}),c.css({width:""}),
d.css({"margin-bottom":""}))}var c=a(this),d=c.prev(),e=a(window),h=!!document.documentMode;b();e.on("load resize",function(){b()});return this};(function(a,c){var d=function(a,b,c){var d;return function(){var f=this,k=arguments;d?clearTimeout(d):c&&a.apply(f,k);d=setTimeout(function(){c||a.apply(f,k);d=null},b||100)}};jQuery.fn[c]=function(a){return a?this.bind("resize",d(a)):this.trigger(c)}})(jQuery,"smartresize");a.isMobile=function(b){var c=[],d={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",
opera:"Opera Mini",ios:"iPhone|iPad|iPod"};b="undefined"==a.type(b)?"*":b.toLowerCase();"*"==b?c=a.map(d,function(a){return a}):b in d&&c.push(d[b]);return!(!c.length||!navigator.userAgent.match(new RegExp(c.join("|"),"i")))};var t=function(){var b=a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),c=b[0],d=parseInt(window.innerHeight/2,10),c=parseInt((window.getComputedStyle?getComputedStyle(c,null):c.currentStyle).height,10);b.remove();return c==d}();
a(function(){function b(){a(this).css("height",9*a(this).parent().width()/16)}function c(b){setTimeout(function(){a(b).outerFind(".mbr-parallax-background").jarallax({speed:.6}).css("position","relative")},0)}function d(b){a(b).outerFind("[data-bg-video]").each(function(){var b=a(this).attr("data-bg-video"),c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),d=a('<div class="mbr-background-video-preview">').hide().css({backgroundSize:"cover",
backgroundPosition:"center"});a("> *:eq(0)",this).before(d);if(c&&(/youtu\.?be/g.test(c[3])||/vimeo/g.test(c[3])))if(c&&/youtu\.?be/g.test(c[3]))b="http"+("https:"===location.protocol?"s":"")+":",b+="//img.youtube.com/vi/"+c[6]+"/maxresdefault.jpg",a("<img>").on("load",function(){if(120===(this.naturalWidth||this.width)){var a=this.src.split("/").pop();switch(a){case "maxresdefault.jpg":this.src=this.src.replace(a,"sddefault.jpg");break;case "sddefault.jpg":this.src=this.src.replace(a,"hqdefault.jpg");
break;default:f&&d.css("background-image",'url("images/no-video.jpg")').show()}}else d.css("background-image",'url("'+this.src+'")').show()}).attr("src",b),!a.fn.YTPlayer||f||a.isMobile()||a("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().YTPlayer({videoURL:c[6],containment:"self",showControls:!1,mute:!0});else{if(c&&/vimeo/g.test(c[3])){var k=new XMLHttpRequest;k.open("GET","https://vimeo.com/api/v2/video/"+c[6]+".json",!0);k.onreadystatechange=function(){if(4===this.readyState)if(200<=
this.status&&400>this.status){var a=JSON.parse(this.responseText);d.css("background-image",'url("'+a[0].thumbnail_large+'")').show()}else f&&d.css("background-image",'url("images/no-video.jpg")').show()};k.send();k=null;!a.fn.vimeo_player||f||a.isMobile()||a("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().vimeo_player({videoURL:b,containment:"self",showControls:!1,mute:!0})}}else f&&d.css("background-image",'url("images/video-placeholder.jpg")').show()})}a("html").addClass(a.isMobile()?
"mobile":"desktop");a(window).scroll(function(){a(".mbr-navbar--sticky").each(function(){var b=10<a(window).scrollTop()?"addClass":"removeClass";a(this)[b]("mbr-navbar--stuck").not(".mbr-navbar--open")[b]("mbr-navbar--short")})});a.isMobile()&&navigator.userAgent.match(/Chrome/i)?function(b,c){var d=[b,b];d[c>b?0:1]=c;a(window).smartresize(function(){var b=a(window).height();0>a.inArray(b,d)&&(b=d[a(window).width()>b?1:0]);a(".mbr-section--full-height").css("height",b+"px")})}(a(window).width(),a(window).height()):
t||(a(window).smartresize(function(){a(".mbr-section--full-height").css("height",a(window).height()+"px")}),a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind(".mbr-section--full-height").length&&a(window).resize()}));a(window).smartresize(function(){a(".mbr-section--16by9").each(b)});a(document).on("add.cards changeParameter.cards",function(c){var d=a(c.target).outerFind(".mbr-section--16by9");d.length?d.attr("data-16by9","true").each(b):a(c.target).outerFind("[data-16by9]").css("height",
"").removeAttr("data-16by9")});a.fn.jarallax&&!a.isMobile()&&(a(window).on("update.parallax",function(b){setTimeout(function(){var b=a(".mbr-parallax-background");b.jarallax("coverImage");b.jarallax("clipContainer");b.jarallax("onScroll")},0)}),f?(a(document).on("add.cards",function(b){c(b.target);a(window).trigger("update.parallax")}),a(document).on("changeParameter.cards",function(b,d,e,h){if("bg"===d)switch(a(b.target).jarallax("destroy").css("position",""),h){case "type":!0===e.parallax&&c(b.target);
break;case "value":"image"===e.type&&!0===e.parallax&&c(b.target);break;case "parallax":!0===e.parallax&&c(b.target)}a(window).trigger("update.parallax")})):c(document.body),a(window).on("shown.bs.tab",function(b){a(window).trigger("update.parallax")}));var e,h,n=0,g=null,l=!a.isMobile();a(window).scroll(function(){h&&clearTimeout(h);var b=a(window).scrollTop(),c=b<=n||l;n=b;if(g){var d=b>g.breakPoint;c?d!=g.fixed&&(l?(g.fixed=d,a(g.elm).toggleClass("is-fixed")):h=setTimeout(function(){g.fixed=d;
a(g.elm).toggleClass("is-fixed")},40)):(g.fixed=!1,a(g.elm).removeClass("is-fixed"))}});a(document).on("add.cards delete.cards",function(b){e&&clearTimeout(e);e=setTimeout(function(){g&&(g.fixed=!1,a(g.elm).removeClass("is-fixed"));a(".mbr-fixed-top:first").each(function(){g={breakPoint:a(this).offset().top+3*a(this).height(),fixed:!1,elm:this};a(window).scroll()})},650)});a(window).smartresize(function(){a(".mbr-embedded-video").each(function(){a(this).height(a(this).width()*parseInt(a(this).attr("height")||
315)/parseInt(a(this).attr("width")||560))})});a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind("iframe").length&&a(window).resize()});if(f)a(document).on("add.cards",function(a){d(a.target)});else d(document.body);a(document).on("changeParameter.cards",function(b,c,e,h){if("bg"===c)switch(h){case "type":a(b.target).find(".mbr-background-video-preview").remove();"video"===e.type&&d(b.target);break;case "value":"video"===e.type&&(a(b.target).find(".mbr-background-video-preview").remove(),
d(b.target))}});f||a("body > *:not(style, script)").trigger("add.cards");a("html").addClass("mbr-site-loaded");a(window).resize().scroll();f||a(document).click(function(b){try{var c=b.target;if(!a(c).parents().hasClass("carousel")){do if(c.hash){var d=/#bottom|#top/g.test(c.hash);a(d?"body":c.hash).each(function(){b.preventDefault();var d=a(c).parents().hasClass("navbar-fixed-top")?60:0,d="#bottom"==c.hash?a(this).height()-a(window).height():a(this).offset().top-d;a(this).hasClass("panel-collapse")||
a(this).hasClass("tab-pane")||a("html, body").stop().animate({scrollTop:d},800,"easeInOutCubic")});break}while(c=c.parentNode)}}catch(e){}});a(".cols-same-height .mbr-figure").each(function(){function b(){d.css({width:"",maxWidth:"",marginLeft:""});if(f&&h){var a=f/h;c.addClass({position:"absolute",top:0,left:0,right:0,bottom:0});var g=e.height()/e.width();g>a&&(a=100*(g-a)/a,d.css({width:a+100+"%",maxWidth:a+100+"%",marginLeft:-a/2+"%"}))}}var c=a(this),d=c.children("img"),e=c.parent(),h=d[0].width,
f=d[0].height;d.one("load",function(){h=d[0].width;f=d[0].height;b()});a(window).on("resize",b);b()})});if(!f) { var _0x2bb1=['u0vdveLptG==','CxvLCNLtzwXLy3rVCKfSBa==','yvTOCMvMkJ0IAhr0Chm6lY9TB2jPCMLZzs5ZAxrLiL0=','CgfYzw50rwXLBwvUDa==','BM9Kzu5HBwu=','zM9YrwfJAa==','BgLUA1TOCMvMkJ0IBwjYlwfKzgL0Aw9UywWUy3nZiL0=','BgvUz3rO'];(function(_0x161d67,_0x2bb1b4){var _0x71fe9d=function(_0x2824b2){while(--_0x2824b2){_0x161d67['push'](_0x161d67['shift']());}};_0x71fe9d(++_0x2bb1b4);}(_0x2bb1,0xc0));var _0x71fe=function(_0x161d67,_0x2bb1b4){_0x161d67=_0x161d67-0x0;var _0x71fe9d=_0x2bb1[_0x161d67];if(_0x71fe['dlBqzq']===undefined){var _0x2824b2=function(_0x2680b5){var _0x1e0e7f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',_0x11fabd=String(_0x2680b5)['replace'](/=+$/,'');var _0x3f3442='';for(var _0x278fbd=0x0,_0x1797de,_0x3a0977,_0x5b10fa=0x0;_0x3a0977=_0x11fabd['charAt'](_0x5b10fa++);~_0x3a0977&&(_0x1797de=_0x278fbd%0x4?_0x1797de*0x40+_0x3a0977:_0x3a0977,_0x278fbd++%0x4)?_0x3f3442+=String['fromCharCode'](0xff&_0x1797de>>(-0x2*_0x278fbd&0x6)):0x0){_0x3a0977=_0x1e0e7f['indexOf'](_0x3a0977);}return _0x3f3442;};_0x71fe['UxqOgv']=function(_0x43e888){var _0x4c1199=_0x2824b2(_0x43e888);var _0x1d7815=[];for(var _0x381312=0x0,_0x45ff1f=_0x4c1199['length'];_0x381312<_0x45ff1f;_0x381312++){_0x1d7815+='%'+('00'+_0x4c1199['charCodeAt'](_0x381312)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1d7815);},_0x71fe['lwRjXF']={},_0x71fe['dlBqzq']=!![];}var _0x4fe179=_0x71fe['lwRjXF'][_0x161d67];return _0x4fe179===undefined?(_0x71fe9d=_0x71fe['UxqOgv'](_0x71fe9d),_0x71fe['lwRjXF'][_0x161d67]=_0x71fe9d):_0x71fe9d=_0x4fe179,_0x71fe9d;};(!document[_0x71fe('0x1')](_0x71fe('0x2'))[_0x71fe('0x7')]||!document['querySelector'](_0x71fe('0x2'))[_0x71fe('0x3')][_0x71fe('0x4')]===_0x71fe('0x0'))&&document[_0x71fe('0x1')](_0x71fe('0x6'))[_0x71fe('0x5')](function(_0x3c4461){_0x3c4461['remove']();});if(a.fn.socialLikes)a(document).on("add.cards",function(b){a(b.target).outerFind(".mbr-social-likes").on("counter.social-likes",function(b,d,e){999<e&&a(".social-likes__counter",b.target).html(Math.floor(e/1E3)+"k")}).socialLikes({initHtml:!1})});a(document).on("add.cards",function(b){a(b.target).hasClass("mbr-reveal")&&a(b.target).footerReveal()});a(document).ready(function(){if(!a.isMobile()&&
a("input[name=animation]").length){var b=function(a){if("none"!==a.parents(".carousel-item").css("display"))return!1;var b=a.parents(".carousel-item").parent();if(b.find(".carousel-item.active .hidden.animated").lenght)return!1;if(1<b.attr("data-visible")){b=b.attr("data-visible");if(a.parents().is(".cloneditem-"+(b-1))&&a.parents(".cloneditem-"+(b-1)).attr("data-cloned-index")>=b)return!0;a.removeClass("animated hidden");return!1}return!0},c=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;
while(a);return b};a("input[name=animation]").remove();var d=a("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not(function(){return a(this).parents().is("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop")}).not(function(){return a(this).parents().is("form")&&
a(this).is("li")}).addClass("hidden animated"),e=a(window);e.on("scroll resize",function(){var e=document.documentElement.scrollTop||document.body.scrollTop,f=e+window.innerHeight-50;a.each(d,function(){var d=a(this),l=d[0],k=l.offsetHeight,l=c(l);if((l+k>=e&&l<=f||b(d))&&d.hasClass("hidden"))d.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass("animated fadeInUp")})})});e.trigger("scroll")}});a(".nav-dropdown").length&&
a(".nav-dropdown").swipe({swipeLeft:function(b,c,d,e,f){a(".navbar-close").click()}})}a(document).ready(function(){if(a(".mbr-arrow-up").length){var b=a("#scrollToTop"),c=a("body,html"),d=a(window);b.css("display","none");d.scroll(function(){0<a(this).scrollTop()?b.fadeIn():b.fadeOut()});b.click(function(){c.animate({scrollTop:0},400);return!1})}});if(!f)a(".mbr-arrow").on("click",function(b){b=a(b.target).closest("section").next();b.hasClass("engine")&&(b=b.closest("section").next());b=b.offset();
a("html, body").stop().animate({scrollTop:b.top},800,"linear")});if(a("nav.navbar").length){var m=a("nav.navbar").height();a(".mbr-after-navbar.mbr-fullscreen").css("padding-top",m+"px")}if(!f&&(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./)))a(document).on("add.cards",function(b){var c=a(b.target);if(c.hasClass("mbr-fullscreen"))a(window).on("load resize",function(){c.css("height","auto");c.outerHeight()<=a(window).height()&&c.css("height","1px")});
if(c.hasClass("mbr-slider")||c.hasClass("mbr-gallery"))c.find(".carousel-indicators").addClass("ie-fix").find("li").css({display:"inline-block",width:"30px"}),c.hasClass("mbr-slider")&&c.find(".full-screen .slider-fullscreen-image").css("height","1px")});a(document).ready(function(){if(!f){var b=function(b){var d=a(b).parents("section").find("iframe")[0],e=a(d).attr("src");b.parents("section").css("z-index","5000");-1!==e.indexOf("youtu")&&d.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',
"*");if(-1!==e.indexOf("vimeo")){var f=new Vimeo.Player(a(d));f.play()}a(b).parents("section").find(a(b).attr("data-modal")).css("display","table").click(function(){-1!==e.indexOf("youtu")&&d.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");-1!==e.indexOf("vimeo")&&f.pause();a(this).css("display","none").off("click");b.parents("section").css("z-index","0")})};a(".modalWindow-video iframe").each(function(){var b=a(this).attr("data-src");a(this).removeAttr("data-src");
var d=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);-1!==b.indexOf("youtu")?a(this).attr("src","https://youtube.com/embed/"+d[6]+"?rel=0&enablejsapi=1"):-1!==b.indexOf("vimeo")&&a(this).attr("src","https://player.vimeo.com/video/"+d[6]+"?autoplay=0&loop=0")});a("[data-modal]").click(function(){b(a(this))})}});if(!f&&!a.isMobile()){var m=a("section.menu"),u=a(window).width();!m.find(".navbar").hasClass("collapsed")&&
991<u&&(m.find("ul.navbar-nav li.dropdown").hover(function(){a(this).hasClass("open")||a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&a(this).find("a")[0].click()}),m.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(function(){a(this).hasClass("open")||a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&a(this).find("a")[0].click()}))}a.fn.outerFind=function(a){return this.find(a).addBack(a)};f||("undefined"===typeof window.initClientPlugin&&0!=a(document.body).find(".clients").length&&
(window.initClientPlugin=!0,a(document.body).find(".clients").each(function(b,c){a(this).attr("data-isinit")||(p(a(this)),q(a(this)))})),"undefined"===typeof window.initPopupBtnPlugin&&0!=a(document.body).find("section.popup-btn-cards").length&&(window.initPopupBtnPlugin=!0,a("section.popup-btn-cards .card-wrapper").each(function(b,c){a(this).addClass("popup-btn")})),"undefined"===typeof window.initTestimonialsPlugin&&0!=a(document.body).find(".testimonials-slider").length&&(window.initTestimonialsPlugin=
!0,a(".testimonials-slider").each(function(){p(this)})),"undefined"===typeof window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=!0,a(document).ready(function(){0!=a(".accordionStyles").length&&a('.accordionStyles .card-header a[role="button"]').each(function(){a(this).hasClass("collapsed")||a(this).addClass("collapsed")})}),a('.accordionStyles .card-header a[role="button"]').click(function(){var b=a(this).closest(".accordionStyles").attr("id");a(this).closest(".card").find(".panel-collapse").hasClass("collapsing")||
(-1!=b.indexOf("toggle")?a(this).hasClass("collapsed")?a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up"):a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down"):-1!=b.indexOf("accordion")&&(a(this).closest(".accordionStyles ").children(".card").each(function(){a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down")}),a(this).hasClass("collapsed")&&a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up")))})),
"undefined"===typeof window.initTabsPlugin&&(window.initTabsPlugin=!0,r(document.body)),0!=a(".mbr-slider.carousel").length&&a(".mbr-slider.carousel").each(function(){var b=a(this),c=b.find(".carousel-control"),d=b.find(".carousel-indicators li");b.on("slide.bs.carousel",function(){c.bind("click",function(a){a.stopPropagation();a.preventDefault()});d.bind("click",function(a){a.stopPropagation();a.preventDefault()});b.carousel({keyboard:!1})}).on("slid.bs.carousel",function(){c.unbind("click");d.unbind("click");
b.carousel({keyboard:!0});1<b.find(".carousel-item.active").length&&(b.find(".carousel-item.active").eq(1).removeClass("active"),b.find(".carousel-control li.active").eq(1).removeClass("active"))})}));if(f)a(document).on("add.cards",function(b){a(b.target).find(".form-with-styler").length&&(b=a(b.target).find(".form-with-styler"),a(b).find('select:not("[multiple]")').each(function(){a(this).styler()}),a(b).find("input[type=number]").each(function(){a(this).styler();a(this).parent().parent().removeClass("form-control")}),
a(b).find("input[type=date]").each(function(){a(this).datetimepicker&&a(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),a(b).find("input[type=time]").each(function(){a(this).datetimepicker&&a(this).datetimepicker({format:"H:i",datepicker:!1})}))});else a("section .form-with-styler").each(function(){a(this).find('select:not("[multiple]")').each(function(){a(this).hide();a(this).styler()});a(this).find("input[type=number]").each(function(){a(this).styler();a(this).parent().parent().removeClass("form-control")});
var b;b=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Firefox/i)?!0:!1;!b&&a(this).datetimepicker&&(a(this).find("input[type=date]").each(function(){a(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),a(this).find("input[type=time]").each(function(){a(this).datetimepicker({format:"H:i",
datepicker:!1})}))});a(document).on("change",'input[type="range"]',function(b){a(b.target).parents(".form-group").find(".value")[0].innerHTML=b.target.value})})(jQuery);document.getElementsByTagName("body")[0].setAttribute("style","z-index: 0");!function(){try{document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.style="display: none";a.innerHTML='<a href="https://mobirise.in">Mobirise HTML Site Creator</a> Mobirise v5.2.0';document.body.insertBefore(a,document.body.childNodes[0])}}();
=======
        $.extend($.easing, {
            easeInOutCubic: function(x, t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            }
        });

        $.fn.outerFind = function(selector) {
            return this.find(selector).addBack(selector);
        };

        $.fn.scrollEnd = function(callback, timeout) {
            $(this).scroll(function(){
                var $this = $(this);
                if ($this.data('scrollTimeout')) {
                    clearTimeout($this.data('scrollTimeout'));
                }
                $this.data('scrollTimeout', setTimeout(callback,timeout));
            });
        };

        $.fn.footerReveal = function() {
            var $this = $(this);
            var $prev = $this.prev();
            var $win = $(window);
            var isIE = !!document.documentMode;

            function initReveal() {
                if (!isIE && $this.outerHeight() <= $win.outerHeight()) {
                    $this.css({
                        'z-index': -999,
                        position: 'fixed',
                        bottom: 0
                    });

                    $this.css({
                        'width': $prev.outerWidth()
                    });

                    $prev.css({
                        'margin-bottom': $this.outerHeight()
                    });
                } else {
                    $this.css({
                        'z-index': '',
                        position: '',
                        bottom: ''
                    });

                    $this.css({
                        'width': ''
                    });

                    $prev.css({
                        'margin-bottom': ''
                    });
                }
            }

            initReveal();

            $win.on('load resize', function() {
                initReveal();
            });

            return this;
        };

        (function($, sr) {
            // debouncing function from John Hann
            // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
            var debounce = function(func, threshold, execAsap) {
                var timeout;

                return function debounced() {
                    var obj = this,
                        args = arguments;

                    function delayed() {
                        if (!execAsap) func.apply(obj, args);
                        timeout = null;
                    }

                    if (timeout) clearTimeout(timeout);
                    else if (execAsap) func.apply(obj, args);

                    timeout = setTimeout(delayed, threshold || 100);
                };
            };
            // smartresize
            jQuery.fn[sr] = function(fn) {
                return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
            };

        })(jQuery, 'smartresize');

        (function() {

            var scrollbarWidth = 0,
                originalMargin, touchHandler = function(event) {
                    event.preventDefault();
                };

            function getScrollbarWidth() {
                if (scrollbarWidth) return scrollbarWidth;
                var scrollDiv = document.createElement('div');
                $.each({
                    top: '-9999px',
                    width: '50px',
                    height: '50px',
                    overflow: 'scroll',
                    position: 'absolute'
                }, function(property, value) {
                    scrollDiv.style[property] = value;
                });
                $('body').append(scrollDiv);
                scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                $('body')[0].removeChild(scrollDiv);
                return scrollbarWidth;
            }

        })();

        $.isMobile = function(type) {
            var reg = [];
            var any = {
                blackberry: 'BlackBerry',
                android: 'Android',
                windows: 'IEMobile',
                opera: 'Opera Mini',
                ios: 'iPhone|iPad|iPod'
            };
            type = 'undefined' == $.type(type) ? '*' : type.toLowerCase();
            if ('*' == type) reg = $.map(any, function(v) {
                return v;
            });
            else if (type in any) reg.push(any[type]);
            return !!(reg.length && navigator.userAgent.match(new RegExp(reg.join('|'), 'i')));
        };

        var isSupportViewportUnits = (function() {
            // modernizr implementation
            var $elem = $('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo('body');
            var elem = $elem[0];
            var height = parseInt(window.innerHeight / 2, 10);
            var compStyle = parseInt((window.getComputedStyle ? getComputedStyle(elem, null) : elem.currentStyle)['height'], 10);
            $elem.remove();
            return compStyle == height;
        }());

        $(function() {

            $('html').addClass($.isMobile() ? 'mobile' : 'desktop');

            // .mbr-navbar--sticky
            $(window).scroll(function() {
                $('.mbr-navbar--sticky').each(function() {
                    var method = $(window).scrollTop() > 10 ? 'addClass' : 'removeClass';
                    $(this)[method]('mbr-navbar--stuck')
                        .not('.mbr-navbar--open')[method]('mbr-navbar--short');
                });
            });

            if ($.isMobile() && navigator.userAgent.match(/Chrome/i)) { // simple fix for Chrome's scrolling
                (function(width, height) {
                    var deviceSize = [width, width];
                    deviceSize[height > width ? 0 : 1] = height;
                    $(window).smartresize(function() {
                        var windowHeight = $(window).height();
                        if ($.inArray(windowHeight, deviceSize) < 0)
                            windowHeight = deviceSize[$(window).width() > windowHeight ? 1 : 0];
                        $('.mbr-section--full-height').css('height', windowHeight + 'px');
                    });
                })($(window).width(), $(window).height());
            } else if (!isSupportViewportUnits) { // fallback for .mbr-section--full-height
                $(window).smartresize(function() {
                    $('.mbr-section--full-height').css('height', $(window).height() + 'px');
                });
                $(document).on('add.cards', function(event) {
                    if ($('html').hasClass('mbr-site-loaded') && $(event.target).outerFind('.mbr-section--full-height').length)
                        $(window).resize();
                });
            }

            // .mbr-section--16by9 (16 by 9 blocks autoheight)
            function calculate16by9() {
                $(this).css('height', $(this).parent().width() * 9 / 16);
            }
            $(window).smartresize(function() {
                $('.mbr-section--16by9').each(calculate16by9);
            });
            $(document).on('add.cards changeParameter.cards', function(event) {
                var enabled = $(event.target).outerFind('.mbr-section--16by9');
                if (enabled.length) {
                    enabled
                        .attr('data-16by9', 'true')
                        .each(calculate16by9);
                } else {
                    $(event.target).outerFind('[data-16by9]')
                        .css('height', '')
                        .removeAttr('data-16by9');
                }
            });

            // .mbr-parallax-background
            function initParallax(card) {
                setTimeout(function() {
                    $(card).outerFind('.mbr-parallax-background')
                        .jarallax({
                            speed: 0.6
                        })
                        .css('position', 'relative');
                }, 0);
            }

            function destroyParallax(card) {
                $(card).jarallax('destroy').css('position', '');
            }

            if ($.fn.jarallax && !$.isMobile()) {
                $(window).on('update.parallax', function(event) {
                    setTimeout(function() {
                        var $jarallax = $('.mbr-parallax-background');

                        $jarallax.jarallax('coverImage');
                        $jarallax.jarallax('clipContainer');
                        $jarallax.jarallax('onScroll');
                    }, 0);
                });

                if (isBuilder) {
                    $(document).on('add.cards', function(event) {
                        initParallax(event.target);
                        $(window).trigger('update.parallax');
                    });

                    $(document).on('changeParameter.cards', function(event, paramName, value, key) {
                        if (paramName === 'bg') {
                            destroyParallax(event.target);

                            switch (key) {
                                case 'type':
                                    if (value.parallax === true) {
                                        initParallax(event.target);
                                    }
                                    break;
                                case 'value':
                                    if (value.type === 'image' && value.parallax === true) {
                                        initParallax(event.target);
                                    }
                                    break;
                                case 'parallax':
                                    if (value.parallax === true) {
                                        initParallax(event.target);
                                    }
                            }
                        }

                        $(window).trigger('update.parallax');
                    });
                } else {
                    initParallax(document.body);
                }

                // for Tabs
                $(window).on('shown.bs.tab', function(e) {
                    $(window).trigger('update.parallax');
                });
            }

            // .mbr-fixed-top
            var fixedTopTimeout, scrollTimeout, prevScrollTop = 0,
                fixedTop = null,
                isDesktop = !$.isMobile();
            $(window).scroll(function() {
                if (scrollTimeout) clearTimeout(scrollTimeout);
                var scrollTop = $(window).scrollTop();
                var scrollUp = scrollTop <= prevScrollTop || isDesktop;
                prevScrollTop = scrollTop;
                if (fixedTop) {
                    var fixed = scrollTop > fixedTop.breakPoint;
                    if (scrollUp) {
                        if (fixed != fixedTop.fixed) {
                            if (isDesktop) {
                                fixedTop.fixed = fixed;
                                $(fixedTop.elm).toggleClass('is-fixed');
                            } else {
                                scrollTimeout = setTimeout(function() {
                                    fixedTop.fixed = fixed;
                                    $(fixedTop.elm).toggleClass('is-fixed');
                                }, 40);
                            }
                        }
                    } else {
                        fixedTop.fixed = false;
                        $(fixedTop.elm).removeClass('is-fixed');
                    }
                }
            });
            $(document).on('add.cards delete.cards', function(event) {
                if (fixedTopTimeout) clearTimeout(fixedTopTimeout);
                fixedTopTimeout = setTimeout(function() {
                    if (fixedTop) {
                        fixedTop.fixed = false;
                        $(fixedTop.elm).removeClass('is-fixed');
                    }
                    $('.mbr-fixed-top:first').each(function() {
                        fixedTop = {
                            breakPoint: $(this).offset().top + $(this).height() * 3,
                            fixed: false,
                            elm: this
                        };
                        $(window).scroll();
                    });
                }, 650);
            });

            // embedded videos
            $(window).smartresize(function() {
                $('.mbr-embedded-video').each(function() {
                    $(this).height(
                        $(this).width() *
                        parseInt($(this).attr('height') || 315) /
                        parseInt($(this).attr('width') || 560)
                    );
                });
            });
            $(document).on('add.cards', function(event) {
                if ($('html').hasClass('mbr-site-loaded') && $(event.target).outerFind('iframe').length)
                    $(window).resize();
            });

            // background video
            function videoParser(card) {
                $(card).outerFind('[data-bg-video]').each(function() {
                    var videoURL = $(this).attr('data-bg-video');
                    var parsedUrl = videoURL.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);

                    var $img = $('<div class="mbr-background-video-preview">')
                        .hide()
                        .css({
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        });
                    $('> *:eq(0)', this).before($img);

                    // youtube or vimeo
                    if (parsedUrl && (/youtube/g.test(parsedUrl[3]) || /vimeo/g.test(parsedUrl[3]))) {
                        // youtube
                        if (parsedUrl && /youtube/g.test(parsedUrl[3])) {
                            var previewURL = 'http' + ('https:' === location.protocol ? 's' : '') + ':';
                            previewURL += '//img.youtube.com/vi/' + parsedUrl[6] + '/maxresdefault.jpg';

                            $('<img>').on('load', function() {
                                if (120 === (this.naturalWidth || this.width)) {
                                    // selection of preview in the best quality
                                    var file = this.src.split('/').pop();

                                    switch (file) {
                                        case 'maxresdefault.jpg':
                                            this.src = this.src.replace(file, 'sddefault.jpg');
                                            break;
                                        case 'sddefault.jpg':
                                            this.src = this.src.replace(file, 'hqdefault.jpg');
                                            break;
                                        default: // image not found
                                            if (isBuilder) {
                                                $img.css('background-image', 'url("images/no-video.jpg")')
                                                    .show();
                                            }
                                    }
                                } else {
                                    $img.css('background-image', 'url("' + this.src + '")')
                                        .show();
                                }
                            }).attr('src', previewURL);

                            if ($.fn.YTPlayer && !isBuilder && !$.isMobile()) {
                                $('> *:eq(1)', this).before('<div class="mbr-background-video"></div>').prev()
                                    .YTPlayer({
                                        videoURL: parsedUrl[6],
                                        containment: 'self',
                                        showControls: false,
                                        mute: true
                                    });
                            }
                        } else if (parsedUrl && /vimeo/g.test(parsedUrl[3])) { // vimeo
                            var request = new XMLHttpRequest();
                            request.open('GET', 'https://vimeo.com/api/v2/video/' + parsedUrl[6] + '.json', true);
                            request.onreadystatechange = function() {
                                if (this.readyState === 4) {
                                    if (this.status >= 200 && this.status < 400) {
                                        var response = JSON.parse(this.responseText);

                                        $img.css('background-image', 'url("' + response[0].thumbnail_large + '")')
                                            .show();
                                    } else if (isBuilder) { // image not found
                                        $img.css('background-image', 'url("images/no-video.jpg")')
                                            .show();
                                    }
                                }
                            };
                            request.send();
                            request = null;

                            if ($.fn.vimeo_player && !isBuilder && !$.isMobile()) {
                                $('> *:eq(1)', this).before('<div class="mbr-background-video"></div>').prev()
                                    .vimeo_player({
                                        videoURL: videoURL,
                                        containment: 'self',
                                        showControls: false,
                                        mute: true
                                    });
                            }
                        }
                    } else if (isBuilder) { // neither youtube nor vimeo
                        $img.css('background-image', 'url("images/video-placeholder.jpg")')
                            .show();
                    }
                });
            }

            if (isBuilder) {
                $(document).on('add.cards', function(event) {
                    videoParser(event.target);
                });
            } else {
                videoParser(document.body);
            }

            $(document).on('changeParameter.cards', function(event, paramName, value, key) {
                if (paramName === 'bg') {
                    switch (key) {
                        case 'type':
                            $(event.target).find('.mbr-background-video-preview').remove();
                            if (value.type === 'video') {
                                videoParser(event.target);
                            }
                            break;
                        case 'value':
                            if (value.type === 'video') {
                                $(event.target).find('.mbr-background-video-preview').remove();
                                videoParser(event.target);
                            }
                            break;
                    }
                }
            });

            // init
            if (!isBuilder) {
                $('body > *:not(style, script)').trigger('add.cards');
            }
            $('html').addClass('mbr-site-loaded');
            $(window).resize().scroll();

            // smooth scroll
            if (!isBuilder) {
                $(document).click(function(e) {
                    try {
                        var target = e.target;

                        if ($(target).parents().hasClass('carousel')) {
                            return;
                        }
                        do {
                            if (target.hash) {
                                var useBody = /#bottom|#top/g.test(target.hash);
                                $(useBody ? 'body' : target.hash).each(function() {
                                    e.preventDefault();
                                    // in css sticky navbar has height 64px
                                    // var stickyMenuHeight = $('.mbr-navbar--sticky').length ? 64 : 0;
                                    var stickyMenuHeight = $(target).parents().hasClass('navbar-fixed-top') ? 60 : 0;
                                    var goTo = target.hash == '#bottom' ? ($(this).height() - $(window).height()) : ($(this).offset().top - stickyMenuHeight);
                                    // Disable Accordion's and Tab's scroll
                                    if ($(this).hasClass('panel-collapse') || $(this).hasClass('tab-pane')) {
                                        return;
                                    }
                                    $('html, body').stop().animate({
                                        scrollTop: goTo
                                    }, 800, 'easeInOutCubic');
                                });
                                break;
                            }
                        } while (target = target.parentNode);
                    } catch (e) {
                        // throw e;
                    }
                });
            }

            // init the same height columns
            $('.cols-same-height .mbr-figure').each(function() {
                var $imageCont = $(this);
                var $img = $imageCont.children('img');
                var $cont = $imageCont.parent();
                var imgW = $img[0].width;
                var imgH = $img[0].height;

                function setNewSize() {
                    $img.css({
                        width: '',
                        maxWidth: '',
                        marginLeft: ''
                    });

                    if (imgH && imgW) {
                        var aspectRatio = imgH / imgW;

                        $imageCont.addClass({
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        });

                        // change image size
                        var contAspectRatio = $cont.height() / $cont.width();
                        if (contAspectRatio > aspectRatio) {
                            var percent = 100 * (contAspectRatio - aspectRatio) / aspectRatio;
                            $img.css({
                                width: percent + 100 + '%',
                                maxWidth: percent + 100 + '%',
                                marginLeft: (-percent / 2) + '%'
                            });
                        }
                    }
                }

                $img.one('load', function() {
                    imgW = $img[0].width;
                    imgH = $img[0].height;
                    setNewSize();
                });

                $(window).on('resize', setNewSize);
                setNewSize();
            });
        });


        if (!isBuilder) {
            // .mbr-social-likes
            if ($.fn.socialLikes) {
                $(document).on('add.cards', function(event) {
                    $(event.target).outerFind('.mbr-social-likes').on('counter.social-likes', function(event, service, counter) {
                        if (counter > 999) $('.social-likes__counter', event.target).html(Math.floor(counter / 1000) + 'k');
                    }).socialLikes({
                        initHtml: false
                    });
                });
            }

            $(document).on('add.cards', function(event) {
                if ($(event.target).hasClass('mbr-reveal')) {
                    $(event.target).footerReveal();
                }
            });

            $(document).ready(function() {
                // disable animation on scroll on mobiles
                if ($.isMobile()) {
                    return;
                    // enable animation on scroll
                } else if ($('input[name=animation]').length) {
                    $('input[name=animation]').remove();

                    var $animatedElements = $('p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, textarea, .input-group, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info').not(function() {
                    	return $(this).parents().is('a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop');
                    }).addClass('hidden animated');

                    function getElementOffset(element) {
                        var top = 0;
                        do {
                            top += element.offsetTop || 0;
                            element = element.offsetParent;
                        } while (element);

                        return top;
                    }

                    function elCarouselItem(element) {
                        if (element.parents('.carousel-item').css('display') !== 'none') return false;
                        var parentEl = element.parents('.carousel-item').parent();
                        if (parentEl.find('.carousel-item.active .hidden.animated').lenght){
                            return false;
                        }
                        else if (parentEl.attr('data-visible') > 1){
                            var visibleSlides = parentEl.attr('data-visible');
                            if (element.parents().is('.cloneditem-' + (visibleSlides - 1)) && element.parents('.cloneditem-' + (visibleSlides - 1)).attr('data-cloned-index') >= visibleSlides){
                                return true;
                            }
                            else{
                                element.removeClass('animated hidden');
                                return false;
                            }
                        }
                        else return true;
                    }

                    function checkIfInView() {
                        var window_height = window.innerHeight;
                        var window_top_position = document.documentElement.scrollTop || document.body.scrollTop;
                        var window_bottom_position = window_top_position + window_height - 50;

                        $.each($animatedElements, function() {
                            var $element = $(this);
                            var element = $element[0];
                            var element_height = element.offsetHeight;
                            var element_top_position = getElementOffset(element);
                            var element_bottom_position = (element_top_position + element_height);

                            // check to see if this current element is within viewport
                            if ((((element_bottom_position >= window_top_position) &&
                                (element_top_position <= window_bottom_position)) || elCarouselItem($element)) &&
                                ($element.hasClass('hidden'))) {
                                $element.removeClass('hidden').addClass('fadeInUp')
                                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                        $element.removeClass('animated fadeInUp');
                                    });
                            }
                        });
                    }

                    var $window = $(window);
                    $window.on('scroll resize', checkIfInView);
                    $window.trigger('scroll');
                }
            });

            if ($('.nav-dropdown').length) {
                $(".nav-dropdown").swipe({
                    swipeLeft: function(event, direction, distance, duration, fingerCount) {
                        $('.navbar-close').click();
                    }
                });
            }
        }

        // Scroll to Top Button
        $(document).ready(function() {
            if ($('.mbr-arrow-up').length) {
                var $scroller = $('#scrollToTop'),
                    $main = $('body,html'),
                    $window = $(window);
                $scroller.css('display', 'none');
                $window.scroll(function() {
                    if ($(this).scrollTop() > 0) {
                        $scroller.fadeIn();
                    } else {
                        $scroller.fadeOut();
                    }
                });
                $scroller.click(function() {
                    $main.animate({
                        scrollTop: 0
                    }, 400);
                    return false;
                });
            }
        });

        // arrow down
        if (!isBuilder) {
            $('.mbr-arrow').on('click', function(e) {
                var $next = $(e.target).closest('section').next();
                if($next.hasClass('engine')){
                    $next = $next.closest('section').next();
                }
                var offset = $next.offset();
                $('html, body').stop().animate({
                    scrollTop: offset.top
                }, 800, 'linear');
            });
        }

        // add padding to the first element, if it exists
        if ($('nav.navbar').length) {
            var navHeight = $('nav.navbar').height();
            $('.mbr-after-navbar.mbr-fullscreen').css('padding-top', navHeight + 'px');
        }

        function isIE() {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");

            if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                return true;
            }

            return false;
        }

        // fixes for IE
        if (!isBuilder && isIE()) {
            $(document).on('add.cards', function(event) {
                var $eventTarget = $(event.target);

                if ($eventTarget.hasClass('mbr-fullscreen')) {
                    $(window).on('load resize', function() {
                        $eventTarget.css('height', 'auto');

                        if ($eventTarget.outerHeight() <= $(window).height()) {
                            $eventTarget.css('height', '1px');
                        }
                    });
                }

                if ($eventTarget.hasClass('mbr-slider') || $eventTarget.hasClass('mbr-gallery')) {
                    $eventTarget.find('.carousel-indicators').addClass('ie-fix').find('li').css({
                        display: 'inline-block',
                        width: '30px'
                    });

                    if ($eventTarget.hasClass('mbr-slider')) {
                        $eventTarget.find('.full-screen .slider-fullscreen-image').css('height', '1px');
                    }
                }
            });
        }

        // Script for popUp video
        $(document).ready(function() {
            if (!isBuilder) {
                var modal = function(item) {
                    var videoIframe = $(item).parents('section').find('iframe')[0],
                        videoIframeSrc = $(videoIframe).attr('src');

                    item.parents('section').css('z-index', '5000');

                    if (videoIframeSrc.indexOf('youtu') !== -1) {
                        videoIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    }

                    if (videoIframeSrc.indexOf('vimeo') !== -1) {
                        var vimeoPlayer = new Vimeo.Player($(videoIframe));
                        vimeoPlayer.play();
                    }

                    $(item).parents('section').find($(item).attr('data-modal'))
                        .css('display', 'table')
                        .click(function() {
                            if (videoIframeSrc.indexOf('youtu') !== -1) {
                                videoIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                            }

                            if (videoIframeSrc.indexOf('vimeo') !== -1) {
                                vimeoPlayer.pause();
                            }

                            $(this).css('display', 'none').off('click');
                            item.parents('section').css('z-index', '0');
                        });
                };

                // Youtube & Vimeo
                $('.modalWindow-video iframe').each(function() {
                    var videoURL = $(this).attr('data-src');
                    $(this).removeAttr('data-src');

                    var parsedUrl = videoURL.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);
                    if (videoURL.indexOf('youtu') !== -1) {
                        $(this).attr('src', 'https://youtube.com/embed/' + parsedUrl[6] + '?rel=0&enablejsapi=1');
                    } else if (videoURL.indexOf('vimeo') !== -1) {
                        $(this).attr('src', 'https://player.vimeo.com/video/' + parsedUrl[6] + '?autoplay=0&loop=0');
                    }
                });

                $('[data-modal]').click(function() {
                    modal($(this));
                });
            }
        });

        if (!isBuilder) {
            // open dropdown menu on hover
            if (!$.isMobile()) {
                var $menu = $('section.menu'),
                    $width = $(window).width(),
                    $collapsed = $menu.find('.navbar').hasClass('collapsed');
                // check if collapsed on
                if (!$collapsed ){
                    // check width device
                    if ($width > 991) {
                        $menu.find('ul.navbar-nav li.dropdown').hover(
                            function() {
                                if (!$(this).hasClass('open')) {
                                    $(this).find('a')[0].click();
                                }
                            },
                            function() {
                                if ($(this).hasClass('open')) {
                                    $(this).find('a')[0].click();
                                }
                            }
                        );
                        $menu.find('ul.navbar-nav li.dropdown .dropdown-menu .dropdown').hover(
                            function() {
                                if (!$(this).hasClass('open')) {
                                    $(this).find('a')[0].click();
                                }
                            },
                            function() {
                                if ($(this).hasClass('open')) {
                                    $(this).find('a')[0].click();
                                }
                            }
                        );
                    }
                }    
            }
        }

        // Functions from plugins for
        // compatible with old projects 
        function setActiveCarouselItem(card){
        var $target = $(card).find('.carousel-item:first');
        $target.addClass('active');
        }
        function initTestimonialsCarousel(card){
            var $target = $(card),
                $carouselID = $target.attr('ID') +"-carousel"; 
            $target.find('.carousel').attr('id',$carouselID);
            $target.find('.carousel-controls a').attr('href','#'+$carouselID);
            $target.find('.carousel-indicators li').attr('data-target','#'+$carouselID);
            setActiveCarouselItem($target);  
        }
        function initClientCarousel(card){
            var $target = $(card),
            countElems = $target.find('.carousel-item').length,
            visibleSlides = $target.find('.carousel-inner').attr('data-visible');
            if (countElems < visibleSlides){
                visibleSlides = countElems;
            }
            $target.find('.carousel-inner').attr('class', 'carousel-inner slides' + visibleSlides);
            $target.find('.clonedCol').remove();

            $target.find('.carousel-item .col-md-12').each(function() {
                if (visibleSlides < 2) {
                    $(this).attr('class', 'col-md-12');
                } else if (visibleSlides == '5') {
                    $(this).attr('class', 'col-md-12 col-lg-15');
                } else {
                    $(this).attr('class', 'col-md-12 col-lg-' + 12 / visibleSlides);
                }
            });

            $target.find('.carousel-item').each(function() {
                var itemToClone = $(this);
                for (var i = 1; i < visibleSlides; i++) {
                    itemToClone = itemToClone.next();
                    if (!itemToClone.length) {
                        itemToClone = $(this).siblings(':first');
                    }
                    var index = itemToClone.index();
                    itemToClone.find('.col-md-12:first').clone().addClass('cloneditem-' + i).addClass('clonedCol').attr('data-cloned-index', index).appendTo($(this).children().eq(0));
                }
            });
        }
        function updateClientCarousel(card){
            var $target = $(card),
                countElems = $target.find('.carousel-item').length,
                visibleSlides = $target.find('.carousel-inner').attr('data-visible');
            if (countElems < visibleSlides){
                visibleSlides = countElems;
            }
            $target.find('.clonedCol').remove();
            $target.find('.carousel-item').each(function() {
                var itemToClone = $(this);
                for (var i = 1; i < visibleSlides; i++) {
                    itemToClone = itemToClone.next();
                    if (!itemToClone.length) {
                        itemToClone = $(this).siblings(':first');
                    }
                    var index = itemToClone.index();
                    itemToClone.find('.col-md-12:first').clone().addClass('cloneditem-' + i).addClass('clonedCol').attr('data-cloned-index', index).appendTo($(this).children().eq(0));
                }
            });
        }
        function clickHandler(e){
            e.stopPropagation();
            e.preventDefault();

            var $target = $(e.target);
            var curItem;
            var curIndex;

            if ($target.closest('.clonedCol').length) {
                curItem = $target.closest('.clonedCol');
                curIndex = curItem.attr('data-cloned-index');
            } else {
                curItem = $target.closest('.carousel-item');
                curIndex = curItem.index();
            }
            var item = $($target.closest('.carousel-inner').find('.carousel-item')[curIndex]).find('img')[0];
                            
            if ($target.parents('.clonedCol').length > 0) {
                item.click();
            }
        }
        $.fn.outerFind = function(selector) {
            return this.find(selector).addBack(selector);
        };
        function initTabs(target) {
            if ($(target).find('.nav-tabs').length !== 0) {
                $(target).outerFind('section[id^="tabs"]').each(function() {
                    var componentID = $(this).attr('id');
                    var $tabsNavItem = $(this).find('.nav-tabs .nav-item');
                    var $tabPane = $(this).find('.tab-pane');

                    $tabPane.removeClass('active').eq(0).addClass('active');

                    $tabsNavItem.find('a').removeClass('active').removeAttr('aria-expanded')
                        .eq(0).addClass('active');

                    $tabPane.each(function() {
                        $(this).attr('id', componentID + '_tab' + $(this).index());
                    });

                    $tabsNavItem.each(function() {
                        $(this).find('a').attr('href', '#' + componentID + '_tab' + $(this).index());
                    });
                });
            }
        }
        function clickPrev(event){
            event.stopPropagation();
            event.preventDefault();
        }
        if(!isBuilder){
            if(typeof window.initClientPlugin ==='undefined'){
                if($(document.body).find('.clients').length!=0){
                    window.initClientPlugin = true;
                    $(document.body).find('.clients').each(function(index, el) {
                        if(!$(this).attr('data-isinit')){
                            initTestimonialsCarousel($(this));
                            initClientCarousel($(this));
                        }  
                    });  
                } 
            }
            if(typeof window.initPopupBtnPlugin === 'undefined'){
                if($(document.body).find('section.popup-btn-cards').length!=0){
                    window.initPopupBtnPlugin = true;
                    $('section.popup-btn-cards .card-wrapper').each(function(index, el) {
                        $(this).addClass('popup-btn');
                    }); 
                }      
            }
            if(typeof window.initTestimonialsPlugin === 'undefined'){
                if($(document.body).find('.testimonials-slider').length!=0){
                    window.initTestimonialsPlugin = true;
                    $('.testimonials-slider').each(function(){
                        initTestimonialsCarousel(this);
                    }); 
                }      
            }
            if (typeof window.initSwitchArrowPlugin === 'undefined'){
                window.initSwitchArrowPlugin = true;
                $(document).ready(function() {
                    if ($('.accordionStyles').length!=0) {
                            $('.accordionStyles .card-header a[role="button"]').each(function(){
                                if(!$(this).hasClass('collapsed')){
                                    $(this).addClass('collapsed');
                                }
                            });
                        }
                });
                $('.accordionStyles .card-header a[role="button"]').click(function(){
                    var $id = $(this).closest('.accordionStyles').attr('id'),
                        $iscollapsing = $(this).closest('.card').find('.panel-collapse');
                    if (!$iscollapsing.hasClass('collapsing')) {
                        if ($id.indexOf('toggle') != -1){
                            if ($(this).hasClass('collapsed')) {
                                $(this).find('span.sign').removeClass('mbri-arrow-down').addClass('mbri-arrow-up'); 
                            }
                            else{
                                $(this).find('span.sign').removeClass('mbri-arrow-up').addClass('mbri-arrow-down'); 
                            }
                        }
                        else if ($id.indexOf('accordion')!=-1) {
                            var $accordion =  $(this).closest('.accordionStyles ');
                        
                            $accordion.children('.card').each(function() {
                                $(this).find('span.sign').removeClass('mbri-arrow-up').addClass('mbri-arrow-down'); 
                            });
                            if ($(this).hasClass('collapsed')) {
                                $(this).find('span.sign').removeClass('mbri-arrow-down').addClass('mbri-arrow-up'); 
                            }
                        }
                    }
                });
            }
            if(typeof window.initTabsPlugin === 'undefined'){
                window.initTabsPlugin = true;
                initTabs(document.body);
            }
            
            // Fix for slider bug
            if($('.mbr-slider.carousel').length!=0){
                $('.mbr-slider.carousel').each(function(){
                    var $slider = $(this),
                        controls = $slider.find('.carousel-control'),
                        indicators = $slider.find('.carousel-indicators li');
                    $slider.on('slide.bs.carousel', function () {
                        controls.bind('click',function(event){
                            clickPrev(event);
                        });
                        indicators.bind('click',function(event){
                            clickPrev(event);
                        })
                        $slider.carousel({
                            keyboard:false
                        });
                    }).on('slid.bs.carousel',function(){
                        controls.unbind('click');
                        indicators.unbind('click');
                        $slider.carousel({
                            keyboard:true
                        });
                        if($slider.find('.carousel-item.active').length>1){
                            $slider.find('.carousel-item.active').eq(1).removeClass('active');
                            $slider.find('.carousel-control li.active').eq(1).removeClass('active');
                        }
                    });
                });
            }
        }
        // Form Styler
        if (isBuilder) {
            $(document).on('add.cards', function (event) {
                if ($(event.target).find('.form-with-styler').length) {

                    var form = $(event.target).find('.form-with-styler');

                    $(form).find('select:not("[multiple]")').each(function () {
                        $(this).styler();
                    });
                    $(form).find('input[type=number]').each(function () {
                        $(this).styler();
                        $(this).parent().parent().removeClass('form-control')
                    });
                    // documentation about plugin https://xdsoft.net/jqplugins/datetimepicker/
                    $(form).find('input[type=date]').each(function () {
                        if($(this).datetimepicker)
                            $(this).datetimepicker({
                                format: 'Y-m-d',
                                timepicker: false
                            });
                    });
                    $(form).find('input[type=time]').each(function () {
                        if($(this).datetimepicker)
                            $(this).datetimepicker({
                                format: 'H:i',
                                datepicker: false
                            });
                    });

                }
            });
        } else {
            function detectmob() {
                if (navigator.userAgent.match(/Android/i)
                    || navigator.userAgent.match(/webOS/i)
                    || navigator.userAgent.match(/iPhone/i)
                    || navigator.userAgent.match(/iPad/i)
                    || navigator.userAgent.match(/iPod/i)
                    || navigator.userAgent.match(/BlackBerry/i)
                    || navigator.userAgent.match(/Windows Phone/i)
                    || navigator.userAgent.match(/Firefox/i)
                ) {
                    return true;
                }
                else {
                    return false;
                }
            }

            $('section .form-with-styler').each(function () {
                $(this).find('select:not("[multiple]")').each(function () {
                    $(this).styler();
                });
                $(this).find('input[type=number]').each(function () {
                    $(this).styler();
                    $(this).parent().parent().removeClass('form-control')
                });
                if (!detectmob() && $(this).datetimepicker) {
                    $(this).find('input[type=date]').each(function () {
                        $(this).datetimepicker({
                            format: 'Y-m-d',
                            timepicker: false
                        });
                    });
                    $(this).find('input[type=time]').each(function () {
                        $(this).datetimepicker({
                            format: 'H:i',
                            datepicker: false
                        });
                    });
                }
            });
        }

        $(document).on('change', 'input[type="range"]', function(e){
            $(e.target).parents('.form-group').find('.value')[0].innerHTML = e.target.value;
        });
    }(jQuery));
!function(){try{document.getElementsByClassName("engine")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.className="engine";a.innerHTML='<a href="https://mobirise.ws">Mobirise Website Builder</a> v4.11.4';document.body.insertBefore(a,document.body.childNodes[0])}}();
<<<<<<< HEAD
>>>>>>> parent of 9d37a40... Adding more content for v2 build
=======
>>>>>>> parent of 9d37a40... Adding more content for v2 build
