var el_up = document.getElementById("GFG_UP");
var el_down = document.getElementById("GFG_DOWN");
var str = "Clickee en el boton para cambiar el color del fondo";

el_up.innerHTML = str;

function changeColor(color) {
    document.body.style.background = color;
    if ( color == 'white') {
        el_down.innerHTML = "Color original "
    }else {
        el_down.innerHTML = "Se cambió el color del fondo a " + color;
    }
}

function gfg_Run(color) {
    changeColor(color);
}