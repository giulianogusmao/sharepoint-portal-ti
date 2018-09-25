$(function () {
    // adiciona/remove class ao header quando abre menu mobile
    const toogleMenu = function () {
        $('.pti-header-group').toggleClass('pti-menu-show');
    };

    // abre/fecha menu mobile
    $('button.navbar-toggler').on('click', toogleMenu);

    // fecha menu mobile quando clicar fora
    $(document).on('click', '.pti-menu-show', function (event) {
        if ($(event.target).hasClass('pti-menu-show')) {
            $('button.navbar-toggler').trigger('click');
        }
    });

    // ativa tooltips
    $('[data-toggle="tooltip"]').tooltip();


    // Exibir/Ocultar links úteis
    (function () {
        var $footer = $('.pti-main.pti-footer'),
            $divLinks = $footer.find('.pti-links-uteis'),
            $listLinks = $footer.find('.pti-footer-list'),
            showClass = 'pti-show-links-uteis';

        var toggleFooter = function (expandir) {
            if (expandir === true || (expandir === undefined && !$footer.hasClass(showClass))) {
                $footer.addClass(showClass);
                $divLinks.css({ 'height': $listLinks.outerHeight() });
            } else {
                $footer.removeClass(showClass);
                $divLinks.css({ 'height': 0 });
            }
        }

        // abre e fecha footer quando clicar no btn-links-uteis
        $('.pti-btn-links-uteis').on('click', function (event) {
            toggleFooter();
        });

        let timerscroll = 0;
        // expandir footer quando scroll chegar no final
        $(window).scroll(function () {
            // reduz a quantidade que vezes que a validação de scroll é invocada
            clearTimeout(timerscroll);
            timerscroll = setTimeout(function () {
                var hgFooter = $footer.outerHeight(),
                    stFooter = $(document).height() - hgFooter,
                    posFooter = stFooter + hgFooter - 2,
                    st = $(window).scrollTop(),
                    wHeight = $(window).height(),
                    posScroll = wHeight + st;

                // console.log(`${posScroll} > ${posFooter}`);
                if (posScroll > posFooter) {
                    // Scroll Down - show footer
                    if (!$footer.hasClass(showClass)) {
                        toggleFooter(true);
                        // setTimeout(function () {
                        //     $('html, body').stop().animate({ scrollTop: $(document).height() }, 500);
                        // }, 150);
                    }
                } else {
                    // hide footer
                    if ($footer.hasClass(showClass)) {
                        toggleFooter(false);
                    }
                }
            }, 200);
        });
    })();
});