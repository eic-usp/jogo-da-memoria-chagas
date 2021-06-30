var BtnOkCookie = document.getElementById("btn-ok-cookies");
BtnOkCookie.addEventListener("click",OkCookie , false);

var showed = 0;
// verificar se o cookie existe, se sim, não mostrar
function OkCookie(){
    var divCookie = document.getElementById("cookies-consent");
    divCookie.style.display = "none";
    var showed = 1;
    Cookies.set('Warning',showed);
}

 //se o cookie warning existir: esconde o aviso
 if(Cookies.get('Warning') === '1'){
    var divCookie = document.getElementById("cookies-consent");
    divCookie.style.display = "none";
}

