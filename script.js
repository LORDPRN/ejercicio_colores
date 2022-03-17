const boton = document.getElementsByClassName('boton');
const colores = ["#ff6961","#77dd77","#fdfd96","#84b6f4","#fdcae1",
                 "#fa34df","#7ff9c7","#b186f1","#a68069","#eb9cff"];

for (let index = 0; index < boton.length; index++) {
    const element = boton[index];
    element.addEventListener("click", cambiarFondo);
}

function cambiarFondo(button){
    const indice = Math.floor((Math.random() * colores.length));
    const contenedor = this.parentNode;
    //console.log(contenedor);
    contenedor.style.backgroundColor = colores[indice];
    
    const texto = this.parentNode.childNodes[1];
    texto.innerHTML = colores[indice];

    //console.log(texto)
    //console.log(this);
}