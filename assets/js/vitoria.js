document.getElementById("points").innerHTML = "100";

var level = sessionStorage.getItem('level');

var next = document.getElementById("next");
var again = document.querySelector("#again");

console.log("again: " + again);

//console.log("level vitoria:" + level );

if (level === "1"){

   // again.classList.toggle = "facil";
    next.classList.add = "medio";
    console.log("1");

} else if (level === "2"){

    again.classList.add = "medio";
    next.classList.add = "dificil";
    console.log("2");

} else if(level === "3"){

    again.classList.add = "dificil";
    next.classList.add = "fim"; 
    console.log("3");
   
}

console.log("lista next: " + next.classList);
console.log("lista again: " + again.classList);


