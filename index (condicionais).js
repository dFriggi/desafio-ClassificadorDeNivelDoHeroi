let nomeHeroi = "Espartacus"
let xpHeroi = 100
let rankHeroi

if (xpHeroi <= 1000){
    rankHeroi = "Ferro"
}else if(xpHeroi >= 1001 && xpHeroi<= 2000){
    rankHeroi = "Bronze"
}else if(xpHeroi >= 2001 && xpHeroi<= 5000){
    rankHeroi = "Prata"
}else if(xpHeroi >= 5001 && xpHeroi<= 7000){
    rankHeroi = "Ouro"
}else if(xpHeroi >= 7001 && xpHeroi<= 8000){
    rankHeroi = "Platina"
}else if(xpHeroi >= 8001 && xpHeroi<= 9000){
    rankHeroi = "Ascendente"
}else if(xpHeroi >= 9001 && xpHeroi<= 10000){
    rankHeroi = "Imortal"
}else {
    rankHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi)