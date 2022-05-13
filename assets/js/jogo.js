(function (){

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
    /* ----------------- Imagens desktop e tablet ----------------- */
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
     /* ---------------------- Imagens mobile ---------------------- */
    }else{
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
                        id: i%8 // assets/img/mobile/fase + (3 - Math.floor(i/8)).toString() + "/"
                };
                images.push(img);
            } 

        }
    }
   

    startGame();
    /* ----------------------- começa o jogo ----------------------- */
    function startGame(){   
        
        matches = 0;

        flippedCards = [];

        error = 0;

        images  = randomSort(images);

        var frontFaces = document.getElementsByClassName("front");
        var backFaces = document.getElementsByClassName("back");
        
        var size = $(window).width();

        /*tentar criar uma função e modularizar essa parte passando o tamanho da tela por parâmetro, ver se vai funcionar*/
        for(var i = 0; i < 16; i++){
                
        
            frontFaces[i].classList.remove("flipped", "match");
            backFaces[i].classList.remove("flipped", "match");

            /*Pode usar get element by id, porem o query selector é mais rápido*/
            var card = document.querySelector("#card" + i);
            // console.log(card);

            if(size >= 600){ /*Versão Desktop e tablet*/
                /*mod: resto da divisao */
                card.style.left = (i % 4) * 140 + "px"; 

                //se 0 ou multiplo de 4 = 0
                //caso contrário 140 * resto -> 140 * resto OU 0
                card.style.top = (Math.floor(i / 4) * 130)  + "px"; //(((i / 4).floor() + 1) * 0)
            } else { /*Versão Mobile*/
                card.style.left = (i % 4) * 140 + "px"; 
                card.style.top = (Math.floor(i / 4) * 130)  + "px"; //(((i / 4).floor() + 1) * 0)
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

    /* -- Virar as cartas no inicio do jogo para a pessoa memorizar -- */
    function InicialTime(mode){
      
        var faces =  document.getElementsByClassName("face");

        for(i = 0; i < 32; i++){
            faces[i].classList.toggle("flipped");
        }

        sleepTime = (4000 - parseInt(mode)*1000) + (parseInt(level)*1000);
        
        setTimeout(function (){
            for(i = 0; i < 32; i++){
                faces[i].classList.toggle("flipped");
            }
        }, sleepTime);
        
    }
    
    /* ------------- Mudar a instrução no ínicio do jogo ------------- */
    function ShowStart(){
        setTimeout(function(){ 
            document.getElementById("titulo-jogo").innerHTML = "Vire os cartões";
            var ShowPointsBox = document.getElementById("points-box");
            ShowPointsBox.classList.remove("hide-points-box");
        }, 5000);
    }
 
    var cont = 0;

    /* -------------- Remove o brilho dos pares feitos -------------- */
    function brilho(){
        let info = [];
        for(i=0; i< 16; i++){
            info[i] = document.getElementById("card"+i); //Recolhe todos os cards
            console.log(info[i]);
        }
        for(i=0; i< info.length; i++){
            info[i] = info[i].childNodes[3]; //faz com que os cards se tornem "face front"
            console.log(info[i]);
            
            if(info[i].id === flippedCards[0].childNodes[3].id){
                //info.splice(info.indexOf(i));
                info[i].parentNode.style.boxShadow = "none"; //remove o brilho da carta associada
            }
        }
        console.log(info);
        info = [];
    }

    /* -------------------------- flipCard -------------------------- */
    function flipCard(mode){

        cont++;
        console.log("flipCard ----------------- " + cont)
        console.log("Tamanho - " + flippedCards.length);

        //verificar porque chamo countPoints fail e countPoints matches
        if(flippedCards.length < 2){
            console.log("Entrou no IF 0 ----------");
                                
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
            //console.log("Tamanho - 1- " + flippedCards.length);
            flippedCards.push(this);
            //console.log("Tamanho - 2- " + flippedCards.length);
            /*
            console.log("1" + flippedCards[0].childNodes[1]);
            console.log("2" +  flippedCards[0].childNodes[3]);
            console.log("3" + flippedCards[1].childNodes[1]);
            console.log("4" + flippedCards[1].childNodes[3]);     
            */   
                
            console.log(" -- ID0 - " + flippedCards[0].childNodes[3].id);
            console.log(" -- ID1 - " + flippedCards[1].childNodes[3].id);
                
                
            if(flippedCards.length === 2 ){

                console.log("Entrou no IF 1 ----------");
                
                console.log("---------- ----------");
    
                if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){
    
                    for(let i = 0; i < 2; i++){
                        for(let j = 1; j < 4; j+=2){
                            flippedCards[i].childNodes[j].classList.toggle("match");
                        }
                    }
                        
                    //sinal de desaparecimento da carta                        
                    matchCardsSign();

                    //efeito de desaparecimento da carta
                        
                    for(let i = 0; i < 2; i++){
                        for(let j = 1; j < 4; j+=2){
                            flippedCards[i].childNodes[j].classList.add("pair");
                        }
                    }
                    
                    brilho();
                    //matches = 7;
                    matches++;

                    flippedCards = [];

                    CountPoint();

                    if(matches === 8){
                        victory();
                    }    
                }else{
                    timeAction(mode);
                    console.log("errou -------")
                }               
                }
            } 
        }
    
    /* --------------------------- sleep --------------------------- */
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    async function timeAction(){ 
        //do something here
       // console.log(" Sleep ------");
        if (mode === "1"){
            await sleep(3000) 
            console.log(" Sleep Fácil");
            for(let i = 0; i < 2; i++){
                for(let j = 1; j < 4; j+=2){
                    flippedCards[i].childNodes[j].classList.toggle("flipped");
                }
            }
            flippedCards = [];
    
            fail++;
            CountPoints(fail);

        }else if(mode === "2"){
            await sleep(2000) 
            console.log(" Sleep Médio");
            for(let i = 0; i < 2; i++){
                for(let j = 1; j < 4; j+=2){
                    flippedCards[i].childNodes[j].classList.toggle("flipped");
                }
            }
     
            flippedCards = [];
            fail++;
            CountPoints(fail);

        }else{
            await sleep(1000) 
            console.log(" Sleep Difícil");
            for(let i = 0; i < 2; i++){
                for(let j = 1; j < 4; j+=2){
                    flippedCards[i].childNodes[j].classList.toggle("flipped");
                }
            }
     
            flippedCards = [];
            fail++;
            CountPoints(fail);
        }                
    }
    /* ----------------------- conta pontos ----------------------- */
    /**
    * Função para contar os pontos feitos na fase
    * @param {number} fail
    * recebe o numero de fails para calcular a pontuação total
    * pontuação final = 100 - (errados*2)
    * Nunca está abaixo de 50
    */
    function CountPoints(){
        var ptsant = document.getElementById("points").textContent;
        ptsant = parseInt(ptsant);

        if(ptsant > 50){
            pts = ptsant - (parseInt(level) * 2);
            document.getElementById("points").innerHTML =  pts;
        }
    }
    function CountPoint(){            
        var ptsant = document.getElementById("points").textContent;
        ptsant = parseInt(ptsant);

        pts = ptsant + (parseInt(level) * 2);
        document.getElementById("points").innerHTML =  pts;
    }
    
    /* ------------------ chamar página vitória ------------------ */
    function victory(){

        var level = sessionStorage.getItem('fase');
            
        sessionStorage.setItem("fase", level);
        sessionStorage.setItem("nivel", mode);

        var points = document.getElementById("points").innerHTML;

        sessionStorage.setItem("pontos", points);

        window.location.replace("vitoria.html");
    }
        
    /* ------------- Sinaliza quando um par é feito ------------- */
    function matchCardsSign(){
        console.log("ta chamando");
        var imgMatchSign = document.getElementById("imgMatchSign");
        imgMatchSign.classList.remove("hideMatchSign");
        var height =  $(window).height();
        imgMatchSign.style.top = Math.round(height/2) + "px";

        setTimeout(function(){
            imgMatchSign.style.top = 250 + "px";
            imgMatchSign.classList.add("hideMatchSign");
        },1000);
    }  
}
)();

/* ------------------- Sair da página de jogo ------------------- */
function quitGame(){
    window.location.replace("index.html");
}