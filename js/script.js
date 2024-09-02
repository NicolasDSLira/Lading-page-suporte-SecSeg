var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
    var boxOffset = $(idBox).offset().top;
    return boxOffset;
}

$(document).ready(function () {
    const $target = $('.anime-left'),
        animationClass = 'anime-init',
        windowHeight = $(window).height(),
        offset = windowHeight - (windowHeight / 4);


    function animeScroll() {
        var documentTop = $(document).scrollTop();
        $target.each(function () {
            if (documentTop > boxTop(this) - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        });
    }
    animeScroll();

    $(document).scroll(function () {
        setTimeout(function () { animeScroll() }, 150);
    });
});


$(document).ready(function () {
    const $target = $('.anime'),
        animationClass = 'anime-init',
        windowHeight = $(window).height(),
        offset = windowHeight - (windowHeight / 4);


    function animeScroll() {
        var documentTop = $(document).scrollTop();
        $target.each(function () {
            if (documentTop > boxTop(this) - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        });
    }
    animeScroll();

    $(document).scroll(function () {
        setTimeout(function () { animeScroll() }, 150);
    });
});


// Cabeçalho 

$(document).ready(()=>{
    const windowWidth = $(window).width();
    if (windowWidth <= 1063) {
        
        $('.coluna-header').addClass("col");

    }else{
        $('.coluna-header').addClass("col-4");
    }

    if (windowWidth <= 765){
        $('.card-img-top').addClass('w-25');
        $('.card-img-top').removeClass('w-50');

    }
   
})



$(document).ready(function () {

        const offSetWidth = $(window).width();

        if (offSetWidth >= 768) {
            $("#services").html('<h1 class="display-4 mb-5 mt-5"> Nossos Serviços </h1> <div class="card mb-4"> <div class="row g-5"> <div class="col-md-4"> <img src="./images/Camera.jpeg" class="img-fluid rounded-start" alt="Camera"></div><div class="col-md-8"><div class="card-body"><h5 class="card-title display-6">Câmera de Segurança (CFTV)</h5><p class="card-text mt-5">Mantenha sua propriedade segura com nossos sistemas de câmeras de segurança de última geração, garantindo tranquilidade e proteção para você e seus colaboradores.</p></div></div></div></div><div class="card mb-4"><div class="row g-5"><div class="col-md-8"><div class="card-body"><h5 class="card-title display-6">Sistemas de Alarme</h5><p class="card-text mt-5">Proteja seu negócio com nossos sistemas de alarme avançados, proporcionando tranquilidade e segurança para você e sua equipe.</p></div></div><div class="col-md-4"><img src="./images/alarme.png" class="img-fluid rounded-end" alt="Alarme"></div></div></div><div class="card mb-4"><div class="row g-5"><div class="col-md-4"><img src="./images/controle-de-acesso.webp" height="100%" class="img-fluid rounded-start" alt="Controle de acesso"></div><div class="col-md-8"><div class="card-body"><h5 class="card-title display-6">Controle de Acesso</h5><p class="card-text mt-5">Tenha um controle eficiente de entrada e saída de pessoas e veículos, garantindo a segurança e o bom funcionamento de seu estabelecimento.</p></div></div></div></div>');
        } else {
            $("#services").html('<h1 class="display-4 mb-5 mt-5"> Nossos Serviços </h1><div class="card mb-4"><div class="row g-5"><div class="col-md-4"><img src="./images/Camera.jpeg" class="img-fluid rounded-start" alt="Camera"></div><div class="col-md-8"><div class="card-body"><h5 class="card-title display-6">Câmera de Segurança (CFTV)</h5><p class="card-text mt-5">Mantenha sua propriedade segura com nossos sistemas de câmeras de segurança de última geração, garantindo tranquilidade e proteção para você e seus colaboradores.</p></div></div></div></div><div class="card mb-4"><div class="row g-5"><div class="col-md-8"><div class="col-md-4"><img src="./images/alarme.png" class="img-fluid rounded-end" alt="Alarme"></div><div class="card-body"><h5 class="card-title display-6">Sistemas de Alarme</h5><p class="card-text mt-5">Proteja seu negócio com nossos sistemas de alarme avançados, proporcionando tranquilidade e segurança para você e sua equipe.</p></div></div></div></div><div class="card mb-4"><div class="row g-5"><div class="col-md-4"><img src="./images/controle-de-acesso.webp" height="100%" class="img-fluid rounded-start" alt="Controle de acesso"></div><div class="col-md-8"><div class="card-body"><h5 class="card-title display-6">Controle de Acesso</h5><p class="card-text mt-5">Tenha um controle eficiente de entrada e saída de pessoas e veículos, garantindo a segurança e o bom funcionamento de seu estabelecimento.</p></div></div></div></div>');
        }

});


$(".whatsapp").on("click", function(){
    window.location.href = $(this).data('href');
})


