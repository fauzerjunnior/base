<?php defined('ABSPATH') OR exit('No direct script access allowed'); 
/*
	array (
		'name'    => '',
		'title'   => '',
		'desc'    => '',
		'type'    => 'select',
		'icon'    => 'fa-',
		'style'   => '',
		'cols'    => '',
		'options' => array (
			'value' => 'label',
		),
	),
*/
?>

<?php echo (isset($field['icon'])) ? '<label class="icon"><i class="fa ' . $field['icon'] . '"></i></label>' : '' ; ?>
<select name="<?php echo $field['name']; ?>">
	<option value=""  <?php echo ( !get_option( $field['name'] ) ) ? 'selected="selected"' : '' ; ?> disabled="disabled" >Selecione</option>
	<?php foreach ($field['options'] as $key => $value): ?>
		<option <?php echo ( get_option( $field['name'] ) == $key) ? 'selected="selected"' : '' ; ?> value="<?php echo $key; ?>"><?php echo $value; ?></option>
	<?php endforeach; ?>
</select>