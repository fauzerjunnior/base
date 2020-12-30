<?php defined('ABSPATH') OR exit('No direct script access allowed');

/** 
 * Setup the theme
 * 
 * @ Call Shortcuts  		file _shortcuts.php
 * @ Call Copyright 		file _copyright.php
 * @ Call Enqueue 			file _enqueue.php
 * 
 * @ Clean admin menus 		func clean_adminbar()->hide_adminbar_options()		
 * @ Set theme support 		func clean_adminbar()
 * Register custom things
 * Register Configs (They work like modules, eachother independent)
 * 
 */

require_once get_template_directory() . '/theme_includes/_shortcuts.php';
require_once get_template_directory() . '/theme_includes/_copyright.php';
require_once get_template_directory() . '/theme_includes/_enqueue.php';
require_once get_template_directory() . '/theme_includes/_posts.php';
require_once get_template_directory() . '/theme_includes/_options.php';
require_once get_template_directory() . '/theme_includes/cmb/custom-meta-boxes.php';
add_filter( 'cmb_meta_boxes', 'register_cmt' );
function register_cmt( array $meta_boxes ) {
	foreach (glob(theme::assets('root') . '/theme_custom/metabox-*.php') as $mb) {
		require $mb;
	}	
	return $meta_boxes;
}

add_action( 'after_setup_theme', 'clean_adminbar' );
function clean_adminbar() {
	add_action('wp_before_admin_bar_render', 'hide_adminbar_options');
	function hide_adminbar_options() {
	  global $wp_admin_bar;
	  $wp_admin_bar->remove_menu('wp-logo');
	  $wp_admin_bar->remove_menu('about');
	  $wp_admin_bar->remove_menu('wporg');
	  $wp_admin_bar->remove_menu('documentation');
	  $wp_admin_bar->remove_menu('support-forums');
	  $wp_admin_bar->remove_menu('feedback');
	  $wp_admin_bar->remove_menu('updates');
	  $wp_admin_bar->remove_menu('comments');

	  // $wp_admin_bar->remove_menu('new-content');
	  $wp_admin_bar->remove_menu('new-media');
	  $wp_admin_bar->remove_menu('new-page');
	  $wp_admin_bar->remove_menu('new-user');

	  // $wp_admin_bar->remove_menu('top-secondary');
	  $wp_admin_bar->remove_menu('wp-logo-external');
	  $wp_admin_bar->remove_menu('view');
	  $wp_admin_bar->remove_menu('wpseo-menu'); // plugin yoast
	}

	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption') );
}