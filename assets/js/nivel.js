
// mandar o botao apertado para a fase
function fase(n){
    
     var nivel = "";

     console.log("nivel antes:" + nivel);

    if(n === "facil"){
        nivel = 1;
      //  console.log("1") ;
    } else if (n === "medio"){
        nivel = 2;
       // console.log("2") ;
    } else if(n === "dificil"){
        nivel = 3;
      //  console.log("3") ;
    } 
    
    sessionStorage.setItem("nivel", nivel);
}



