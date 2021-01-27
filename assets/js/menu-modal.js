var BtnMenuModal = document.querySelector("#botao-menu-modal");
BtnMenuModal.addEventListener("click",ShowMenuModal,false);

var menuModal = document.querySelector("#menu-modal");

var BtnVoltar = document.querySelector("#botao-voltar");
BtnVoltar.addEventListener("click",HideMenuModal,false);

// preciso criar outro nome para chamar a div com id menu-modal - feito

//Funcionou
//criar um menu em que qualquer click fora do modal já esconda o mesmo

function ShowMenuModal(){
	menuModal.style.zIndex = 5;
	console.log("chamou");
}
function HideMenuModal(){
	menuModal.style.zIndex = -2;
	console.log("chamou e parou de mostrar");
}

