// generare un numero random tra 1 e 6 sia per il giocatore che per il computer e dire chi vince
// creo array utente e computer
// creo variabile numero random
// genero numero random con Math.random()*6 +1
// associo ad utente e poi a computer

// IF in cui controllo se numero utente > computer
// stampo messaggio hai vinto
// ALTRIMENTI SE utente === computer controllo
// se è vero stampo PAREGGIO
// altrimenti HAI PERSO

// let computer = 0
// let user = 0
// let player = [computer, user];
// let dadoN = 0;

// for (let i = 0; i < player.length; i++) {

//     dadoN = Math.floor(Math.random() * 6 + 1);
//     player[i] = dadoN;
//     console.log(player[i])
// }
// console.log("numero user", user);
// console.log("computer dado", computer);

let computer = Math.floor(Math.random() * 6 + 1);
let user = Math.floor(Math.random() * 6 + 1);

console.log("numero user", user, "computer dado", computer);

if (computer > user) {
    document.getElementById("who_wins").innerHTML = "Hai perso";
} else if (computer === user) {
    document.getElementById("who_wins").innerHTML = "Pareggio";
} else {
    document.getElementById("who_wins").innerHTML = "Hai vinto!";
}