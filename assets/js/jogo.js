
//tentativa de otimização do jogo (para fazer mais fazes mais rápido e nao ficar repetindo as mesmas partes do jogo)
// porque as imagens estao se repetindo ??
// mexer com o css por algum motivo esta impedindo o funcionamento do jogo

(function(){

    var level = sessionStorage.getItem('nivel');

    if (level === null){
        level = 1;
    }

    var images = [];

    var bgLevel = document.getElementsByClassName('back');
    console.log(bgLevel);

    // ainda nao criei o botao, nem no menu desktop, nem modal

    //var quitGame = document.querySelector("quitGame");

    var matches = 0;

    //var imgMatchSing = document.querySelector("#imgMatchSing");

    //Fazer contador de pontos (pensar em como fazer)

    if (level === "1"){

        document.getElementsByTagName('title')[0].innerHTML= "Fase 1";

        bgLevel.style.cssText =
        'object-fit: fill;' +
        'background: url("../img/fase1/1.png");';

   
    background: url("../img/fase1/verso1.png");

        for(var i = 0; i < 16; i++){
            console.log("oi");
            /*img é objeto, indices textuais, funções = métodos */
            var img = {
                    src: "assets/img/fase1/" + i + ".png",
                    id: i%4
            };
            images.push(img);
        } 
    } else if (level === "2"){

        document.getElementsByTagName('title')[0].innerHTML= "Fase 2";

       

        for(var i = 0; i < 8; i++){
            var img = {
                    src: "assets/img/fase1/" + i + ".png",
                    id: i%4
            };
            images.push(img);
        }

        for(var i = 8; i < 16; i++){
            var img = {
                    src: "assets/img/fase2/" + i + ".png",
                    id: i%4
            };
            images.push(img);
        } 

    } else if(level === "3"){

        document.getElementsByTagName('title')[0].innerHTML= "Fase 3";

       // bgLevel.style.background = "url('"+ assets/fase3/verso3.png +"')";

        for(var i = 0; i < 8; i++){
            var img = {
                    src: "assets/img/fase2/" + i + ".png",
                    id: i%4
            };
            images.push(img);
        } 
        for(var i = 8; i < 16; i++){
            var img = {
                    src: "assets/img/fase3/" + i + ".png",
                    id: i%4
                };
            }
    }
   

    startGame();

    function startGame(){   
    
        matches = 0;

        flippedCards = [];

        images  = randomSort(images);

        var frontFaces = document.getElementsByClassName("front");
        var backFaces = document.getElementsByClassName("back");
        
        var size = windowWidth = $(window).width();

        if(size > 1000){ /*Versão Desktop*/
        
            /*tentar criar uma função e modularizar essa parte passando o tamanho da tela por parâmetro, ver se vai funcionar*/
            for(var i = 0; i < 16; i++){

                //console.log("entrou no for");

                frontFaces[i].classList.remove("flipped", "match");
                backFaces[i].classList.remove("flipped", "match");

                /*Pode usar get element by id, porem o query selector é mais rápido*/
                var card = document.querySelector("#card" + i);
                // console.log(card);
                /* mostrar se esta pegando os cards*/
                /*mod: resto da divisao */
                /*Problema do espaçameto vertical - resolvido */
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
                frontFaces[i].style.background = "url('"+ images[i].src +"')";
                frontFaces[i].setAttribute("id",images[i].id);
                // console.log(images[i].src);

                if(i === 15){
                    //mudar o texto
                    ShowStart();
                    InicialTime(); // função para mostrar todas as cartas no inicio
                }

            }
            
        } else if (size >= 600 && size <= 1000) { /*Versão tablet*/

            for(var i = 0; i < 16; i++){

                frontFaces[i].classList.remove("flipped", "match");
                backFaces[i].classList.remove("flipped", "match");
                var card = document.querySelector("#card" + i);
                card.style.left = i % 4 === 0? 6 + "px" : i % 4 * 102 + 6 + "px"; 
        
                if(i < 4){
                    card.style.top = 6 + "px";
                } else if(i < 8){
                    card.style.top = 108 + "px";
                }else if(i < 12){
                    card.style.top = 210 + "px";
                } else{
                    card.style.top = 312 + "px";
                }
        
                card.addEventListener("click", flipCard, false);
        
                frontFaces[i].style.background = "url('"+images[i].src +"')";
                frontFaces[i].setAttribute("id",images[i].id);
                // console.log(frontFaces[i].id);

                if(i === 15){
                    //mudar o texto
                    ShowStart();
                    InicialTime(); // função para mostrar todas as cartas no inicio
                }
            }

        } else { /*Versão Mobile*/
            for(var i = 0; i < 16; i++){

                frontFaces[i].classList.remove("flipped", "match");
                backFaces[i].classList.remove("flipped", "match");
                var card = document.querySelector("#card" + i);
                card.style.left = i % 4 === 0? 6 + "px" : i % 4 * 76 + 6 + "px"; 
        
                if(i < 4){
                    card.style.top = 5 + "px";
                } else if(i < 8){
                    card.style.top = 80 + "px";
                }else if(i < 12){
                    card.style.top = 155 + "px";
                } else {
                    card.style.top = 230 + "px";
                }
        
                card.addEventListener("click", flipCard, false);
        
                frontFaces[i].style.background = "url('"+ images[i].src +"')";
                frontFaces[i].setAttribute("id",images[i].id);
                //console.log(sources[i]);

                if(i === 15){
                    //mudar o texto
                    ShowStart();
                    InicialTime(); // função para mostrar todas as cartas no inicio
                }
             }
        }
        /* modalGameOver.style.zIndex = -2;
        modalGameOver.removeEventListener("click",startGame, false);*/
    }


    function randomSort(images){
        var sorted = [];
        while(sorted.length < 16){
            var i = Math.floor(Math.random()*16);
            //se for -1 o elem ainda nao existe no  novo array
            if(sorted.indexOf(images[i]) < 0){
                sorted.push(images[i]);
            }
        }
        return sorted;
    }

    function InicialTime(){
        //mostra todas as cartas no ínicio
        //var Cards = [];
        var faces =  document.getElementsByClassName("face");
        for(i = 0; i < 32; i++){
            faces[i].classList.toggle("flipped");
            }
    setTimeout(function (){
        for(i = 0; i < 32; i++){
            faces[i].classList.toggle("flipped");
            }
        }, 5000);
    }

    function ShowStart(){
        setTimeout(function(){ 
            document.getElementById("titulo-jogo").innerHTML = "Vire os cartões";
        }, 5000);
    }

    function flipCard(){ /*Função para virar as cartas*/

            if(flippedCards.length < 2){

                /*rotacionar as faces 180 graus*/
                /*getElementsByClassName retorna uma lista */
                var faces =  this.getElementsByClassName("face");

                //impedir que o usuario tente clicar duas vezes na mesma carta
                if(faces[0].classList.length > 2){
                    return; 
                }

                faces[0].classList.toggle("flipped");
                faces[1].classList.toggle("flipped");
                /*toggle = switch, se nao existe adiciona, se ja existe, remove  */
                flippedCards.push(this);

                if(flippedCards.length === 2 ){
                    //Problema com a carta carlos chagas e megacolon - não sei o que está acontecendo
                    //elemento de face front 
                    if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){
                        flippedCards[0].childNodes[1].classList.toggle("match");
                        flippedCards[0].childNodes[3].classList.toggle("match");
                        flippedCards[1].childNodes[1].classList.toggle("match");
                        flippedCards[1].childNodes[3].classList.toggle("match");

                        // criar a função de pontuação e chamar aqui score();

                        matchCardsSign();
                        console.log("match");
                        
                        matches++;
                        flippedCards = [];

                        if(matches === 8){
                            victory();
                        }
                    }
                }

            } else {
                /*childNodes: todos os nós filhos de FlippedCards (filhos do array pai (flippedCards))*/
            flippedCards[0].childNodes[1].classList.toggle("flipped");
            flippedCards[0].childNodes[3].classList.toggle("flipped");
            flippedCards[1].childNodes[1].classList.toggle("flipped");
            flippedCards[1].childNodes[3].classList.toggle("flipped");

            flippedCards = [];
            }  
        }

    function victory(){
            var url = window.location.href;
            var level = sessionStorage.getItem('nivel');
            sessionStorage.setItem("level", level);

            var points = $("#points").text();    

            sessionStorage.setItem("points", points);

            window.location.replace("vitoria.html");
        }

    function matchCardsSign(){
            imgMatchSing.style.zIndex = 1;
            imgMatchSing.style.top = 150 + "px";
            imgMatchSing.style.opacity = 0;
            setTimeout(function(){
                imgMatchSing.style.zIndex = -1;
                imgMatchSing.style.top = 250 + "px";
                imgMatchSing.style.opacity = 1;
            },1000);
        }
}
)();