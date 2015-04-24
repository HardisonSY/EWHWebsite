$(document).ready(function(){

    /* Variable setup
     * ================= */

        var $tabs      = $('.tabsContainer li');
        var tabCount   = $($tabs).length;
        var defaultTab = null;
        var element    = null;
        var activeTab  = document.getElementsByClassName('active');


    /* Function setup
     * ================= */

        function moveToPreviousTab() {
            /* Carousel */
            if($(activeTab).index() == 0) {
                // First slide
                $($tabs).last()
                    .addClass('active')
                    .siblings('.active')
                        .removeClass('active');
            } else {
                $(activeTab).prev()
                    .addClass('active')
                    .siblings('.active')
                        .removeClass('active');
            }
        }

        function moveToNextTab() {
            /* Carousel */
            if($(activeTab).index() == tabCount - 1) {
                // Last slide
                $($tabs).first()
                    .addClass('active')
                    .siblings('.active')
                        .removeClass('active');
            } else {
                $(activeTab).next()
                    .addClass('active')
                    .siblings('.active')
                        .removeClass('active');
            }
        }

        function showActiveElement() {
            // 找出 li 中的超連結 href(#id)
            element = $(activeTab).find('a').attr('href');
            
            $(element)
                .stop(false, true)
                .fadeIn()
                .siblings()
                    .hide();

            console.log("Active tab index = " + $(activeTab).index());
        }


    /* Default tab setup
     * ================= */

        defaultTab = $($tabs).first().addClass('active');
        // 找出 li 中的超連結 href(#id)
        element    = $(defaultTab).find('a').attr('href');
        // 隱藏兄弟元素
        $(element).siblings().hide();

        console.log("Default tab index = " + $(defaultTab).index());


    /* Tab click
     * ================= */

        $($tabs).on('click',function tabClick() {
            // 把被點擊的 li 頁籤(Tab)加上 .active
            // 並移除兄弟元素中的 .active
            $(this)
                .addClass('active')
                .siblings('.active')
                    .removeClass('active');

            showActiveElement();
            return false;
        });


    /* Next click
     * ================= */

        $('.next').on('click', function nextClick() {
            moveToNextTab();
            showActiveElement();
            return false;
        });


    /* Previous click
     * ================= */

        $('.prev').on('click', function previousClick() {
            moveToPreviousTab();
            showActiveElement();
            return false;
        });

});