
//var resp = document.getElementById('valor').value; 
var mostrarq = document.getElementById('mostrarq'); 

function geraq() {
    var n1 = Math.floor(Math.random()*6);
    var n2 = Math.floor(Math.random()*6);
    var resl = n1 + n2;
    
    mostrarq.textContent = n1 + " + " + n2 + " = ";
    
    //if(resl == resp) jump1();

}





var jump = false; //criando variavel de pulo como false

function jump1() {
    var player = document.getElementById('player'); //atribuindo o elemento de id player a variavel
    var cacto = document.getElementById('cacto');   //atribuindo o elemento de id cacto a variavel

    if(player.className != 'jump') { //if para testar se a variavel player tem uma class chama jump 
        player.classList.add('jump'); // atribuindo a class jump a variavel player 
        jump = true; // atribuindo o valor true a variavel jump, pois ela ira ser ativada
        setTimeout(()=> { //function do tempo do pulo
            player.classList.remove('jump'); //removendo a class jump
            jump = false; //atribuindo false ao jump para não ocorrer mais pulos
        }, 800)
    
 

 function morte() {
     var cactol = parseInt(window.getComputedStyle(cacto).getPropertyValue('left'))

     if(cactol < 20 && jump == false) {
         alert('Perdeu');
     }
    }
     setInterval(morte, 20);
}

}

document.addEventListener('keypress', function(e) {

    if(e.key === 'Enter') {
        console.log('Apertou o Space');
        geraq(); 
    }
});