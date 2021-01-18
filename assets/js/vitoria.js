var points = sessionStorage.getItem('points');
var level = sessionStorage.getItem('level');

//console.log("pontos =" + points);

//mostrar os pontos feitos na fase na pagina de vitoria
document.getElementById("points").innerHTML = points;

var url = sessionStorage.getItem('url');

//console.log("url anterior = " + url);

//pensar em como alterar o link do botao dinamicamente
//pensar em transformar a pagina de jogo em uma só

if (url.includes('fase1') === true){

    document.getElementById("next").href="fase2.html"; 
    document.getElementById("again").href="fase1.html";

} else if (url.includes('fase2') === true){

    document.getElementById("next").href="fase3.html"; 
    document.getElementById("again").href="fase2.html";

} else {

    document.getElementById("next").href="index.html"; 
    document.getElementById("again").href="fase3.html";

}