
document.getElementById("points").innerHTML = "100";

var level = sessionStorage.getItem('level');

var next = document.getElementById("next");
var again = document.getElementById("again");

switch(level){
    case "1":
        again.classList.add("facil");
        next.classList.add("medio");
        break;
    case "2":
        again.classList.add("medio");
        next.classList.add("dificil");
        break;
    case "3":
        again.classList.add("dificil");
        next.href = "fim.html";
        next.innerHTML = "TERMINAR";
        break;
}

var script = document.createElement("script");  
script.src = "assets/js/nivel.js";  
document.body.appendChild(script); 
