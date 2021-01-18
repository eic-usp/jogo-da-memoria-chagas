
var btnFacil = document.getElementById("facil");
//btnFacil.addEventListener("click", fase(1), false);

var btnMedio = document.getElementById("medio");
//btnMedio.addEventListener("click", fase(2), false);

var btnDificil = document.getElementById("dificil");
//btnMedio.addEventListener("click", fase(3), false);

function fase(n){
    window.location.replace("fase1.html");
    sessionStorage.setItem("n", n);
}



