(function (){

    /*Não está mostrando a imagem de par correto e não está entendendo que algumas cartas sao pares */
    /*porque não está contando par se eu não mudei nada */

    level = sessionStorage.getItem('fase'); // fase 1, 2, 3
    var mode = sessionStorage.getItem('nivel'); // facil/medio/dificil 

    var size = $(window).width();

    //console.log("fase:" + level);
    //console.log("nivel:" + mode);

    if (level === null){
        level = 1;
    }

    var images = [];
    var matches = 0;
    var fail = 0;
    /*Imagens desktop*/
    if(size >= 600){
        if (level === "1"){

            document.getElementsByTagName('title')[0].innerHTML= "Fase 1";

            for(var i = 0; i < 16; i++){

                var img = {
                        src: "assets/img/desktop/fase1/" + i + ".png",
                        id: i%8
                    
                };
               // console.log("id das imagens:" + img.id);
                images.push(img);
            } 

        } else if (level === "2"){

            document.getElementsByTagName('title')[0].innerHTML= "Fase 2";
        
            for(var i = 0; i < 8; i++){
                var img = {
                        src: "assets/img/desktop/fase1/" + i + ".png",
                        id: i%8
                };
                images.push(img);
            }

            for(var i = 8; i < 16; i++){
                var img = {
                        src: "assets/img/desktop/fase2/" + i + ".png",
                        id: i%8
                };
                images.push(img);
            } 

        } else if(level === "3"){

            document.getElementsByTagName('title')[0].innerHTML= "Fase 3";

            for(var i = 0; i < 8; i++){
                var img = {
                        src: "assets/img/desktop/fase3/" + i + ".png",
                        id: i%8
                    };
                    images.push(img);
                }

            for(var i = 8; i < 16; i++){
                var img = {
                        src: "assets/img/desktop/fase2/" + i + ".png",
                        id: i%8
                };
                images.push(img);
            } 

        }

    }else{ /*Imagens mobile*/
        console.log("fase");

        if (level === "1"){

            document.getElementsByTagName('title')[0].innerHTML= "Fase 1";

            for(var i = 0; i < 16; i++){
                /*img é objeto, indices textuais, funções = métodos */
                var img = {
                        src: "assets/img/mobile/fase1/" + i + ".png",
                        id: i%8
                    
                };
              //  console.log("id das imagens:" + img.id);
                images.push(img);
            } 

        } else if (level === "2"){

            document.getElementsByTagName('title')[0].innerHTML= "Fase 2";

        
            for(var i = 0; i < 8; i++){
                var img = {
                        src: "assets/img/mobile/fase1/" + i + ".png",
                        id: i%8
                };
                images.push(img);
            }

            for(var i = 8; i < 16; i++){
                var img = {
                        src: "assets/img/mobile/fase2/" + i + ".png",
                        id: i%8
                };
                images.push(img);
            } 

        } else if(level === "3"){
            // arrumar o tamanho das imagens, mas de resto ta tudo certo até aqui

            document.getElementsByTagName('title')[0].innerHTML= "Fase 3";

            for(var i = 0; i < 8; i++){
                var img = {
                        src: "assets/img/mobile/fase3/" + i + ".png",
                        id: i%8
                    };
                    images.push(img);
                }

            for(var i = 8; i < 16; i++){
                var img = {
                        src: "assets/img/mobile/fase2/" + i + ".png",
                        id: i%8
                };
                images.push(img);
            } 

        }
    }
   

    startGame();
    /** começa o jogo */
    function startGame(){   
    
        matches = 0;

        flippedCards = [];

        error = 0;

        images  = randomSort(images);

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
     *  Virar as cartas no inicio do jogo para a pessoa memorizar
     */
    function InicialTime(mode){
      
        var faces =  document.getElementsByClassName("face");
        for(i = 0; i < 32; i++){
            faces[i].classList.toggle("flipped");
            }
            if(mode === "1"){
                setTimeout(function (){
                for(i = 0; i < 32; i++){
                    faces[i].classList.toggle("flipped");
                    }
                }, 5000);
            } else if(mode === "2"){
                setTimeout(function (){
                    for(i = 0; i < 32; i++){
                        faces[i].classList.toggle("flipped");
                        }
                    }, 2500);
            } else if(mode === "3"){
                setTimeout(function (){
                    for(i = 0; i < 32; i++){
                        faces[i].classList.toggle("flipped");
                        }
                    }, 1500);
            } 
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
 /*  function some(){
        for (n =0; n < 16 ; n++){
            let carta = [];
            let cart = this.document.getElementsById("#card"+n);
            carta.push(cart);
            if(n%8 === flippedCards[0].childNodes[3].id){ 
                carta[n].classList.toggle("pair");
            }
        }
    }
    */
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
                console.log("2" + flippedCards[0].childNodes[3]);
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
                     // for(n=0; n <16; n++){
                      //  var cart = document.getElementById("Card"+n);
                      //  if(n%8 === flippedCards[0].id){
                       //     cart[i].classList.add("pair");
                      //      flippedCards = [];
                      //  }
                      //  }
        
                 //   }

                        flippedCards = [];
                        matches++;
                        CountPoints(matches);
                        if(matches === 8){
                            victory();
                        }
                        
                    }
                    function rotarY(){
                        flippedCards[0].childNodes[1].style.transform = "rotateY("+0+"deg)";
                        flippedCards[0].childNodes[3].style.transform = "rotateY("+180+"deg)";
                        flippedCards[1].childNodes[1].style.transform = "rotateY("+0+"deg)";
                        flippedCards[1].childNodes[3].style.transform = "rotateY("+180+"deg)";

                       
                     
                }
                        
            if(flippedCards[0].childNodes[3].id !== flippedCards[1].childNodes[3].id){
                rotarY();
                flippedCards[0].childNodes[1].classList.toggle("flipped");
                flippedCards[0].childNodes[3].classList.toggle("flipped");
                flippedCards[1].childNodes[1].classList.toggle("flipped");
                flippedCards[1].childNodes[3].classList.toggle("flipped");
            
                flippedCards = [];
                fail++;
                CountPoints(fail);
            }  
     
            } 
            
            
            
            
            
            
            
            //else {
         
           // }
           
                   
                   
                  
               
          // flippedCards[0].childNodes[1].classList.toggle("flipped");
          // flippedCards[0].childNodes[3].classList.toggle("flipped");
          // flippedCards[1].childNodes[1].classList.toggle("flipped");
          // flippedCards[1].childNodes[3].classList.toggle("flipped");
           
            
          
         
           
        }
         /**
          * Função para contar os pontos feitos na fase
          * @param {number} fail
          * recebe o numero de fails para calcular a pontuação total
          * pontuação final = 100 - (errados*2)
          * Nunca está abaixo de 50
          */
        function CountPoints(fail){
            
            var ptsant = document.getElementById("points").textContent;
             ptsant = parseInt(ptsant);

             if(ptsant > 50){
                pts = 100 - (fail * 2);
                document.getElementById("points").innerHTML =  pts;
             }
        }

     /**
      * Função para chamar a página de vitória
      */
    function victory(){

            var level = sessionStorage.getItem('fase');
            
            sessionStorage.setItem("fase", level);
            sessionStorage.setItem("nivel", mode);

            var points = document.getElementById("points").textContent;

            sessionStorage.setItem("pontos", points);

            window.location.replace("vitoria.html");
        }
         /**
          * Sinaliza quando o jogador acerta um par
          */
    matchCardsSign();     
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
    }
        /*function matchCardsSign(){
            imgMatchSing.style.zIndex = 1;
            var height =  $(window).height();
            imgMatchSing.style.top = Math.round(height/2) + "px";
            imgMatchSing.style.opacity = 0;
            setTimeout(function(){
                imgMatchSing.style.zIndex = -1;
                imgMatchSing.style.top = 250 + "px";
                imgMatchSing.style.opacity = 1;
            },1000);
        */
  
        }
)();
/**
 * Sair da página de jogo
 */
 function quitGame(){
    window.location.replace("index.html");
}
