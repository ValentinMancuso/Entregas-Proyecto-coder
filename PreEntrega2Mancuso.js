// let productos = [
//     {prenda: "remera", equipo: "velez", color: "blanco", precio: 2000, id: 1},
//     {prenda: "remera", equipo: "boca", color: "azul", precio: 2012, id: 2},
//     {prenda: "remera", equipo: "river", color: "blanco", precio: 2007, id: 3},
//     {prenda: "remera", equipo: "racing", color: "celeste", precio: 1979, id: 4},
//     {prenda: "remera", equipo: "independiente", color: "rojo", precio: 1998, id: 5},
//     {prenda: "remera", equipo: "estudiantes", color: "rojo", precio: 2020, id: 6},
//     {prenda: "short", equipo: "velez", color: "azul", precio: 2000, id: 7},
//     {prenda: "short", equipo: "boca", color: "azul", precio: 2012, id: 8},
//     {prenda: "short", equipo: "river", color: "negro", precio: 2007, id: 9},
//     {prenda: "short", equipo: "racing", color: "negro", precio: 1979, id: 10},
//     {prenda: "short", equipo: "independiente", color: "rojo", precio: 1998, id: 11},
//     {prenda: "short", equipo: "estudiantes", color: "rojo", precio: 2020, id: 12}
// ]

// class Producto {

//     constructor(prenda, equipo, color, precio){
//         let ID = (productos.length + 1); 
//         this.prenda = prenda;
//         this.equipo = equipo;
//         this.color = color;
//         this.precio = precio;
//         this.id = ID;
//     }
// }
// let argentina = new Producto("remera", "argentina", "blanco", 10000);
// productos.push(argentina);

// const menu = () => {
//     let opcion = Number(prompt("Hola, Buen dia!! Que queres hacer? \n 1.Ver lista de remeras \n 2.Ver lista de shorts \n 3.Buscar un producto por caracteristica \n 4.Agregar un producto \n 5.Quitar un producto \n 6.-Conocer una prenda aleatoria" ));
//     return opcion;
// }

// const verRemeras = () => {
//             const remeras = productos.filter((item) => item.prenda === "remera")
//             const info = remeras.map((item) => {
//                 return {
//                     equipo: item.equipo,
//                     color: item.color,
//                     precio: item.precio
//                 }
//             });
//             console.log(info);
//             alert("Ver opciones en la consola");
//         }


// const verShorts = () => {
//             const remeras = productos.filter((item) => item.prenda === "short")
//             const info = remeras.map((item) => {
//                 return {
//                     equipo: item.equipo,
//                     color: item.color,
//                     precio: item.precio
//                 }
//             });
//             console.log(info);
//             alert("Ver opciones en la consola");
//         }

// const filtroCaracteristica = () => {

//     let caracteristica = Number(prompt("Que esta buscando:\n 1.Tipo de prenda,\n 2. Equipo\n 3. Color\n 4. Precio Maximo"));

//     if (caracteristica === 1) {
//         let prenda = prompt("Ingrese el tipo de prenda que busca");
//         const resultado = productos.filter(item => item.prenda === prenda);
//         console.log(resultado);
//       } else if (caracteristica === 2) {
//         const equipo = prompt("Ingresa el nombre del equipo:");
//         const resultado = productos.filter(item => item.equipo.toLowerCase() === equipo.toLowerCase());
//         console.log(resultado);
//       } else if (caracteristica === 3) {
//         const color = prompt("Ingresa el color de la prenda:");
//         const resultado = productos.filter(item => item.color.toLowerCase() === color.toLowerCase());
//         console.log(resultado);
//       } else if (caracteristica === 4) {
//         const precio = Number(prompt("Ingresa el precio máximo:"));
//         const resultado = productos.filter(item => item.precio <= precio);
//         console.log(resultado);
//       } else {
//         console.log("Error. Eliga una opcion correcta");
//       }
    
// }

// const agregarProducto = () => {
//     let prenda = prompt("Que tipo de prenda desea agregar");
//     let equipo = prompt("De que equipo es esa prenda");
//     let color = prompt("De que color es la prenda");
//     let precio = prompt("Que precio tiene esa prenda")
//     let producto = new Producto(prenda, equipo, color, precio)
//     productos.push(producto);
// }

// const quitarProducto = () => {
//     let ID = Number(prompt("Id del producto a eliminar"));
//     let producto = productos.find((index) => index.id === ID);
//     let posicion = productos.indexOf(producto);
//     productos.splice(posicion, 1)
// }

// const prendaAleatoria = () => {
//     let numero = Math.round((Math.random() * productos.length));
//     let producto = productos.find((index) => index.id === numero);
//     console.log(producto);
// }

// let seguir = "";
// while(seguir.toLowerCase() !== "no"){
// let opcion = menu();
// if (opcion === 1){
//     verRemeras();
// }else if (opcion === 2){
//     verShorts();
// }else if (opcion === 3){
//     filtroCaracteristica();
// }else if (opcion === 4){
//     agregarProducto();
// }else if (opcion === 5){
//     quitarProducto();
// }else if (opcion === 6){
//     prendaAleatoria();
// }else{
//     alert("No existe esa opcion");
// }
// seguir = prompt("Desea hacer algo mas")
// }