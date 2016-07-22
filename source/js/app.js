//(function() {
//  'use strict';
//
//  
//})();


/*        header-block   */

(function() {
    $(window).scroll(function(){
        var wScroll = $(window).scrollTop();
        
        (function(){
            
            var
            bg = $('.header-background'),
                sectionText = $('.portfolio-svg'),
                user = $('.my-block-container');
            
            slideIt(bg, wScroll / 45);
            slideIt(sectionText, wScroll / 30);
            slideIt(user, wScroll / 10);
            
            function slideIt(block, strafeAmount) {
                var strafe = -strafeAmount + '%',
                    transormString = 'translate3d(0,' + strafe + ',0)';
                
                block.css({
                    'transform' : transormString
                });
            }
        }());
    });
})();


(function() {
    $('.hamburger').click(function (e) {
        e.preventDefault();
        $('.hamburger').toggleClass('hamburger-active');
        $('.drop-down-menu').toggleClass('drop-down-menu-hidden');
    });
})();


/*      welcome-page-block    */


(function() {
    $(window).on('mousemove', function (e) {
        var mouseX = e.pageX,
            mouseY = e.pageY,
            pageWidth = (window.innerWidth / 2) - mouseX,
            pageHeight = (window.innerHeight / 2) - mouseY,
            layer = $('.welcome-parallax').find('.parallax-layer');
        
        layer.map(function (key, value) {
            var  widthPosition = pageWidth * (key / 100),
                heightPosition = pageHeight * (key / 100);
            $(value).css({
                'transform': 'translate3d(' + widthPosition + 'px, ' + heightPosition + 'px, 0)'
            })
        });
    });
})();


(function() {
    $('.btn-auth').click(function (e) {
        e.preventDefault();
        $('.content-container').addClass('content-rotate');
    });
    
    $('.welcome-parallax').click(function(e) {
        e.preventDefault();
        $('.content-container').removeClass('content-rotate');
    });

})();

/*        preloader     */


(function() {
    $(document).ready(function() {
        $(function() {
            var imgs = [];
            
            $.each($('*'), function() {
                var $this = $(this),
                    img = $this.is('img');
                if(img) {
                    var path = $this.attr('src');
                    if(path) {
                        imgs.push(path);
                    }
                }
            });
            
            var percents = 1;
            
            for(var i = 0; i < imgs.length; i++) {
                var image = $('<img>', {
                    attr: {
                        src: imgs[i]
                    }
                });
                
                image.load(function() {
                    setPercents(imgs.length, percents);
                    percents++;
                });
            }
            
            
            function setPercents(total, current) {
                var percent = Math.ceil(current / total * 100);
                
                if (percent >= 100) {
                    $('.preloader').css('display', 'none');
                }
                
                $('.circle').css({
                    'animation-iteration-count': percent + '%'
                });
                $('.round-text').text(percent + '%');
            }
            
        });
    });
})();


/*       blog-page-block       */


(function() {
    $(window).scroll(function() {
        var wScroll = $(window).scrollTop(),
            menu = $('.static .menu'),
            sidebar = $('.static .menu_wrapper '),
            stickyStart = sidebar.offset().top,
            menuClone = sidebar.clone(),
            fixedSidebar = $('.fixed .left_col');
        
        if (wScroll >= stickyStart) {


		  if (!fixedSidebar.find('.menu_wrapper').length) {
		  	fixedSidebar.append(menuClone);
            menu.hide();
		  }


	   } else {
	   	   fixedSidebar.find('.menu_wrapper').remove();
	   	   menu.show();
	   }
        

        
        
        function addActiveClass() {
            $('.article-container').each(function() {
                var $this = $(this),
                    topEdge = $this.offset().top,
                    bottomEdge = topEdge + $this.height(),
                    wScroll = $(window).scrollTop();
                
                if (topEdge < wScroll && bottomEdge > wScroll) {
                    $('.menu').each(function(){
                       $('.menu li').closest('.articles-list-item').addClass('articles-list-item-active')
                            //.siblings().removeClass('articles-list-item-active');
                       });

                            console.log(wScroll);
                    
                    } if (topEdge < wScroll && bottomEdge < wScroll) {
                         $('.menu li').closest('.articles-list-item').removeClass('articles-list-item-active')
                            //.siblings().removeClass('articles-list-item-active');
                    }

            
                });
        }
        
        addActiveClass();
        
//        function addActiveClass() {
//            $('.article-container').each(function(){
//                var $this = $(this),
//                    topEdge = $this.offset().top,
//                    bottomEdge = topEdge + $this.height(),
//                    wScroll = $(window).scrollTop();
//            
//                //$('.articles-list-item').each(function() {
//
//
//
//                    if (topEdge < wScroll && bottomEdge > wScroll) {
//                           $('.menu').each(function(){
//                               $('.articles-list-item').addClass('articles-list-item-active'),
//                                $('.articles-list-item').siblings().removeClass('articles-list-item-active');
//                            });
//
//                                console.log(wScroll);
//
//                        } if (topEdge < wScroll && bottomEdge < wScroll) {
//                                $('.menu').each(function(){
//                                    $('.articles-list-item').removeClass('articles-list-item-active')
//                                    .next('.articles-list-item').addClass('articles-list-item-active');
//                                });
//                        }
//                                            
//
//               // });
//            });
//        };
//        
//        addActiveClass();
    
    });
})();  











	