<?php defined('ABSPATH') OR exit('No direct script access allowed'); 
/*
	array (
		'name'    => '',
		'title'   => '',
		'desc'    => '',
		'type'    => 'radio',
		'display' => 'inline/block',
		'style'   => '',
		'cols'    => '',
		'options' => array (
			'value' => 'label',
		),
	),
*/
?>

<?php foreach ($field['options'] as $key => $value): ?>
	<div class="radio <?php echo ( $field['display'] ) ? ( ($field['display'] == 'inline') ? 'inline' : 'block' ) : 'block' ; ?>">
		<input name="<?php echo $field['name']; ?>" type="radio" <?php echo ( get_option( $field['name'] ) == $key) ? 'checked="checked"' : '' ; ?> value="<?php echo $key; ?>"><?php echo $value; ?>
	</div>
<?php endforeach; ?>