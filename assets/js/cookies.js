/*Se o cookie nao existe  mostra e espera a pessoa clicar. Quando a pessoa clica cria  */
//Chamando a função
cookieConsent();
/*Não estou conseguindo setar o cookie como eu gostaria - perguntar isaque estratégia */
function cookieConsent() {
   // if (!getCookie("CookieWarning")) {
        $(".toast").toast("show");
        var btnCookie = document.getElementById("cookie-warning");
        btnCookie.addEventListener("click",Accept());
        console.log("teste cookie" + test)
    //}else{
      //  $(".toast").toast("hide");
   // }
}

function Accept(){
    document.cookie = "CookieWarning = 1";
    setTimeout(function (){
        $(".toast").toast("hide");
        }, 1000);
}



