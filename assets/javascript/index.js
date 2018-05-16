/*$(document).ready(function() {
	$('a[href^="#"]').on("click", function(event) {
		var target = $(this.getAttribute("href"));
		if (target.length) {
			event.preventDefault();
			$("html, body")
				.stop()
				.animate(
					{
						scrollTop: target.offset().top
					},
					1000
				);
		}
	});
});
*/
var scroll_pos = 0;
var scroll_time;
 
$(window).scroll(function() {
    clearTimeout(scroll_time);
    var current_scroll = $(window).scrollTop();
    
    if (current_scroll >= $('.navbar').outerHeight()) {
        if (current_scroll <= scroll_pos) {
            $('.navbar').removeClass('hidden');    
        }
        else {
            $('.navbar').addClass('hidden');  
        }
    }
        
    scroll_time = setTimeout(function() {
        scroll_pos = $(window).scrollTop();
    }, 100);
});
