require([
    'jquery',
    'template!demo/index',
    'partial!shared/_header'
], function ($, template) {

    'use strict';

    $('body').html(template({ name: 'Joe', count: 12 }));
});
