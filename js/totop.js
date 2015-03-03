$(document).ready(function() {

    /* Variable Setup
     * ================= */

        var windowHeight = $(window).height();
        var scrollHeight = 0;


    /* To top 的滑動效果
     * ================= */

        $('#top').on('click', function toTop() {
            $('html, body').animate({
                scrollTop: 0
            }, 1200);
            return false;
        });

    /* #top 的顯現 / 隱藏
     * ================= */

        console.log("Window height: " + windowHeight);

        $(window).on('scroll', function showToTopButton() {
            scrollHeight = $(window).scrollTop();
            console.log("Scroll height: " + scrollHeight);

            if (scrollHeight > windowHeight) {
                // 滾動的高度大於視窗高度時
                $('#top').fadeIn();
                $('.top-background-img').fadeIn();
            } else {
                $('#top').fadeOut();
                $('.top-background-img').fadeOut();
            }
        });

});
