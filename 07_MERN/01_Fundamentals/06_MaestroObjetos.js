const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const bListPkmn = pokemon.filter(p => p.name[0] === "B"); //Lista de elementos en la posición 0 (Primera de cada name)
//console.log(bListPkmn) 

const pkmnIds = pokemon.map( p => p.id ) //Todos los ids
//console.log(pkmnIds)


//------ TAREA ------ 

const idDivisiblex3 = pokemon.filter(val => val.id % 3 === 0); //mientras que sea divisible por 3
console.log("Son divisibles por 3:", idDivisiblex3)

const esTipoFuego = pokemon.filter(val => val.types[0].includes(["fire"])) //mientras sea de fuego en la posicion 0 del objeto type
console.log("Sonde tipo fuego", esTipoFuego)

const esMasDeUnTipo = pokemon.filter(typePkm => typePkm.types.length >= 2) //si la longitud es mayor a 2
console.log("Tienen mas de un tipo:", esMasDeUnTipo)

const soloNombres = pokemon.map(pkmName => pkmName.name)
console.log("Solo nombres:", soloNombres)

const mayoresa99 = pokemon.filter(mayora => mayora.id >= 99).map(mayores => mayores.name)
console.log("Mayores a 99:", mayoresa99)

const soloVeneno = pokemon.filter(veneno => veneno.types.length==1 && veneno.types[0] === "poison").map(soloNombre => soloNombre.name) //solo veneno igual a uno y show list de nombres
console.log("Solo veneno:", soloVeneno)

const segVolador = pokemon.filter(soloVol => soloVol.types.length==2).filter(segVol => segVol.types[1] === "flying").map(nombresVol => nombresVol.name)
console.log("Solo Voladores en segunda clase:", segVolador)

const contNormales = pokemon.filter(contadorNormal => contadorNormal.types[0] === "normal" ).length
console.log("Cantidad de pokemones de tipo normal: ", contNormales)