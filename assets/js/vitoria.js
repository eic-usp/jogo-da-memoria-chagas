/**
 * Seta os pontos na tela de vitória
 * @param {number} get 
 * Se get = 0: mostra na tela
 * se get = 1: retorna a pontuação
 * @returns points
 */
function setPoints(get){
    let points = sessionStorage.getItem('pontos');
    if(get === 0){
        document.getElementById("points").innerHTML = points;
    }else{
        return points;
    }    
}
function GetRounds(){
    //preciso pegar a qtd de rodadas em cada fase
    //se o cookie ja existe o valor é atualizado
    //cookie de qtd de rounds, unico
   return document.getElementById("again").classList[3];
}
function playAgain(){
    //funcionando, preciso fazer a contagem na página de vitoria agora, para contar na pontuação final
   //não diferenciei entre as rodadas, dar um jeito
   //usar split
    let plays = document.getElementById("again").classList[3];
    console.log("plays" + plays);

    let level = sessionStorage.getItem('fase');
   if (plays >= 1){
       //Modelo de nome do cookie: ptsfase-1-Round:1
       let cookiename = "ptsfase" + String(level) +"Round:" + String(plays);
       let points = setPoints(1);
       Cookies.set(cookiename, points); //ver como descobrir os nomes dos cookies depois
   }
   let qtdPlays = parseInt(plays)+1;
   document.getElementById("again").classList[3] = qtdPlays;
}

function GameFlow(){
    //setar depois de cada verificação a quantidade de fases, criar um padrão de string
    //está dando certo

    console.log("entrou no game flow");
   //troquei para lets porque são variaveis locais, boas práticas, lembrar

    var level = sessionStorage.getItem('fase'); // fase atual
    console.log("fase em cada nivel - vitoria" + level);
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
}

setPoints(0);
GameFlow();
