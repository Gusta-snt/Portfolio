const mobileResponsiv = document.getElementById("menu-mobile");

function toggleMobile(){
    const navegacao = document.getElementById("nav");

    navegacao.classList.toggle("active");
    mobileResponsiv.classList.toggle("active");
}

mobileResponsiv.addEventListener('click', toggleMobile);
