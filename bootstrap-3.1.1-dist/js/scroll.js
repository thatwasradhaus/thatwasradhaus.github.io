$(document).ready(function(){
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
	    e.preventDefault();
	 
	    var target = this.hash,
	    $target = $(target);
	 
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});




<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->

<!-- Begin
function movepic(img_name,img_src) {
document[img_name].src=img_src;
}
// End -->


<!-- menu slide div work -->
(function ($) {
    $.fn.showHide = function (options) {
 
    //default vars for the plugin
        var defaults = {
            speed: 1000,
            easing: '',
            changeText: 0,
            showText: 'Show',
            hideText: 'Hide'
 
        };
        var options = $.extend(defaults, options);
 
        $(this).click(function () {
// optionally add the class .toggleDiv to each div you want to automatically close
                      $('.toggleDiv:hidden').slideUp(options.speed, options.easing);
             var toggleClick = $(this);
             // this reads the rel attribute of the button to determine which div id to toggle
             var toggleDiv = $(this).attr('rel');
             // here we toggle show/hide the correct div at the right speed and using which easing effect
             $(toggleDiv).slideToggle(options.speed, options.easing, function() {
             // this only fires once the animation is completed
             if(options.changeText==1){
             $(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
             }
              });
 
          return false;
 
        });
 
    };
})(jQuery);

$(document).ready(function(){
 
   $('.show_hide').showHide({
        speed: 1000,  // speed you want the toggle to happen
        easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
        changeText: 0, // if you dont want the button text to change, set this to 0
        showText: 'work',// the button text to show when a div is closed
        hideText: 'work' // the button text to show when a div is open
 
    });
 
});
// End -->

<!-- menu slide div about -->
(function ($) {
    $.fn.Hide = function (options) {
 
    //default vars for the plugin
        var defaults = {
            speed: 1000,
            easing: '',
            changeText: 0,
            hideText: 'work'
 
        };
        var options = $.extend(defaults, options);
 
        $(this).click(function () {
// optionally add the class .toggleDiv to each div you want to automatically close
                      $('.toggleDiv:visible').hide(options.speed, options.easing);
             var toggleClick = $(this);
             // this reads the rel attribute of the button to determine which div id to toggle
             var toggleDiv = $(this).attr('rel');
             // here we toggle show/hide the correct div at the right speed and using which easing effect
             $(toggleDiv).slideup(options.speed, options.easing, function() {
             // this only fires once the animation is completed
             if(options.changeText==1){
             $(toggleDiv).is(":visible") ? Click.text(options.hideText) : Click.text(options.hideText);
             }
              });
 
          return false;
 
        });
 
    };
})(jQuery);

$(document).ready(function(){
 
   $('.hide').Hide({
        speed: 1000,  // speed you want the toggle to happen
        easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
        changeText: 0, // if you dont want the button text to change, set this to 0
        hideText: 'work' // the button text to show when a div is open
 
    });
 
});
// End -->







