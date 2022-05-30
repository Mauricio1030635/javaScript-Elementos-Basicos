export  class UI{

    addElement(producto){
        const $contenedor = document.getElementById("contenedor");
        const $valor=document.createElement("div");
        $valor.innerHTML=
        `<div class="card">
            <div class="card-body">
                ${producto.Nombre}-${producto.precio}-${producto.year}
                <button class="btn btn-danger delete" data-name="${producto.Nombre}">Eliminar</button>
            </div>
        </div>`;
        $contenedor.appendChild($valor);                
    };

    deleteElement(e){
        if(e.target.matches(".delete")){ 
            e.target.parentElement.parentElement.parentElement.remove();
            interfaces.message("Elemeto Eliminado", "danger");            
        }

    };   
    

    message(mensaje, Elclass){
        const $alert = document.createElement("div");                
        $alert.classList.add("alert",`alert-${Elclass}`, "mt-3");
        $alert.textContent=mensaje;
        let h1=document.querySelector(".container");
        h1.insertAdjacentElement("afterbegin", $alert);        
        this.ocultar();
        };

     ocultar(){
         let $valor =document.querySelector(".alert");
         console.log($valor);
         setTimeout(()=>{
            $valor.remove();
         },2000)

     }   



}