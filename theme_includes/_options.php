<?php defined('ABSPATH') OR exit('No direct script access allowed');

add_shortcode( 'get', 'myTheme__getOptions' );
function myTheme__getOptions($atts = [], $content = null, $tag = '') {
	
    $atts = array_change_key_case((array)$atts, CASE_LOWER);
    $args = shortcode_atts([
         'option' => 'blogname',
     ], $atts, $tag);

	return get_option( $args['option'] );
}

class options {
	private $options = array();
	public static function add($args = null) {
		GLOBAL $options;

        if (isset($args) && is_array($args)) {
        	$args = (object) $args;
        	$options[] = array (
				'name'   => $args->name,
				'desc'   => $args->desc,
				'icon'   => (isset($args->icon))?$args->icon:'fa-cog', 
				'fields' => (isset($args->fields))?$args->fields:null,
        	);
        }
    }

    public static function register() {
    	GLOBAL $options; ?>
    	<div class="wrap" id="cfg_page">
			<header>
				<h1><i class="fa fa-cog"></i> Configurações</h1>
				<?php get_template_part('inc/addon/template/theme','logo'); ?>
			</header>
			<main>
				<aside>
					<ul>
						<?php if(isset($options)) { ?>
						<?php foreach ($options as $key => $value) { 


							$link = substr( $url_video, strrpos( $url_video , '/' ), strlen( $url_video ) ); ?>

							<?php if (isset($value['fields'])) { ?>
								<li><a <?php echo ($key == 0) ? 'class="active"' : ''; ?> data-tab="#<?php echo sanitize_title( strtolower( $value['name'] ) ); ?>"><i class="fa <?php echo $value['icon']; ?>"></i><?php echo $value['name']; ?></a></li>
							<?php } else { ?>
								<li><span><?php echo $value['name']; ?></span></li>
							<?php } ?>
						<?php } ?>
						<?php } ?>
					</ul>
				</aside>
				<div class="sections">
					<?php if(isset($options)) { ?>
					<?php foreach ($options as $key => $value) { ?>
						<?php if (isset($value['fields'])) { ?>
							<section id="<?php echo sanitize_title( strtolower( $value['name'] ) ); ?>" class="tab<?php echo ($key == 0) ? ' active' : ''; ?>">
								<form>
									<?php foreach ($value['fields'] as $key => $field): ?>
										<div class="options-field <?php echo (isset($field['cols'])) ? 'col s'.$field['cols'] : 'col s12' ; ?>" <?php echo (isset($field['style'])) ? 'col s'.$field['style'] : '' ; ?>>
											<div class="options-title">
												<span><?php echo (isset($field['title'])) ? $field['title'] : '' ; ?></span>
												<span class="option-name">[get option="<?php echo $field['name']; ?>"]</span>
												<span class="option-name">get_option('<?php echo $field['name']; ?>')</span>
											</div>
											<div class="input">
												<?php 
													
													include( theme::root() . 'theme_includes/cmo/opt-' . $field['type'] . '.php' );	
													echo (isset($field['desc'])) ? '<span class="desc">' . $field['desc'] . '</span>' : '' ; 
												?>
											</div>
										</div>
									<?php endforeach ?>
									<div class="clearfix"></div>
									<div class="text-align right action">
										<button class="button" type="submit"><i class="fa fa-save"></i> Salvar</button>
									</div>
								</form>
							</section>
						<?php } ?>
					<?php } ?>
					<?php } ?>
				</div>
			</main>
		</div>

		<script>
			jQuery(document).ready(function($) {
				$('[data-tab]').on('click', function(event) {
					event.preventDefault();
					$('[data-tab],.sections .tab').removeClass('active');
					$(this).addClass('active');
					$($(this).attr('data-tab')).addClass('active');
				});

				$('form').on('submit', function (e) {
					e.preventDefault();
					var $data = {};
					$(this).find('.input [name]').each(function(e) {
						switch($(this).attr('type')) {
							case 'checkbox':
								$data[$(this).attr('name')] = $(this).is(':checked');
								break;
							case 'radio':
								$data[$(this).attr('name')] = $($('[name="' + $(this).attr('name') + '"]')).filter(':checked').val();
								break;

							default:
								$data[$(this).attr('name')] = $(this).val();
								break;
						}
					});
					console.log($data);
					$.ajax({
						url: '<?php echo admin_url( 'admin-ajax.php' ); ?>',
						type: 'POST',
						dataType: 'json',
						data: {
							action: 'myTheme__setOptions',
							data: $data,
						},
						beforeSend: function(e) {
			                $('#cfg_page').addClass('loading');
			            },
			            success: function(response) {
			                $('#cfg_page').removeClass('loading');
			                $('body').addClass('blacked');
			                setTimeout(function() {
			                	alert('Informações salvas com sucesso!');
			                	$('body').removeClass('blacked');
			                }, 10);
			            }
					})
				});
			});
		</script>


<?php }
}



function myTheme_options() {
    add_menu_page( 'Configurações', 'Editar Conteúdos', 'manage_options', 'configuracoes', 'myTheme_opcoes_page', 'dashicons-tickets', 6  );
}
add_action('admin_menu', 'myTheme_options' );

function myTheme_opcoes_page() {
	foreach (glob(theme::assets('root') . '/theme_custom/options-*.php') as $optionFile) {
		include $optionFile;
	}
	options::register();
}

// Função do Ajax
add_action("wp_ajax_myTheme__setOptions", "myTheme__setOptions");
add_action("wp_ajax_nopriv_myTheme__setOptions", "myTheme__setOptions");
function myTheme__setOptions() {
	$data = $_REQUEST['data'];
	foreach ($data as $key => $value) {
		if ( false == get_option( $key ) ) add_option( $key , '' ) ;
		update_option( $key, $value );
	}
	echo 0;
	wp_die();
}