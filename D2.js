/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
const num1 = parseFloat(prompt("inserisci numero 1"))
const num2 = parseFloat(prompt("inserisci numero 2"))

if(num1 > num2){alert(`${num1} è il numero più grande`)}
else {alert(`${num2} è il numero più grande`)} 
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
const num1 = parseInt(prompt("inserisci numero 1"))
if(num1 != 5){alert("not equal")}
*/


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
const num1 = parseInt(prompt("inserisci un numero"))
if(num1 % 5 === 0) {alert(`${num1} è divisibile per 5`)}
else {alert(`${num1} non è divisibile per 5`)} 
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
const num1 = parseFloat(prompt("inserisci numero 1"))
const num2 = parseFloat(prompt("inserisci numero 2"))

if(num1 === 8 || num2 === 8){
  alert("uno dei due numeri è uguale a 8")
}
else if (num1 + num2 === 8 || num1 - num2 === 8 || num2 - num1 === 8){
  alert("l'addizione o sottrazione dei due numeri è ugale a 8")
}
else {
  alert("il risultato della somma o sottrazione tra i due numeri non è uguale a 8 :(")
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
const totalShoppingCart = parseFloat(prompt("inserisci il totale del carello"))
const costospezione=10
let totale
if(totalShoppingCart >= 50){totale = totalShoppingCart}
else{totale = totalShoppingCart + costospezione}
alert(`il totale è: ${totale}`)
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const totalShoppingCart = parseFloat(prompt("inserisci il totale del carello"))
const costospezione = 10
const blackfriday = totalShoppingCart*20/100
let totale
if(totalShoppingCart >= 50){totale = totalShoppingCart - blackfriday}
else{totale = totalShoppingCart - blackfriday + costospezione}
alert(`il totale è: ${totale}`)
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
const num1 = parseFloat(prompt("inserisci numero 1"))
const num2 = parseFloat(prompt("inserisci numero 2"))
const num3 = parseFloat(prompt("inserisci numero 3"))
let max
let med
let min
if(num1 > num2 && num1 > num3 ){max=num1}
else if (num2 > num1 && num2 > num3 ){max=num2}
else if (num3 > num1 && num3 > num2 ){max=num3}

if(num1 > num2 && num1 < num3 || num1 < num2 && num1 > num3 ){med=num1}
else if (num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3 ){med=num2}
else if (num3 > num1 && num3 < num2 || num3 < num1 && num3 > num2 ){med=num3}

if(num1 < num2 && num1 < num3 ){min=num1}
else if (num2 < num1 && num2 < num3 ){min=num2}
else if (num3 < num1 && num3 < num2 ){min=num3}

alert(`i numeri in ordine decrescento sono: ${max} ${med} ${min}`)
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
const num = parseFloat(prompt("inserisci un numero"))
if(isNaN(num)){alert(`ATTENZIONE NON è UN NUMERO`)}
else{alert("BRAVO, HAI INSERITO UN NUMERO ;)")}
*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
const num = parseInt(prompt("Inserisci un numero:"));

if (numero % 2 === 0) {
    console.log(`${num} è un numero pari`);
} else {
    console.log(`${num} è un numero dispari`);
}
*/

/* ESERCIZIO 10
    Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
    let val = 7
    if (val < 10) {
        console.log("Meno di 10");
      } else if (val < 5) {
        console.log("Meno di 5");
      } else {
        console.log("Uguale a 10 o maggiore");
      }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let val = 7;
if (val < 5) {
    console.log("Meno di 5");
} else if (val < 10) {
    console.log("Meno di 10");
} else {
    console.log("Uguale a 10 o maggiore");
}
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".


 const me = {
 name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
  const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me.city = 'Toronto';
console.log(me)
*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

delete me.lastName;
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

delete skills[2]
console.log(skills)
*/


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const numeri = []
numeri[0] = 1
numeri[1] = 2
numeri[2] = 3
numeri[3] = 4
numeri[4] = 5
numeri[5] = 6
numeri[6] = 7
numeri[7] = 8
numeri[8] = 9
numeri[9] = 10
console.log(numeri);
*/
//oppure
/*
const numeri = []
for (let i = 1; i <= 10; i++) {
  numeri.push(i)
}
console.log(numeri);
*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = []
for (let i = 1; i <= 10; i++) {
  numeri.push(i)
}

numeri[numeri.length - 1] = 100
console.log(numeri);
