cookieConsent();
/**
 * Mostra o aviso de cookies no ínicio do jogo
 */
function cookieConsent() {
    /* perguntar isaque estratégia de mostrar um "X" para esconder o aviso, 
    não colocar nada por enquanto*/
    if (!Cookies.get("CookieWarning")) {
        $(".toast").toast("show");
        var btnCookie = document.getElementById("btn-cookies");
        btnCookie.addEventListener("click",AcceptCookies,false);

    }else{
      $(".toast").toast("hide");
      console.log("false no else")
    }
}
/** 
 * Seta que a pessoa ja viu o aviso de cookies e não voltará a vê-lo
 */
function AcceptCookies(){
    showed = 1;
    Cookies.set('CookieWarning', showed);
    cookieConsent();
}



