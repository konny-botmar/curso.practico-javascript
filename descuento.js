function descuentoPorcentaje(descuento){
    return descuento /100;
}

function descuentototal(precio,descuento){
    const valordescuento = precio * descuento;
    return precio - valordescuento ;
}


function calcularDescuento(){
    const result = document.getElementById("answer");

    const input = document.getElementById("precio");
    const precio = input.value;

    const input1 = document.getElementById("descuento");
    const descuento = input1.value;

    const descto = descuentoPorcentaje (descuento);
    
    const descuentoFinal = descuentototal (precio, descto );
    result.innerText = `El precio del producto aplicado el descuento es: ${descuentoFinal}`
}