(function() {

  
    const firebaseConfig = {
      apiKey: "AIzaSyAPYA5Aa8T9JtHgHFQLeDkg2nbGZRkruA4",
      authDomain: "jogomemoria-11e21.firebaseapp.com",
      projectId: "jogomemoria-11e21",
      storageBucket: "jogomemoria-11e21.appspot.com",
      messagingSenderId: "303948770238",
      appId: "1:303948770238:web:08cb0909a9317fb16ee7ef"
    };
  
    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
    firebase.initializeApp(firebaseConfig);



    const cadForm = document.getElementById('cadForm-form')
    const loguinForm = document.getElementById('loguinForm')
    const logoutAction = document.getElementById('logout-Action')
    const logoutActionModal = document.getElementById('logout-Action-modal')
    const loguinGoogle = document.getElementById('loguin-Google')

   firebase.auth().onAuthStateChanged((user) => {

    if(user){
        //cadForm-form.reset();
      console.log("logado " + user.email)
       window.location="nivel.html#";

        //document.getElementById(cadForm).innerHTML = 
    } else{

        console.log("deslogado");
        //window.location="login.html#";
    }
    

    })

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
            alert("As senhas não coincidem");
        }
        
    };

    loguinForm.onsubmit = event => {
        event.preventDefault();
        const email = loguinForm.querySelector('[name="email"]').value;
        const senha = loguinForm.querySelector('[name="password"]').value;

        console.log("loguin Email " + email + " senha " + senha)

        firebase.auth().signInWithEmailAndPassword(email, senha)
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
    
})();