
<<<<<<< HEAD
(function(b){function y(a){b(a.target).closest(".mbr-slider").hasClass("in")&&a.target.playVideo()}function m(a){var c=b(a.target);c[0]._masonryProgress||(c[0]._masonryProgress=!0,"undefined"!==typeof b.fn.masonry&&c.outerFind(".mbr-gallery").each(function(){var a=b(this).find(".mbr-gallery-row");a.one("layoutComplete",function(){c[0]._masonryProgress=!1});a.imagesLoaded().progress(function(){a.masonry({itemSelector:".mbr-gallery-item:not(.mbr-gallery-item__hided)",percentPosition:!0,horizontalOrder:!0,
transitionDuration:0});a.masonry("reloadItems")});a.off("filter");a.on("filter",function(){a.masonry("reloadItems");a.masonry("layout");b(window).trigger("update.parallax")})}))}function q(a,c,b,d,f){var g=a.find("img");if(g[0].complete&&50<g[0].naturalWidth&&50<g[0].naturalHeight)r(g,a,c,b,d,f);else g.one("load",function(){r(g,a,c,b,d,f)})}function r(a,c,b,d,f,g){var l=a[0].naturalWidth,p=a[0].naturalHeight;d=d/b>l/p?(b-2*g)*l/p:d-2*g;d=d>=l?l:d;b=(b-d*p/l)/2;a.css({width:parseInt(d),height:d*p/
l});c.css("top",b+f)}function z(a,c,e,d,f,g){a.find(".modal-dialog .carousel-item").each(function(){if(!g&&!b(this)[0].classList.contains("carousel-item-next")&&!b(this)[0].classList.contains("carousel-item-prev")||g&&!b(this)[0].classList.contains("active"))b(this)[0].classList.contains("video-container")?b(this).css({top:d,height:e-2*d-2*f}):q(b(this),e,c,d,f)})}function t(){var a=b(window).width()-0,c=b(window).height()-0;if(h){var e,d=!1;h.find(".modal-dialog .carousel-item.carousel-item-next, .modal-dialog .carousel-item.carousel-item-prev").length?
e=h.find(".modal-dialog .carousel-item.carousel-item-next, .modal-dialog .carousel-item.carousel-item-prev"):(e=h.find(".modal-dialog .carousel-item.active"),d=!0);e[0].classList.contains("video-container")?e.css({top:0,height:c-0-20}):q(e,c,a,0,10);clearTimeout(u);u=setTimeout(z,200,h,a,c,0,10,d)}}var k=b("html").hasClass("is-builder");if(!k){var v=document.createElement("script");v.src="https://www.youtube.com/iframe_api";var w=document.getElementsByTagName("script")[0];w.parentNode.insertBefore(v,
w);var n=[];b(".carousel-item.video-container img").css("display","none");window.onYouTubeIframeAPIReady=function(){var a=a||{};a.YTAPIReady||(a.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"));b(".video-slide").each(function(a){b(".video-container").eq(a).append('<div id ="mbr-video-'+a+'" class="mbr-background-video" data-video-num="'+a+'"></div>').append('<div class="item-overlay"></div>');b(this).attr("data-video-num",a);if(-1!==b(this).attr("data-video-url").indexOf("vimeo.com")){var e=
{id:b(this).attr("data-video-url"),width:"100%",height:"100%",loop:!0};a=new Vimeo.Player("mbr-video-"+a,e);a.playVideo=Vimeo.play}else{var e=YT.Player,d;d=b(this).attr("data-video-url");d="false"===d?!1:(d=/(?:\?v=|\/embed\/|\.be\/)([-a-z0-9_]+)/i.exec(d)||/^([-a-z0-9_]+)$/i.exec(d))?d[1]:!1;a=new e("mbr-video-"+a,{height:"100%",width:"100%",videoId:d,events:{onReady:y},playerVars:{rel:0}})}n.push(a)})}}b(document).on("add.cards",function(a){var c=b(a.target);c.on("click",".mbr-gallery-filter li",
function(a){a.preventDefault();var d=b(this).closest("li");d.parent().find("li").removeClass("active");d.addClass("active");a=d.closest("section").find(".mbr-gallery-row");var f=b(this)[0].textContent.trim();c.find(".mbr-gallery-item").each(function(a,c){var e=b(this),h=e.attr("data-tags").split(",").map(function(a){return a.trim()});-1!==b.inArray(f,h)||d.hasClass("mbr-gallery-filter-all")?e.removeClass("mbr-gallery-item__hided"):(e.addClass("mbr-gallery-item__hided"),e.css("left","300px"))});a.closest(".mbr-gallery-row").trigger("filter")})});
if(k)b(document).on("changeButtonColor.cards",function(a){var c=b(a.target);if(0<c.find(".mbr-gallery-filter").length&&b(a.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")){var e=(c.find(".mbr-gallery-filter .mbr-gallery-filter-all").find("a").attr("class")||"").replace(/(^|\s)active(\s|$)/," ").trim();c.find(".mbr-gallery-filter ul li:not(.mbr-gallery-filter-all) a").attr("class",e)}m(a)});b(document).on("add.cards changeParameter.cards",function(a){var c=b(a.target),e=[];c.find(".mbr-gallery-item").each(function(a){(b(this).attr("data-tags")||
"").trim().split(",").map(function(a){a=a.trim();-1===b.inArray(a,e)&&e.push(a)})});if(0<c.find(".mbr-gallery-filter").length&&b(a.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")){var d="";c.find(".mbr-gallery-filter ul li:not(.mbr-gallery-filter-all)").remove();var f=c.find(".mbr-gallery-filter .mbr-gallery-filter-all").clone();f.find("a").removeClass("active");e.map(function(a){f.find("a").length?f.find("a").text(a):f.text(a);d+="<li>"+f.html()+"</li>"});f.remove();c.find(".mbr-gallery-filter ul").append(d)}m(a)});
b(document).on("change.cards",function(a){m(a)});b(document).on("lazyload",function(a){m(a);b(window).scrollEnd(function(){m(a)},250)});b(".mbr-gallery-item").on("click","a",function(a){a.stopPropagation()});var x,u,h,k=b(document).find(".mbr-gallery");k.on("show.bs.modal",function(a){clearTimeout(x);x=setTimeout(function(){var c=b(a.relatedTarget).parent().attr("data-video-num"),c=b(a.target).find(".carousel-item .mbr-background-video[data-video-num="+c+"]");b(a.target).find(".carousel-item .mbr-background-video");
0<c.length&&c.closest(".carousel-item").hasClass("active")&&(c=n[+c.attr("data-video-num")],c.playVideo?c.playVideo():c.play())},500);h=b(a.target);t()});k.on("slide.bs.carousel",function(a){a=b(a.target).find(".carousel-item.active .mbr-background-video");0<a.length&&(a=n[+a.attr("data-video-num")],a.pauseVideo?a.pauseVideo():a.pause())});b(window).on("resize load",t);k.on("slid.bs.carousel",function(a){a=b(a.target).find(".carousel-item.active .mbr-background-video");0<a.length&&(a=n[+a.attr("data-video-num")],
a.playVideo?a.playVideo():a.play())});k.on("hide.bs.modal",function(a){n.map(function(a,b){a.pauseVideo?a.pauseVideo():a.pause()});h=null})})(jQuery);
=======
    function getVideoId(url) {
        if ('false' === url) return false;
        var result = /(?:\?v=|\/embed\/|\.be\/)([-a-z0-9_]+)/i.exec(url) || /^([-a-z0-9_]+)$/i.exec(url);

        return result ? result[1] : false;
    }

    function onPlayerReady(event) {
        if ($(event.target).closest('.mbr-slider').hasClass('in')) {
            event.target.playVideo();
        }
    }

    var isBuilder = $('html').hasClass('is-builder');

    /* get youtube id */
    if (!isBuilder) {
        /* google iframe */
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var players = [];

        $('.carousel-item.video-container img').css('display','none');

        /* google iframe api init function */
        window.onYouTubeIframeAPIReady = function() {
            var ytp = ytp || {};
            ytp.YTAPIReady || (ytp.YTAPIReady = !0,
                jQuery(document).trigger("YTAPIReady"));

            $('.video-slide').each(function(i) {
                $('.video-container').eq(i).append('<div id ="mbr-video-' + i + '" class="mbr-background-video" data-video-num="' + i + '"></div>')
                    .append('<div class="item-overlay"></div>');
                $(this).attr('data-video-num', i);

                if ($(this).attr('data-video-url').indexOf('vimeo.com') !== -1) {
                    var options = {
                        id: $(this).attr('data-video-url'),
                        width: '100%',
                        height: '100%',
                        loop: true
                    };

                    var player = new Vimeo.Player('mbr-video-' + i, options);

                    player.playVideo = Vimeo.play;
                } else {
                    var player = new YT.Player('mbr-video-' + i, {
                        height: '100%',
                        width: '100%',
                        videoId: getVideoId($(this).attr('data-video-url')),
                        events: {
                            'onReady': onPlayerReady
                        },
                        playerVars: {
                            rel: 0
                        }
                    });
                }

                players.push(player);
            });
        };
    }

    function updateMasonry(event){
        var $section = $(event.target);
        if (typeof $.fn.masonry !== 'undefined') {
            $section.outerFind('.mbr-gallery').each(function() {
                var $msnr = $(this).find('.mbr-gallery-row').masonry({
                    itemSelector: '.mbr-gallery-item:not(.mbr-gallery-item__hided)',
                    percentPosition: true,
                    horizontalOrder: true
                });
                // reload masonry (need for adding new or re-sort items)
                $msnr.masonry('reloadItems');
                $msnr.on('filter', function() {
                    $msnr.masonry('reloadItems');
                    $msnr.masonry('layout');
                    // update parallax backgrounds
                    $(window).trigger('update.parallax');
                }.bind(this, $msnr));
                // layout Masonry after each image loads
                $msnr.imagesLoaded().progress(function() {
                    $msnr.masonry('layout');
                });
            });
        }
    };

    /* Masonry Grid */
    $(document).on('add.cards', function(event) {
        var $section = $(event.target),
            allItem = $section.find('.mbr-gallery-filter-all');
        var filterList = [];
        $section.on('click', '.mbr-gallery-filter li > .btn', function(e) {
            e.preventDefault();
            var $li = $(this).closest('li');

            $li.parent().find('li').removeClass('active');
            $li.addClass('active');

            var $mas = $li.closest('section').find('.mbr-gallery-row');
            var filter = $(this).html().trim();

            $section.find('.mbr-gallery-item').each(function(i, el) {
                var $elem = $(this);
                var tagsAttr = $elem.attr('data-tags');
                var tags = tagsAttr.split(',');

                var tagsTrimmed = tags.map(function(el) {
                    return el.trim();
                });

                if ($.inArray(filter, tagsTrimmed) === -1 && !$li.hasClass('mbr-gallery-filter-all')) {
                    $elem.addClass('mbr-gallery-item__hided');

                    $elem.css('left', '300px');
                } else {
                    $elem.removeClass('mbr-gallery-item__hided');
                }
            });

            $mas.closest('.mbr-gallery-row').trigger('filter');
        });
    })
    $(document).on('add.cards changeParameter.cards', function(event) {
        var $section = $(event.target),
            allItem = $section.find('.mbr-gallery-filter-all');
        var filterList = [];
        $section.find('.mbr-gallery-item').each(function(el) {
            var tagsAttr = ($(this).attr('data-tags') || "").trim();
            var tagsList = tagsAttr.split(',');

            tagsList.map(function(el) {
                var tag = el.trim();

                if ($.inArray(tag, filterList) === -1)
                    filterList.push(tag);
            });
        });

        if ($section.find('.mbr-gallery-filter').length > 0 && $(event.target).find('.mbr-gallery-filter').hasClass('gallery-filter-active')) {
            var filterHtml = '';

            $section.find('.mbr-gallery-filter ul li:not(li:eq(0))').remove();

            filterList.map(function(el) {
                filterHtml += '<li><a class="btn btn-md btn-primary-outline" href>' + el + '</a></li>';
            });
            $section.find('.mbr-gallery-filter ul').append(allItem).append(filterHtml);

        } else {
            $section.find('.mbr-gallery-item__hided').removeClass('mbr-gallery-item__hided');
            $section.find('.mbr-gallery-row').trigger('filter');
        }

        updateMasonry(event);
    });

    $(document).on('change.cards', function(event) {
        updateMasonry(event);
    });

    $(document).on('lazyload', function(event) {
        updateMasonry(event);
        $(window).scrollEnd(function(){
            updateMasonry(event);
        }, 250)
    });

    $('.mbr-gallery-item').on('click', 'a', function(e) {
        e.stopPropagation();
    });

    var timeout2, timeout, objectLightBox;

    /* Lightbox Fit */
    function styleVideo($carouselItem, wndH, windowPadding, bottomPadding){
        $carouselItem.css({
            'top': windowPadding,
            'height': wndH - 2 * windowPadding - 2 * bottomPadding
        })
    }

    function styleImg($carouselItem, wndH, wndW, windowPadding, bottomPadding){
        var $currentImg = $carouselItem.find('img');
        if ($currentImg[0].complete && $currentImg[0].naturalWidth>50 && $currentImg[0].naturalHeight>50) {
            setCSStoImage($currentImg,$carouselItem, wndH, wndW, windowPadding, bottomPadding)
        } else {
            $currentImg.one('load', function() {
                setCSStoImage($currentImg,$carouselItem, wndH, wndW, windowPadding, bottomPadding)
            })
        }
    }

    function setCSStoImage(image,item, wndH, wndW, windowPadding, bottomPadding) {
        var setWidth, setTop;

        var lbW = image[0].naturalWidth;
        var lbH = image[0].naturalHeight;

        // height change
        if (wndW / wndH > lbW / lbH) {
            var needH = wndH - bottomPadding * 2;
            setWidth = needH * lbW / lbH;
        } else { // width change
            setWidth = wndW - bottomPadding * 2;
        }
        // check for maw width
        setWidth = setWidth >= lbW ? lbW : setWidth;

        // set top to vertical center
        setTop = (wndH - setWidth * lbH / lbW) / 2;

        image.css({
            width: parseInt(setWidth),
            height: setWidth * lbH / lbW
        });
        item.css('top', setTop + windowPadding);
    }

    function timeOutCarousel($lightBox, wndW, wndH, windowPadding, bottomPadding, flagResize){
        var $carouselItems = $lightBox.find('.modal-dialog .carousel-item');

        $carouselItems.each(function() {
            if ((!flagResize && !$(this)[0].classList.contains('carousel-item-next') && !$(this)[0].classList.contains('carousel-item-prev')) || (flagResize && !$(this)[0].classList.contains('active'))){
                if ($(this)[0].classList.contains('video-container')){
                    styleVideo($(this), wndH, windowPadding, bottomPadding);
                }
                else{
                    styleImg($(this), wndH, wndW, windowPadding, bottomPadding);
                }
            }
        });
    }

    function fitLightbox() {
        var windowPadding = 0;
        var bottomPadding = 10;
        var wndW = $(window).width() - windowPadding * 2;
        var wndH = $(window).height() - windowPadding * 2;

        if (!objectLightBox) {
            return;
        }

        var $carouselItemActive, flagResize = false;
        if (objectLightBox.find('.modal-dialog .carousel-item.carousel-item-next, .modal-dialog .carousel-item.carousel-item-prev').length){
            $carouselItemActive = objectLightBox.find('.modal-dialog .carousel-item.carousel-item-next, .modal-dialog .carousel-item.carousel-item-prev');
        }
        else{
            $carouselItemActive = objectLightBox.find('.modal-dialog .carousel-item.active');
            flagResize = true;
        }

        if($carouselItemActive[0].classList.contains('video-container')){
            styleVideo($carouselItemActive, wndH, windowPadding, bottomPadding);
        }
        else{
            styleImg($carouselItemActive, wndH, wndW, windowPadding, bottomPadding);
        }

        clearTimeout(timeout);

        timeout = setTimeout( timeOutCarousel, 200, objectLightBox, wndW, wndH, windowPadding, bottomPadding, flagResize);

    }

    /* pause/start video on different events and fit lightbox */
    var $window = $(document).find('.mbr-gallery');

    $window.on('show.bs.modal', function(e) {
        clearTimeout(timeout2);

        timeout2 = setTimeout(function() {
            var index = $(e.relatedTarget).parent().index();
            var slide = $(e.target).find('.carousel-item').eq(index).find('.mbr-background-video');
            $(e.target).find('.carousel-item .mbr-background-video');
            if (slide.length > 0) {
                var player = players[+slide.attr('data-video-num')];
                player.playVideo ? player.playVideo() : player.play();
            }
        }, 500);

        objectLightBox = $(e.target);

        fitLightbox();

    });

    $window.on('slide.bs.carousel', function(e) {
        var ytv = $(e.target).find('.carousel-item.active .mbr-background-video');
        if (ytv.length > 0) {
            var player = players[+ytv.attr('data-video-num')];
            player.pauseVideo ? player.pauseVideo() : player.pause();
        }
    });

    $(window).on('resize load', fitLightbox);

    $window.on('slid.bs.carousel', function(e) {
        var ytv = $(e.target).find('.carousel-item.active .mbr-background-video');

        if (ytv.length > 0) {
            var player = players[+ytv.attr('data-video-num')];
            player.playVideo ? player.playVideo() : player.play();
        }
        
    });

    $window.on('hide.bs.modal', function(e) {
        players.map(function(player, i) {
            player.pauseVideo ? player.pauseVideo() : player.pause();
        });

        objectLightBox = null;
    });
}(jQuery));
>>>>>>> parent of 9d37a40... Adding more content for v2 build
