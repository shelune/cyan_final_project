/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/
"use strict";

$(document).ready(function () {

    // Display Navbar when scrolled
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


    // Slider Autoslide and Click Function
    var currentIndex = 0,
        items = $('.slider div'),
        itemAmt = items.length;

    function cycleItems() {
      var item = $('.slider div').eq(currentIndex);
      items.hide();
      item.css('display','inline-block');
    }

    var autoSlide = setInterval(function() {
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    }, 3000);

    // click arrow up to get next image
    $('.arrow-up').click(function() {
      clearInterval(autoSlide);
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    });

    // click arrow down to get prev image
    $('.arrow-down').click(function() {
      clearInterval(autoSlide);
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = itemAmt - 1;
      }
      cycleItems();
    });

    // Move to anchor point smoothly
    $('nav li').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).find('a').attr('href')).offset().top
        }, 500);
        return false;
    });

    $('.main__explore').click(function () {
        $('html, body').animate({
            scrollTop: $('#section-1').offset().top
        }, 300);
        return false;
    });


    // display reserve box
    $('.function-button__reserve').click(function() {
        $('.show').removeClass('show');
        $('[data-form="reserve"]').addClass('show');
    });


    // close reserve box
    $('.close-button').click(function() {
        $('.show').removeClass('show');
    });

    // display date options
    $('#date-picker').datepicker();
});


