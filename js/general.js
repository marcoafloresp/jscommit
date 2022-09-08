function renderColores(){
    const coloresRemeras = cargaColoresRemLS();
    let datosCard = "";
    
    coloresRemeras.forEach((coloresR) => {
        datosCard += `
        <div id="${coloresR.id}" class="coloresCont col-md-2 p-1">
        <div class="card bg-transparent border border-1 border-dark mb-3 text-center">
        <img src="imagenes/${coloresR.imagen}" class="card-img-top ">
        <div class="card-body>
          <h5 class="card-title fs-6">${coloresR.vinilo}</h5>
          <p class="card-text fs-6">$ <b>${coloresR.precio}</b>.</p>
          <a class="btn btn-info btn-sm btnAgregado" onclick="agregarColorLocal(${coloresR.id})">Agregar</a>
        </div>
      </div></div>`
      
    });

    document.getElementById("coloresRemeras").innerHTML = datosCard;
}
renderColores();
actualizarBotonCarrito();
sumarACarrito()