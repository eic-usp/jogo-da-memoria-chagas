// Conteúdo que deseja inserir

var oDiv = ' <div class="modal menu-lateral-modal"> <p class="p-menu-modal">  <a class="menu-desktop" href="compartilhar.html"><div class="menu- desktop elem-menu-lateral"><img  class="menu-desktop" src="assets/img/compartilhar.svg"><p class="menu-desktop"> Compartilhar <p> <div> </div>';           

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