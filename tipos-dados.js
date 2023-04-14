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


