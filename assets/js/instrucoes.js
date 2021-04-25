
//tentar arrumar aqui de forma automatica também, com base nas instruções Antes

var level =  Cookies.get('level',level);
var mode = Cookies.get('mode',mode);

 var btn = document.getElementById("playGame");

 btn.classList.add(mode);
 btn.classList.add(level);

 cookie.set("tutorial", true);