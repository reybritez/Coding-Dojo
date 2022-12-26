class Ninja {
    constructor (nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`El nombre del ninja es: ${this.nombre}`)
    }

    showStats() {
        console.log(`El nombre del ninja es: ${this.nombre}, su velocidad es de ${this.velocidad} y tiene ${this.salud} de salud`)
    }

    drinkShake() {
        this.salud = this.salud + 10;
    }
}

const wacho = new Ninja("Hyabusa" , 10)
wacho.sayName();
wacho.showStats();
wacho.drinkShake();
wacho.showStats();
