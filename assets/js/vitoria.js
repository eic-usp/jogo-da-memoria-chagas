 var size = $(window).width();
/* Pontuação funciona com cookies */

var points = sessionStorage.getItem('pontos');

//console.log("pontos na vitoria:" + points );

document.getElementById("points").innerHTML = points;

var level = sessionStorage.getItem('fase');
var mode = sessionStorage.getItem('nivel');

var next = document.getElementById("next");
var again = document.getElementById("again");

var NextLevel = 0;

switch(mode){
    case "1":
        again.classList.add("facil");
        next.classList.add("facil");
        break;
    case "2":
        again.classList.add("medio");
        next.classList.add("medio");
        break;
    case "3":
        again.classList.add("dificil");
        next.classList.add("dificil");
        break;
}

if(level === "1"){

    document.getElementById("points-fase1").innerHTML = points;

    again.classList.add("1");
    next.classList.add("2");
    Cookies.set('ptsfase1', points);

} else if (level === "2"){
    
    document.getElementById("points-fase2").innerHTML = points;

    again.classList.remove("1");
    next.classList.remove("2");
    again.classList.add("2");
    next.classList.add("3");

    Cookies.set('ptsfase2', points);

} else if (level === "3"){

    document.getElementById("points-fase3").innerHTML = points;

    Cookies.set('ptsfase3', points);

    again.classList.remove("2");
    next.classList.remove("3");
    again.classList.add("3");
    next.href = "fim.html";
    next.innerHTML = "TERMINAR";
}

if (level === "3" && mode !== "3"){
    NextLevel = 1;
    sessionStorage.setItem('mode',mode);
}
sessionStorage.setItem('next',NextLevel);

var script = document.createElement("script");  
script.src = "assets/js/nivel.js";  
document.body.appendChild(script); 


