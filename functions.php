<?php defined('ABSPATH') OR exit('No direct script access allowed');

include_once '_setup.php';
include_once 'gallery.php';

// Change what the default 'page' supports
function edit_page_supports(){
    $id = $_GET['post'];

    if (isset($_GET['post'])) {
        $pages = array (
            get_page_by_path('home')->ID,
        );
        if (in_array($id,$pages)) {
            remove_post_type_support( 'page', 'editor' );
            remove_post_type_support( 'page', 'thumbnail' );
        }

        $pages = array (
            // get_page_by_path('home')->ID,
        );        
        if (in_array($id,$pages)) {
            remove_post_type_support( 'page', 'editor' );
        }

        $pages = array (
            get_page_by_path('home')->ID,
        );
        if (!in_array($id,$pages)) {
            add_post_type_support( 'page', 'excerpt' );
        }
    }
}   
add_action( 'init', 'edit_page_supports' );

function print_object($object,$print_r = true) {
    if ($print_r) {
        echo str_replace(array('&lt;?php&nbsp;','?&gt;'), '', highlight_string( '<?php ' .     print_r($object, true) . ' ?>', true ) ) . '<br>';
    } else {
        echo str_replace(array('&lt;?php&nbsp;','?&gt;'), '', highlight_string( '<?php ' .     var_export($object, true) . ' ?>', true ) ) . '<br>';
    }
}

customize::copyright(array (
    'name' => 'Fauzer DEV',
));

customize::login(array (
    'logo'                       => 'logo.png',
    'login_text_color'           => '#000',
    'login_background_color'     => '#fff',
    'login_background_opacity'   => '1',
    'background_wallpaper'       => 'bg.png',
    'background_overlay_color'   => '#f2f2f2',
    'background_overlay_opacity' => '0.80',
));