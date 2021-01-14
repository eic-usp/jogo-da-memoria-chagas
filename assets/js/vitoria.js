var points = sessionStorage.getItem('points');

var url = sessionStorage.getItem('url');

console.log("url anterior = " + url);

if (url.includes('fase1') === true){

    console.log("fase1");

} else if (url.includes('fase2') === true){

    console.log("fase2");

} else {

    console.log("oiii");
}