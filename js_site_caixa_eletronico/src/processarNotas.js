function processaNotas() {
    //LER;
    var valor = document.getElementById('txtValor').value;
    var n100saida = document.getElementById('en100');
    var n50saida = document.getElementById('en50');
    var n20saida = document.getElementById('en20');
    var n10saida = document.getElementById('en10');
    var n5saida = document.getElementById('en5');
    var n2saida = document.getElementById('en2');
    var m1saida = document.getElementById('em1');
    var m50saida = document.getElementById('em50');
    var m25saida = document.getElementById('em25');
    var m10saida = document.getElementById('em10');
    var m5saida = document.getElementById('em5');



    n100saida.textContent = '';
    n50saida.textContent = '';
    n20saida.textContent = '';
    n10saida.textContent = '';
    n5saida.textContent = '';
    n2saida.textContent = '';
    m1saida.textContent = '';
    m50saida.textContent = '';
    m25saida.textContent = '';
    m10saida.textContent = '';
    m5saida.textContent = '';
    // PROCESSAR;
    if (valor <= 0 || isNaN(valor)) {
        alert("Informe o valor corretamente");
        document.getElementById('txtValor').focus();
        return;
    }

    
    var n100 = Math.floor(valor / 100);
    var resto = valor % 100; 
    var n50 = Math.floor(resto / 50);
    var resto = resto % 50; 
    var n20 = Math.floor(resto / 20);
    var resto = resto % 20; 
    var n10 = Math.floor(resto / 10);
    var resto = valor % 10; 
    var n5 = Math.floor(resto / 5);
    var resto = resto % 5; 
    var n2 = Math.floor(resto / 2);
    var resto = resto % 2; 
    var m1 = Math.floor(resto / 1);
    var resto = resto % 1; 
    var m50 = Math.floor(resto / 0.50);
    var resto = valor % 0.50; 
    var m25 = Math.floor(resto / 0.25);
    var resto = resto % 0.25; 
    var m10 = Math.floor(resto / 0.10);
    var resto = resto % 0.10;
    var m5 = Math.floor(resto / 0.05);
    var resto = resto % 0.05;
    
    if ( resto != 0) { 
        alert("Valor inválido para as notas disponíveis no momento");
        document.getElementById('txtValor').focus();
        return;
    }
    
    if (resto == 0) {
    //EXIBIR
        if (n100 > 0) {
        n100saida.textContent = n100 + ' nota(s) de R$ 100';
        }
        if (n50 > 0) {
        n50saida.textContent = n50 + ' nota(s) de R$ 50';
        }
        if (n20 > 0) {
        n20saida.textContent = n20 + ' nota(s) de R$ 20';
        }
        if (n10 > 0) {
        n10saida.textContent = n10 + ' nota(s) de R$ 10';
        }
        if (n5 > 0) {
        n5saida.textContent = n5 + ' nota(s) de R$ 5';
            }
        if (n2 > 0) {
        n2saida.textContent = n2 + ' nota(s) de R$ 2';
        } 
        if (m1 > 0) { 
        m1saida.textContent = m1 + ' moeda(s) de 1 real';
            }
        if (m50 > 0) {
         m50saida.textContent = m50 + ' moeda(s) de 50 centavos';
        }
        if (m25 > 0) {
        m25saida.textContent = m25 + ' moeda(s) de 25 centavos';
        }
        if (m10 > 0) {
        m10saida.textContent = m10 + ' moeda(s) de 10 centavos';
        }
        if (m5 > 0) {
        m5saida.textContent = m5 + ' moeda(s) de 5 centavos';
        }        



    }
}
var btSacar = document.getElementById('btSacar');
btSacar.addEventListener('click', processaNotas);