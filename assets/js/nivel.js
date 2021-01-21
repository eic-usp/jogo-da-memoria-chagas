
// mandar o botao apertado para a fase
function fase(n){
    console.log(n);
     var nivel;
    if(n === "facil"){
        nivel = 1;
    } else if (n === "medio"){
        nivel = 2;
    } else if(n === "dificil"){
        nivel = 3;
    }
    sessionStorage.setItem("nivel", nivel);
}



