const mobileResponsiv = document.getElementById("menu-mobile");
const navegacao = document.getElementById("nav");
const sobre = document.getElementById("btn-sobre");
const skills = document.getElementById("btn-skills");
const projetos = document.getElementById("btn-projetos");
const contatos = document.getElementById("btn-contatos");

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

    console.log(navegacao.classList.value);
    

}

function fecharManu(){
    if(navegacao.classList.value == "active"){
        navegacao.classList.toggle("active");
        mobileResponsiv.classList.toggle("active");
    }
}

mobileResponsiv.addEventListener('click', toggleMobile);
mobileResponsiv.addEventListener('touchstart', toggleMobile);
sobre.addEventListener('click',fecharManu);
skills.addEventListener('click',fecharManu);
projetos.addEventListener('click',fecharManu);
contatos.addEventListener('click',fecharManu);


