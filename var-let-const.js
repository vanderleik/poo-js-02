//var 01
console.log("****** VAR 01 ******");
function testVar01() {
    var var01 = "var 01 criada antes do bloco";
    {
        var var02 = "var 02 criada dentro do bloco";
        console.log("01a chamada dentro do bloco: " + var01);
        console.log("01b chamada dentro do bloco: " + var02);        
    }
    console.log("02a chamada depois do bloco: " + var01);
    console.log("02b chamada depois do bloco: " + var02);
};

testVar01();
console.log();

//var 02
console.log("****** VAR 02 ******");

function testVar02() {
    var var01 = "var 01 criada antes do if";
    if (1 == 0) {
        var var02 = "var 02 criada dentro do if";
        console.log("01a chamada dentro do if: " + var01);
        console.log("01b chamada dentro do if: " + var02);        
    }
    
    console.log("02a chamada depois do if: " + var01);
    console.log("02b chamada depois do if: " + var02);//undefined
};

testVar02();
console.log();

//var 03
console.log("****** VAR 03 ******");

function testVar03() {
    var var01 = "var 01 criada antes do bloco";
    {
        console.log("01a chamada dentro do bloco: " + var01);
        var var01 = "var 02 criada dentro do bloco";
        console.log("02a chamada dentro do bloco: " + var01);
    }
    var var01 = "var 03 criada depois do bloco";
    console.log("03a chamada depois do bloco: " + var01);        
};

testVar03();
console.log();

//let 01
console.log("****** LET 01 ******");

function testLet1(){
    let let01 = "let 01 criada antes do bloco";
    {
        let let02 = "let 02 criada dentro do bloco";
        console.log("01a chamada dentro do bloco: " + let01);
        console.log("01b chamada dentro do bloco: " + let02);
    }
    console.log("02a chamada depois do bloco: " + let01);    
}
testLet1();

//let 02
console.log("****** LET 02 ******");

function testLet2(){
    let let01 = "let 01 criada antes do bloco";
    {
        let let02 = "let 02 criada dentro do bloco";
        console.log("01a chamada dentro do bloco: " + let01);
        console.log("01b chamada dentro do bloco: " + let02);
    }
    console.log("02a chamada depois do bloco: " + let01);
    // console.log("02b chamada depois do bloco: " + let02); ReferenceError: let02 is not defined
}
testLet2();

//let 03
console.log("****** LET 03 ******");

function testLet3(){
    let let01 = "let 01 criada antes do bloco";
    {
        // console.log("01a chamada dentro do bloco: " + let01); ReferenceError: Cannot access 'let01' before initialization
        let let01 = "let 02 criada dentro do bloco";
        console.log("02a chamada dentro do bloco: " + let01);
    }
    console.log("03a chamada depois do bloco: " + let01);
    
}
testLet3();

//const 01
console.log("****** CONST 01 ******");

function testConst1(){
    const const01 = "const 01 criada antes do bloco";
    {
        const const02 = "const 02 criada dentro do bloco";
        console.log("01a chamada dentro do bloco: " + const01);
        console.log("01b chamada dentro do bloco: " + const02);
    }
    // const01 = "novo valor criada antes do bloco, alterada depois do bloco"; TypeError: Assignment to constant variable.
    console.log("02a chamada depois do bloco: " + const01);
    // console.log("02b criada dentro do bloco: " + const02); ReferenceError: const02 is not defined       
}

testConst1();

//const 02
console.log("****** CONST 02 ******");

function testConst2(){
    const const01 = {propriedade: "valor"};
    console.log("01a: " + const01.propriedade);
    
    const01.propriedade = "Novo valor";
    console.log("02a: " + const01.propriedade);    
}

testConst2();

//const 03
console.log("****** CONST 03 ******");
function testConst3(){
    const const01 = {propriedade: "valor"};
    console.log("01a: " + const01.propriedade);
    
    // const01 = {propriedade: "novo valor"}; TypeError: Assignment to constant variable.
    console.log("02a: " + const01.propriedade);
}

testConst3();
