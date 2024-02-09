/*
let age = 8;
let age1 = "osm";
console.log(age, typeof age);
console.log(age1, typeof age1);

jmeno="Jan"
console.log(jmeno);
// chyba neni deklarovano

let x,y = 25 - 10 - 5  //prirazovani  z prava do leva , vypocet z leva do prava 
console.log(x,y)
*/
// const krestni = "Honza";
// const prace = "freelancer";
// const rokNar = 1980;
// const aktRok = 2024;

// // Klasika zapis
// console.log(
//   "Jsem " +
//     krestni +
//     " ,mam" +
//     (aktRok - rokNar) +
//     " roku pracuju jako " +
//     prace +
//     "."
// );
// //Zapis pomoci literal
// console.log(`Jsem ${krestni}, mam ${aktRok - rokNar} pracuju jako ${prace} .`);

// const actAge = 19;
// const muzeChlastat = actAge >= 18;
// if (actAge >= 18) {
//   console.log("Muzes si dat pivo");
// } else {
//   console.log("Dej si sodovku");
// }

//prevod datoveho typu
// const rokNar = "1980"; //simulace vstupu z formulare
// console.log(rokNar + 20); // + prevadi vsechny datove typy na string
// console.log(rokNar * 20); // u vsech ostatnich operatoru je datovy prevod na number
// console.log(rokNar / 20);
// console.log(Number(rokNar) - 20); // Konverze pouze v tomto radku
// console.log(Number("Ahoj")); // not a number , ale type of = number

// let n = "1" + 1;
// n = n - 1;
// console.log(n, typeof n);

// 2+3+4+"5" = "95"
// "10" -"4" - "+3" -2"5" = 15
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean("Ahoj"));

// let cena; // pokud cenu nezadame je hodnota promenne undefined coz je efalsy hondtoa .. ale kdyz zadame 0, coy je falsy hodnota ale platne cislo, nebude nam to fungovat spravne , musime opravit pomoci logickych operatoru
// cena = 564;
// if (cena == 564) {
//   console.log(`Super, zadana vyrobku je ${cena}`);
// } else {
//   console.log(`Nezadal jsi cenu, polozka nemuze byt ulozena`);
// }
// const oblCislo = Number(prompt("Zadej sve oblibene cislo"));
// console.log(oblCislo, typeof oblCislo);

//switch
// switch (denVTydnu) {
//   case `pondeli`: //obdoba if{denVTydnu === `pondeli}
//     console.log(`kruhovy trening`);
//     break;
//   case `utery`:
//     console.log("posilovani");
//     console.log("vecer masaz");
//     break;
//   case `streda`:
//     console.log("beh na 15km");
//   case `ctvrtek`:
//     console.log("posilovna");
//     console.log("vecer sauna");
//   case `patek`:
//     console.log("kruhovy trening");
//   case `sobota`:
//   case `nedele`:
//     console.log("cely den volno");
//   default:
//     console.log("nedal jsi validni hodnotu");
// }
// console.log("bud vice more");

//ternary operator

// const actAge = 20;
// actAge >= 18 ? console.log(`muzes pit`) : console.log(`kofola`); // ? = kdyz , : = tak (else)

// const jakyDrink = actAge >= 18 ? `pivo` : `kofola`; //zkracena verze if else
// console.log(jakyDrink);

// console.log(`Vzhledem k tvemu veku si muzes dat ${actAge >= 18 ? `pivo` : `kofola`}`) // muze se mapsat rovnou do vypisu

// "use strict";
// let maRidicskyPrukaz = false;
// const udelalTest = true;
// if (udelalTest) maRidicskyPruka = true;
// if (maRidicskyPrukaz) console.log("muzu ridit");

// let interface = "RJ45"; //rezervovany vyraz

// Funkce

// function pozdrav() {
//   console.log("Ahoj , svete !!!");
// }

// pozdrav();
// pozdrav();
// pozdrav();

// function juiceMaker(apples, oranges) {
//   const juice = `Juice made of ${apples} and ${oranges} oranges`;
//   return juice;
// }
// const juice1 = juiceMaker(3, 1);
// console.log(juice1);
// const juice2 = juiceMaker(10, 5);
// console.log(juice2);

// function calcAge(actYear, birthYear) {
//   return actYear - birthYear;
// }

// const age1 = calcAge(2024, 1980);
// console.log(age1);

// let calcAge2 = function (actYear, birthYear) {
//   return actYear - birthYear;
// };
// console.log(`U R ${calcAge(2021, 1980)} years old`);

// // arrow function
// let calcAge3 = (actYear, birthYear) => actYear - birthYear;
// console.log(` U R ${calcAge3(2024, 1980)} years old. `);

// let yearsUntilRetirement = (actYear, birthYear) => {
//   const age = actYear - birthYear;
//   const pension = 65 - age;
//   return pension;
// };
// console.log(` Musim jeste robit ${yearsUntilRetirement(2024, 1980)} let. `);

// const fruitCutter = (fruit) => fruit * 4;

