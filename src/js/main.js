$(function () {
    // adiciona/remove class ao header quando abre menu mobile
    const toogleMenu = function() { 
        $('.pti-header-group').toggleClass('pti-menu-show');
    };

    // abre/fecha menu mobile
    $('button.navbar-toggler').on('click', toogleMenu);

    // fecha menu mobile quando clicar fora
    $(document).on('click', '.pti-menu-show', function(event) {
        if ($(event.target).hasClass('pti-menu-show')) {
            $('button.navbar-toggler').trigger('click');
        }
    });

    // ativa tooltips
    $('[data-toggle="tooltip"]').tooltip();


    // Exibir/Ocultar links úteis
    $('.btn-links-uteis').on('click', function(event) {
        event.preventDefault();

        $('.pti-main.pti-footer')
            .toggleClass('show-links-uteis')
            .find('.pti-links-uteis')
            .css({ 'height': $('.pti-footer-list').outerHeight() });
    });
});