(function() {
    const key = 0;
    const user_email = " ";
    const jogo = "Chagas";


    const nome = "";
    const pontos = 0;
    const nivel = 0;
    const fase = 0;
   
   var data = {
     nome: nome,
     Pontos: pontos,
     nivel: nivel,
     fase: fase,
     jogo: jogo
   }


    const firebaseConfig = {
      apiKey: "AIzaSyAPYA5Aa8T9JtHgHFQLeDkg2nbGZRkruA4",
      authDomain: "jogomemoria-11e21.firebaseapp.com",
      projectId: "jogomemoria-11e21",
      storageBucket: "jogomemoria-11e21.appspot.com",
      messagingSenderId: "303948770238",
      appId: "1:303948770238:web:08cb0909a9317fb16ee7ef"
    };

    var actionCodeSettings = {
        url: 'http://127.0.0.1:80/'
      }

    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
    
    firebase.initializeApp(firebaseConfig)

    //var database = firebase.database()
    //var dbRefUsers = database.ref('users')
    
    const cadForm = document.getElementById('cadForm-form');
    const loguinForm = document.getElementById('loguinForm');
    const logoutAction = document.getElementById('logout-Action');
    const logoutActionModal = document.getElementById('logout-Action-modal');
    const loguinGoogle = document.getElementById('loguin-Google');

    const emailreset = document.getElementById('email-reset')
    
    const consulta = document.getElementById('consulta')
    const atualizacao = document.getElementById('atualizacao')

   firebase.auth().onAuthStateChanged((user) => {

    if(user){
        console.log("logado " + user.email)
        verificarKey()
        //código para continuar jogando de onde parou aqui
        //document.getElementById(cadForm).innerHTML = 
    } else{

        emailreset.onsubmit = event => {
            event.preventDefault();
            //console.log(" teste ------- funcionou ")
            const email = emailreset.querySelector('[name="email"]').value;
            console.log("Reset Email " + email)
    
            if (email) {
                
                firebase.auth().sendPasswordResetEmail(email, actionCodeSettings).then(function () {
                    console.log('E-mail de redefinição de senha foi enviado para ' + email + '.')
                }).catch(function (error) {
                    console.log('Houve um erro ao enviar e-mail de redefinição de senha!')
                  console.log(error)
                })
              } 
    
        };

        console.log("deslogado");
        //window.location="login.html#";
    }
    })

     
  function verificarKey(){

 
    // pegar usuario de email
    const email_user_ = firebase.auth().currentUser.email
    let user_ = email_user_.split("@")
    this.user_email = user_[0]
    console.log("User " + this.user_email) 
  
    var data = {
      nome: user_[0],
      Pontos: 0,
      nivel: 0,
      fase: 0,
      jogo: jogo
    }
     
      dbRefUsers.child(firebase.auth().currentUser.uid).child(jogo).once('value').then((snapshot) =>
      {
        if (snapshot.exists()) {
          // se usuario já esta cadastrado
          console.log("Jogo de chagas Cadastrado");
  
          dbRefUsers.child(firebase.auth().currentUser.uid).child(jogo).once("child_added", (snap) => {
            // dados de pontuação e niveis e fase
            console.log(snap.val())
            // chave do usuario         
            this.key = snap.key
                     
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
    // Depois
    function GerarRank(){
      console.log("------------------------")
      
      dbRefUsers.orderByChild('Pontos')
      .on("child_added", (snap) => {
        console.log(snap.val());
        //console.log(snap.key)
       // this.key = snap.key
        
        
      });
      
    }

    cadForm.onsubmit = event => {
        event.preventDefault();
        
        const email = cadForm.querySelector('[name="email"]').value;
        const senha = cadForm.querySelector('[name="password"]').value;
        const Csenha = cadForm.querySelector('[name="password2"]').value;

        console.log("Email " + email + " senha " + senha)
        
        if(Csenha == senha){
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(() => {
                alert("sucesso")
            }).catch((error) => {
                console.log(error)
            });
        }else{
            alert("As senhas não coincidem.");
        }
        
    };

    loguinForm.onsubmit = event => {
        event.preventDefault();
        const email = loguinForm.querySelector('[name="email"]').value;
        const senha = loguinForm.querySelector('[name="password"]').value;

        console.log("loguin Email " + email + " senha " + senha)
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(function() {
            window.location="nivel.html";
            })
        .catch((error) => {
            if(error.code == 'auth/wrong-password' || error.code == 'auth/user-not-found'){
                alert(" Email ou senha invalidos");
                return;
            }
            alert("Não foi possivel");
        })

    };


    loguinGoogle.onclick = event => {
        console.log(" teste")
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function() {
        window.location="nivel.html";
        })
        .catch(function(error){
           alert(error.message);     
        })
        
    }
    

    logoutAction.onclick = event => {
        firebase.auth().signOut();
        console.log("Sair -------------------");
        window.location="index.html";
        
    }

    
   logoutActionModal.onclick = event => {
        firebase.auth().signOut();
        console.log("Sair -------------------");
        window.location="index.html";
        
    }

    consulta.onclick = event => {
        
        console.log('Consulta')
                
        console.log(" ------- ")
        // Pegar informações do usuario; nivel, fase
        dbRefUsers.child(firebase.auth().currentUser.uid).child(jogo).on("child_added", (snap) => {
            console.log(snap.val());
            
          });       
      
    }

    atualizacao.onclick = event => {
      
      console.log('Atualização')
      // chave do usuario no jogo
      console.log(this.key)
      
      const pontos = 250;
      const nivel = 1;
      const fase = 1;
      const jogo = "Chagas";

      console.log(" teste " + this.user_email)
      var data1 = {
        nome: this.user_email,
        Pontos: pontos,
        nivel: nivel,
        fase: fase,
        jogo: jogo
      }

      dbRefUsers.child(firebase.auth().currentUser.uid).child(jogo).child(this.key).set(data1).then(function (){
        console.log("Certo")
      }).catch(function (error) {
        console.log(' Erro', error)
      })

  }

})();