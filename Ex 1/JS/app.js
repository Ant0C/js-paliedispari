
//***Chiedere all'utente la parola
let parolaUtente = prompt("Scegli una parola")
//console.log(parolaUtente)

//FUNZIONE
function verificaPalindroma(parolaUtente){

//***Prendo la parola dell'utente è la splitto
let parolaUtsplit = parolaUtente.split('')
//console.log(parolaUtsplit)

//***Riconverto la parola plittata in stringa
let parolaUtstring = parolaUtsplit.toString()
//console.log(parolaUtstring)

//***inverto il senso delle lettere della parola scelta, splittata
let parolaReverse = parolaUtsplit.reverse()
//console.log(parolaReverse)

//***Rinconverto la parola invertita in stringa
let stringReverse = parolaReverse.toString()
//console.log(stringReverse)

//***Verifico se la parola è palindroma oppure no
    if(stringReverse === parolaUtstring){
        console.log("Parola Palindroma")
    }else{
        console.log("Parola non Palindroma!!")
    }
}

verificaPalindroma(parolaUtente)
