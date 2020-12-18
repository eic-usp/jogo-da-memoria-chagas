/*pensar em como rodar em diferentes tamanhos de tela */
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

    for(var i = 0; i < 16; i++){
        /*frontFaces[i].classList.remove("flipped", "match");
        backFaces[i].classList.remove("flipped", "match");*/

       /*Pode usar get element by id, porem o query selector é mais rápido*/
       var card = document.querySelector("#card" + i);
       var card = document.querySelector("#card" + i);
       console.log(card);
       /* mostrar se esta pegando os cards*/
       /*mod: resto da divisao */
       card.style.left = i % 4 === 0? 10 + "px" : i % 4 * 125 + 10 + "px"; 
       if(i < 4){
        card.style.top = 10 + "px";
       } else if(i < 8){
        card.style.top = 130 + "px";
       }else if(i < 12){
        card.style.top = 250 + "px";
       }
       else{
        card.style.top = 370 + "px";
       }

      /* card.addEventListener("click", flipCard, false);*/

        /*todos os cards tem imagem e id */
        frontFaces[i].style.background = "url('../img/fase1"+images[i].src +"')";
        frontFaces[i].setAttribute("id",images[i].id);
        console.log(frontFaces[i].id);
   }





}


 }());