var nome = "Gislene Marciano";
var cargo = "CTD - Growdev";

var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomenohtml(nome) {
    nomeHtml.innerHTML = nome;
}

function colocarCargonohtml(cargo) {
    cargoHtml.innerHTML = cargo;
}

function logarNome() {
    console.log(nome);
}

function cliqueNoProjetos() {
    console.log("Clicou no botão Projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function cliqueNoSobre() {
    console.log("Clicou no botão Sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomenohtml(nome);
colocarCargonohtml(cargo);


