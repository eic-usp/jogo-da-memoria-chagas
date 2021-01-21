var points = sessionStorage.getItem('points');
var level = sessionStorage.getItem('level');

//console.log("pontos =" + points);

//mostrar os pontos feitos na fase na pagina de vitoria

//pensar em como alterar o link do botao dinamicamente
//pensar em transformar a pagina de jogo em uma só

if (level === 1){

    document.getElementById("next").href="fase2.html"; 
    document.getElementById("again").href="fase1.html";

} else if (level === 2){

    document.getElementById("next").href="fase3.html"; 
    document.getElementById("again").href="fase2.html";

} else if(level === 3){

    document.getElementById("next").href="index.html"; 
    document.getElementById("again").href="fase3.html";

}