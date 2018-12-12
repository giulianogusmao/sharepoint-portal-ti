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

    // esconde overlay carregando...
    // (async function () {
    //     console.log('start');
        
    //     var loadingResolve, loadingRejected;
    //     var loadingPromise = new Promise(function(res, rej) {
    //         loadingResolve = res;
    //         loadingRejected = rej;
    //     });

    //     loadingPromise.then(
    //         function () {
    //             $('.pti-overlay-loading').addClass('pti-ocultar-loading');
    //             console.log('promise resolved');
    //         },
    //         function () {
    //             console.log('promise rejected');
    //         }
    //     );

    //     setTimeout(function() {
    //         console.log('call promise');
    //         try {
    //             loadingResolve('teste');                
    //         } catch(e) {
    //             console.error('error resolve')
    //         }
    //     }, 2000);
    // })();
});