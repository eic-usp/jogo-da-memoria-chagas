

var BtnMenuModal = document.querySelector("#botao-menu-modal");
BtnMenuModal.addEventListener("click",ShowMenuModal,false);

var menuModal = document.querySelector("#menu-modal");

var BtnVoltar = document.querySelector("#botao-voltar");
BtnVoltar.addEventListener("click",HideMenuModal,false);

function ShowMenuModal(){
	menuModal.style.zIndex = 5;
	console.log("chamou");
}
function HideMenuModal(){
	menuModal.style.zIndex = -2;
}

