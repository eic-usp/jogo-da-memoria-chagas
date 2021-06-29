var BtnOkCookie = document.getElementById("btn-ok-cookies");
BtnOkCookie.addEventListener("click",OkCookie , false);

function OkCookie(){
    var container =  document.getElementById("cookie-container");
    var divCookie = document.getElementById("cookies-consent");
    divCookie.style.display = "none";
    //nao ta funcionando - procurar como arrumar
    container.innerHTML = ""; 
    console.log("funcionou");
}
