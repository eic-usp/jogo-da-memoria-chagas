
var BtnOkCookie = document.getElementById("btn-ok-cookies");
BtnOkCookie.addEventListener("click",OkCookie, false);

if(sessionStorage.getItem('showed')){
    HideCookieWarning();
} else{
    OkCookie;
}

//var scoreFase3 = Cookies.get('ptsfase3');

function OkCookie(){
    /* função para mostrar aviso de cookies */
    console.log("entrou no ok cookie - primeira vez q rodou ");
    showed = 1;
    sessionStorage.setItem('showed',showed);
    HideCookieWarning(showed);
    }
/*Função para esconder os cookies */
function HideCookieWarning(showed){
    sessionStorage.setItem('showed',showed);
    console.log("entrou no hide 2 - vamo ve se foi essa palhaçada" + showed);
    var componentsList = document.getElementsByClassName("text-cookies");
    for(i=0;i<componentsList.length;i++){
        console.log("componente" + i);
        componentsList[i].classList.remove("text-cookies");
        componentsList[i].classList.add("hide-cookies");
    }
}