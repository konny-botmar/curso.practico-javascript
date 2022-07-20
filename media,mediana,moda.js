// let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    // sumaLista = sumaLista + lista[i];
    // }
function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor){
            return valorAcumulado + nuevoValor;
        }
        );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//mediana 

function esPar(num) {
    return (num % 2 === 0);
}

function CalcularMediana (lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personMitad1 = lista[mitad -1];
        const personMitad2 = lista[mitad];
        
    }else {
        const personMitad = lista[mitad];
        return personMitad;
    }
}
    
    

//moda

function calcularModa (lista1){

const lista1Count = {};

lista1.map(
    function (elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
        lista1Count[elemento] = 1;
        }
    }
);

const lista1array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
       return valorAcumulado[1] - nuevoValor[1]; 
    }
);

const moda = lista1array[lista1array.length-1];

return moda;
};
