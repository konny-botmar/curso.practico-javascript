//helpers

//para calcular el promedio en caso de que la mitad sean dos.
function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor){
            return valorAcumulado + nuevoValor;
        }
        );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function esPar(num) {
    return (num % 2 === 0);
}
//calculadora de medianas

function medianaSalariosCol (lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personMitad1 = lista[mitad -1];
        const personMitad2 = lista[mitad];
        const mediana = calcularPromedio([personMitad1, personMitad2]);
        return mediana;
        
    }else {
        const personMitad = lista[mitad];
        return personMitad;
    }
}

//mediana general
//hacer un nuevo array solo con los salarios
const salariosCol = colombia.map(
    function (person) {
        return person.salary;
    }
)

//ordenar el nuevo array

const salariosColSorted = salariosCol.sort(
    function (a,b) {
        return a-b;
    }
)

const medianaGeneralCol = medianaSalariosCol(
    salariosColSorted);

//mediana del top 10%


const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalariosCol(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col, 
});

