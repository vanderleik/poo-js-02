//Number
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
console.log(Number("255") == 255);
console.log(Number("255") === 255);
console.log(Number("unicorn"));
console.log(Number(undefined));
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);

const numero500 = new Number(500);
const numero501 = new Number("501");
console.log(numero500);
console.log(numero500.toString());
console.log(numero501);
console.log(numero501.toString());

console.log(Number(null));

//String
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
const string1 = "Vinho é a melhor bebida do mundo!";
const string2 = 'Vinho não se bebe, se degusta!';
const string3 = `Vinho bom é vinho honesto!`;
console.log(string1);
console.log(string2);
console.log(string3);

const string4 = new String("Vinho branco, vinho tinto, espumante...");
console.log(string4);

console.log("Vinho"[0]);
console.log("Vinho"[3]);
console.log("Vinho"[6]);
console.log("Vinho".charAt(0));
console.log("Vinho".charAt(3));
console.log("Vinho".charAt(6));

const a = "ab";
const b = "b";

if (a < b) {
    console.log(`${a} is greater than ${b}`);
} else if (a > b) {
    console.log(`${a} is less than ${b}`);
} else {
    console.log(`${a} and ${b} are equal.`);
}
console.log(a.length);
console.log(b.length);

console.log(typeof a);

const quatro = "4";
console.log(typeof quatro);
console.log(typeof eval(quatro));

const strNull = null;
console.log(strNull);
console.log(typeof strNull);

const scom = "She's got a smile that it seems to me " +
            "\nReminds me of childhood memories " +
            "\nWhere everything was as fresh as the bright blue sky " +
            "\nNow and then when I see her face " +
            "\nShe takes me away to that special place " +
            "\nAnd if I stare too long, I'd probably break down and cry " +
            "\n" +
            "\nWhoa, oh, oh " +
            "\nSweet child o' mine " +
            "\nWhoa, oh, oh, oh " +
            "\nSweet love of mine";

console.log(scom);

const vinhoBrancoTinto = "Vinho branco e Vinho tinto.";
console.log(vinhoBrancoTinto.replace("branco", "tinto"));

const password = "12,345";
console.log("Completo: " + password);
console.log("Primeira parte: " + password.split(",")[0] +
            "\nSegunda parte: " + password.split(",")[1]);

const str1 = "   String com espaços   ";
console.log(str1);
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());

//Math
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
console.log(Math.PI);

const numero = 1.2354;
const numeroNegativo = -1.2354;
const nummero9 = 9;
const numero3 = 3;
const array = [10, 15, 16, 21, 38];

console.log(Math.abs(numero));
console.log(Math.abs(numeroNegativo));
console.log(Math.exp(1));
console.log(Math.round(numero));
console.log(Math.sqrt(nummero9));
console.log(Math.max(... array));
console.log(Math.min(...array));


function aleatorio(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + 1;
    return num;
};

aleatorio(1, 10);

console.log(Math.random());

//Date
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

const hoje1 = new Date();
console.log(hoje1);
const hoje2 = new Date("2023-04-14T13:58:00");
console.log(hoje2);
const data1 = new Date(2023, 3, 14);//O mês tem índice zero!!!
console.log(data1);
console.log(new Date(null));

console.log(hoje1.getFullYear());
console.log(hoje1.getDate());
console.log(hoje1.getMonth());
console.log(hoje1.getTime());
console.log(hoje1.toLocaleDateString());

const date = new Date();
const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
];

console.log(date);

//Array
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
let personagens = ["Emily Sweeney", "Leslie Winkle", "Bernadette Rostenkowski", "Penny Hofstadter", 
                    "Amy Fowler", "Raj Koothrappali", "Howard Wolowitz", "Leonard Hofstadter", 
                    "Sheldon Cooper"];
console.log(personagens);
console.log(personagens[4]);
console.log(personagens.length);
let personagem123 = [personagens[1], personagens[2], personagens[3]];
console.log(personagem123);
personagem123[0] = "Novo Personagem";
console.log(personagem123);
personagem123[4] = "Personagem Quatro";
console.log(personagem123);
personagem123.push("Última posição disponível");
console.log(personagem123);

for (let person in personagem123) {
    console.log(" --> " + person);
};
personagem123[8] = "Personagem na Posição 8";
console.log("**********************************************");

for (let person in personagem123) {
    console.log(" --> " + person)
};

console.log("**********************************************");

for (let i = 0; i < personagem123.length; i++) {
    console.log("--> " + i + " " + personagem123[i]);
}

console.log("**********************************************");
console.log(personagens.toString());
console.log(personagens.join(", "));

let x = [1, 2, 3];
let y = [4, 5, 6];

let a = x.concat(y);
console.log(a);
let b = a.concat(x,y);
console.log(b.join(" - "));

let c = a.slice();//copia o array
console.log(c.join(" - "));
let d = a.slice(2);//copia os dados a partir da posição 2 (inclusive)
console.log(d.join(" - "));
let e = a.slice(2, 4);//copia o array. start (inclusive), end (exclusive)
console.log(e.join(" - "));
console.log("**********************************************");
console.log(personagens.indexOf("Penny Hofstadter"));
console.log(personagens.indexOf("Leslie Winkle", "Penny Hofstadter"));
console.log(personagens.lastIndexOf("Leslie Winkle"));
console.log(personagens.includes("Sheldon Cooper"));
console.log(personagens.includes("Deve retornar false"));

console.log("**********************************************");
let arr1 = [0,1,2,3,4,5,6,7,8,9];
function item(i) {
    return i >= 2;
};

console.log(arr1.findIndex(item));

let managers = ['Creed Bratton', 'Deangelo Vickers', 'Robert California', 
            'Nellie Bertram', 'Jim Halpert', 'Andy Bernard', 'Michael Scott',
            'Dwight Schrute'];

managers.forEach(function(item, index) {
    console.log("--> " + `${item} na posicao ${index}`);
});

managers.forEach(function(item, index) {
    console.log("--> Posição: " + `${index} \nGerente:  ${item}\n--------------------------------`);
});

console.log();
console.log(managers.sort());
console.log();
console.log(managers.reverse());

let a = [7,8,4,9,1,4,5];
console.log(
            a.sort(
                            function(item1, item2) {
                            if (item1 > item2) return -1;
                            if (item1 < item2) return 1;
                            return 0;
                            })
            );
