class Heroi {

    constructor (nome, idade, tipo, ataque) {

        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    
    }

    atacar (tipo, ataque){
        console.log(`O herói ${this.tipo} atacou usando ${this.ataque}`);
    }

}

mago = new Heroi("Samuel", 29, "mago", "magia");
guerreiro = new Heroi("Nika", 49, "guerreiro", "espada");
monge = new Heroi("Dolmar", 37, "monge", "artes marciais");
ninja = new Heroi("Piniko", 17, "ninja", "shuriken");

mago.atacar(mago.tipo, mago.magia)
guerreiro.atacar(mago.tipo, mago.magia)
monge.atacar(mago.tipo, mago.magia)
ninja.atacar(mago.tipo, mago.magia)


