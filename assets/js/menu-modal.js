// Conteúdo que deseja inserir

var oDiv = ' <div class="modal menu-lateral-modal"> <ul class="ULmodal"> <li class="espaco-3"> </li> <li> <img class ="logo-eic-modal-centro" src="assets/img/logo-eic-branco.png">  </li> <li> <br> </li> <li> <br> </li> <li "largura-p-modal"> <a href="#"> <div style="width: 200px;">  <img  class="elem-menu-modal"  src="assets/img/home.svg"> <p> Início </p> </div> </a> </li> <li> <p> Sobre o jogo </p> </li>  <li> Créditos </li> <li> Compartilhar  </li></ul> </div>';           
/*<ul class="menu-desktop tipoUL">
        <li class = "espaco-6 menu-desktop"></li>
        <li> <!--Colocar o logo no centro-->
            <a class="menu-desktop" href="index.html"> 
                <img class="logo-eic-centro menu-desktop" src="assets/img/logo-eic-branco.png">
            </a>
        </li>*/ 
// Captura o evento de clique
$('a[href="#menu-mobile-ativado"]').click(function(event) {

    // Previne que o link recarregue a página
	event.preventDefault();

    // Checa se a class modal existe
	if(!$('.modal').length) {
		
		
		// Se não existir, insere
		$(this).after(oDiv);
	}
	else {
		
		// Se existir da um fadeToggle(); // trocar fade toggle por slide toggle
		$('.modal').fadeToggle();
		$('.p').fadeToggle();
		console.log('ta entrando pra sair');
	}
	
});