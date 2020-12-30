<?php defined('ABSPATH') OR exit('No direct script access allowed');

get_header();

while ( have_posts() ) { 
	the_post();
	if (locate_template('template/page-' . $post->post_name . '.php')){
			get_template_part('template/page',$post->post_name);
	} else {
		the_content();
	}
}
get_footer();