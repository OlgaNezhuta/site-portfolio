//(function() {
//  'use strict';
//
//  
//})();


/*        header-block   */

/*     header-parallax     */

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


/*    drop-down-menu toogle    */

(function() {
    $('.hamburger').click(function (e) {
        e.preventDefault();
        $('.hamburger').toggleClass('hamburger-active');
        $('.drop-down-menu').toggleClass('drop-down-menu-hidden');
    });
})();



/*        scroll-top    */

(function() {
    $(document).ready(function(){
        $('.arrow-down-svg').click(function(){
            $('body, html').animate({
                scrollTop: 670
            },1000);
        });
    });
})();


/*      welcome-page-block    */
/*      welcome-parallax     */


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


/*      auth-button flip   */


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
                    var currentId = $this.data('section'),
                        reqLink = $('.articles-list-link').filter('[href="#' + currentId + '"]');
                    
                    
                    reqLink.closest('.articles-list-item').addClass('articles-list-item-active')
                         .siblings().removeClass('articles-list-item-active');
                    
                    window.location.hash = currentId;

                    } 
                });
        }
        
        addActiveClass();
    });
})();  



/*      works-page-block     */
/*     blur        */

//(function() {
//    $(document).ready(function(){
//        setBlur();
//    }); 
//    
//    $(window).resize(function(){
//        setBlur();
//    });
//    
//    function setBlur() {
//        var
//        imgWidth = $('.blur_background').width(),
//            blur = $('.blur_form'),
//            blurSection = $('.blur'),
//            posTop = blurSection.offset().top - blur.offset().top,
//            posLeft = blurSection.offset().left - blur.offset().left;
//        
//        blur.css({
//            'background-size' : imgWidth + 'px' + ' ' + 'auto',
//            'background-position' : posLeft + 'px' + ' ' + posTop + 'px'
//        });
//    }
//    
//})();


/*        scroll-top    */


(function() {
    $(document).ready(function(){
        $('.arrow-up-svg').click(function(e){
            e.preventDefault();
            $('body, html').animate({
                scrollTop: 0
            },1000);
        });
    });
})();



/*        works-page slider      */


//(function () {
//		var counter = 1;
//
//		$('.slider-controls-top').on('click', function(e){
//		    e.preventDefault();
//
//			var $this = $(this),
//				items = $('.slider-item'),
//				activeItem = $('.slider-item.active');
//
//			if (counter >= items.length) {
//				counter = 0;
//			}
//
//			var reqItem = items.eq(counter);
//
//			activeItem.animate({
//				'top' : '100%'
//			}, 300);
//
//			reqItem.animate({
//				'top' : '0%'
//			}, 300, function () {
//				activeItem.removeClass('active').css('top', '-100%');
//				$(this).addClass('active');
//			});
//
//			counter++;
//            console.log(counter);
//		});
//	}());
//	



(function () {
		var counter = 0;

		$('.slider-controls-top').on('click', function(e){
		    e.preventDefault();

			var $this = $(this),
				items = $('.slider-item'),
				activeItem = $('.slider-item.active');

			//if (counter >= items.length) {
			//	counter = 0;
			//}

            counter = (counter + 1) % 4;
            
			var reqItem = items.eq(counter);
            

			activeItem.animate({
				'top' : '100%'
			}, 300);
        
            
            // print_strelka_up((counter + 1) % 4 + 1);
            // print_strelka_down((counter - 1) % 4 + 1);
            
			reqItem.animate({
				'top' : '0%'
			}, 300, function () {
				activeItem.removeClass('active').css('top', '-100%');
				$(this).addClass('active');
			});

		});
    
    $('.slider-controls-bottom').on('click', function(e){
		    e.preventDefault();

			var $this = $(this),
				items = $('.slider-item'),
				activeItem = $('.slider-item.active');

			//if (counter <= -1) {
				//counter = 3;
			//}

        
            counter = (counter - 1) % 4;
			var reqItem = items.eq(counter);

			activeItem.animate({
				'top' : '100%'
			}, 300);

			reqItem.animate({
				'top' : '0%'
			}, 300, function () {
				activeItem.removeClass('active').css('top', '-100%');
				$(this).addClass('active');
			});
        
		});
            console.log(counter);
    
	}());
	















	