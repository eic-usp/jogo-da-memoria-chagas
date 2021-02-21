
document.getElementById("points").innerHTML = "100";

var level = sessionStorage.getItem('fase');
var mode = sessionStorage.getItem('nivel');

var next = document.getElementById("next");
var again = document.getElementById("again");

//var victory = 1;

switch(mode){
    case "1":
        again.classList.add("facil");
        next.classList.add("medio");
        if(level === "1"){
            again.classList.add("1");
            next.classList.add("2");
        } else if (level === "2"){
            again.classList.add("2");
            next.classList.add("3");
        } else if (level === "3"){
            again.classList.add("3");
            next.href = "fim.html";
            next.innerHTML = "TERMINAR";
        }
        break;
    case "2":
        again.classList.remove("facil");
        next.classList.remove("medio");
        again.classList.add("medio");
        next.classList.add("dificil");
        if(level === "1"){
            again.classList.add("1");
            next.classList.add("2");
        } else if (level === "2"){
            again.classList.add("2");
            next.classList.add("3");
        } else if (level === "3"){
            again.classList.add("3");
            next.href = "fim.html";
            next.innerHTML = "TERMINAR";
        }
        break;
    case "3":
        if(level === "1"){
            again.classList.add("1");
            next.classList.add("2");
        } else if (level === "2"){
            again.classList.add("2");
            next.classList.add("3");
        } else if (level === "3"){
            again.classList.add("3");
            next.href = "fim.html";
            next.innerHTML = "TERMINAR";
        }
        break;
}

   

var script = document.createElement("script");  
script.src = "assets/js/nivel.js";  
document.body.appendChild(script); 
