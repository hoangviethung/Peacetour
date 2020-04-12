import Cookie from './lib/Cookie'
import Loading from './lib/Loading'
import GetSVG from './lib/GetSVG'
import Tab from './lib/Tab'
import YoutubeController from './lib/YoutubeController'

// SHOW BACK TO TOP
const showBackToTop = () => {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 800) {
			$('#back-to-top').addClass('active');
		} else {
			$('#back-to-top').removeClass('active');
		}
	});

	$("#back-to-top").on("click", function (e) {
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
		slidesPerView: 6,
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
		breakpoints: {},
	})
}

const hotTourSlider = () => {
	var swiper = new Swiper('.slider-hot-tour .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 0,
		loop: false,
		speed: 500,
		simulateTouch: false,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		breakpoints: {},
	})
}

const brandSlider = () => {
	var swiper = new Swiper('.slider-brand .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 15,
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
		breakpoints: {},
	})
}

document.addEventListener('DOMContentLoaded', () => {
	Cookie();
	GetSVG();
	Loading();
	YoutubeController();
	showBackToTop();
	showFormSearch();
	bannerSlider();
	brandSlider();
	tourTypeSlider();
	hotTourSlider();
	const tabBlockBookTour = new Tab('.block-book-tour');
})