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

[**** continua ***]