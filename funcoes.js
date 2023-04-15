//Funções
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions
//Funções que não recebem parâmetros

function olaMundoSemRetorno(){
    console.log("Olá mundo, sem retorno!");
};

function olaMundoComRetorno() {
    return "Olá mundo, com retorno!";
};

let msgSemRetorno = olaMundoSemRetorno();

let msgComRetorno = olaMundoComRetorno();
console.log(msgComRetorno);

//Funções que recebem parâmetros
function potencia(base, expoente = 2) {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++) {
        resultado *= base;
    }
    return resultado;
};
console.log("---------------------");
console.log(potencia());
console.log(potencia(4));
console.log(potencia(2, 6));
console.log(potencia(2, 6, 18));//o último parâmetro é ignorado

console.log("---------------------");
function escolheGerente(pessoa, gerente, gerenteAssistente) {
    if (pessoa == "Michael Scott") {
        gerente(pessoa);
    } else {
        gerenteAssistente(pessoa);
    };
};

function gerente(pessoa) {
    console.log(pessoa + ": Gerente Regional de Vendas");
};

function gerenteAssistente(pessoa) {
    console.log(pessoa + ": Assistente do Gerente Regional de vendas");
};

escolheGerente("Dwight Schrute", gerente, gerenteAssistente);
escolheGerente("Michael Scott", gerente, gerenteAssistente);

function gerenteVendedor(pessoa, isGerente, isVendedor) {
    if (pessoa == "Michael Scott") {
        isGerente(pessoa);
    } else {
        isVendedor(pessoa);
    };
};

gerenteVendedor(
        "Michael Scott",
    function(pessoa) {console.log(pessoa + ": Gerente");},
    function(pessoa) {console.log(": vendedor");}
);

gerenteVendedor(
        "Jim Halpert",
    function(pessoa) {console.log(pessoa + ": Gerente");},
    function(pessoa) {console.log(pessoa + ": vendedor");}
);

var soma = () => {
    console.log("Soma sem parâmetros");
};

soma();
soma(1, 2);

var somar = (x, y) => {
    return x + y;
};

console.log(somar(4, 5));

var somar1 = (x, y) => x + y;
console.log(somar1(4, 5));

maiorNumero = (x, y) => x > y ? x : y;
console.log(maiorNumero(4, 5));
console.log(maiorNumero(6, 5));

valorMaior = (x , y) => {
    if (x > y) {
        return x;
    } else {
        return y;
    };
};

console.log(valorMaior(4, 5));
console.log(valorMaior(10, 5));

//Funções de alta ordem
array = [5, 7];
regraPar = (item) => item % 2 == 0;
console.log("Há algum número par dentro do array? " + array.some(regraPar));
console.log("Todos os números são par? " + array.every(regraPar));
console.log("Filtrar números par? " + array.filter(regraPar));
console.log("--------------------------------");
array = [2, 4];
console.log("Há algum número par dentro do array? " + array.some(regraPar));
console.log("Todos os números são par? " + array.every(regraPar));
console.log("Filtrar números par? " + array.filter(regraPar));

console.log("+++++++++++++++++++++++++++++++++++++++++");
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.forEach(
    (item) => console.log(
        item + " => " + (item%2 == 0? "par" : "ímpar")
    ));

console.log("+++++++++++++++++++++++++++++++++++++++++");
nrDivisores = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++) 
        if ((item % divisor) == 0) 
            ndiv++;        
        return ndiv;
}

array.forEach(
    (nro) => console.log("nr. " +
        nro + 
        `: Número de divisores de 1 até ${nro} = ` +
        nrDivisores(nro)
    )
);

console.log("---------------------------------");
let resultado = array.reduce(
    (acc, item) => acc += (item % 2 == 0) ? item : 0, 
    0//Valor de partida do reduce (condição incial)
    );
    
console.log("A soma dos números pares é: " + resultado);
console.log("---------------------------------");

var newArray = array.map(
    (item) => {return {x: item, y: item*2}}
    );
    
console.log(newArray);
console.log("---------------------------------");

array.filter((nro) => nrDivisores(nro) == 2)
        .map((item) => {return {x: item, par: (item % 2 == 0)}})
        .forEach((obj) => console.log("O número primo " + obj.x + " é par? " + (obj.par == true? "Sim" : "Não")));
