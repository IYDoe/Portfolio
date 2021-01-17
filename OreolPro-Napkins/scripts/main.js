(function ($) {

    $('.accordion .accordion__title').click(function (j) {
        var dropDown = $(this).closest('.accordion__card').find('.accordion__description');

        $(this).closest('.accordion').find('.accordion__description').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('.accordion__title.active').removeClass('active');
            $(this).addClass('active');
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });

})(jQuery);

// Яндекс ==================================================
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

//======================================================
// $(document).on('click', '.openModal', function (e) {
//     e.preventDefault();
//     var id = $(this).attr('data-id');
//     var temp = $(this).attr('data-temp');
//     var res = temp.split('/').pop();
//     var suc = $(this).attr('data-suc');
//     if ($('.modal').is('#modal_' + id)) {
//         $.fancybox.open({
//             src: '#modal_' + id,
//             type: 'inline'
//         });
//     } else {
//         var data = new FormData();
//         data.append('id', id);
//         data.append('suc', suc);
//         data.append('res', res);

//         $.ajax({
//             type: 'POST',
//             url: '/' + temp,
//             contentType: false,
//             processData: false,
//             data: data,
//             success: function (response) {
//                 if (response != 'error') {
//                     $('body').append(response);
//                     Inputmask("+7 (999)-999-99-99").mask('input[name=phone]');
//                     $.fancybox.open({
//                         src: '#modal_' + id,
//                         type: 'inline'
//                     });
//                 }
//             },
//             error: function (req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса
//                 console.error('Упс! Ошибочка: ' + text + ' | ' + error);
//             }
//         });
//     }
// });
// //form
// function errorShow(selector) {
//     var color = $(selector).css('border-color');
//     var transition = 'transition';
//     var actionIn = '1s ease';
//     var actionOut = '2s ease';
//     $(selector).css({
//         transition: 'border-color ' + actionIn,
//         'border-color': '#ff0000'
//     });
//     setTimeout(function () {
//         $(selector).css({
//             transition: 'border-color ' + actionOut,
//             'border-color': color
//         });
//         setTimeout(function () {
//             $(selector).attr('style', '');
//         }, 2000);
//     }, 4000);
// }

// function errorShow(selector) {
//     var color = $(selector).css('border-color');
//     var transition = 'transition';
//     var actionIn = '1s ease';
//     var actionOut = '2s ease';
//     $(selector).css({
//         transition: 'border-color ' + actionIn,
//         'border-color': '#ff0000'
//     });
//     setTimeout(function () {
//         $(selector).css({
//             transition: 'border-color ' + actionOut,
//             'border-color': color
//         });
//         setTimeout(function () {
//             $(selector).attr('style', '');
//         }, 2000);
//     }, 4000);
// }


// function validatePhone(selector) {
//     var phone = $(selector).val();

//     if ((!(phone.indexOf('_') + 1) && (phone == '')) || ((phone.indexOf('_') + 1) && (phone != ''))) {
//         errorShow(selector);
//         return false;
//     } else {
//         return true;
//     }
// }

// function validateText(selector) {
//     var text = $(selector).val();
//     if (text.trim() == '') {
//         errorShow(selector);
//         return false;
//     } else {
//         return true;
//     }
// }

// $(document).on('click', 'input[type=submit]', function (e) {
//     e.preventDefault();
//     var name_form = $(this).parents('form').attr('data-form');
//     var title_form = $(this).parents('form').find('input[name=title_form]').val();
//     var phone = $(this).parents('form').find('input[name=phone]');
//     var name = $(this).parents('form').find('input[name=name]');
//     var txt = $(this).parents('form').find('textarea');
//     var valid = 2;
//     if (name_form == 'tpl1') {
//         valid = 1;
//     }
//     if (name_form == 'tpl3') {
//         if (!(validateText(txt) * validateText(name))) {
//             return;
//         }
//     } else {
//         if (!(validatePhone(phone) * validateText(name))) {
//             return;
//         }
//     }
//     var data = new FormData();
//     data.append('phone', $(phone).val());
//     data.append('name', $(name).val());
//     data.append('valid', valid);
//     data.append('txt', $(txt).val());
//     data.append('title_form', title_form);
//     $.ajax({
//         type: 'POST',
//         url: '/send/send_' + name_form,
//         contentType: false, // важно - убираем форматирование данных по умолчанию
//         processData: false, // важно - убираем преобразование строк по умолчанию
//         data: data,
//         success: function (response) {
//             if (response != 'error') {
//                 // console.log(response);
//                 window.location.href = '/success/success_' + name_form;
//             }
//         },
//         error: function (req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса
//             console.error('Упс! Ошибочка: ' + text + ' | ' + error);
//         }
//     });
// })