//require('./css/swiper.min.css');
require('./../css/index.css');
require('./../css/swiper.min.css');
require('./zepto-full.js');
require('./swiper.min.js');
$(function() {
	var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical'
    })

    mySwiper.lockSwipes();

    mySwiper.on('onSlideChangeEnd', function() {
    	if (mySwiper.activeIndex == 0) {
    		mySwiper.lockSwipes();
    	}
    })

    $('.start-bt').tap(function() {
    	mySwiper.unlockSwipes();
    	mySwiper.slideNext(null, 500);
    })

});