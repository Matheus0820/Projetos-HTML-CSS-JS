var tanimado = document.querySelector('#tanimado');
let texto1 = "suas METAS.";
let texto2 = "seus SONHOS.";
let texto3 = "seus DESEJOS.";
let ij = 0; 
//console.table(texto5);

function typewriter(elemento) {
   const texto = elemento.split('');
   texto.forEach((letra, i) => {
        console.log(letra);
        setTimeout(() => {
            tanimado.innerHTML += letra;
           console.log(texto.length, i);

            if(i+1 == texto.length) {
               tanimado.innerHTML = '';
               ij++;
               select(ij); 
               if(ij == 3) ij = 0;
            }
         }, 300 * i);
         
    });
 
}

function select(n) {
    if(n == 1 ) typewriter(texto2);
    if(n == 2 ) typewriter(texto3);
    if(n == 3 ) typewriter(texto1);
}

typewriter(texto1);










/*var titulo = document.querySelector('#titulo');
var meta = ['M', 'E', 'T', 'A'];
var aux = '';
var n = -1;

setInterval(function animado() {
    n++;
    if(titulo != aux) titulo.textContent = aux;

     titulo.textContent += meta[n];
     aux += meta[n];
     titulo.textContent += '|';

     if(n == 4) {
         n = -1;
         titulo.textContent = ''; 
         aux = '';
     } 
}, 1000); */
