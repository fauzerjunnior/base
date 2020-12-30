jQuery(document).ready(function($) {
	$('input[type="range"]').on('input', function(event) {
		event.preventDefault();
		$(this).parents('.range').find('.value').text($(this).val());
	});

	$('input[type=tel]').mask(function (val) {return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';}, {
	    onKeyPress: function(val, e, field, options) {
	        field.mask(SPMaskBehavior.apply({}, arguments), options);
	    }
  	});
});