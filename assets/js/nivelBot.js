

BotaoAtivar()



function BotaoAtivar(){


    nivelP = sessionStorage.getItem("nivel")
    console.log(" Nivel salvos " + sessionStorage.getItem("fase"))
    console.log(" Fase salvos " +  sessionStorage.getItem("nivel"))

    // verificar fase e nivel
    if(nivelP == 1){
        //console.log("nivel ###" + 1)
        //document.getElementById("facil").disabled = false;
    }if(nivelP == 2) {
        //console.log("nivel ### " + 2)

        document.getElementById("facil").disabled = true;
        
    }if(nivelP == 3) {
    // console.log("nivel ###" + 3)
        document.getElementById("facil").disabled = true;
        document.getElementById("medio").disabled = true;
    }
    
}