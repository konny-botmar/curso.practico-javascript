//codigo del cuadrado
console.group("Cuadrados");
const ladocuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

const perimetroCuadrado = ladocuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado +"cm");

const areaCuadrada= ladocuadrado * ladocuadrado;
console.log("El área del cuadrado mide: " + areaCuadrada + "cm*2");

console.groupEnd();

//codigo del triángulo
console.group("Triágulos");

const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;
console.log(
    "Los lados del triángulo miden: " 
    + ladotriangulo1 
    + "cm, "
    + ladotriangulo2 
    + "cm, "
    + basetriangulo 
    + "cm"
);

const alturatriangulo = 5.5;
console.log(
    "La altura del triánulo es de: " 
    + alturatriangulo 
    + "cm"
);

const perimetroTriangulo = ladotriangulo1+ ladotriangulo2 + basetriangulo;
console.log("El perímetro del triángulo es de: " + perimetroTriangulo +"cm");

const areatriangulo = (basetriangulo * alturatriangulo) / 2;
console.log("El área del triángulo es de: " + areatriangulo +"cm*2");

console.groupEnd();

//codigo del Circulo
console.group("Circulos");

const radioCirculo=4;
console.log("El radio del circulo es de: " + radioCirculo +"cm");

const diametroCirculo= radioCirculo *2;
console.log("El diametro del circulo es de: " + diametroCirculo +"cm");

const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es de: " + perimetroCirculo +"cm");

const areaCirculo=(radioCirculo* radioCirculo)* PI;
console.log("El área del circulo es de: " + areaCirculo +"cm*2");

console.groupEnd();