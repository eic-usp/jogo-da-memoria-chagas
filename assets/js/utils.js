

// ------------------------- verificar Chave -----------------------
const jogo = "Chagas";
const jogo_nivel = 1;
const jogo_fase = 1;


     
function verificarKey(){

 
    // pegar usuario de email
    const email_user_ = firebase.auth().currentUser.email
    let user_ = email_user_.split("@")
    this.user_email = user_[0]
    console.log("User " + this.user_email) 

    
  
    var data = {
      nome: user_[0],
      Pontos: 0,
      nivel: 1,
      fase: 1,
      jogo: jogo,
      concluido: 0
    }
     
    dbRefUsers.child(firebase.auth().currentUser.uid).child("Chagas").once('value').then((snapshot) =>
    {
        if (snapshot.exists()) {
            // se usuario já esta cadastrado
            console.log("Jogo de chagas Cadastrado");
    
            dbRefUsers.child(firebase.auth().currentUser.uid).child(jogo).once("child_added", (snap) => {
                //console.log(snap.val().fase)
                //console.log(snap.key)
                //console.log(snap.jogo)
                
                // chave do usuario 
                this.jogo_nivel = snap.val().nivel   
                this.jogo_fase = snap.val().fase      
                this.key = snap.key 

                //console.log("nivel -------- ", this.jogo_nivel)
                //console.log("Fase -------- ", this.jogo_fase)

                fasef(this.jogo_nivel, this.jogo_fase)
                
                
                        
            });
            
        } else {
            console.log("Jogo de chagas não cadastrado");
            // criar cadastro
            dbRefUsers.child(firebase.auth().currentUser.uid).child(jogo).push(data).then(function () {
                console.log(data.nome + "Cadastrado")          
            });
    
            dbRefUsers.child(firebase.auth().currentUser.uid).child(jogo).once("child_added", (snap) => {
                // pegar a chave do usuario
                this.key = snap.key
                        
            });
        }
        }).catch((error) => {
            console.error(error);
            });   
      
     
      
    }
  // ------------------------- Fim verificar Chave -----------------------

// ------------------------- Verificar nivel-----------------------
function AtualizarNivelFase(nivel, faseAtual){

    //console.log("nivel - ---V " + nivel);
    //var mode = sessionStorage.getItem('nivel');

    var data = {
        nome: this.user_email,
        nivel: nivel,
        fase: faseAtual,
        jogo: jogo,
        concluido: 0
      }

    dbRefUsers.child(firebase.auth().currentUser.uid).child(jogo).child(this.key).set(data).then(function () {
        console.log(data.nome + "Atualização de fase e nivel")          
    }); 


    /*
    let teste = setTimeout(function() {
    var level = sessionStorage.getItem('fase'); 
    var mode = sessionStorage.getItem('nivel'); 
    //console.log(" Verificar fase ");
    console.log("fase - --- V " + level);
    console.log("nivel - ---V " + mode);  
    
      }, 1000)

  */        

}

function  AtualizarPontos(points){
    var level = sessionStorage.getItem('fase'); 
    var mode = sessionStorage.getItem('nivel'); 
    
    var data = {
        nome: this.user_email,
        Pontos: points,
        nivel: mode,
        fase: level,
        jogo: jogo,
        concluido: 0
      }

    dbRefUsers.child(firebase.auth().currentUser.uid).child(jogo).child(this.key).set(data).then(function () {
        console.log(data.nome + "Atualização dos pontos")          
    });  
    



}

// ------------------------- Fim Verificar nivel-----------------------

  

// ------------------------- Gerar rank de pontuação -----------------------
function GerarRank(){
    console.log("------------------------")
    
    dbRefUsers.orderByChild('Pontos')
    .on("child_added", (snap) => {
      console.log(snap.val());
      //console.log(snap.key)
     // this.key = snap.key
      
      
    });
    
  }
// ------------------------- Fim Gerar rank de pontuação -----------------------
// ------------------------- Atualizar  pontuação -----------------------
function AtualizaPontosFasenivel(){

    let points = sessionStorage.getItem('pontos');
    console.log("Get points " + points)

    console.log(data)
    /*
    dbRefUsers.child(firebase.auth().currentUser.uid).child(jogo).push(data).then(function () {
        console.log(data.nome + "Cadastrado")          
    });
    */
}

// ------------------------- Fim da atualização da pontuação -----------------------

function NivelConcluidoTeste(){

    console.log("Nivel------------------- teste")


}

var database = firebase.database()
var dbRefUsers = database.ref('users')