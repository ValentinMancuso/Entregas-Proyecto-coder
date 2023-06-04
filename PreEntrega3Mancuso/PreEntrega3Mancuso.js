let contenedor = document.getElementById("contenedor")
let boton = document.getElementById("boton");
let divCarrito = document.getElementById("carrito");
let carrito = []

let productos = [
    {prenda: "remera", equipo: "velez", color: "blanco", precio: "2500$", id: 1},
    {prenda: "remera", equipo: "boca", color: "azul", precio: 2012, id: 2},
    {prenda: "remera", equipo: "river", color: "blanco", precio: 2007, id: 3},
    {prenda: "remera", equipo: "racing", color: "celeste", precio: 1979, id: 4},
    {prenda: "remera", equipo: "independiente", color: "rojo", precio: 1998, id: 5},
    {prenda: "remera", equipo: "estudiantes", color: "rojo", precio: 2020, id: 6},
    {prenda: "short", equipo: "velez", color: "azul", precio: 2000, id: 7},
    {prenda: "short", equipo: "boca", color: "azul", precio: 2012, id: 8},
    {prenda: "short", equipo: "river", color: "negro", precio: 2007, id: 9},
    {prenda: "short", equipo: "racing", color: "negro", precio: 1979, id: 10},
    {prenda: "short", equipo: "independiente", color: "rojo", precio: 1998, id: 11},
    {prenda: "short", equipo: "estudiantes", color: "rojo", precio: 2020, id: 12}
]

productos.forEach(item => {
    let espacioProductos = document.createElement("div");
    espacioProductos.innerHTML = 
    `<p class="nombreProducto">${item.prenda} ${item.equipo}</p>
    <button id=boton${item.id} type="button" class="btn btn-primary btn-sm" >Comprar</button>`

    document.body.append(espacioProductos);
    contenedor.append(espacioProductos);
    let compra = document.getElementById(`boton${item.id}`);
    
    compra.addEventListener(`click`, () => {agregarCarrito(item.id)});
})

const agregarCarrito = (id) =>{
    let producto = productos.find(item => item.id === id);
    carrito.push(producto);
    verCarrito(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

const verCarrito = (producto) => {
        let espacioCarrito = document.createElement("div");
        espacioCarrito.innerHTML = 
        `
        <li class="listaCarrito">
            <ul class="caracteristica">Prenda:<br> ${producto.prenda}</ul>
            <ul class="caracteristica">Equipo:<br> ${producto.equipo}</ul>
            <ul class="caracteristica">Precio: ${producto.precio}</ul>
            <ul class="caracteristica" id= eliminar${carrito.indexOf(producto)}><button>Eliminar</button></ul>
        </li>
        `
        document.body.append(espacioCarrito);
        divCarrito.append(espacioCarrito);

        let botonEliminar = document.getElementById(`eliminar${carrito.indexOf(producto)}`);

        let eliminar = () => {
            let index = carrito.indexOf(item => item.id === producto.id);
            carrito.splice(index, 1);
            espacioCarrito.remove();
            localStorage.setItem("carrito", JSON.stringify(carrito))
        };
    
        botonEliminar.addEventListener("click", eliminar);
}

const obtenerLocalStorage = () => {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.forEach(producto => {
        verCarrito(producto);
    });
}
obtenerLocalStorage();



