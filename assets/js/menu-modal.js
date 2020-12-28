//agora eu entendi porque precisa ser tudo na mesma linha
var DivModalMobile =  "<div> <p> oi </p> </div>";       
//Não to conseguindo colocar a imagem e o texto na mesma linha

// Captura o evento de clique
$('a[href="#menu-mobile-ativado"]').click(function(event) {

    // Previne que o link recarregue a página
	event.preventDefault();

    // Checa se a class modal existe
	if(!$('.modal').length) {
		
		// Se não existir, insere
		$(this).after(DivModalMobile);
	}
	else {
		// Se existir da um fadeToggle(); // trocar fade toggle por slide toggle
		$('.modal').fadeToggle();
		$('.p').fadeToggle();
		
	}
	
});