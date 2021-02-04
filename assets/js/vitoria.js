document.getElementById("points").innerHTML = "100";

var level = sessionStorage.getItem('level');

var next = document.getElementById("next");
var again = document.getElementById("again");

if (level === 1){

     next.addEventListener("click", fase(medio), false);
     again.addEventListener("click", fase(facil), false);


} else if (level === 2){

    next.addEventListener("click", fase(dificil), false);
    again.addEventListener("click", fase(medio), false);

} else if(level === 3){

     next.addEventListener("click", fase(dificil), false);
    again.addEventListener("click", fase(dificil), false);

}