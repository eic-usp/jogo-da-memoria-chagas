
document.getElementById("points").innerHTML = "100";

var level = sessionStorage.getItem('level');

var next = document.getElementById("next");
var again = document.getElementById("again");

for(i = 0; i < next.classList.length; i++){
    console.log("classe" + i + ": " + next.classList[i]);
}
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
        next.classList.add("fim");
        break;
}

console.log("2 vez");

for(i = 0; i < next.classList.length; i++){
    console.log("classe " + i + ": " + next.classList[i]);
}

for(i = 0; i < again.classList.length; i++){
    console.log("classe again " + i + ": " + again.classList[i]);
}

var script = document.createElement("script");  
script.src = "assets/js/nivel.js";  
document.body.appendChild(script); 
