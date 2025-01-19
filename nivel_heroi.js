let nomesHerois = [
    ["Mário", 2600],
    ["Goku", 10000000000],
    ["Picachu", 900],
    ["Ezio", 7500],
    ["Black Widow", 100000]
]

let nivel


for (i=0; i<nomesHerois.length; i++){
    let poder = nomesHerois[i][1];
    let nome = nomesHerois[i][0];

    if ( poder < 1000){
        nivel = "Ferro"
    }
    else if (poder > 1000 & poder < 2000){
        nivel = "Bronze"
    }
    else if (poder > 2000 & poder < 5000){
        nivel = "Prata"
    }
    else if (poder > 5000 & poder < 7000){
        nivel = "Ouro"
    }
    else if (poder > 7000 & poder < 8000){
        nivel = "Platina"
    }
    else if (poder > 8000 & poder < 9000){
        nivel = "Ascendente"
    }
    else if (poder > 9000 & poder < 10000){
        nivel = "Imortal"
    }
    else if (poder >= 10000){
        nivel = "Radiante"
    }
    else {
        nivel = "Indefinido Ainda"
    }

    console.log("O Herói de nome " + nome + " está no nível de " + nivel);
}

