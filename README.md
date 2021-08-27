Masks Form Fields
=========================

![WordPress Plugin Version](https://img.shields.io/wordpress/plugin/v/masks-form-fields)  ![WordPress Plugin Rating](https://img.shields.io/wordpress/plugin/rating/masks-form-fields)  ![WordPress Plugin: Tested WP Version](https://img.shields.io/wordpress/plugin/tested/masks-form-fields)  ![WordPress Plugin Active Installs](https://img.shields.io/wordpress/plugin/installs/masks-form-fields)  [![WordPress Plugin Downloads](https://img.shields.io/wordpress/plugin/dt/masks-form-fields)](https://wordpress.org/plugins/masks-form-fields/)

A plugin to add masks in the form’s fields for WordPress.

[![masks-form-fields logo](assets/banner-github.png)](https://wordpress.org/plugins/masks-form-fields/)

Download the plugin via WordPress.org => https://wordpress.org/plugins/masks-form-fields/

## Basic Usage Examples

Add a class in the form field.

```
('span.start, input.start').mask('00/0000');
('span.date, input.date').mask('00/00/0000');
('span.time, input.time').mask('00:00:00');
('span.time2, input.time2').mask('00:00');
('input.date_time').mask('00/00/0000 00:00:00');
('input.cep').mask('00000-000');
('input.zip').mask('00000');
('input.phone').mask(PhoneMaskBehavior, nonoOptions);
('input.phone_us').mask('(000) 000-0000');
('input.taxid').mask('00-0000000');
('input.ssn').mask('000-00-0000');
('input.mixed').mask('AAA 000-S0S');
('input.cpf').mask('000.000.000-00', { reverse: true });
('input.cnpj').mask('00.000.000/0000-00', { reverse: true });
('input.money').mask('000.000.000.000.000,00', { reverse: true });
('input.money2').mask('#.##0,00', { reverse: true });
('input.money3').mask('#,##0.00', { reverse: true });
('input.money4').mask('000,000,000,000,000.00', { reverse: true });
('input.ip_address').mask('099.099.099.099');
('input.percent').mask('##0,00%', { reverse: true });
('input.percent2').mask('##0.00%', { reverse: true });
('input.percent3').mask('990,0%', { reverse: true });
('input.percent4').mask('990.0%', { reverse: true });
```

[*Click here*](https://gist.github.com/petermann/fd1a898e02ca91a0d7231a9f8ee662b4) for more details on how to add custom mask.

## Installation

Installing "Masks Form Fields" can be done either by searching for "Masks Form Fields" via the "Plugins > Add New" screen in your WordPress dashboard, or by using the following steps:

1. Download the plugin via WordPress.org => https://wordpress.org/plugins/masks-form-fields/
2. Upload the ZIP file through the 'Plugins > Add New > Upload' screen in your WordPress dashboard
3. Activate the plugin through the 'Plugins' menu in WordPress

### Credits

* [jQuery Mask Plugin](https://github.com/igorescobar/jQuery-Mask-Plugin)
