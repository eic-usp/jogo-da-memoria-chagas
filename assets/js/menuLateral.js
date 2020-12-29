// $ para variaveis que guardam refenrecias
const $divMenuLateral = document.getElementById("aaaa");
console.log($divMenuLateral);
//const $btnMenuOpen = document.querySelector('.btnMenu_open');

$divMenuLateral.addEventListener('click',mostrarMenu());

function mostrarMenu(){
  //  $menu.classList.toggle("menu_open");
  console.log("oi");
}
/*$btnMenuOpen.addEventListener('click',function(){
    $menu.classList.add('menu_open');
});*/
/*$btnMenuClose.addEventListener('click',function(){
    $menu.classList.remove('menu_open');
})*/