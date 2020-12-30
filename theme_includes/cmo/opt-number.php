<?php defined('ABSPATH') OR exit('No direct script access allowed'); 
/*
	array (
		'name'  => '',
		'title' => '',
		'desc'  => '',
		'type'  => 'number',
		'icon'  => 'fa-',
		'min'   => '',
		'max'   => '',
		'step'  => '',
		'style' => '',
		'cols'  => '',
	),
*/
?>

<?php echo (isset($field['icon'])) ? '<label class="icon"><i class="fa ' . $field['icon'] . '"></i></label>' : '' ; ?>
<input type="number" <?php echo (isset($field['step'])) ? 'step="' . $field['step'] . '"' : ''; ?> <?php echo (isset($field['min'])) ? 'minlength="' . $field['min'] . '"' : ''; ?><?php echo (isset($field['max'])) ? 'maxlength="' . $field['max'] . '"' : ''; ?> value="<?php echo get_option( $field['name'] ); ?>" name="<?php echo $field['name']; ?>" placeholder="<?php echo $field['placeholder']; ?>">
