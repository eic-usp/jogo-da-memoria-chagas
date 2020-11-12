//objetos das cartas
// imagens das cartas
//fase 1
//nao ta funcionando bem
let cartas = [];

for (let i=1; i <= 8; i++){
    //template string - acento grave
    imagens.push(`./img/cartas/i${i}`);
}
let fundo = '../assets/img/cartas/carta-virada.png';

onload = () => {
let elemImagens = document.querySelectorAll('#memoria img');
elemImagens.forEach({
    (img, i) => {
        img.scr = fundo;
    });

};