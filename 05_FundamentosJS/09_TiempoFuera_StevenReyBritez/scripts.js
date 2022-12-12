var seleccionMin = document.getElementsByClassName("min")
var seleccionMax = document.getElementsByClassName("max")
function escogerTemperatura (element) {
    if (element.value === "F°") {
        console.log("Farenheit loaded")
    } else {
    // Formula
    // (60 °F − 32) × 5/9 = 15,556 °C
        for (item in seleccionMin){
            if (item.length < 5){  
                contMin = []
                valorEnC = 0
                contenido =seleccionMin[item].textContent
                if (typeof(contenido) !== 'undefined') {
                    toNum = parseInt(contenido.slice(0, -1))
                    contMin.push(toNum)
                    var valorEnC= Math.round(((contMin - 32) * 5/9))  
                }
                console.log(contMin)
                console.log(valorEnC)
                //Hasta aca logre convertir y tal. Ahora, cómo reemplazo?
            } 
        }
        
    }
}



function accept(elemento) {
    div_padre= elemento.parentElement;
    div_padre.remove()
}