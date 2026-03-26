//lista email, voglio che quando la persona inserisce la mail viene controllata la lista email e se la mail e' presente 
// viene accettata altrimenti compare la scritta "email non trovata" 
// parto facendo la lista poi creo un prompt dove la persona inserisce la mail premendo invio 
// il programma sonda la lista mail e controlla se ne trova una corrispondente 

const emails = [
  'gigietto@live.it',
  'frufru@hotmail.it',
  'cri85@hotmail.it',
  'marcolino07@hotmail.it',
  'carletto05@live.it',
  'fradell@gmail.it',
  'cici11@gmail.it'
];

let userEmail = (prompt("inserisci qui la tua mail:"))


let find = false;


for (let i = 0; i < emails.length; i++) {
    if (emails[i] === userEmail) {
        find = true;
    }
    }
if (find === true) {
    console.log(prompt("email corretta"));

} else {
    console.log (prompt("email non trovata"));
}



    
