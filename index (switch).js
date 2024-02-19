let nomeHeroi = "Espartacus"
let xp = 10001
let rankHeroi

switch(true){
    case xp <= 1000:
        rankHeroi = "Ferro"
        break
    
    case xp >= 1001 && xp <= 2000:
        rankHeroi = "Bronze"
        break
    
    case xp >= 2001 && xp <= 5000:
        rankHeroi = "Prata"
        break

    case xp >= 5001 && xp <= 7000:
        rankHeroi = "Ouro"
        break
    
    case xp >= 7001 && xp <= 8000:
        rankHeroi = "Platina"
        break

    case xp >= 8001 && xp <= 9000:
        rankHeroi = "Ascendente"
        break
    
    case xp >= 9001 && xp <= 10000:
        rankHeroi = "Imortal"
        break
    
    case xp >= 10001:
        rankHeroi = "Radiante"
        break
}
console.log("O herói de nome " + nomeHeroi + " está no nível de " + rankHeroi)