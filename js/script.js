// chiedo mail all'utente
// creo prompt richiesta mail 
// assegno alla variabile email il risultato del prompt
// controllo che sia nella lista di chi può accedere
// creo array utenti con permesso di accesso
// controllo che possa accedere
//  se può accedere stampo messagio conferma accesso
// ALTRIMENTI stampo messaggio negazione accesso


const mail = prompt("Inserisci e-mail:");

const authorized = ["aldo@gmail.com", "mario@yahoo.com", "trucebaldazzi@libero.it"];

for (let i = 0; i < authorized.length; i++) {

    let mailcontrol = authorized[i];

    if (mail === mailcontrol) {

        document.getElementById("esito").innerHTML = "Puoi accedere";

    }
}
document.getElementById("esito").innerHTML = "Controlla che la mail sia scritta correttamente birichino";
