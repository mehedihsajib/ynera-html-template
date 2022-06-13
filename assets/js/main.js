/*===================================================================
    Author          : 
    Template Name   : 
    Version         : 1.0
* ================================================================= */

(function ($) {
    "use strict";
    $(document).on("ready", function () {
        // PRELOADER
        // $(window).on("load", function () {
        //     $(".sales-preloader").delay(500).fadeOut();
        // });
        // SCROLL TO TOP
        // var progressPath = document.querySelector(".progress-wrap path");
        // var pathLength = progressPath.getTotalLength();

        // MOBILE MENU
        $(document).ready(function () {
            $(".mobile-menu-open").click(function () {
                $(".mobile-menu-wrapper").toggleClass("show");
            });

            $(".mobile-menu-close").click(function () {
                $(".mobile-menu-wrapper").toggleClass("show");
            });
        });

        // MOBILE FILTER
        $(document).ready(function () {
            $(".mobile-filter-open").click(function () {
                $(".mobile-filter").toggleClass("show");
            });

            $(".mobile-filter-close").click(function () {
                $(".mobile-filter").toggleClass("show");
            });
        });

        // SCROLL TOP
        var scrollBtn = $(".scroll-top-btn");

        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                scrollBtn.addClass("show");
            } else {
                scrollBtn.removeClass("show");
            }
        });

        scrollBtn.on("click", function (e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "300");
        });

        // MOBILE MENU
        // $("#hamburger").on("click", function () {
        //     $(".mobile-nav").addClass("show");
        //     // $(".overlay").addClass("active");
        // });

        // $(".close-nav").on("click", function () {
        //     $(".mobile-nav").removeClass("show");
        //     // $(".overlay").removeClass("active");
        // });

        // $(".overlay").on("click", function () {
        //     $(".mobile-nav").removeClass("show");
        //     // $(".overlay").removeClass("active");
        // });

        // $("#mobile-menu").metisMenu();

        // SELECT
        // $("select").niceSelect();

        // STICKY HEADER
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 150) {
                $(".navbar-wrapper").addClass("sticky");
                $(".header-top").addClass("hide");
            } else {
                $(".navbar-wrapper").removeClass("sticky");
                $(".header-top").removeClass("hide");
            }
        });
    }); // end document ready function
})(jQuery); // End jQuery
