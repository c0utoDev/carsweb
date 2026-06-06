
let comprar = document.getElementById("comprar")
if (comprar) {
    comprar.onclick = function comprar() {
        alert("Comprado!");
    }
} else {
    console.error("Não foi possível encontrar o id!");

}
