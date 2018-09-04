$('*[data-js-tabs]').children().on('click', function () {
    var tabs_obj = $(this).parent().attr('data-js-tabs');
    $(tabs_obj).children().eq($(this).index()).show().siblings().hide();
    $(this).addClass('active').siblings().removeClass('active');
});
$.each($('*[data-js-tabs]'), function (index, el) {
    var arg = window.location.search;
    if (arg != '') {
        arg = arg.split('?')[1].split('=')[1];
        console.log(arg);
        $(el).children().eq(arg - 1).trigger('click');

    } else {
        $(el).children().first().addClass('active');
        $($(el).attr('data-js-tabs')).children().eq(0).show().siblings().hide();;
    }
});

$('.address-vip').on('click', function () {
    $('.add-address').fadeIn();
    $('.add-address').on('click', function () {
        return false;
    })
    $('body').one('click', function () {
        $('.add-address').fadeOut();
    })
    return false;
})

$('.product-center .product-center-content .number a.min').on('click', function (e) {
    e.preventDefault()
    var value = parseInt($(this).siblings('.value').text());
    value <= 1 ? $(this).siblings('.value').text(value) : $(this).siblings('.value').text(--value)

})
$('.product-center .product-center-content .number a.add').on('click', function (e) {
    e.preventDefault()
    var value = parseInt($(this).siblings('.value').text());
    $(this).siblings('.value').text(++value)
})


$('.page-custom-block .composition-info .btn-red').on('click', function (e) {
    e.preventDefault();

    const elements = `
    <tr>
        <td>
            <input type="text" class="input w120h38">
        </td>
        <td>
            <input type="text" class="input w120h38">
        </td>
        <td>
            <input type="text" class="input w120h38">
        </td>
        <td>
            <input type="text" class="input w120h38">
        </td>
        <td>
            <a href="#" class="btn-del">删除</a>
        </td>
    </tr>`;
    $('.page-custom-block .composition-info table tbody').append(elements);
})
$('.page-custom-block .composition-info').on('click', '.btn-del', function (e) {
    e.preventDefault();
    $(this).parents('tr').remove();
})

$('.product-center .product-center-content .add-card').on('click', function (e) {
    e.preventDefault();
    $('#login-dialog').fadeIn();
    $('#fade').fadeIn();
})
$('#login-dialog .login .close').on('click', function (e) {
    e.preventDefault();
    $('#login-dialog').fadeOut();
    $('#fade').fadeOut();
})

$('.product-center .product-center-content .add-card').on('click', function (e) {
    e.preventDefault();
    var i_value = parseInt($(this).parents('tr').find('.number .value').text());
    var i_current_value = parseInt($('.mine_product ul .cars .num').text());
    var i_total_value = i_current_value + i_value;
    $('.header .option a span').eq(1).text(`购物车(${i_total_value})`)
    $('.mine_product ul .cars .num').text(i_total_value);

})


var mySwiper = new Swiper('.swiper .swiper-container', {
    pagination: '.swiper .swiper-pagination',
    paginationClickable: true,
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
})
var swiper_one = new Swiper('.swiper-one .swiper-container', {
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    slidesPerView: 4,
    spaceBetween: 20,
    prevButton: '.swiper-one .swiper-button-prev',
    nextButton: '.swiper-one .swiper-button-next',
})
var swiper_two = new Swiper('.swiper-two .swiper-container', {
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    slidesPerView: 4,
    spaceBetween: 20,
    prevButton: '.swiper-two .swiper-button-prev',
    nextButton: '.swiper-two .swiper-button-next',
})
swiper_two.stopAutoplay && swiper_two.stopAutoplay()
$('.main-hot-block .tabs-control a').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active')
    $('.main-hot-block .tabs-container .item').eq($(this).index()).addClass('active').siblings().removeClass(
        'active');
    if ($(this).index() == 0) {
        swiper_one.startAutoplay();
        swiper_two.stopAutoplay();
    } else {
        swiper_one.stopAutoplay();
        swiper_two.startAutoplay();
    }
})


$('.vip-tax-rate a.submit').on('click', function () {
    $.each($('.vip-tax-rate table input'), function (index, val) {
        if ($(val).val() == '') {
            layer.msg('请补充所有必填项');
            return false;
        }
        if (index == 1 && $(val).val().search(/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/) == -1) {
            layer.msg('请输入正确的电话号码！');
            return false;

        }

    })
})
//