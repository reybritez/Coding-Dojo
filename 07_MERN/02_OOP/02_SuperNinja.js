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
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`)
    }

    drinkShake() {
        this.salud = this.salud + 10;
    }
}

class Sensei extends Ninja {
    constructor(nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }
    
    speakWisdom() {
        this.drinkShake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }
}

const superSensei = new Sensei("Master Splinter")
superSensei.speakWisdom();
superSensei.showStats();