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