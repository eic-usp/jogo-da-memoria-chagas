// pegar as pontuações e somar
//problema: nao esta recebendo as variaveis como numero e sim como NaN, resolver amanha

var scoreFase1 = sessionStorage.getItem('scorefase1');
scoreFase1 = parseInt(scoreFase1);
var scoreFase2 = parseInt(sessionStorage.getItem('scorefase2'));
scoreFase2 = parseInt(scoreFase2);
var scoreFase3 = parseInt(sessionStorage.getItem('scorefase3'));
scoreFase3 = parseInt(scoreFase3);


console.log(typeof(scoreFase1));
console.log(typeof(scoreFase2));
console.log(typeof(scoreFase3));

var total = scoreFase1 + scoreFase2 + scoreFase3;

console.log("pontuação final " + total);
//mostrar o resultado



