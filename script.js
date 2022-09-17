//scroll up, boton hacia arriba
document.getElementById(botonArriba).addEventListener("click", subirArriba);

function subirArriba(){
    var subir = document.documentElement.scrollTop;
    if(subir > 0){
        window.scrollTo (0,0);
    }
}