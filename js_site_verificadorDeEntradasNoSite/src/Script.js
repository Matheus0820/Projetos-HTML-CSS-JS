function gravar() {

var dataehora = document.querySelector("#dataehora").value;
console.log(dataehora);

localStorage.setItem("dataehora", dataehora);
localStorage.setItem("entrada", 1);
}
