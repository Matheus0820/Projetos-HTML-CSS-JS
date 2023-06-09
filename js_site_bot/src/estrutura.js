function login() {
    var nome = parseFloat(document.getElementById('nome1').value);
    var idade = parseFloat(document.getElementById('idade2').value);
    var masculino = document.getElementById('rmascuino').value;
    var feminino = document.getElementById('rfeminino').value;
    var lgbt = document.getElementById('rlgbt').value;

    var resultado = document.getElementById('resp');


    if (nome=='' || idade=='' || (feminino==false && masculino==false && lgbt==false)) {
        
        alert('Alguma área não foi preenchida');
        document.getElementById('nome1').focus;
    }

    if (feminino) {
       var sexo = ('FEMININO');
    }
    else if (masculino) {
       var sexo = ('MASCULINO');
    }
    else {
        var sexo = ('LGBT+');
    }

    confirm('oi');

}
var exibir = document.getElementById('confirmaçãologin');
exibir.addEventListener('click', login);
