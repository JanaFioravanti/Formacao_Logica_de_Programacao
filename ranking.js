function Ranking(victories, defeats){
    let saldo = victories - defeats
    return saldo;
}

ranking = Ranking(1150, 87);

if ( ranking < 10){
    nivel = "Ferro"
}
else if (ranking > 10 & ranking < 20){
    nivel = "Bronze"
}
    else if (ranking > 20 & ranking < 50){
    nivel = "Prata"
}
else if (ranking > 50 & ranking < 80){
    nivel = "Ouro"
}
else if (ranking > 80 & ranking < 90){
    nivel = "Diamante"
}
else if (ranking > 90 & ranking < 100){
    nivel = "Lendário"
}
else if (ranking >= 101){
    nivel = "Imortal"
}
else {
    nivel = "Indefinido Ainda"
}
console.log("O Herói tem de saldo de "+ ranking +" está no nível de " + nivel);

