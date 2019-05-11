'use strict';

(function($){
	$(document).ready(function() {
		// Isotope
isoImages();

		$(window).resize(function() {
			isoImages();
		});

		function isoImages() {
			$('.blocks').isotope({
				itemSelector: '.blocks__img',
				percentPosition: true,
				masonry: {
					columnWidth: '.sizer',
					gutter: 10
				}
			});

			$('.second__sors').on('click', 'li', function() {
				var val = $(this).data('filter');
				$('.blocks').isotope({filter: val})
			});

			if ($(window).innerWidth() < 576) {
				$('.blocks').isotope({
					masonry: {
						gutter: 0
					}
				});
			}
		}
	$('.third__container').slick({
  infinite: true,
  arrows: false,
  dots: true
});
	$('.fifth__slider').slick({
  infinite: false,
  arrows: false,
  dots: true
});
	
	});
})(jQuery);


function initMap() {
        var beetroot = {lat: 49.568652, lng: 34.585640};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: beetroot
        });
        var marker = new google.maps.Marker({
          position: beetroot,
          map: map,
          icon : 'images/marker.png'
        });
      }