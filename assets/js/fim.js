
var scoreFase1 = Cookies.get('ptsfase1');
var scoreFase2 = Cookies.get('ptsfase2');
var scoreFase3 = Cookies.get('ptsfase3');

var scoreFase1n = parseInt(scoreFase1);
var scoreFase2n = parseInt(scoreFase2);
var scoreFase3n = parseInt(scoreFase3);

const logoutAction = document.getElementById('logout-Action')
//mostrar o resultado
document.getElementById('final-score').innerHTML = scoreFase1n + scoreFase2n + scoreFase3n;

console.log(firebase.auth().currentUser.email);
//criando cookie que mostra que a pessoa já jogou uma vez, recuperar na página nível - apagar
Cookies.set('Played','1');

logoutAction.onclick = event => {
  firebase.auth().signOut();
  console.log("Sair -------------------");
  window.location="index.html";
  
}




