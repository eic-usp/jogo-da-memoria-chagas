// Conteúdo que deseja inserir
var oDiv = '<div class="modal">  <p> aaaaaaa <p>  </div>';


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
	}
	
});