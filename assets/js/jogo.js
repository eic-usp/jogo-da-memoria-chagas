/*pensar em como rodar em diferentes tamanhos de tela - pensei- agora vai ser fácil */
(function(){ 
    var images = [];

    var flippedCards = [];

    var modalGameOver = document.querySelector("#modalGameOver");

    var matches = 0;

    var imgMatchSing = document.querySelector("#imgMatchSing");

    for(var i = 0; i<16; i++){
        /*img é objeto, indices textuais, funções = métodos */
        var img = {
                src: "../img/fase1/"+ i + ".png",
                id: i%4
                /* arrumado - nao vai funcionar porque eu nao criei as imagens desse jeito */
        };
        console.log( "caminho" +img.src);
        images.push(img);
    } 

startGame();

function startGame(){
   
    matches = 0;

    flippedCards = [];

     //images = randomSort(images);
      //Procurar uma função de random sort melhor

    var frontFaces = document.getElementsByClassName("front");
    var backFaces = document.getElementsByClassName("back");
    
    var size = windowWidth = $(window).width();
    
   if(size >= 1000){ /*Versão Desktop*/

    /*tentar criar uma função e modularizar essa parte passando o tamanho da tela por parâmetro, ver se vai funcionar*/
    
    for(var i = 0; i < 16; i++){

        frontFaces[i].classList.remove("flipped", "match");
        backFaces[i].classList.remove("flipped", "match");

       /*Pode usar get element by id, porem o query selector é mais rápido*/
       var card = document.querySelector("#card" + i);
       //console.log(card);
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

     card.addEventListener("click", flipCard, false);

        /*todos os cards tem imagem e id */
        frontFaces[i].style.background = "url('../img/fase1/"+images[i].src +"')";
        frontFaces[i].setAttribute("id",images[i].id);
        console.log(frontFaces[i].id);
         }
    /*modalGameOver.style.zIndex = -2;
    modalGameOver.removeEventListener("click",startGame, false);*/

    
    }else if (size >= 600 && size <= 999) { /*Versão tablet*/

    }else{ /*Versão Mobile*/

    }
}
 function flipCard(){
        if(flippedCards.length < 2){
             /*rotacionar as faces 180 graus*/
            /*getElementsByClassName retorna uma lista */
            var faces =  this.getElementsByClassName("face");

            //impedir que o usuario tente clicar duas vezes na mesma carta, e eu nao quero isso
            if(faces[0].classList.length > 2){
                return; 
            }
            faces[0].classList.toggle("flipped");
            faces[1].classList.toggle("flipped");
            /*toggle = switch, se existe adiciona, se ja existe, remove  */
            flippedCards.push(this);

            if(flippedCards.length === 2 ){
                //elemento de face front 
                if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){
                    flippedCards[0].childNodes[1].classList.toggle("match");
                    flippedCards[0].childNodes[3].classList.toggle("match");
                    flippedCards[1].childNodes[1].classList.toggle("match");
                    flippedCards[1].childNodes[3].classList.toggle("match");

                    matchCardsSign();

                    matches++;
                    flippedCards = [];

                    if(matches === 8){
                        gameOver();
                    }
                }
            }
        } else {

            /*Não entendi e acho que nao vai funcionar */
           // console.log(flippedCards);
           flippedCards[0].childNodes[1].classList.toggle("flipped");
           flippedCards[0].childNodes[3].classList.toggle("flipped");
           flippedCards[1].childNodes[1].classList.toggle("flipped");
           flippedCards[1].childNodes[3].classList.toggle("flipped");

           flippedCards = [];
        }  
    }

    function matchCardsSign(){
        imgMatchSing.style.zIndex = 1;
        imgMatchSing.style.top = 150 + "px";
        imgMatchSing.style.opacity = 0;
        setTimeout(function(){
            imgMatchSing.style.zIndex = -1;
            imgMatchSing.style.top = 250 + "px";
            imgMatchSing.style.opacity = 1;
        },1500);
    }

 }());