
// mandar o botao apertado para a fase
function fase(n, faseAtual){
    // pensar em transformar o IdBtn classList em função - pensar

    //s = state     0 - primeira vez | 1 - ja ganhou

    var nivel = "";

    if(n === "facil"){
        nivel = 1;
    } else if (n === "medio"){
        nivel = 2;
    } else if(n === "dificil"){
        nivel = 3;
    }

    //console.log("nivel antes" + n);
   // console.log("fase" + faseAtual);
    
sessionStorage.setItem("nivel", nivel);
sessionStorage.setItem("fase", faseAtual);
}


   


