//var 01
console.log("****** VAR 01 ******");
function testVar01() {
    var var01 = "var 01";
    {
        var var02 = "var 02";
        console.log("01a: " + var01);
        console.log("01b: " + var02);
        console.log();
    }
    console.log("02a: " + var01);
    console.log("02b: " + var02);
};

testVar01();
console.log("****** VAR 02 ******");

//var 02
function testVar02() {
    var var01 = "var 01";
    if (1 == 0) {
        var var02 = "var 02";
        console.log("01a: " + var01);
        console.log("01b: " + var02);
        console.log();
    }
    
    console.log("02a: " + var01);
    console.log("02b: " + var02);//undefined
    console.log();
};

testVar02();
console.log("****** VAR 03 ******");

//var 03
function testVar03() {
    var var01 = "var 01";
    {
        console.log("01a: " + var01);
        var var01 = "var 02";
        console.log("02a: " + var01);
        console.log();
    }
    var var01 = "var 03";
    console.log("03a: " + var01);    
    console.log();
};

testVar03();

//let 01
console.log("****** LET 01 ******");
function testLet1(){
    let let01 = "let 01";
    {
        let let02 = "let 02";
        console.log("01a: " + let01);
        console.log("01b: " + let02);
    }
    console.log("02a: " + let01);    
}
testLet1();

//let 02
console.log("****** LET 02 ******");
function testLet2(){
    let let01 = "let 01";
    {
        let let02 = "let 02";
        console.log("01a: " + let01);
        console.log("01b: " + let02);
    }
    console.log("02a: " + let01);
    // console.log("02b: " + let02); ReferenceError: let02 is not defined
}
testLet2();

//let 03
console.log("****** LET 03 ******");
function testLet3(){
    let let01 = "let 01";
    {
        // console.log("01a: " + let01); ReferenceError: Cannot access 'let01' before initialization
        let let01 = "let 02";
        console.log("02a: " + let01);
    }
    console.log("03a: " + let01);
    
}
testLet3();

//const 01
console.log("****** CONST 01 ******");
function testConst1(){
    const const01 = "const 01";
    {
        const const02 = "const 02";
        console.log("01a: " + const01);
        console.log("01b: " + const02);
    }
    // const01 = "novo valor"; TypeError: Assignment to constant variable.
    console.log("02a: " + const01);
    // console.log("02b: " + const02); ReferenceError: const02 is not defined       
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
    console.log("02a: " + const01.propriedade);    //02a: [object Object]
}

testConst3();
