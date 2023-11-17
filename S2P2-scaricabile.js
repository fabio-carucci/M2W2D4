// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

// Crea un array contenente gli utenti (oggetto)

let utenti = [];
utenti.push(marco, paul, amy);

// Inserisce all'interno degli oggetti un'altra proprietà "prices" (array di 3 valori)

for(i=0; i<utenti.length; i++){
  let prices = [];
  for (let j = 0; j < 3; j++) {
    prices.push(Math.floor(Math.random() * 101));
  }
  utenti[i].prices = prices;
}

// Funzione che restituisce il totale speso dall'utente selezionato 
// tenendo conto dello sconto se l'utente è un ambassador e la spedizione se il totale è < 150

function shopping(acquirenteScelto){
  const shippingCost = 50;
  const discount = 0.3;
  let acquirente = acquirenteScelto;
  let totalPrice = 0;

  console.log(acquirente.prices);

  for(let i=0; i<acquirente.prices.length; i++){
    totalPrice += acquirente.prices[i];
  }
  
  if(acquirente.isAmbassador){
    console.log(acquirente.name + " " + acquirente.lastName + " è un ambassador")
    totalPrice = Math.round(totalPrice - (totalPrice * discount));
  } else {
    console.log(acquirente.name + " " + acquirente.lastName + " non è un ambassador")
  }

  if(totalPrice < 150){
    totalPrice += shippingCost;
  }

  console.log(acquirente.name + " spende in totale " + totalPrice + " $.")
}

shopping(marco);

// Ritorna solo gli utenti ambassador

// let utentiAmbassadors = [];

// for (let i=0; i < utenti.length; i++){
//   utenti[i].isAmbassador ? 
//     utentiAmbassadors.push(utenti[i]) :
//     null;
// }
// console.log(utentiAmbassadors);

