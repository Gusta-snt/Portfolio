const mobileResponsiv = document.getElementById("menu-mobile");
const navegacao = document.getElementById("nav");

function toggleMobile(e){

    if (e.type === 'touchstart') e.preventDefault();

    navegacao.classList.toggle("active");
    mobileResponsiv.classList.toggle("active");
    const active = navegacao.classList.contains('active')
    e.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        e.currentTarget.setAttribute('aria-label', "Fechar Menu");
    }else {
        e.currentTarget.setAttribute('aria-label', "Abrir Menu");
    }


}

mobileResponsiv.addEventListener('click', toggleMobile);
mobileResponsiv.addEventListener('touchstart', toggleMobile);
