
function renderColoresRemCarrito(){
    const coloresRemeras = cargaColoresRemCarrito();
    let datosCard = "";
    
    if(coloresRemeras.length ==0){
      datosCard = `<div class="alert alert-light text-center" role="alert">
      No hay material agregado al carrito, por favor regrese al inicio y seleccione para seleccionar el pedido.
      </div>`
    }else{datosCard += `<table class="table table-success table-hover>"
        <tr>
        <th scope="col">Color</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Precio unitario</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Precio total</th>
        </tr>`;
    coloresRemeras.forEach((coloresR) => {
        datosCard += `
        <tr>
        <td><img src="imagenes/${coloresR.imagen}" title="${coloresR.vinilo}" width="50" class="rounded-circle">
        <td>${coloresR.vinilo}</td>
        <td>$${coloresR.precio}</td>
        <td><a href="#" class="btn btn-warning rounded-circle" title="Quitar producto" onclick="eliminarVinilo(${coloresR.id});">-</a> ${coloresR.cantidad} metro/s. <a href="#" class="btn btn-warning rounded-circle" title="Agregar producto" onclick="agregarVinilo(${coloresR.id});">+</a></td>
        <td>$${coloresR.precio * coloresR.cantidad}</td>
        </tr>`;
    });
    datosCard += `
    <tr>
    <td colspan="4" class="text-end"><b>Total a pagar:</b></td>
    <td><b>$${sumaTotal()}</b></td></tr>
    </table>`;
  }
  
    document.getElementById("coloresRemeras").innerHTML = datosCard;
  }
  renderColoresRemCarrito();
  actualizarBotonCarrito();