document.getElementById("points").innerHTML = "100";

var level = sessionStorage.getItem('level');

var next = document.getElementById("next");
var again = document.getElementById("again");

for (i = 0; i < next.length; i++){
    console.log(i + ":" + next[i]);
}

if (level === "1"){
 
    again.classList.add = "1";
    next.classList.add = "2";
    console.log("deu bom aqui");

} else if (level === "2"){
    again.id = "2";
    next.id = "3";
    
} else if(level === "3"){

    again.id = "3";
    next.id = "1"; // Criar um página para avisar e voltar ao início 

}
var classes =  next.classList;
console.log("classes"+ classes);
