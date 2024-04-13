$(function() {

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.shop__filter-btn').on('click', function(){
    $('.shop__filters').slideToggle();
  });

  

    $('.blog-page__slider').slick({
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg"  width="7px" height="11px" viewBox="0 0 7 11" version="1.1"><g><path d="M 0.90625 5.015625 C 0.632812 5.28125 0.632812 5.71875 0.90625 5.988281 L 4.40625 9.425781 C 4.679688 9.695312 5.125 9.695312 5.398438 9.425781 C 5.671875 9.15625 5.671875 8.71875 5.398438 8.453125 L 2.390625 5.5 L 5.394531 2.546875 C 5.667969 2.28125 5.667969 1.84375 5.394531 1.574219 C 5.121094 1.304688 4.675781 1.304688 4.402344 1.574219 L 0.902344 5.011719 ZM0906255015625"><g><svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="7px" height="11px" viewBox="0 0 7 11"><g><path d="M 6.09375 5.015625 C 6.367188 5.28125 6.367188 5.71875 6.09375 5.988281 L 2.59375 9.425781 C 2.320312 9.695312 1.875 9.695312 1.601562 9.425781 C 1.328125 9.15625 1.328125 8.71875 1.601562 8.453125 L 4.609375 5.5 L 1.605469 2.546875 C 1.332031 2.28125 1.332031 1.84375 1.605469 1.574219 C 1.878906 1.304688 2.324219 1.304688 2.597656 1.574219 L 6.097656 5.011719 Z M 6.09375 5.015625 "/></g></svg></button>',
      infinite: false,
    });

    $('.product-tabs__top-item').on('click', function(e) {
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');

    })

    $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false
    });
    $('.product-slide__big').slick({
        asNavFor: '.product-slide__thumb',
        draggable: false,
        arrows: false,
        fade: true,
        responsive: [
          {
            breakpoint: 1051,
            settings: {
              draggable: true,
            }
          },
        ]
    });

    $('.shop-content__filter-btn').on('click', function() {
        $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
        $(this).addClass('shop-content__filter-btn--active');
    });

    $('.button-list').on('click', function() {
        $('.product-item').addClass('product-item--list');
        $('.shop-content__inner').addClass('shop-content__nogrid');
    });

    $('.button-grid').on('click', function() {
        $('.product-item').removeClass('product-item--list');
        $('.shop-content__inner').removeClass('shop-content__nogrid');
    });

    $('.select-style, .product-one__item-num').styler();

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function(data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function(data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpead: 2000
    });

    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true,
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 9.902344 0.5625 C 9.738281 0.21875 9.386719 0 9.003906 0 C 8.617188 0 8.273438 0.21875 8.101562 0.5625 L 6.09375 4.695312 L 1.605469 5.359375 C 1.230469 5.414062 0.917969 5.679688 0.804688 6.039062 C 0.6875 6.398438 0.78125 6.792969 1.050781 7.058594 L 4.304688 10.28125 L 3.539062 14.835938 C 3.476562 15.210938 3.632812 15.589844 3.941406 15.8125 C 4.25 16.035156 4.660156 16.0625 4.996094 15.882812 L 9.007812 13.742188 L 13.015625 15.882812 C 13.351562 16.0625 13.761719 16.039062 14.070312 15.8125 C 14.382812 15.585938 14.539062 15.210938 14.476562 14.835938 L 13.703125 10.28125 L 16.960938 7.058594 C 17.226562 6.792969 17.324219 6.398438 17.207031 6.039062 C 17.085938 5.679688 16.777344 5.414062 16.402344 5.359375 L 11.914062 4.695312 Z M 9.902344 0.5625 "/></g></svg>',

    });


    // Таймер блока promo
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endtime) {
        const clock = document.querySelector('.promo__clock');
        const daysSpan = clock.querySelector('.promo__days');
        const hoursSpan = clock.querySelector('.promo__hours');
        const minutesSpan = clock.querySelector('.promo__minutes');
        const secondsSpan = clock.querySelector('.promo__seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = $('.promo__clock').attr('data-time');
    initializeClock('promo__clock', deadline);
    // Таймер блока promo


});