<?php defined('ABSPATH') OR exit('No direct script access allowed');

/**
 * @ Class theme
 * 
 * @ Útil para retornar algumas pastas do tema. 
 * 
 * @ theme::<nome da pasta> ou @theme::assets('<nome da pasta>')
 * 
 * */

class theme {
	public static function assets($args = '') {
		switch (strtolower($args)) {
			case 'root':
				return get_template_directory() . '/';
				break;
			case 'css':
				return get_stylesheet_directory_uri() . '/assets/css/';
				break;
			case 'js':
				return get_stylesheet_directory_uri() . '/assets/js/';
				break;	
			case 'images':
				return get_stylesheet_directory_uri() . '/assets/images/';
				break;
			case 'fonts':
				return get_stylesheet_directory_uri() . '/assets/fonts/';
				break;
			default:
				break;
		}
	}
	public static function root 	($args = null)	{return get_template_directory() 	   . '/' 				.	( (isset($args)) ? $args : '' );}
	public static function css 		($args = null) 	{return get_stylesheet_directory_uri() . '/assets/css/' 	.	( (isset($args)) ? $args : '' );}
	public static function js 		($args = null) 	{return get_stylesheet_directory_uri() . '/assets/js/' 		.	( (isset($args)) ? $args : '' );}
	public static function images 	($args = null)  {return get_stylesheet_directory_uri() . '/assets/images/' 	. 	( (isset($args)) ? $args : '' );}
	public static function fonts 	($args = null) 	{return get_stylesheet_directory_uri() . '/assets/fonts/' 	. 	( (isset($args)) ? $args : '' );}
}

/**
 * @ Class shortcut
 * 
 * @ Alguns atalhos para funções utilizadas do wordpress
 * 
 * @ shortcut::<função>
 * 
 * */

class shortcut {
	public static function image($id, $size) {
	    $img = wp_get_attachment_image_src($id, $size);
	    $img = $img[0];
	    return $img;
	}
	// Get post meta single value
	public static function data($args) {
	    return get_post_meta( get_the_ID(), $args, true );
	}
	// Get post meta array value
	public static function group($args) {
	    return get_post_meta( get_the_ID(), $args, false );
	}

	// Get Permalink Shortcut
	public static function link($args) {
	    return get_permalink(get_page_by_path( $args )->ID);
	}

	// Get menu itens without <ul> wrapper
	public static function menu($current_menu) {
	    $array_menu = wp_get_nav_menu_items(get_nav_menu_locations()[$current_menu]);
	    $menu = array();
	    foreach ($array_menu as $m) {
	        if (empty($m->menu_item_parent)) {
	            $menu[$m->ID] = array();
	            $menu[$m->ID]['ID']      =   $m->ID;
	            $menu[$m->ID]['title']       =   $m->title;
	            $menu[$m->ID]['url']         =   $m->url;
	            $menu[$m->ID]['children']    =   array();
	        }
	    }
	    $submenu = array();
	    foreach ($array_menu as $m) {
	        if ($m->menu_item_parent) {
	            $submenu[$m->ID] = array();
	            $submenu[$m->ID]['ID']       =   $m->ID;
	            $submenu[$m->ID]['title']    =   $m->title;
	            $submenu[$m->ID]['url']  =   $m->url;
	            $menu[$m->menu_item_parent]['children'][$m->ID] = $submenu[$m->ID];
	        }
	    }
	    return $menu;
	}
	    

	// Convert hexadecimal color to rgb format
	public static function hex2rgb($hex) {
	   $hex = str_replace("#", "", $hex);

	   if(strlen($hex) == 3) {
	      $r = hexdec(substr($hex,0,1).substr($hex,0,1));
	      $g = hexdec(substr($hex,1,1).substr($hex,1,1));
	      $b = hexdec(substr($hex,2,1).substr($hex,2,1));
	   } else {
	      $r = hexdec(substr($hex,0,2));
	      $g = hexdec(substr($hex,2,2));
	      $b = hexdec(substr($hex,4,2));
	   }
	   $rgb = array($r, $g, $b);
	   return implode(",", $rgb); // returns the rgb values separated by commas
	}

	// Check if role exist
	public static function role_exists( $role ) {
	  if( ! empty( $role ) ) {
	    return $GLOBALS['wp_roles']->is_role( $role );
	  }
	  return false;
	}
}

function fall_back_menu(){
		    return;
		}