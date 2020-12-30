<?php defined('ABSPATH') OR exit('No direct script access allowed');

get_header();

while ( have_posts() ) { 
	the_post();
	if (locate_template('template/mobile-single-' . get_post_type() . '.php') != '' || locate_template('template/desktop-single-' . get_post_type() . '.php') != '') {
		if (is_mobile() || is_tablet()) {
		get_template_part('template/mobile-single',get_post_type());
		} else {
		get_template_part('template/desktop-single',get_post_type());
		}
	} else if (locate_template('template/single-' . get_post_type() . '.php')) {
		get_template_part('template/single',get_post_type());
	} else {
		the_content();
	}
} 

get_footer();