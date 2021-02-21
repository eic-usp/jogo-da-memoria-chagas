
// mandar o botao apertado para a fase
function fase(n, faseAtual){
    // pensar em transformar o IdBtn classList em função - pensar

     var nivel = "";
     var IdBtn;
     var fase = "";
     
        if(n === "facil"){

            IdBtn = document.getElementById("facil");
            nivel = 1;
            console.log("pegando o botao:" + IdBtn);
    
            if (faseAtual === "1"){
                IdBtn.classList.remove("1");
                IdBtn.classList.add("2");
                fase = "1";
            } else if (stage === "2"){
                IdBtn.classList.remove("2");
                IdBtn.classList.add("3");
                fase = "2";
            } else if(stage === "3"){
                IdBtn.classList.remove("2");
                IdBtn.classList.add("3");
                fase =  "3";
            }
        } else if (n === "medio"){
    
            var IdBtn = document.getElementById("medio");
            nivel = 2;
    
            if (faseAtual === "1"){
                IdBtn.classList.remove("1");
                IdBtn.classList.add("2");
                fase = "1";
            } else if (faseAtual === "2"){
                IdBtn.classList.remove("2");
                IdBtn.classList.add("3");
                fase =  "2";
            } else if (faseAtual === "3"){
                IdBtn.classList.remove("2");
                IdBtn.classList.add("3");
                fase =  "3";
            }
    
    
        } else if(n === "dificil"){
    
            var IdBtn = document.getElementById("dificil");
            nivel = 3;
    
            if (faseAtual === "1"){
                IdBtn.classList.remove("1");
                IdBtn.classList.add("2");
                fase =  "1";
            } else if (faseAtual === "2"){
                IdBtn.classList.remove("2");
                IdBtn.classList.add("3");
                fase = "2";
            } else if (faseAtual === "3"){
                IdBtn.classList.remove("2");
                IdBtn.classList.add("3");
                fase = "3";
            }
    
        }

     }

   


    sessionStorage.setItem("nivel", nivel);
    sessionStorage.setItem("fase", fase);

}



