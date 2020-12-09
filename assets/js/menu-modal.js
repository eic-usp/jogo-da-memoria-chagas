// Conteúdo que deseja inserir

var oDiv = ' <div class="modal menu-lateral-modal"> <ul class="ULmodal"> <li class="espaco-3"> </li> <li> <img class ="logo-eic-modal-centro" src="assets/img/logo-eic-branco.png">  </li> <li> <br> </li> <li> <br> </li> <li> <a href="#"> <div class="elem-menu-modal">  <img src="assets/img/home.svg"> <p> Início </p> </div> </a> </li> <li> <br> <br> <p> Sobre o jogo </p> </li>  <li> Créditos </li> <li> Compartilhar </li></ul> </div>';           
//Não to conseguindo colocar a imagem e o texto na mesma linha
/*<a class="menu-desktop" href="index.html">
            <div class="menu-desktop elem-menu-lateral">
            <img class="menu-desktop" src="assets/img/creditos.svg">
            <p class="menu-desktop"> Créditos <p> 
            <div>
            </a>*/
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