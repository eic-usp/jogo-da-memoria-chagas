(function() {

    const key = 0;
    const user_email = " ";
    const jogo = "Chagas";

    /*
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
   */

    const firebaseConfig = {
      apiKey: "AIzaSyAPYA5Aa8T9JtHgHFQLeDkg2nbGZRkruA4",
      authDomain: "jogomemoria-11e21.firebaseapp.com",
      databaseURL: "https://jogomemoria-11e21-default-rtdb.firebaseio.com",
      projectId: "jogomemoria-11e21",
      storageBucket: "jogomemoria-11e21.appspot.com",
      messagingSenderId: "303948770238",
      appId: "1:303948770238:web:08cb0909a9317fb16ee7ef"
    };

    var actionCodeSettings = {
        url: 'http://127.0.0.1:5501/'
      }

    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
    
    firebase.initializeApp(firebaseConfig)

    var database = firebase.database()
    var dbRefUsers = database.ref('users')
    
    const cadForm = document.getElementById('cadForm-form');
    const loguinForm = document.getElementById('loguinForm');
    const logoutAction = document.getElementById('logout-Action');
    const logoutActionModal = document.getElementById('logout-Action-modal');
    const loguinGoogle = document.getElementById('loguin-Google');

    const emailreset = document.getElementById('email-reset')
    
    const consulta = document.getElementById('consulta')
    const atualizacao = document.getElementById('atualizacao')

// ------------------------- verificar autenticação -----------------------

   firebase.auth().onAuthStateChanged((user) => {

    if(user){
        console.log("logado " + user.email)
        //VerificarNivelFase()
        verificarKey()
       // VerificarNivelFase()
       

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
// ------------------------- Fim verificar autenticação ----------------------- 




// ------------------------- Cadatro de usuario -----------------------

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
// ------------------------- Fim  Cadatro de usuario -----------------------

// ------------------------- Autenticação por email e senha -----------------------

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

// ------------------------- Fim Autenticação por email e senha -----------------------

// ------------------------- Autenticação google -----------------------
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
// ------------------------- Fim Autenticação google -----------------------    

// ------------------------- Sair -----------------------    
    // pode usar só uma
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
// ------------------------- Fim Sair ----------------------- 

// ------------------------- Consultar ----------------------- 
    /*
    consulta.onclick = event => {
        
        console.log('Consulta')
                
        console.log(" ------- ")
        // Pegar informações do usuario; nivel, fase
        dbRefUsers.child(firebase.auth().currentUser.uid).child(jogo).on("child_added", (snap) => {
            console.log(snap.val());
            
          });       
      
    }
    */
// ------------------------- Fim Consultar ----------------------- 

// ------------------------- Atualização ----------------------- 
    /*
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
  */
  // ------------------------- Fim da Atualização ----------------------- 

})();