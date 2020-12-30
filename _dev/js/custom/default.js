
var myTabs = function (e) {};

/* *********************************************************
*   Element Exist?!
*   ------------
*   use $(element).exist();
*   
*   will return true or false if the element exist, if you
*   pass a class or tag, don't forget the index (.eq)
********************************************************* */
$.fn.exist = function () {
    return (this.length > 0);
}


/* *********************************************************
*   Smooth Scroll To
*   ------------
*   use ScrollTo($('jquery'),speed(optional));
*   
*   will smoothly scroll to the desired element
********************************************************* */
$.fn.GoTo = function( args ) {
    var el = this;
    var exec = function (el ,options) {

        var config = {
            spe: (options != undefined) ? (options.speed == undefined) ? 400 : options.speed : 400,
            thr: (options != undefined) ? (options.throtle == undefined) ? 0 : options.throtle : 0,
            nav: (options != undefined) ? (options.nav != true) ? 0 : $('nav').height() : 0,
        }
        
        $('html, body').animate({
            scrollTop: el.offset().top - config.thr - config.nav
        }, (options == undefined) ? 400 : config.spe);

    }

    exec(el,args);
}


/* *********************************************************
*   Set Elements the Same Height
*   ------------
*   use $(element).equalHeight(action);
*   actions:
*   'min' = min-height
*   'max' = max-height
*   null  = height
********************************************************* */
$.fn.equalHeight = function( action ) {
    var bigheight = 0;
    this.each(function () {
        if ($(this).height() > bigheight) bigheight = $(this).innerHeight();
    });
    if ( action === "min") {
        this.css('min-height', bigheight);
    } else if ( action === "max" ) {
        this.css('max-height', bigheight);
    } else {
        this.css('height', bigheight);
    }
};


/* *********************************************************
*   Toggle Element
*   ------------
*   use <element data-toggle="element"></element>
*
*   will toggle 'active' class to the toggler and the
*   element set in the data-toggle attr
********************************************************* */
jQuery('[data-toggle]').on('click', function () {
    $(this).toggleClass('active');
    $($(this).attr('data-toggle')).toggleClass('active');
});


/* *********************************************************
*   IMG to SVG
*   ------------
*   use <img class="svg">
*
*   will convert src="image.svg" to inline SVG
********************************************************* */
$.fn.toSVG = function () {
    this.each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
}

$.fn.square = function () {
    this.height(this.innerWidth());
}