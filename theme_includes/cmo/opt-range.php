<?php defined('ABSPATH') OR exit('No direct script access allowed'); 
/*
	array (
		'name'  => '',
		'title' => '',
		'desc'  => '',
		'type'  => 'range',
		'min'   => '',
		'max'   => '',
		'step'  => '',
		'style' => '',
		'cols'  => '',
	),
*/
?>

<div class="range">
    <input type="range" <?php echo (isset($field['min'])) ? 'minlength="' . $field['min'] . '"' : ''; ?><?php echo (isset($field['max'])) ? 'maxlength="' . $field['max'] . '"' : ''; ?> name="<?php echo $field['name']; ?>" <?php echo (isset($field['step'])) ? 'step="' . $field['step'] . '"' : ''; ?> value="<?php echo (get_option( $field['name'] )) ? get_option( $field['name'] ) : '0' ?>">
	<span class="value"><?php echo (get_option( $field['name'] )) ? get_option( $field['name'] ) : '0' ?></span>
</div>