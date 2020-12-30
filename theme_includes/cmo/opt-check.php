<?php defined('ABSPATH') OR exit('No direct script access allowed'); 
/*
	array (
		'name'  => '',
		'title' => '',
		'desc'  => '',
		'type'  => 'check',
		'style' => '',
		'cols'  => '',
	),
*/
?>
<input type="checkbox"  name="<?php echo $field['name']; ?>" <?php echo (get_option( $field['name']) == 'true' ) ? 'checked' : ''; ?> >