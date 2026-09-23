const opcao1 = document.getElementById("opcao1");
const opcao2 = document.getElementById("opcao2");
const opcao3 = document.getElementById("opcao3");

const janela = document.getElementById("janela");
const fecharJanela = document.getElementById("fecharJanela");

const areaMenu = document.querySelector(".area-menu");
const menu = document.querySelector(".menu-lateral");


areaMenu.addEventListener("mouseenter", function () {
    menu.classList.add("aberto");
});

menu.addEventListener("mouseenter", function () {
    menu.classList.add("aberto");
});

menu.addEventListener("mouseleave", function () {
    menu.classList.remove("aberto");
});


opcao1.addEventListener("click", function () {
    janela.classList.add("aberta");
});


fecharJanela.addEventListener("click", function () {
    janela.classList.remove("aberta");
});


document.addEventListener("click", function (e) {
    const cliqueDentro = janela.contains(e.target) || opcao1.contains(e.target);
    if (!cliqueDentro) {
        janela.classList.remove("aberta");
    }
});


opcao2.addEventListener("click", function () {
  
});


opcao3.addEventListener("click", function () {
   
});