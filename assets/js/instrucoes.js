for(var i = 0; i < 2; i++){

    var card = document.querySelector("#cardT" + i);

    console.log(i);

    if(i === 0){
        card.style.left =  100 + "px";
        console.log("deu bom");
    } else  if(i === 1) {
        card.style.left =  100 + "px";
    }
   
}