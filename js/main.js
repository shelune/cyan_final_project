/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/
"use strict";

$(document).ready(function () {
    $(window).scroll(function () {
        var currentY = window.pageYOffset || document.documentElement.scrollTop,
            yLimit = 400,
            target = $('.nav--vertical');
        if (currentY > yLimit) {
            target.css("opacity", "1");
        } else {
            target.css("opacity", "0");
        }
    });
});


