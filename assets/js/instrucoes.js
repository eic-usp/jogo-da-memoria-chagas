//Mandar a fase passando por aqui
var fase = sessionStorage.getItem("fase");
var nivel = sessionStorage.getItem("nivel");

if(fase === "2"){

    document.getElementById("textoFase").innerHTML="Na fase 2, o objetivo é encontrar a imagem e o nome!";

        var card1 = document.getElementById("cardI1");
        card1.classList.remove("Inst1");
        card1.classList.add("Inst2");

    } else if( fase === "3"){

        document.getElementById("textoFase").innerHTML="Na fase 3, o objetivo é encontrar a definição e o conceito!";

        var card0 = document.getElementById("cardI0");
        card0.classList.remove("Inst1");
        card0.classList.add("Inst2");

        var card1 = document.getElementById("cardI1");
        card1.classList.remove("Inst2");
        card1.classList.add("Inst3");
    }

    var fase = sessionStorage.setItem("fase", fase);
    var nivel = sessionStorage.setItem("nivel", nivel);


