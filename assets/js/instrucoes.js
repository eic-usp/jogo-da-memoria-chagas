//Alterar salvando o fase atual aqui e depois salvando a fase do jogo
var btnNext = document.getElementById("nextPage");

btnNext.addEventListener("click", GameTutorial, false);

function GameTutorial(){
    var btnNext = document.getElementById("nextPage");
    var position = btnNext.classList[3];

    if(position === "1"){

        document.getElementById("textoFase").innerHTML="Na fase 2, o objetivo é encontrar a imagem e o nome!";

        var card1 = document.getElementById("cardI1");
        card1.classList.remove("Inst1");
        card1.classList.add("Inst2");

        btnNext.classList.remove("1");
        btnNext.classList.add("2");

    } else if (position === "2"){

        document.getElementById("textoFase").innerHTML="Na fase 3, o objetivo é encontrar a definição e o conceito!";

        var card0 = document.getElementById("cardI0");
        card0.classList.remove("Inst1");
        card0.classList.add("Inst2");

        var card1 = document.getElementById("cardI1");
        card1.classList.remove("Inst2");
        card1.classList.add("Inst3");

        btnNext.classList.remove("2");
        btnNext.classList.add("3");

        btnNext.innerHTML = "COMEÇAR";
        btnNext.addEventListener("click", ChooseLevel, false);

    } 
}
function ChooseLevel(){
    window.location.replace("nivel.html");
}

