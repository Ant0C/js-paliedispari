//***Utente scegli se pari o dispari ed un numero da 1 a 5
let sceltaUtente = prompt("Scegli se pari o dispari")
console.log(sceltaUtente)

let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"))
console.log(numeroUtente)

//***Viene generato un nuremo random per il pc
let numeroPc = Math.floor(Math.random() * 5) + 1
console.log(numeroPc)

//***Viene fatta la somma dei due numeri scelti
let somma = numeroPc + numeroUtente
console.log(somma)

//Si stabilisce chi ha vinto
if(numPari (somma) && sceltaUtente === "pari"){
    document.getElementById("vincitore").innerHTML = "Vincitore utente";
    //console.log("Vincitore utente")
}

if(numPari (somma) && sceltaUtente === "dispari"){
    document.getElementById("vincitore").innerHTML = "Vincitore pc";
    //console.log("Vincitore pc")
}

if(numDispari (somma) && sceltaUtente === "dispari"){
    document.getElementById("vincitore").innerHTML = "Vincitore utente";
    //console.log("Vincitore utente")
}

if(numDispari (somma) && sceltaUtente === "pari"){
    document.getElementById("vincitore").innerHTML = "Vincitore pc";
    //console.log("Vincitore pc")
}

//FUNZIONI per stabilire se la somma è pari o dispari
function numPari (somma){
    const resto = somma % 2
    //console.log(resto)
    if (resto === 0) {
        return true
    }   else {
        return false
    }
}

function numDispari (somma){
    const resto = somma % 2
    //console.log(resto)
    if (resto === 1) {
        return true
    }   else {
        return false
    }
}

