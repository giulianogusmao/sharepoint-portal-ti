$(function () {
    $('button.navbar-toggler').on('click', () => {
        $('.pti-header-group').toggleClass('pti-menu-show');
    });

    $('[data-toggle="tooltip"]').tooltip();
});