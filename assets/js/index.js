/*let iniciar = document.getElementById("iniciar");
let login = document.getElementById("login");
    iniciar.classList.remove("btn");
    iniciar.classList.remove("btn-primary");
    iniciar.style.display = "none";
*/
async function btnIniciar(){
    await sleep(20)
    login.classList.remove("btn");
    login.classList.remove("btn-primary");
    login.style.display= "none";
    iniciar.classList.add("btn");
    iniciar.classList.add("btn-primary");
    iniciar.style.visibility = "visible";
}