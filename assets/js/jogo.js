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
    var sty;
    /* ----------------- Imagens desktop e tablet ----------------- */
    if(size >= 600){
        sty = "desktop";
    }else{
        sty = "mobile";
    }

    instantiateAllImgOfLevel(sty, level);

    function getAllImgInRange(path, changeInPath, start, end){
        for(let i = start; i < end; i++){
            /*img é objeto, indices textuais, funções = métodos */
            var img = {
                src: path + changeInPath + "/" + i + ".png",
                id: i%8                     
            };
            images.push(img);
        }
    }

    function instantiateAllImgOfLevel(modeOpening, level){
        const path = "assets/img/" + modeOpening + "/fase"
        document.getElementsByTagName('title')[0].innerHTML= "Fase " + level;

        if(level === "1"){
            getAllImgInRange(path, parseInt(level), 0, 16);
        }else if(level === "2"){
            getAllImgInRange(path, parseInt(level-1), 0, 8);
            getAllImgInRange(path, parseInt(level), 8, 16);
        }else if(level === "3"){
            getAllImgInRange(path, parseInt(level), 0, 8);
            getAllImgInRange(path, parseInt(level-1), 8, 16);
        }   
    }
   

    startGame();

    function VerifySize(){
        var size = $(window).width();

        if(size >= 600){ //Desktop e tablet
            return {
                constantSizeTop: 130,
                constantSizeLeft: 140,

                constantSpaceTop: 0,
                constantSpaceLeft: 0
            }
            
        }else{ //Mobile
            return {
                constantSizeTop: 70,
                constantSizeLeft: 76,

                constantSpaceTop: 5,
                constantSpaceLeft: 6
            }
        }
    }

    //Pode ser mudada infinitamente caso seja necessario
    function SizeFormula(value, operationNumber, size, space, operationSize, operationSpace){
        return (operationSize(value, operationNumber) * size) + 
                operationSpace(space, Math.floor(value / operationNumber) + 1); // % /
    }

    function SetCardStyle(index, sizes){
        /*Pode usar get element by id, porem o query selector é mais rápido*/
        var card = document.querySelector("#card" + index);

        card.style.top = SizeFormula(index, 4, sizes.constantSizeTop, sizes.constantSpaceTop, 
                        (v, h) => Math.floor(v / h), (v,h) => v) + "px";
        card.style.left = SizeFormula(index, 4, sizes.constantSizeLeft, sizes.constantSpaceLeft, 
                        (v, h) => v % h, (v,h) => v * h) + "px";

        card.addEventListener("click", flipCard, false);
    }

    /* ----------------------- começa o jogo ----------------------- */
    function startGame(){   
        matches = 0;
        flippedCards = [];
        error = 0;
        images  = randomSort(images);

        var frontFaces = document.getElementsByClassName("front");
        var backFaces = document.getElementsByClassName("back"); 
        
        //Encontra o size da tela e configura os espaçamentos
        const sizes = VerifySize();
        
        for(var i = 0; i < 16; i++){
            frontFaces[i].classList.remove("flipped", "match");
            backFaces[i].classList.remove("flipped", "match");

            SetCardStyle(i, sizes);

            backgroundLevel(level);

            //todos os cards tem imagem e id
            frontFaces[i].style.background = "url('"+ images[i].src +"')";
            frontFaces[i].setAttribute("id",images[i].id);
            frontFaces[i].style.backgroundRepeat = "no-repeat";
        }

        //mudar o texto
        ShowStart();
        InicialTime(mode); 
        
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
    function RemoveGlowEffect(){
        let info = [];

        for(i=0; i < 16; i++){
            info[i] = document.getElementById("card"+i); //Recolhe todos os cards
            console.log(info[i]);
        }

        for(i=0; i < info.length; i++){
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

    function flippedCardsToggleAction(action){
        for(let i = 0; i < 2; i++){
            for(let j = 1; j < 4; j+=2){
                flippedCards[i].childNodes[j].classList.toggle(action);
            }
        }
    }

    function flippedCardsAddAction(action){
        for(let i = 0; i < 2; i++){
            for(let j = 1; j < 4; j+=2){
                flippedCards[i].childNodes[j].classList.add(action);
            }
        }
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
            flippedCards.push(this);    
                
            if(flippedCards.length === 2 ){
                console.log(" -- ID0 - " + flippedCards[0].childNodes[3].id);
                console.log(" -- ID1 - " + flippedCards[1].childNodes[3].id);

                console.log("Entrou no IF 1 ----------");
                console.log("---------- ----------");
    
                if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){
                    flippedCardsToggleAction("match");
                    //sinal de desaparecimento da carta                        
                    matchCardsSign();
                    //efeito de desaparecimento da carta
                    flippedCardsAddAction("pair");
                    
                    RemoveGlowEffect();
                    matches = 7;
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

        sleepTime = 4000 - (parseInt(mode) * 1000);
        await sleep(sleepTime)

        flippedCardsToggleAction("flipped");

        flippedCards = [];
        fail++;
        CountPoints(fail);                
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
    window.location.replace("nivel.html");
}