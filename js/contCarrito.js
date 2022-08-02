let elementosCarritos = JSON.parse(localStorage.getItem('listaArticulosSeleccionados'))


let carritoOk = document.getElementsByClassName('carrito')[0];


const mostrarProductos = () =>{
    elementosCarritos.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('divCarrito')
        div.innerHTML = `
        <tr>
            <td><img src="${producto.img}" alt="${producto.id}"></td>
            <td><span id="nombre">${producto.articulo}</span></td>
            <td><div id="precio">$${producto.precio}</div></td>
            <td><button class="remove-btn">X</button></td>
        </tr>
        `




        // div.innerHTML = `
        // <img src="${producto.img}" alt="${producto.id}">
        // <span id="nombre">${producto.articulo}</span>
        // <div id="precio">$${producto.precio}</div>
        // <button class="remove-btn">Eliminar</button>
        // `
        carritoOk.appendChild(div)
    
    
    
        const boton = div.getElementsByClassName('remove-btn')[0]
        boton.addEventListener('click', (e) => {
            Toastify({
                text: "Se elimino el producto",
                className: "info",
                style: {
                    background: 'rgb(0,0,0);',
                    background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(137,105,51,0.7170576848903624) 54%, rgba(105,41,0,1) 100%)'
                }
            }).showToast();
            eliminarProducto(producto)
            borrarDeLaVista(e)
            actualizarPrecio()
        })
    })
}
if(elementosCarritos == null || elementosCarritos.length == 0){
    const div = document.createElement('div')
        div.classList.add('divCarritoVacio')
        div.innerHTML = `
        <div>El carrito esta vacio.</div>
        `
        carritoOk.appendChild(div)
}else{
    mostrarProductos()
}


const eliminarProducto = (prod) => {
    let index = elementosCarritos.indexOf(prod)
    elementosCarritos.splice(index,1)

    localStorage.setItem('listaArticulosSeleccionados', JSON.stringify(elementosCarritos));
    actualizarCarrito();
}

function borrarDeLaVista(e) {
    btn = e.target
    btn.parentElement.remove()
}








let precioTotal = document.getElementsByClassName('precioTotal')[0]
console.log(precioTotal);

const actualizarPrecio = () =>{
    let precioSumado = elementosCarritos.reduce((valorFinal,elem)=>{
        return valorFinal + elem.precio
    },0)
    precioTotal.innerHTML = precioSumado
}
actualizarPrecio()



//Boton Pagar
let btnPagar = document.querySelector('.pagar')
btnPagar.addEventListener('click', ()=>{
    Swal.fire({
        icon: 'error',
        title: 'No se pudo realizar la compra',
        text: '¡Vuelva a intentarlo luego!',
        confirmButtonColor: '#261514',
      })
})






















