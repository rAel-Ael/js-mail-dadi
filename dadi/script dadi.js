//gioco dei dadi: faccio uscire un numero random da 1 a 6 per ogni giocatore 
//poi dico alla macchina che vince chi ha il numero piu' alto altrimenti pareggio




Math.floor(Math.random() * 6) + 1


let player = Math.floor(Math.random() * 6) + 1
let computer = Math.floor(Math.random() * 6) + 1

if (player > computer) {
    console.log (prompt("Player win"));
} else if (player < computer) {
    console.log(prompt("PC win"));
} else {
    console.log(prompt("Pareggio"));
}