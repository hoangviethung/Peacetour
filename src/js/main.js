import Cookie from './lib/Cookie'
import Loading from './lib/Loading'
import GetSVG from './lib/GetSVG'
import Tab from './lib/Tab'


const initializationClassSubMenu = () => {
	const itemHasSub = $('header .bottom-menu .nav-menu-bottom .item-menu-bottom').children('.nav-menu-bottom');
	itemHasSub.addClass('sub-menu-lv1');
	itemHasSub.parents('.item-menu-bottom').addClass('has-sub');
}

// SHOW BACK TO TOP
const showBackToTop = () => {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 800) {
			$('#back-top').addClass('active');
		} else {
			$('#back-top').removeClass('active');
		}
	});

	$("#back-top").on("click", function (e) {
		e.preventDefault();
		$("html,body").animate({
			scrollTop: 0
		})
	})
}

const showFormSearch = () => {
	$('.icon-search').on('click', function () {
		$('.block-form-search').toggleClass('active')
	});
}

// SLIDER HERE !!!
const bannerSlider = () => {
	var swiper = new Swiper('.slider-banner .swiper-container', {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		grabCursor: true,
		watchSlidesProgress: true,
		mousewheelControl: true,
		keyboardControl: true,
		on: {
			progress: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress;
					var innerOffset = swiper.width * 0.5;
					var innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector(".swiper-inner").style.transform =
						"translate3d(" + innerTranslate + "px, 0, 0)";
				}
			},
			touchStart: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},
			setTransition: function (speed) {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".swiper-inner").style.transition =
						speed + "ms";
				}
			}
		}
	})
}

const tourTypeSlider = () => {
	var swiper = new Swiper('.slider-tour-type .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 15,
		loop: true,
		speed: 500,
		simulateTouch: false,
		// Disable preloading of all images
		preloadImages: false,
		// Enable lazy loading
		lazy: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		breakpoints: {
			768: {
				slidesPerView: 6,
			}
		},
	})
}

const hotTourSlider = () => {
	var swiper = new Swiper('.slider-hot-tour .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: false,
		speed: 500,
		simulateTouch: false,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.slider-hot-tour .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},

			578: {
				slidesPerView: 2,
			}
		},
	})
}

const brandSlider = () => {
	var swiper = new Swiper('.slider-brand .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 0,
		loop: false,
		speed: 500,
		simulateTouch: false,
		// Disable preloading of all images
		preloadImages: false,
		// Enable lazy loading
		lazy: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		breakpoints: {

		},
	})
}

const productDetailSlider = () => {
	var thumbnail = new Swiper('.slider-product-detail .slider-thumbnail .swiper-container', {
		spaceBetween: 10,
		slidesPerView: 2,
		observer: true,
		observeParents: true,
		slideToClickedSlide: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.slider-thumbnail .swiper-button-next',
			prevEl: '.slider-thumbnail .swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
			},
			575: {
				slidesPerView: 3,
			},
			1025: {
				slidesPerView: 4,
			}
		},
	});

	var review = new Swiper('.slider-product-detail .slider-preview .swiper-container', {
		effect: 'fade',
		autoHeight: true,
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		simulateTouch: false,
		allowTouchMove: false,
		loopedSlides: 3,
		thumbs: {
			swiper: thumbnail,
		},
		navigation: {
			nextEl: '.slider-thumbnail .swiper-button-next',
			prevEl: '.slider-thumbnail .swiper-button-prev',
		}
	});

	$(".slider-product-detail .slider-preview .swiper-container").hover(function () {
		thumbnail.autoplay.stop();
		review.autoplay.stop();
	})
}

const showRating = () => {
	$('.rate[data-rate]').each(function () {

		var numberStart = $(this).attr('data-rate');

		if (numberStart == 5) {
			$(this).find(".img-star .star-rated").width("100%");
		} else if (numberStart == 4) {
			$(this).find(".img-star .star-rated").width("80%");
		} else if (numberStart == 3) {
			$(this).find(".img-star .star-rated").width("60%");
		} else if (numberStart == 2) {
			$(this).find(".img-star .star-rated").width("40%");
		} else if (numberStart == 1) {
			$(this).find(".img-star .star-rated").width("20%");
		}
	})

	$('.rate[data-rate]').each(function () {

		var numberStart = $(this).attr('data-rate');

		if (numberStart == 5) {
			$(this).find(".img-star .star-rated").width("100%");
		} else if (numberStart == 4) {
			$(this).find(".img-star .star-rated").width("80%");
		} else if (numberStart == 3) {
			$(this).find(".img-star .star-rated").width("60%");
		} else if (numberStart == 2) {
			$(this).find(".img-star .star-rated").width("40%");
		} else if (numberStart == 1) {
			$(this).find(".img-star .star-rated").width("20%");
		}
	})

	$('.rate[data-rate]').each(function () {

		var numberStart = $(this).attr('data-rate');

		if (numberStart == 5) {
			$(this).find(".img-star .star-rated").width("100%");
		} else if (numberStart == 4) {
			$(this).find(".img-star .star-rated").width("80%");
		} else if (numberStart == 3) {
			$(this).find(".img-star .star-rated").width("60%");
		} else if (numberStart == 2) {
			$(this).find(".img-star .star-rated").width("40%");
		} else if (numberStart == 1) {
			$(this).find(".img-star .star-rated").width("20%");
		}
	})
}

const settingFancyBoxLibrarySite = () => {
	$('[data-fancybox]').fancybox({
		thumbs: {
			autoStart: true,
		}
	});
}

function change_alias(str) {
	str = str.toLowerCase();
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	str = str.replace(/[^0-9a-z]/gi, ' ');
	str = str.replace(/!|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
	str = str.replace(/ + /g, " ");
	str = str.replace(/ /g, "-");
	str = str.trim();
	return str == '-' ? '' : str;
}

const libraryImages = () => {
	$('.list-item .item-library-images').each(function (index) {
		const name = $(this).find('.content .box-info h2').text();
		$(this).find('.d-n a').attr('data-fancybox', change_alias(name) + '-' + index)
		$(this).children('a').attr('data-fancybox', change_alias(name) + '-' + index)
	})
}

function DatePickerInit() {
	$(".date-picker").flatpickr({
		enableTime: true,
		dateFormat: "Y-m-d H:i",
		time_24hr: true,
		defaultDate: new Date(),
	})
}

const showContentTourProgram = () => {
	$('.tour-program').on('click', function () {
		$(this).toggleClass('active');
		$('.tour-program').not(this).find('.item__content').slideUp();
		$(this).find('.item__content').slideToggle();
		$('.tour-program').not(this).removeClass('active');
	});
}

document.addEventListener('DOMContentLoaded', () => {
	Cookie();
	GetSVG();
	Loading();
	initializationClassSubMenu();
	showBackToTop();
	showFormSearch();
	bannerSlider();
	brandSlider();
	tourTypeSlider();
	hotTourSlider();
	productDetailSlider();
	showRating();
	DatePickerInit();
	libraryImages();
	showContentTourProgram();
	settingFancyBoxLibrarySite();
	const tabBlockBookTour = new Tab('.block-book-tour');
	const tabProdcutDetail = new Tab('.product-information-detail');
})