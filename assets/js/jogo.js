/*pensar em como rodar em diferentes tamanhos de tela - pensei- agora vai ser fácil */
(function(){ 
    var images = [];

    for(var i = 0; i<16; i++){
        /*img é objeto, indices textuais, funções = métodos */
        var img = {
                src: "../img/fase1/"+ i + ".png",
                id: i%4
                /*nao vai funcionar porque eu nao criei as imagens desse jeito */
        };
        images.push(img);
    } 

startGame();

function startGame(){
    var frontFaces = document.getElementsByClassName("front");
    var backFaces = document.getElementsByClassName("back");
    
    var size = windowWidth = $(window).width();
    
   if(size >= 1000){ /*Versão Desktop*/

    /*tentar criar uma função e modularizar essa parte passando o tamanho da tela por parâmetro, ver se vai funcionar*/
    
    for(var i = 0; i < 16; i++){
        /*frontFaces[i].classList.remove("flipped", "match");
        backFaces[i].classList.remove("flipped", "match");*/

       /*Pode usar get element by id, porem o query selector é mais rápido*/
       var card = document.querySelector("#card" + i);
       var card = document.querySelector("#card" + i);
       console.log(card);
       /* mostrar se esta pegando os cards*/
       /*mod: resto da divisao */
       /*Problema do espaçameto vertical */
       card.style.left = i % 4 === 0? 15 + "px" : i % 4 * 140 + 20 + "px"; 

       if(i < 4){
        card.style.top = 20 + "px";
       } else if(i < 8){
        card.style.top = 150 + "px";
       }else if(i < 12){
        card.style.top = 280 + "px";
       } else{
        card.style.top = 410 + "px";
       }

      /* card.addEventListener("click", flipCard, false);*/

        /*todos os cards tem imagem e id */
        frontFaces[i].style.background = "url('../img/fase1"+images[i].src +"')";
        frontFaces[i].setAttribute("id",images[i].id);
        console.log(frontFaces[i].id);
   }

    
    }else if (size >= 600 && size <= 999) { /*Versão tablet*/

    }else{ /*Versão Mobile*/

    }





}

 }());