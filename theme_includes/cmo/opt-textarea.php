<?php defined('ABSPATH') OR exit('No direct script access allowed'); 
/*
	array (
		'name'        => '',
		'title'       => '',
		'desc'        => '',
		'type'        => 'textarea',
		'min'         => '',
		'max'         => '',
		'icon'        => 'fa-',
		'placeholder' => '',
		'style'       => '',
		'cols'        => '',
	),
*/
?>

<?php echo (isset($field['icon'])) ? '<label class="icon"><i class="fa ' . $field['icon'] . '"></i></label>' : '' ; ?>
<textarea rows="<?php echo (isset($field['rows'])) ? $field['rows'] : '2' ; ?>" <?php echo (isset($field['min'])) ? 'minlength="' . $field['min'] . '"' : ''; ?><?php echo (isset($field['max'])) ? 'maxlength="' . $field['max'] . '"' : ''; ?> name="<?php echo $field['name']; ?>" placeholder="<?php echo $field['placeholder']; ?>"><?php echo get_option( $field['name'] ); ?></textarea>

