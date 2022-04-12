
/*
class ConcluidoNivelFase{

    constructor () {
        this.concluido = 0
    }

    get concluido(){

        return this.pontos
    }
    set concluido(value){

        this.concluido = value

    }
}
pontos = new Pontos();

pontos.concluido = 10

console.log("Pontos concluidos" + pontos.concluido)
*/
BotaoAtivar()

function BotaoAtivar(){

    const nivelP = sessionStorage.getItem("nivel")
    const fase = sessionStorage.getItem("fase")
    const concluido = sessionStorage.getItem("Concluido")
    console.log(" Nivel salvos " + sessionStorage.getItem("fase"))
    console.log(" Fase salvos " +  sessionStorage.getItem("nivel"))
    console.log(" Concluido " +  sessionStorage.getItem("Concluido"))

    // // verificar fase e nivel
    // if(nivelP == 2 && concluido == 0) {
    //     //console.log("nivel ### " + 2)

    //     document.getElementById("facil").disabled = true;
        
    // }if(nivelP == 3 && concluido == 0) {
    // // console.log("nivel ###" + 3)
    //     document.getElementById("facil").disabled = true;
    //     document.getElementById("medio").disabled = true;
    // }if(nivelP == 3 && fase == 3 && concluido == 1){

    //     document.getElementById("facil").disabled = false;
    //     document.getElementById("medio").disabled = false;

    // }   

    
}

