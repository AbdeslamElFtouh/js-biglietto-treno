/* dichiarazione tariffa (euro al chilometro) */
const tariffa = 0.21 ;

/* dichiarazione chilometri da percorrere */
const distance = prompt('Inserisci quanti chilometri vuoi percorrere');
const km_percorsi = parseInt(distance);

/* dichiarazione età del passeggero */
const age = prompt('Inserisci la tua età');
const numero_anni = parseInt(age);

/* dichiarazione del prezzo base del biglietto */
let prezzo_biglietto = (tariffa * km_percorsi);

/* condizioni applicazione sconto */

if (numero_anni >= 0 && numero_anni < 18 && km_percorsi > 0) { 
    let prezzo_biglietto_minorenni = prezzo_biglietto - (prezzo_biglietto *20/100);
    alert ('Il prezzo del tuo biglietto è:' + ' ' + prezzo_biglietto_minorenni.toFixed(2) + '€');
 // console.log(prezzo_biglietto_minorenni.toFixed(2)):

}else if (numero_anni >= 65 && km_percorsi > 0) {
    let prezzo_biglietto_over = prezzo_biglietto - (prezzo_biglietto *40/100);
    alert ('Il prezzo del biglietto è:' + ' ' + prezzo_biglietto_over.toFixed(2) + '€');
 // console.log (prezzo_biglietto_over.toFixed(2));

}else if (numero_anni >18 && numero_anni <= 65 && km_percorsi > 0) {
    alert ('Il prezzo del biglietto è:' + ' ' + prezzo_biglietto.toFixed(2) + '€');
 // console.log (prezzo_biglietto.toFixed(2));

}else {
    alert ('Errore di digitazione; Si prega di riprovare.');
}



