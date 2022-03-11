
// mandar o botao apertado para a pag instruções apenas com o fase atual, tentar fazerum cookie Jájogou/nunca jogou
// para nao mostrar o tutorial toda ver e fazer umif dentro dessa função pra ver se esse cookie existe
//provavelmente terei que fazer instruções 1 2 3 .html para facilitar o trabalho, ao inves de mudar com js
//fazer cookie de ja jogou - feito, só preciso pegar ele de volta
/**
 * Recebe o nível e a fase atual, que serão salvos para saber qual a próxima fase
 * Seta um cookie de nivel e um de fase
 * @param {number} nivelP :nível (fácil, médio, dificil)
 * @param {number} faseAtual: fase atual (1,2,3,etc)
 */

 //document.getElementById("facil").disabled = true;
 //const button = document. querySelector("facil");
 //button. disabled = true;
 /*
 var AntigaFase = sessionStorage.getItem("fase");

 console.log("Fase Antiga " + AntigaFase)
  console.log("nivelP ----- " + nivelP );
    */  

  //-----------------------
  

  // ---------------------
    

function fase(nivelP, faseAtual){

    console.log("faseAtual ------- " + faseAtual)
   
    var nivel = "";

    if(nivelP === "facil"){
        nivel = 1;
    } else if (nivelP === "medio"){
        nivel = 2;
    } else if(nivelP === "dificil"){
        nivel = 3;
    }

    
    //--------------------------
    
    var AntigaFase = sessionStorage.getItem('fase'); 
   /*
    console.log("nivel -------fora do if " + nivel)
    console.log("faseAtual ------- fora do if " + faseAtual)
    console.log("AntigaFase ------- fora do if " + AntigaFase)
    */
    if(faseAtual == null && AntigaFase == 3){
    
        console.log("------------------------------------------")
        console.log("nivel -------gfdgdfgdf " + nivel)
        console.log("faseAtual -------gfdgdfgdf " + faseAtual)
        console.log("AntigaFase -------gfdgdfgdf " + AntigaFase)

        console.log("------------------------------------------")
        
        if(nivel == 1){
            sessionStorage.setItem("nivel", 2);
            sessionStorage.setItem("fase", 1);
            AtualizarNivelFase(2, 1);
            location.href = "nivel.html";             
            console.log(" Nivel 1 - fase 3")

        }
        if (nivel == 2){
            sessionStorage.setItem("nivel", 3);
            sessionStorage.setItem("fase", 1);
            AtualizarNivelFase(3, 1);
            location.href = "nivel.html";
            console.log(" Nivel 2 - fase 3")

        } 
        if (nivel == 3) {
            sessionStorage.setItem("nivel", 3);
            sessionStorage.setItem("fase", 3);
            AtualizarNivelFase(3, 3);
            location.href = "nivel.html";
            console.log(" Nivel 3 - fase 3")
        } 
        /*
        else {

            console.log("teste nivel +++++++++ " + nivel )
            console.log("teste fase +++++++++ " + faseAtual)
            AtualizarNivelFase(nivel, faseAtual);
            //location.href = "instrucoes.html"
            
        }
        */
        
    }
    else{
        console.log("teste nivel ----------- " + nivel )
        console.log("teste fase --------- " + faseAtual)
        sessionStorage.setItem("nivel", nivel);
        sessionStorage.setItem("fase", faseAtual);
        AtualizarNivelFase(nivel, faseAtual);
        location.href = "instrucoes.html"         
    
    }   
    

    //-----------------------------
  

   // var AntigaFase = sessionStorage.getItem("faseAtual");
    

   // sessionStorage.setItem("nivel", nivel);
   // sessionStorage.setItem("fase", faseAtual);
    //console.log("nivel N " + faseAtual);
    //console.log("Fase N " + faseAtual);

    //location.href = "instrucoes.html"; 


}

function fasef(nivelP, faseAtual){
  

    sessionStorage.setItem("nivel", nivelP);
    sessionStorage.setItem("fase", faseAtual);

   // console.log("nivel **** " + nivelP);
    //console.log("Fase **** " + faseAtual);

    

    //console.log(" Nivel e fase salvos ")
    //console.log(" Nivel salvos " + sessionStorage.getItem("fase"))
    //console.log(" Fase salvos " +  sessionStorage.getItem("nivel"))
}

function VerificarFase(){
    
    var level = sessionStorage.getItem('fase'); 
    var mode = sessionStorage.getItem('nivel');   

    if(mode == 2){
       // console.log(" level " + level + " Nivel " + mode)
        //document.getElementById("again").disabled = true;
        //document.getElementById("next").disabled = true;

    }
}







