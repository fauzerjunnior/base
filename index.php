<?php defined('ABSPATH') OR exit('No direct script access allowed');

get_header();

while ( have_posts() ) { 
	the_post();
	if (locate_template('template/mobile-page-index.php') != '' || locate_template('template/desktop-page-index.php') != '') {
		if (is_mobile() || is_tablet()) {
			get_template_part('template/mobile-page','index');
		} else {
			get_template_part('template/desktop-page','index');
		}
	} else if (locate_template('template/page-index.php')){
			get_template_part('template/page','index');
	} else {
		the_content();
	}
}
get_footer();