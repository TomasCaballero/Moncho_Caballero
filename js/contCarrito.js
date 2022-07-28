/* <div>
    <img src="../assets/img/remeras/remera2.jpg" alt="">
    <span id="nombre">remera2</span>
    <div id="precio">$1500</div>
    <button id="remove-btn">Eliminar</button>
</div> */

let elementosCarritos = JSON.parse(localStorage.getItem('listaArticulosSeleccionados'))


let carritoOk = document.getElementsByClassName('carrito')[0];


const mostrarProductos = () =>{
    elementosCarritos.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('divCarrito')
        div.innerHTML = `
        <img src="${producto.img}" alt="${producto.id}">
        <span id="nombre">${producto.articulo}</span>
        <div id="precio">$${producto.precio}</div>
        <button class="remove-btn">Eliminar</button>
        `
        carritoOk.appendChild(div)
    
    
    
        const boton = div.getElementsByClassName('remove-btn')[0]
        boton.addEventListener('click', (e) => {
            eliminarPorducto(producto)
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



const eliminarPorducto = (prod) => {
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


























