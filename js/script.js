// iniciando as varias globais utilizada no sistema
let listaPalavras = ["ALURA", "DESAFIO", "AMIZADE", "NATUREZA", "BELEZA", "CASAMENTO", "VISITA", "DESENHO", "CURIOSIDADE", "FORCA", "TEATRO", "CINEMA", "FUTEBOL", "CARRO", "MONTANHA", "CERVEJA", "PIPOCA", "GUARANA", "MUSICA", "DANÇA"]
let canvas = document.querySelector("canvas");
let pincel = canvas.getContext("2d");
let alfabeto = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
let posicao;
let secreta;
let secretaAux;
let quantErros = 0;
let palavraTracadas;
let palavraBranco;
let listaErradas = [];
let listaCertas = [];
let isJogando = false;







