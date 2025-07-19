const contenedorTarjetas = document.getElementById("productos-container");


function crearTarjetasProductosInicio(productos){
	productos.forEach(producto => {
	const nuevoSanguche = document.createElement("div");
	nuevoSanguche.classList = "tarjeta-producto";
	nuevoSanguche.innerHTML = `
	<img src=${producto.img}>
	<h3>${producto.nombre}</h3>
	<p>$${producto.precio}</p>
	<button>agregar al carrito</button>

	`
	contenedorTarjetas.appendChild(nuevoSanguche);
	nuevoSanguche.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))
	});
}

crearTarjetasProductosInicio(productos);