
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
function fase(nivelP, faseAtual){

    var nivel = "";

    if(nivelP === "facil"){
        nivel = 1;
    } else if (nivelP === "medio"){
        nivel = 2;
    } else if(nivelP === "dificil"){
        nivel = 3;
    }

sessionStorage.setItem("nivel", nivel);
sessionStorage.setItem("fase", faseAtual);
console.log("fase em cada nivel - nivel" + faseAtual);

}


   


