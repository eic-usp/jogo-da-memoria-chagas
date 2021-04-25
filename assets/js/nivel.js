
// mandar o botao apertado para a pag instruções apenas com o fase atual, tentar fazerum cookie Jájogou/nunca jogou
// para nao mostrar o tutorial toda ver e fazer umif dentro dessa função pra ver se esse cookie existe
//provavelmente terei que fazer instruções 1 2 3 .html para facilitar o trabalho, ao inves de mudar com js
//fazer cookie de ja jogou - feito, só preciso pegar ele de volta

function fase(n, faseAtual){

    var nivel = "";

    if(n === "facil"){
        nivel = 1;
    } else if (n === "medio"){
        nivel = 2;
    } else if(n === "dificil"){
        nivel = 3;
    }

sessionStorage.setItem("nivel", nivel);
sessionStorage.setItem("fase", faseAtual);
}


   


