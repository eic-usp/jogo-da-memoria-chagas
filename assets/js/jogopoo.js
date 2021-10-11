//mudar toda a estrutura do jogo para orientação a OBJ, vai ficar melhor e mais origanizado

/*a lógica provavelmente vai funcionar mas preciso pensar em coisas que antes eram passadas como classList 
e agora vão ser guardadas nos objetos, se não a OO não faz sentido*/

/** Guardar informações sobre a carta */
class Cardd{

    constructor(id,src){
        this.id = id;
        this.scr = src;
        this.status = False;
    }
    
    static VerifyPair(Card1, Card2){
        if(Card1.id == Card2.id){
          this.pair = True;
          //matchCardsSign
        }else{
            this.pair = False;
            //Flip the cards Back
        }
    }
    
}
class Level{
//esse método ta muito grande e complexo, quero quebrar em partes, procurar a melhor estratégi
    constructor(level){
        var CardsList = [];
        if (level === "1"){

            document.getElementsByTagName('title')[0].innerHTML= "Fase 1";

            for(let i = 0; i < 16; i++){
                src = "assets/img/desktop/fase1/" + i + ".png";
                id = i%8;
                let card = new Cardd(id, src);    //constroi a carta e coloca na lista de cartas
                CardsList.push(card);
            } 

        } else if (level === "2"){

            document.getElementsByTagName('title')[0].innerHTML= "Fase 2";
        
            for(let i = 0; i < 8; i++){
                src = "assets/img/desktop/fase1/" + i + ".png";
                id = i%8;
                let card = new Cardd(id, src);    
                CardsList.push(card);
            } 
            for(let i = 8; i < 16; i++){
                src = "assets/img/desktop/fase2/" + i + ".png";
                id = i%8;
                let card = new Cardd(id, src);    
                CardsList.push(card);
            } 

        }
       return CardsList; 
    }

    sortCards(CardsList){
        //pensar em como embaralhar aqui dentro mesmo
        CardsList  = randomSort(CardsList);
        return CardsList;
    }
}
/**Guardar informações sobre a partida */
class Game{
    constructor(){
        this.points = 100;
        this.matches = 0;
        this.fail = 0;
    }

    static startGame(){
        let level = sessionStorage.getItem('fase'); // fase 1, 2, 3

        //queria usar esse if mas acho que é uma gambiarra porque não tenho else
        level === null ? level = 1: level = 1;
    

        let mode = sessionStorage.getItem('nivel'); // facil/medio/dificil
        round = new Round(level,mode,0);
    }

    fase(level){
        //Cardd.CreateCards(level);
    }

     /**
          * método para contar os pontos feitos na fase
          * @param {number} fail
          * recebe o numero de fails para calcular a pontuação total
          * pontuação final = 100 - (errados*2)
          * Nunca está abaixo de 50
          */
    countPoints(fail){
            
        var ptsant = document.getElementById("points").textContent;
         ptsant = parseInt(ptsant);

         if(ptsant > 50){
            pts = 100 - (fail * 2);
            document.getElementById("points").innerHTML =  pts;
         }
    }
    /** método para chamar a página de vitória */
    victory(){
        //como salvar objetos de um script para outro?
        //pemsar em como alterar a estrutura para não depender dos elementos de html além do necessario
        var level = sessionStorage.getItem('fase');
        
        sessionStorage.setItem("fase", level);
        sessionStorage.setItem("nivel", mode);

        var points = document.getElementById("points").textContent;

        sessionStorage.setItem("pontos", points);

        window.location.replace("vitoria.html");
    }
    /** Sair da página de jogo */
    quitGame(){
        window.location.replace("index.html");
    }
}
class Round{

