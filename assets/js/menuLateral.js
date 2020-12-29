// $ para variaveis que guardam refenrecias
const $divMenuLateral = document.getElementById("menuLateral");
console.log($divMenuLateral);
//const $btnMenuOpen = document.querySelector('.btnMenu_open');

$divMenuLateral.addEventListener("click", mostrarMenu());

function mostrarMenu(){
  //  $menu.classList.toggle("menu_open");
  console.log("oia");
}
/*$btnMenuOpen.addEventListener('click',function(){
    $menu.classList.add('menu_open');
});*/
/*$btnMenuClose.addEventListener('click',function(){
    $menu.classList.remove('menu_open');
})*/