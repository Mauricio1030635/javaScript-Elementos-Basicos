import {producto} from  "./producto.js"
import {UI} from  "./UI.js"

///Eventos



document.addEventListener("submit", e =>{    
    e.preventDefault();      
    let d = document;
    const $valor = d.getElementById("formularios");
    console.log($valor.Nombre.value);
    let nombre= $valor.Nombre.value, 
    precio= $valor.Precio.value, 
    year= $valor.year.value; 
    let producta = new producto(nombre,precio,year);
    let interfaces = new UI;
    interfaces.addElement(producta);    
    $valor.reset();
    interfaces.message("Elemento Agregado Exitosamente", "success");

});

document.addEventListener("click", e=>{
    if(e.target.matches(".delete")){        
        interfaces = new UI;
        interfaces.deleteElement(e);    
    }
});