// function juiceMaker2(apples, oranges) {
//   const applePieces = fruitCutter(apples);
//   const orangePieces = fruitCutter(oranges);
//   const finalJuice = `Juice made of ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//   return finalJuice;
// }
// console.log(juiceMaker2(3, 2));

// //Pole neboli data structures

// const nakup = ["mliko", "chleba", "sejra", "salam"];
// console.log(nakup);

// const workDays = new Array("Mo", "Tu", "Wen", "Th", "Fr");
// console.log(nakup);
// console.log(workDays);

// console.log(nakup[3]);
// console.log(workDays[0]);

// console.log(nakup.length, workDays.length);

// console.log(workDays[workDays.length - 1]);

// nakup[3] = "uherak";
// console.log(nakup);

// // V poli muzu i kdyz je deklarovano jako const, menit prvky v poli za jine , a muze se menit i delka pole
// const user = ["Jan", "Novak", 1980, true, workDays];
// console.log(user);

// //metoda push prida prvek na konec pole
// nakup.push("maslo");
// console.log(nakup);
// nakup.push("jogurt");
// console.log(nakup);
// nakup.unshift("rohliky");
// console.log(nakup);
// nakup.pop(); //odebere posledni prveks
// console.log();
// nakup.pop();
// nakup.shift(); //odebere ze zacatku pole prvni prvek
// console.log(nakup);

// // indexOf vrati polohu na ktere se dany prvek nachazi
// console.log(workDays.indexOf("Wen"));
// console.log(workDays.indexOf("jidlo"));
// // includes yjisti zda li je dany prvek v poli, vraci true nebo false
// console.log(workDays.includes("Wen"));
// console.log(workDays.includes("jidlo"));

// data structures - objekt, Objekt
/*

const nazev_objektu = {
    klic: value,
    klic: value,
    klic: value,
}
vlastnosti objektu muze byt i funkce - a te se nazyva metoda
*/
// const user1 = {
//   firstName: "Jan",
//   lastName: "Novak",
//   birthYear: 1980,
//   MD: 3500,
//   doesHaveDriverLicense: true,
//   languages: ["CZ", "ENG", "DE", "PL"],
//   calcAgeObject: function (birthYear) {
//     return 2024 - birthYear;
//     //da se napsat return 2024 - this.birthYear ale musi se smazat argument birthYear z funkce/ this nahradi argument ve funkci
//   },
//   calcAgeObject: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${
//       this.firstName
//     } is a ${this.calcAgeObject()} freelancer and he has ${
//       this.doesHaveDriverLicense ? "a" : "n"
//     } driver license.`;
//   },
// };
// console.log(user1.calcAgeObject());
// console.log(user1.age);
// console.log(user1.getSummary()); //doplnena zavorka pri volani

// console.log(user1.calcAgeObject());
// console.log(user1.calcAgeObject(1980));

// console.log(user1);
// console.log(user1.lastName, user1["lastName"]); //u zavorkove notace musi byt uvozovky

// const key = "Name";
// console.log(user1["first" + key], user1["last" + key]); //michani promenne s nazvem objektu jen u zavorkove notace

// const info = prompt("Jakou vlastnost user chces zobrazit ?");
// console.log(user1[info]);

// user1.mobileNum = "123456789"; // prida do objektu klic a objekt
// user1["email"] = "jk@email.com";
// console.log(user1);

// // iterace for
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}. opakovani`);
// }
// const user = ["Jan", "Novak", "1980", true, "workDays"];

// const dataTypes = [];
// const workDays = ["Mo", "Tu", "We", "Th", "Fr"];
// for (let i = 0; i < user.length; i++) {
//   console.log(user[i], typeof user[i]);
//   //dataTypes[i] = typeof user[i];
//   dataTypes.push(typeof user[i]); // to same jako radek nad
// }
// console.log(dataTypes);

// const birthYear = ["1980", "1945", "2005", "1888", "1955", "1968"];
// const ages = [];

// for (let i = 0; i < birthYear.length; i++) {
//   ages[i] = 2024 - birthYear[i];
// }
// console.log(ages);

// for (let i = 0; i < birthYear.length; i++) {
//   if (typeof user[i] !== "string") continue; //preskoci na dalsi iteraci
//   console.log(user[i], typeof user[i]);
//   //break ukonci smycku
// }

// for (let i = user.length - 1; i >= 0; i--) {
//   console.log(user[i], typeof user[i]);
// }
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + " + " + j + " = " + i * j + "\n"); //()`${i} + ${j} = ${i * j}`)
//   }
//   console.log("Opakovani cislo " + i + "\n");
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}. opakovani`);
// }
// let i = 1;
// while (i <= 10) {
//   console.log(`${i}. opakovani`);
//   i++;
// }
// let hodKostkou = 0;
// let pocetHodu = 1;

// while (hodKostkou !== 6) {
//   hodKostkou = Math.trunc(Math.random() * 6) + 1;
//   console.log(` hod cislo ${pocetHodu}, padlo ${hodKostkou}`);
//   pocetHodu++;
// }

// Dalsi den, patek 9.2.2024
