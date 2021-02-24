var NextLevel = sessionStorage.getItem("next");
var btnNextLevel = document.getElementById("prox");


if (NextLevel === "0"){
    btnNextLevel.style.display = "none";
}else{

    var mode = sessionStorage.getItem("mode");

    if (mode === "1"){
      btnNextLevel.classList.add("medio");
    } else if (mode === "2"){
        btnNextLevel.classList.add("dificil");
    }

    var script = document.createElement("script");  
    script.src = "assets/js/nivel.js";  
    document.body.appendChild(script); 
}
    

