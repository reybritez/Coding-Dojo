var count = 3;
var countElement = document.querySelector(".linea-sup h4")
function addLike() {
    count++;
    countElement.innerText = count + " likes"
    console.log(count)
}