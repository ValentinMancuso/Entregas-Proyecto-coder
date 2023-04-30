// Condicional 

// let precio = Number(prompt("Cuanto cuesta tu producto?"));
// let impuesto =  precio * 0.20;
// let descuento25  = precio+impuesto-(precio*0.25);
// let descuento40  = precio+impuesto-(precio*0.4);
// let descuento50  = precio+impuesto-(precio*0.5);

// if(precio >= 0 && precio <= 3000){
//     alert(`El precio final luego de impuestos y un descuento del 25% es de ${descuento25}`);
// }else if (precio > 3000 && precio <= 5000){
//     alert(`El precio final luego de impuestos y un descuento del 40% es de ${descuento40}`);
// }else{
//     alert(`El precio final lugo de impuestos y un descuento del 50% es de ${descuento50}`);
// }
//

//Ciclo

// for(let i = 0; i < 10; i++){
//     if (i >= 0 && i<= 5){
//         alert(`Su turno es el numero ${i}. Debe esperar 15 minutos para ser atendido`);
//     }else if(i > 5 && i <= 8){
//         alert(`Su turno es el numero ${i}. Debe esperar 30 minutos para ser atendido`);
//     }else{
//         alert(`Su turno es el numero ${i}. Debe esperar 1 hora para ser atendido`);
//     }
// }

// alert("Nos quedamos sin turnos para agendar");

//Calculadora con funciones

const Suma = (num1, num2) => {
    return num1 + num2;
}
const Resta = (num1, num2) => {
    return num1 - num2;
}
const Multiplicacion = (num1, num2) => {
    return num1 * num2;
}
const Division = (num1, num2) => {
    return num1 / num2;
}
let seguir;
while(seguir != "no"){
    let operacion = Number(prompt("Buenas, que operacion queres hacer:\n 1.Suma \n 2.Resta \n 3.Multiplicacion \n 4.Division"));
    let num1 = Number(prompt("Elegi un primer numero"));
    let num2 = Number(prompt("Elegi un segundo numero"));
    if(operacion === 1){
        alert(Suma(num1, num2));
    }else if(operacion === 2){
        alert(Resta(num1, num2));
    }else if(operacion === 3){
        alert(Multiplicacion(num1, num2));
    }else if(operacion === 4){
        alert(Division(num1, num2));
    }else{
        alert("Error, debes ingresar un numero del uno al cuatro");
    }
    seguir = prompt("Pulse cualquier tecla para hacer otra operacion. En caso de que no quiera seguir escriba no");      
}

 

