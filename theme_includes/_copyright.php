<?php defined('ABSPATH') OR exit('No direct script access allowed');

class customize {
	/*
	*	Copyright Footer [v2.1]
	*	copyright::copyright(array ('name' => 'your name','url'  => 'your url'));
	*/ 
	public static function copyright ($args = null) {
		if ($args !== null) {
			add_filter('admin_footer_text', function () use ($args) {
					$args['url']  = (!isset($args['url']))?'https://br.wordpress.org/':$args['url'];	
					$args['name'] = (!isset($args['name']))?'Wordpress':$args['name'];	
					return '<i>Tema Por <a target="_blank" href="'.esc_url( $args['url'] ).'">'.$args['name'].'</a></i>';
			},12);
		}
	}
	
	/*
	*	Custom Login [v2.1]
	*	copyright::copyright(array ('logo' => 'logo filename','background'  => 'background filename'));
	*	Must be in the /images folder and you must add the file extension
	*/ 
	public static function login ($args = null) {
		if ($args !== null) {
			add_action( 'login_enqueue_scripts', function () use ($args) { ?>
				<style>
					/* Background & Background overlay color */
					body.login * {
						box-sizing: border-box;
					}
					body.login {
				        background-color: #e4e4e4;
				        background-size: cover;
				        background-repeat: no-repeat;
				        background-position: center;
				        color: #000;
  						overflow: hidden;
  						width: 100vw;
  						height: 100vh;
  						position: relative;
  						z-index: 0;
				        <?php echo (isset($args['background_wallpaper'])) ? 'background-image: url(' . theme::assets('images') . $args['background_wallpaper'] . ');' : ''  ?>;
				    }
				    body.login #login {
				    	position: absolute;
				    	left: 0;
				    	right: 0;
				    	top: 0;
				    	padding: 0;
				    	margin: 0;
				    	width: 100%;
				    	height: 100%;
			        	display: flex;
  						align-items: center;
				    	z-index: 1;
				    }
				    body.login #login::before {
						content: '';
						display: block;
						position: absolute;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
						width: 100%;
						height: 100%;
						background-color: rgba(<?php echo (isset($args['background_overlay_color'])) ? shortcut::hex2rgb($args['background_overlay_color']) : '0,0,0'; ?>,<?php echo (isset($args['background_overlay_opacity'])) ? $args['background_overlay_opacity'] : '0.75'; ?>);
						pointer-events: none;
						z-index: -1;
				    }

				    /* Login Form */
				    body.login form#loginform {
				    	left: 0 !important;
				    	top: 0;
				    	width: 320px;
				    	background: transparent !important;
						box-shadow: none;
						position: static !important;
				    }
				    body.login label {
				        color: <?php echo (isset($args['login_text_color'])) ? $args['login_text_color'] : '#000' ;?>;
				    }
				    body.login form#loginform::before {
						content: '';
						display: block;
						position: absolute;
						width: 320px;
						height: 100%;
						left: 0;
						top: 0;
						z-index: -1;
						background-color: rgba(<?php echo (isset($args['login_background_color'])) ? shortcut::hex2rgb($args['login_background_color']) : '255,255,255'; ?>,<?php echo (isset($args['login_background_opacity'])) ? $args['login_background_opacity'] : '0.75'; ?>);
					}

					/* Login Form Input */
					.login form .input, 
					.login form input[type=checkbox], 
					.login input[type=text] {
						text-align: center;
					}

					/* Error Message */
				    body.login .message, body.login #login_error {
				        padding: 12px;
				        margin-left: 0;
				        background-color: transparent;
				        -webkit-box-shadow: none;
				        box-shadow: none;
				        color: #000;
				    }
				    
				    /* Site Logo */
				    body.login h1 {
			            position: absolute;
					    top: 0;
					    left: 0;
					    width: 320px;
					    height: 200px;
					    padding: 16px;
					    margin: 0;
					    padding: 0;
					    border: none;
					    display: flex;
					    align-items: center;
				    }
				    body.login h1 a {
				        background-size: contain;
				        background-position: center;
				        background-repeat: no-repeat;
				        padding: 0;
				        margin: auto;
				        border: none;
				        width: 100%;
				        height: 100%;
				        border: 24px solid rgba(0,0,0,0);
				        <?php echo (isset($args['logo'])) ? 'background-image: url(' . theme::assets('images') . $args['logo'] . ');' : ''  ?>;
				    }

				    body.login .message, 
				    body.login #login_error {
						position: absolute;
					    width: 320px;
					    margin-bottom: 130px;
					    text-align: center;
					    border-left: none;
					    pointer-events: none;
				        transform: translateY(-130px);
					    color: <?php echo (isset($args['login_text_color'])) ? $args['login_text_color'] : '#000' ;?>;
				    }



				    body.login #nav a, 
				    body.login #backtoblog a,
				    body.login #login_error a {
				    	display: none;
				    }
				</style>
		
			<?php },0);

			echo is_page();


			// Set logo a href to the site URL
			function change_wp_login_url() {
				return site_url();
			}

			add_filter('login_headerurl', 'change_wp_login_url');
			// wp_enqueue_script('WP_LOGIN_JS',THEME . '/naoki/login-screen/login.min.js',array(),'1.0',true);
		}
	}
}
