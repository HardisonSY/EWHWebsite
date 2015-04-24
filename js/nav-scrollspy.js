/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(document).ready(function() {

    /* 頁面的滑動效果 (requires jQuery Easing plugin)
     * ================= */

        $('a.page-scroll').on('click', function(event) {
            var $anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });


    /* 追蹤滾動高度，強調對應於 Nav 上的連結 (再配合 CSS .active 自訂效果) 
     * ================= */

    	$('body').scrollspy({
    	   target: '.navbar-fixed-top'
    	});


    /* Nav 的 Dropdown 點選完之後就關閉選單
     * ================= */

    	$('.navbar-collapse ul li a').on('click', function closeDropdown() {
    	    $('.navbar-toggle:visible').click();
    	});
        
});