(function($) {

    'use strict';

    if (typeof _mff == 'undefined' || _mff === null) {
        return;
    }

    jQuery(document).ready(function($) {
        $('span.start, input.start').mask('00/0000');
        $('span.date, input.date').mask('00/00/0000');
        $('span.time, input.time').mask('00:00:00');
        $('span.time2, input.time2').mask('00:00');
        $('input.date_time').mask('00/00/0000 00:00:00');
        $('input.cep').mask('00000-000');
        $('input.zip').mask('00000');
        $('input.phone').mask(PhoneMaskBehavior, nonoOptions);
        $('input.phone_us').mask('(000) 000-0000');
        $('input.taxid').mask('00-0000000');
        $('input.ssn').mask('000-00-0000');
        $('input.mixed').mask('AAA 000-S0S');
        $('input.cpf').mask('000.000.000-00', { reverse: true });
        $('input.cnpj').mask('00.000.000/0000-00', { reverse: true });
        $('input.money').mask('000.000.000.000.000,00', { reverse: true });
        $('input.money2').mask('#.##0,00', { reverse: true });
        $('input.money3').mask('#,##0.00', { reverse: true });
        $('input.money4').mask('000,000,000,000,000.00', { reverse: true });
        $('input.ip_address').mask('099.099.099.099');
        $('input.percent').mask('##0,00%', { reverse: true });
        $('input.percent2').mask('##0.00%', { reverse: true });
        $('input.percent3').mask('990,0%', { reverse: true });
        $('input.percent4').mask('990.0%', { reverse: true });
    });

    var PhoneMaskBehavior = function(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        nonoOptions = {
            onKeyPress: function(val, e, field, options) {
                field.mask(PhoneMaskBehavior.apply({}, arguments), options);
            }
        };

})(jQuery);