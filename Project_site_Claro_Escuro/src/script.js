var fleg = true
function action() {
    if (fleg == true) {
        claro();
    } else {
        escuro();
    }
}

function claro() {
    var bod = document.getElementById("body");
    document.getElementById("butaoimg").innerHTML = "<img style=\"width: 100px;\" src=\"img/Buttao tema escuro2.png\">";
    bod.style.background = "black";
    bod.style.color = "white";
    fleg = false;
}

function escuro() {
    var bod = document.getElementById("body");
    document.getElementById("butaoimg").innerHTML = "<img style=\"width: 100px;\" src=\"img/Buttao tema claro2.png\">";
    bod.style.background = "white";
    bod.style.color = "black";
    fleg = true;
}
       
