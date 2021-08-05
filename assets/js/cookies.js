cookieConsent();
/* perguntar isaque estratégia "X" */
function cookieConsent() {
    if (!Cookies.get("CookieWarning")) {
        $(".toast").toast("show");
        var btnCookie = document.getElementById("btn-cookies");
        btnCookie.addEventListener("click",Accept,false);

    }else{
      $(".toast").toast("hide");
      console.log("false no else")
    }
}

function Accept(){
    showed = 1;
    Cookies.set('CookieWarning', showed);
    cookieConsent();
}



