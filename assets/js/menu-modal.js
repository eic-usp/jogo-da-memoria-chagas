// Conteúdo que deseja inserir

var oDiv = '<div class="fundo"> <div class="espaco-6"> <div class="modal menu-lateral-modal"> <a href="index.html"> <div class="espaco-6> </div> <img class="logo-eic-modal-centro tam-logo-eic-modal" src="assets/img/logo-eic-branco.png">aa </a>  </div> </div> ';


        
        
            

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