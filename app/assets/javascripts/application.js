require([
    'jquery',
    'template!demo/index'
], function ($, template) {

    'use strict';

    $('body').html(template({ name: 'Joe', count: 12 }));
});
