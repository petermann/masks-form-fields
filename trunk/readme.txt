=== Masks Form Fields ===
Contributors: ivanpetermann
Donate link: https://ivanpetermann.com/donation
Tags: email, mask, form, input, field, phone, masks, fields, petermann
Requires at least: 3.9
Tested up to: 5.5
Requires PHP: 5.2.4
Stable tag: 1.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A plugin to add masks in the form’s fields.

== Description ==

Basic Usage Examples

Add a class in the form field.

* ('span.date, input.date').mask('00/00/0000');
* ('span.time, input.time').mask('00:00:00');
* ('input.date_time').mask('00/00/0000 00:00:00');
* ('input.cep').mask('00000-000');
* ('input.phone').mask('(00) 0000-00009');
* ('input.phone_us').mask('(000) 000-0000');
* ('input.mixed').mask('AAA 000-S0S');
* ('input.cpf').mask('000.000.000-00');
* ('input.cnpj').mask('00.000.000/0000-00');
* ('input.money').mask('000.000.000.000.000,00');
* ('input.money2').mask('#.##0,00');
* ('input.ip_address').mask('099.099.099.099');
* ('input.percent').mask('##0,00%');

== Installation ==

Installing "Masks Form Fields" can be done either by searching for "Masks Form Fields" via the "Plugins > Add New" screen in your WordPress dashboard, or by using the following steps:

1. Download the plugin via WordPress.org
2. Upload the ZIP file through the 'Plugins > Add New > Upload' screen in your WordPress dashboard
3. Activate the plugin through the 'Plugins' menu in WordPress


== Frequently Asked Questions ==

= What is the plugin for? =

This plugin to add masks in the form’s fields.

== Changelog ==

= 1.4 =
* Updated Readme description
* Updated jQuery Mask library
* Tested in WordPress 5.5

= 1.3 =
* 2019-06-10
* Tested in WordPress 5.2

= 1.2 =
* 2017-11-20
* Tested in WordPress 4.9

= 1.1 =
* 2017-8-7
* Bug fix: remove date and time mask on body class.
* Add mask only span and input fields.

= 1.0 =
* 2016-11-3
* Initial release

== Upgrade Notice ==

= 1.4 =
* Updated Readme description
* Updated jQuery Mask library
* Tested in WordPress 5.5

== Credits ==

[jQuery Mask Plugin](https://github.com/igorescobar/jQuery-Mask-Plugin)
