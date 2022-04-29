var BtnMenuModal = document.querySelector("#botao-menu-modal");
BtnMenuModal.addEventListener("click",ShowMenuModal,false);

var FadeMenuModal = document.querySelector(".fade-menu-mobile");
FadeMenuModal.addEventListener("click",HideMenuModal,false);

var menuModal = document.querySelector("#menu-modal");

var TouchSurface = document.querySelector("#touch-surface");

/**
 * Mostra o menu modal
 */
function ShowMenuModal(){
	menuModal.style.zIndex = 5;
	FadeMenuModal.style.zIndex = 5;
	TouchSurface.style.zIndex = 5;
}
/**
 * Esconde o menu modal
 */
function HideMenuModal(){
	menuModal.style.zIndex = -2;
	FadeMenuModal.style.zIndex = -2;
	TouchSurface.style.zIndex = -2;
}
//será a função swipe, ainda não funciona
$(function(){
	// Bind the swipeleftHandler callback function to the swipe event on div.box
	$("div.touch-surface").on("swipeleft", SwipeLeftFunc);
   
	// Callback function references the event target and adds the 'swipeleft' class to it
	function SwipeLeftFunc(event){
	  $(event.target).addClass("swipeleft");
	}
  });