function renderColores(){
    const coloresRemeras = cargaColoresRemLS();
    let datosCard = "";
    
    coloresRemeras.forEach((coloresR) => {
        datosCard += `
        <div id="${coloresR.id}" class=" coloresCont col-md-2 p-1">
        <div class="card text-bg-warning bg-transparent border-success mb-3 text-center">
        <img src="imagenes/${coloresR.imagen}" class="card-img-top ">
        <div class="card-body">
          <h5 class="card-title fs-6">${coloresR.vinilo}</h5>
          <p class="card-text fs-6">$${coloresR.precio}</p>
          <a href="#" class="btn btn-info btn-sm btnAgregado mx-auto" onclick="agregarColorLocal(${coloresR.id})">Sumar</a>
        </div>
      </div></div>`
      
    });

    document.getElementById("coloresRemeras").innerHTML = datosCard;
}
renderColores();
actualizarBotonCarrito();
sumarACarrito()