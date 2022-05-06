//ver se não vou precisar remover a função
var NextLevel = sessionStorage.getItem("next");
var btnNextLevel = document.getElementById("prox");

/**
 * Altera os botões de proximo nivel quando necessário
 * @param {*} NextLevel próximo nível
 * @param {*} btnNextLevel botão de próximo nível
 */
function nextMode(NextLevel, btnNextLevel){
    if (NextLevel === "0"){
        btnNextLevel.style.display = "none";
    }else{
    
        var mode = sessionStorage.getItem("mode");
    
        if (mode === "1"){
          btnNextLevel.classList.add("medio");
        } else if (mode === "2"){
            btnNextLevel.classList.add("dificil");
        }
            
        var script = document.createElement("script");  
        script.src = "assets/js/nivel.js";  
        document.body.appendChild(script); 
    }
}

nextMode();

    

