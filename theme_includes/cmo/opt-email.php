<?php defined('ABSPATH') OR exit('No direct script access allowed'); 
/*
	array (
		'name'        => '',
		'title'       => '',
		'desc'        => '',
		'type'        => 'email',
		'icon'        => 'fa-',
		'placeholder' => '',
		'style'       => '',
		'cols'        => '',
	),
*/
?>

<?php echo (isset($field['icon'])) ? '<label class="icon"><i class="fa ' . $field['icon'] . '"></i></label>' : '' ; ?>
<input type="email" value="<?php echo get_option( $field['name'] ); ?>" name="<?php echo $field['name']; ?>" placeholder="<?php echo $field['placeholder']; ?>">