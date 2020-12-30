<?php defined('ABSPATH') OR exit('No direct script access allowed');

function myTheme_enqueue() {

	wp_deregister_script('jquery');

	//Scripts
	// wp_enqueue_script('jquery', theme::assets('JS') . 'jquery.min.js',array(),'2.41.1',true);
	// wp_enqueue_script('vendor',  theme::assets('JS') . 'vendors.min.js',array(),'1.0',true);
	// // wp_enqueue_script('app',  theme::assets('JS') . 'custom.min.js',array(),'1.0',true);

	// Ajax Info
    wp_localize_script( 'app', '$wp', array( 
		'site' => array (
			'ajax'         => admin_url( 'admin-ajax.php' ),
			'name'         => get_bloginfo( 'name' ),
			'plugins_url'  => plugins_url(),
		),
		'user' => array (
			'is_logged_in' => (is_user_logged_in()) ? true : false ,
			'Username'     => (wp_get_current_user() != 0) ? wp_get_current_user()->user_login : false ,
			'Email'        => (wp_get_current_user() != 0) ? wp_get_current_user()->user_email : false ,
			'FirstName'    => (wp_get_current_user() != 0) ? wp_get_current_user()->user_firstname : false ,
			'LastName'     => (wp_get_current_user() != 0) ? wp_get_current_user()->user_lastname : false ,
			'DisplayName'  => (wp_get_current_user() != 0) ? wp_get_current_user()->display_name : false ,
			'ID'           => (wp_get_current_user() != 0) ? wp_get_current_user()->ID : false ,
		)) 
	);

    // Site Info
    wp_add_inline_script( 'app', '$APP.site.url = "'.get_site_url().'";$APP.site.name="'.get_bloginfo('name').'";', 'after' );



	//Styles
	wp_enqueue_style('default-style', theme::assets('CSS') . 'style.min.css', array(),'1.0');



	//Default Style.CSS
	wp_enqueue_style( 'style', get_stylesheet_uri() );

	
}
add_action( 'wp_enqueue_scripts', 'myTheme_enqueue' );


function myTheme_admin_scripts() {
	wp_enqueue_style('font-awesome','https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',array(),'4.7.0');
	wp_enqueue_style('admin', theme::assets('CSS') . 'admin.css',array(),'1.0');
	wp_enqueue_script('masked input', theme::assets('JS') . 'jquery.mask.js',array( ),'1.0',true);
	wp_enqueue_script('admin-app', theme::assets('JS') . 'admin.js',array( ),'1.0',true);
	wp_enqueue_script('gallery-metabox', theme::assets('JS') . 'gallery-metabox.js',array( ),'1.0',true);
	wp_enqueue_style('gallery-metabox', theme::assets('CSS') . 'gallery-metabox.css',array(),'1.0');
}

add_action('admin_enqueue_scripts','myTheme_admin_scripts');

add_editor_style( array( theme::assets('CSS') . 'editor.css' ) );