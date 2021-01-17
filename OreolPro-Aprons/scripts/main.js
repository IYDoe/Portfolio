$(document).ready(function () {
    // Slick ====================================================
    $('.goods-card__slider').slick({
        adaptiveHeight: true,
        prevArrow: '<div class="goods-card__slider-prev"></div>',
        nextArrow: '<div class="goods-card__slider-next"></div>'
    });
    // Fancybox =================================================

    // YandexMap ================================================
    YaMapsShown = false;

    function showYaMaps() {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2ebadcd6f7a274f43178eb52089bf2a8ed35292ea599cc6157b580cd987b4c6e&amp;lang=ru_RU&amp;scroll=true";
        document.getElementById("yMap-desc").appendChild(script);
    }

    function showYaMapsMob() {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2ebadcd6f7a274f43178eb52089bf2a8ed35292ea599cc6157b580cd987b4c6e&amp;lang=ru_RU&amp;scroll=true";
        document.getElementById("yMap").appendChild(script);
    }
    $(document).ready(function () {

        $(window).scroll(function () {
            if (!YaMapsShown) {
                if ($(window).scrollTop() + $(window).height() > $(document).height() - 700) {
                    showYaMaps();
                    showYaMapsMob()
                    YaMapsShown = true;
                }
            }
        });
    });

});