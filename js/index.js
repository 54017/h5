$(function() {
	$('.wp-inner').fullpage({
		afterChange: function() {
			if ($.fn.fullpage.getCurIndex() == 0) {
				$.fn.fullpage.stop();
			}
		}
	});

	$('.start-bt, start-img').tap(function() {
		$.fn.fullpage.moveNext();
		$.fn.fullpage.start()
	})

});