class Card {
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
}

class Unidad extends Card {
    constructor(nombre, costo, poder, resiliencia){
        super(nombre, costo);
        this.poder = poder;
        this.resiliencia = resiliencia;
    }

    mostrarInfo() {
        console.log(` El ninja es ${this.nombre} y tiene ${this.poder} de poder y ${this.resiliencia} de resiliencia`);
    }
}

class Efecto extends Card {
    constructor(nombre, costo,texto, stat, magnitud){
        super(nombre, costo);
        this.texto = texto;
        this.stat = stat;
        this.magnitud = magnitud;
    }

    play(target) {
        if (target instanceof Unidad) {
            // console.log(target.resiliencia, "Ques target");
            target.resiliencia = target.resiliencia + this.magnitud;
        } else {
            throw new Error ("El objetivo debe venir de la Unidad");
        }
    }
}


// EFECTOS
let algoritmo_duro = new Efecto("Algoritmo Duro", 2, "aumentar la resistencia del objetivo en 3	", "Resiliencia", 3);
let rechazo_promesa = new Efecto("Rechazo de promesa", 1, "reducir la resistencia del objetivo en 2	", "Resiliencia", -2);
let programacion_pareja = new Efecto("Programación en pareja", 3, "aumentar el poder del objetivo en 2", "Poder", 2);

//TURNO 1
let ninja_cinturon_rojo = new Unidad("Ninja cinturon rojo", 3, 3, 4);
ninja_cinturon_rojo.mostrarInfo();
algoritmo_duro.play(ninja_cinturon_rojo);
ninja_cinturon_rojo.mostrarInfo();