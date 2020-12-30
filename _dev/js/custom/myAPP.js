// Default Site Variables, don't need to change anymore <3
var $__ajax = '';

var $APP = {
    site: {
        name: (document.title.indexOf('-') > 0) ? document.title.substr(0, document.title.indexOf('-') - 1) : document.title,
        url: (document.location.href.indexOf('/dinamic') != -1) ? document.location.origin + '/dinamic' : (document.location.href.indexOf('/novo') != -1) ? document.location.origin + '/novo' : document.location.origin,
    },
    check: function(args) {
        if  ($('body').attr('data-app')) {
            return ($('body').attr('data-app').indexOf(args) >= 0) ? true : false;
        }
        //
    },
    call: function(url) {
        // Abort Previous Ajax Call if there is one
        if ($__ajax != '') $__ajax.abort();
        // The Ajax
        $__ajax = $.ajax({
            url: url,
            dataType: 'html',
            type: 'GET',
            success: function(data) {
                // Remove the content
                setTimeout(function() {
                    // Clean Content and add it
                    $('[data-route]').html('');
                    $('[data-route]').html($(data).find('[data-route]').html());

                    $('[data-route]').removeAttr('class');
                    $('[data-route]').attr({
                        'data-route': $(data).find('[data-route]').attr('data-route'),
                        'class': $(data).find('[data-route]').attr('class')
                    }); // Get the route

                    // Call the Global Route
                    $APP.global();

                    // Call the Active Route
                    $APP.execute('$APP.' + $('[data-route]').attr('data-route'));

                    // Change Document Title
                    document.title = $(data).filter('title').text();

                    // Change the History
                    history.pushState({
                        url: url,
                        title: document.title,
                    }, document.title, url);
                    $__ajax = '';


                    // Add New Data
                    if ($APP.site.route == 'home') {
                        $('body').removeClass('page').addClass('page-type index');
                    } else {
                        $('body').removeClass('index').addClass('page-type page');
                    }
                    // Add Class loaded on job finished
                    if ($APP.check('loader'))
                        $('body').addClass('loaded');

                    // Change Data Type

                }, 150);

            },
            beforeSend: function() {
                // Remove the loaded class 
                if ($APP.check('loader'))
                    $('body').removeClass('loaded');
            },
            error: function(e) {
                if ($APP.check('loader'))
                    $('body').addClass('loaded');
            }

        });
    },
    execute: function(functionName, context) {
        if (context == null) {
            context = window;
        }
        var args = Array.prototype.slice.call(arguments, 2);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        for (var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }

        return (context[func]) ? context[func].apply(context, args) : console.warn(
            '%cROUTE PROBLEM\n%cROUTE %cNOT DEFINED%c OR %cNOT FOUND%c IN YOUR MAIN.JS',
            'color:#F7EF81;font-size:24px;text-decoration:underline;',
            'font-size:10px;',
            'font-size:10px;text-decoration:underline;',
            'color:red;font-size:10px;',
            'font-size:10px;text-decoration:underline;',
            'font-size:10px;'
        );
    }
}

// When load a page, verify which page
$(window).load(function() {
    if ($('[data-route]').exist()) {
        $APP.global();
        $APP.execute('$APP.' + $('[data-route]').attr('data-route'));
        $APP.site.route = $('[data-route]').attr('data-route');

    }
    if ($APP.check('loader'))
        $('body').addClass('loaded');
});

// Popstate listener
// $(window).on('popstate', function(e) {
//     var state = e.originalEvent.state;
//     if (state != null) {
//         $APP.call(state.url);
//     } else {
//         $APP.call($APP.site.url);
//     }
// });

// Link clicking
// $('body').on('click', 'a[href]:not([target*="blank"]):not([target*="Blank"]):not([href*="tel"]):not([href*="mailto"]):not([data-lightbox]):not([data-nf]):not([download])', function(evt) {
//     if ($APP.check('single')) {
//         evt.preventDefault();
//         var url = $(this).attr("href");

//         $APP.call(url);
//         $('body').GoTo(0);

//         if ($('body').attr('data-analytics') != '') {
//             var path = evt.currentTarget.pathname + evt.currentTarget.hash;
//             var title = evt.currentTarget.title || evt.currentTarget.text;
//             gaTrack(path, title);
//         }
//     }
// });

// if ($('body[spa]').exist()) {
//     function gaInit(args) {
//         $.getScript('//www.google-analytics.com/analytics.js'); // jQuery shortcut
//         window.ga = window.ga || function() {
//             (ga.q = ga.q || []).push(arguments)
//         };
//         ga.l = +new Date;
//         ga('create', args, 'auto');

//         console.log("Initalized");
//         return ga;
//     };

//     function gaTrack(path, title) {
//         var track = {
//             page: path,
//             title: title
//         };

//         ga = window.ga || gaInit($analytics);

//         ga('set', track);
//         ga('send', 'pageview');

//         console.log("Tracked");
//     };
// } else {
//     if ($analytics != '') {
//         (function(i, s, o, g, r, a, m) {
//             i['GoogleAnalyticsObject'] = r;
//             i[r] = i[r] || function() {
//                 (i[r].q = i[r].q || []).push(arguments)
//             }, i[r].l = 1 * new Date();
//             a = s.createElement(o),
//                 m = s.getElementsByTagName(o)[0];
//             a.async = 1;
//             a.src = g;
//             m.parentNode.insertBefore(a, m)
//         })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

//         ga('create', $analytics, 'auto');
//         ga('send', 'pageview');
//     }
// }