    //ver como desbobrir o round
    constructor(level,mode, round){
        this.level = level;
        this.mode = mode;
        this.round = round;
        
    }
}


    //passar para round
    level = sessionStorage.getItem('fase'); // fase 1, 2, 3
    var mode = sessionStorage.getItem('nivel'); // facil/medio/dificil 

    var size = $(window).width();

    startGame();
    /** começa o jogo */

    function startGame(){   
    

        var frontFaces = document.getElementsByClassName("front");
        var backFaces = document.getElementsByClassName("back");
        
        var size = $(window).width();

        if(size > 1000){ /*Versão Desktop*/
            
            /*tentar criar uma função e modularizar essa parte passando o tamanho da tela por parâmetro, ver se vai funcionar*/
            for(var i = 0; i < 16; i++){

                frontFaces[i].classList.remove("flipped", "match");
                backFaces[i].classList.remove("flipped", "match");

                /*Pode usar get element by id, porem o query selector é mais rápido*/
                var card = document.querySelector("#card" + i);
                // console.log(card);
                /*mod: resto da divisao */
                card.style.left = i % 4 === 0? 0 + "px" : i % 4 * 140 + 10 + "px"; 

                if(i < 4){
                    card.style.top = 0 + "px";
                } else if(i < 8){
                    card.style.top = 130 + "px";
                }else if(i < 12){
                    card.style.top = 260 + "px";
                } else{
                    card.style.top = 390 + "px";
                }

                card.addEventListener("click", flipCard, false);

        
                backgroundLevel(level);

                /*todos os cards tem imagem e id */
                frontFaces[i].style.background = "url('"+ images[i].src +"')";
                frontFaces[i].setAttribute("id",images[i].id);
                frontFaces[i].style.backgroundRepeat = "no-repeat";

                if(i === 15){
                    //mudar o texto
                    ShowStart();
                    InicialTime(mode); 
                }
            }

        }else if (size >= 600 && size <= 1000) { /*Versão tablet*/

            for(let i = 0; i < 16; i++){

                frontFaces[i].classList.remove("flipped", "match");
                backFaces[i].classList.remove("flipped", "match");
                
                var card = document.querySelector("#card" + i);
        
                card.style.left = i % 4 === 0? 0 + "px" : i % 4 * 140 + 10 + "px"; 

                if(i < 4){
                    card.style.top = 0 + "px";
                } else if(i < 8){
                    card.style.top = 130 + "px";
                }else if(i < 12){
                    card.style.top = 260 + "px";
                } else{
                    card.style.top = 390 + "px";
                }

                card.addEventListener("click", flipCard, false);

                if(i === 1){
                    backgroundLevel(level);
                }
        
                frontFaces[i].style.background = "url('"+images[i].src +"')";
                frontFaces[i].setAttribute("id",images[i].id);
                frontFaces[i].style.backgroundRepeat = "no-repeat";

                if(i === 15){
                    ShowStart();
                    InicialTime(mode); 
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

                if(i === 1){
                    backgroundLevel(level);
                }
        
                frontFaces[i].style.background = "url('"+ images[i].src +"')";
                frontFaces[i].setAttribute("id",images[i].id);
                frontFaces[i].style.backgroundRepeat = "no-repeat";

                if(i === 15){
                    ShowStart();
                    InicialTime(mode);
                }
             }
        }
    }

    /**
     *  Mudar as imagens do verso das cartas acordo com a fase
     * @param {*} level 
     */
    function backgroundLevel(level){
        // console.log("entrou");
            var backFaces = document.getElementsByClassName("back");
            for(var i = 0; i < backFaces.length; i++){
                if(level === "1"){
                    backFaces[i].classList.add("b1");
                }else if(level === "2"){
                    backFaces[i].classList.remove("b1");
                    backFaces[i].classList.add("b2");
                } else{
                    backFaces[i].classList.remove("b2");
                    backFaces[i].classList.add("b3");
                }
            }
    }
    /**
     * Embaralhar as cartas
     * @param {*} images vetor de imagens organizadas
     * @returns sorted - vetor com as imagens em posições aleatorias
     */
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
    
    

    /**
     *  Mudar a instrução no ínicio do jogo
     */
    function ShowStart(){
        setTimeout(function(){ 
            document.getElementById("titulo-jogo").innerHTML = "Vire os cartões";
            var ShowPointsBox = document.getElementById("points-box");
            ShowPointsBox.classList.remove("hide-points-box");
        }, 5000);
    }
 
 /**
  * Função para virar as cartas e contar os matches
  *  */
 function flipCard(){
            //verificar porque chamo countPoints fail e countPoints matches
            if(flippedCards.length < 2){

                console.log(flippedCards.length);

                /*rotacionar as faces 180 graus*/
                /*getElementsByClassName retorna uma lista */
                var faces =  this.getElementsByClassName("face");
                
                // tive que mudar para 3 para que as cartas virem 
                //impedir que o usuario tente clicar duas vezes na mesma carta
                if(faces[0].classList.length > 3){
                    return; 
                }

                faces[0].classList.toggle("flipped");
                faces[1].classList.toggle("flipped");

                /*toggle = switch, se nao existe adiciona, se ja existe, remove */
                flippedCards.push(this);
              
                console.log("1" + flippedCards[0].childNodes[1]);
                console.log("2" +  flippedCards[0].childNodes[3]);
                console.log("3" + flippedCards[1].childNodes[1]);
                console.log("4" + flippedCards[1].childNodes[3]);     

                if(flippedCards.length === 2 ){
        
                    if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){

                        flippedCards[0].childNodes[1].classList.toggle("match");
                        flippedCards[0].childNodes[3].classList.toggle("match");
                        flippedCards[1].childNodes[1].classList.toggle("match");
                        flippedCards[1].childNodes[3].classList.toggle("match");
                        
                        //sinal de desaparecimento da carta - não funciona
                        //problema na função mathcardssing
                        //matchCardsSign();

                        //efeito de desaparecimento da carta
                        flippedCards[0].childNodes[1].classList.add("pair");
                        flippedCards[0].childNodes[3].classList.add("pair");
                        flippedCards[1].childNodes[1].classList.add("pair");
                        flippedCards[1].childNodes[3].classList.add("pair");

                        matches=7;
                        matches++;

                        flippedCards = [];

                        CountPoints(matches);

                        if(matches === 8){
                            victory();
                        }
                    }
                }

            } else {
            flippedCards[0].childNodes[1].classList.toggle("flipped");
            flippedCards[0].childNodes[3].classList.toggle("flipped");
            flippedCards[1].childNodes[1].classList.toggle("flipped");
            flippedCards[1].childNodes[3].classList.toggle("flipped");
        
            flippedCards = [];
            
            fail++;
            CountPoints(fail);
            
            }
        }
        

         /**
          * Sinaliza quando o jogador acerta um par
          */
    function matchCardsSign(){
            comsole.log("ta chamando");
            var imgMatchSing = document.getElementById("imgMatchSing");
            imgMatchSing.classList.remove("hideMatchSing");
            var height =  $(window).height();
            imgMatchSing.style.top = Math.round(height/2) + "px";
             setTimeout(function(){
                imgMatchSing.style.top = 250 + "px";
                imgMatchSing.classList.add("hideMatchSing");
            },1000);
        }
    


