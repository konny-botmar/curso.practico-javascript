//codigo del cuadrado

function perimetroCuadrado (lado){
    return lado * 4;
} 

function areaCuadrada(lado){
    return lado * lado;
} 



//codigo del triángulo


function perimetroTriangulo (lado1, lado2, base){
   return lado1+ lado2 + base;
} 

function areaTriangulo (base, altura){
    return (base * altura) /2;
 } 


//codigo del Circulo

function diametroCirculo(radio){
  return  radio *2;
} 

const PI = Math.PI;

function perimetroCirculo (radio){
    const diametro= diametroCirculo(radio);
    return diametro * PI;
} 


function areaCirculo(radio){
   return (radio * radio)* PI;
}

//funciones para ligar el input y los botones a las acciones de calculo requeridas para el cuadrado

function calcularPerimetroCuadrado(){
    //nos permite obtener el input del html
    const input = document.getElementById("InputCuadrado");
    //pero como queremos el valor dentro del input
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    //pero como queremos el valor dentro del input
    const value = input.value;

    const area = areaCuadrada(value);
    alert(area);
}

//funciones para ligar el input y los botones a las acciones de calculo requeridas para el triangulo

function calcularPerimetroTriangulo(){
    
    const ladoA = document.getElementById("ladoA");
    const valueA = ladoA.value;

    const ladoB= document.getElementById("ladoB");
    const valueB = ladoB.value;

    const base = document.getElementById("base");
    const valueBase = base.value;

    const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("base");
    const valueBase = base.value;

    const altura = document.getElementById("altura");
    const valuealtura = altura.value;

    const area = areaTriangulo(valueBase, valuealtura);
    alert(area);
}

//funciones para ligar el input y los botones a las acciones de calculo requeridas para el circulo

function calcularDiametroCirculo(){
    const radio = document.getElementById("radio");
    const valueRadio = radio.value;

    const diametro = diametroCirculo(valueRadio)
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("radio");
    const valueRadio = radio.value;

    const perimetro = perimetroCirculo(valueRadio)
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("radio");
    const valueRadio = radio.value;

    const area = areaCirculo(valueRadio)
    alert(area);
}