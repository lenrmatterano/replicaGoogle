
//Guardamos el Menu y el boton en una constante
const menu = document.getElementById('menu');
const btnmenu = document.getElementById('btnmenu');

//Esta sera la funcion que ocutara el menu y lo mostrara
function showHide(e){
e.preventDefault();
e.stopPropagation();
if(menu.style.display == "none"){
menu.style.display = "block";
} else if(menu.style.display == "block"){
menu.style.display = "none";
}
}
//Cuando hagamos click en el boton se abrira el menu
btnmenu.addEventListener("click", showHide, false);

//Cuando hagamos click en cualquier lugar se Ocultara
document.addEventListener("click", function(e){

//Captando informacion del DOM 
let clickEnCualquierLugar = e.target;
if(menu.style.display == "block" && clickEnCualquierLugar != menu){
 menu.style.display = "none";
}
}, false);


