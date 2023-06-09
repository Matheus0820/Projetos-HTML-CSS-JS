const palavras = document.querySelectorAll("[draggable='true']");
const lugarSoltar = document.querySelector('.lugarSoltar');


function comecararrastar() {
   this.classList.add('arrastando'); // Vai add essa classe ao objeto que vai ser arrastado;

}

function entrouSoltar() { 
    this.classList.add("houver");

    const elementoarrastado = document.querySelector(".arrastando");

    this.appendChild(elementoarrastado);
}

function saiuSoltar() {
    this.classList.remove("houver");
}

palavras.forEach ((palavras) => {
    palavras.addEventListener("dragstart", comecararrastar);
    //dragstart = O evento é chamando quando o objeto começa ser arrastado;
});



lugarSoltar.addEventListener("dragover", entrouSoltar); // dragover = O evento vai assionar quando encostas na região de onde o objeto ira ser solto;
lugarSoltar.addEventListener("dragleave", saiuSoltar); // dragleave = O evento vai ser assionado quando sair da região de onde o objeto ira ser solto;


