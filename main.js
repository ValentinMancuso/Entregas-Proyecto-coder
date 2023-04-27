//Condicional 

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

//Ciclo

for(let i = 0; i < 10; i++){
    if (i >= 0 && i<= 5){
        alert(`Su turno es el numero ${i}. Debe esperar 15 minutos para ser atendido`);
    }else if(i > 5 && i <= 8){
        alert(`Su turno es el numero ${i}. Debe esperar 30 minutos para ser atendido`);
    }else{
        alert(`Su turno es el numero ${i}. Debe esperar 1 hora para ser atendido`);
    }
}

alert("Nos quedamos sin turnos para agendar");