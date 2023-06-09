var fleg = true
function action() {
    var bod = document.getElementById("body");
    if (fleg == true) {
        document.getElementById("butaoimg").innerHTML = "<img style=\"width: 100px;\" src=\"img/Buttao tema escuro.png\">";
        bod.style.background = "black";
        bod.style.color = "white";
        fleg = false;
    } else {
        document.getElementById("butaoimg").innerHTML = "<img style=\"width: 100px;\" src=\"img/Buttao tema claro.png\">";
        bod.style.background = "white";
        bod.style.color = "black";
        fleg = true;
    }
}
       
