(function($) {

	'use strict';

	if (typeof _mff == 'undefined' || _mff === null) {
		return;
	}

	jQuery(document).ready(function($){
		$('.date').mask('00/00/0000');
		$('.time').mask('00:00:00');
		$('.date_time').mask('00/00/0000 00:00:00');
		$('.cep').mask('00000-000');
		$('.phone').mask(PhoneMaskBehavior, nonoOptions);
		$('.phone_us').mask('(000) 000-0000');
		$('.mixed').mask('AAA 000-S0S');
		$('.cpf').mask('000.000.000-00', {reverse: true});
		$('.cnpj').mask('00.000.000/0000-00', {reverse: true});
		$('.money').mask('000.000.000.000.000,00', {reverse: true});
		$('.money2').mask("#.##0,00", {reverse: true});
		$('.ip_address').mask('099.099.099.099');
		$('.percent').mask('##0,00%', {reverse: true});
	});

	var PhoneMaskBehavior = function (val) {
		return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	},
	nonoOptions = {
	  onKeyPress: function(val, e, field, options) {
	      field.mask(PhoneMaskBehavior.apply({}, arguments), options);
	    }
	};

})(jQuery);
