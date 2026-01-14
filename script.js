console.log("Inizio esecuzione");

let d = new Date();
document.getElementById("saluto").innerHTML = "Oggi è " + d;

let colori = [];

function elabora() {
let numero = document.getElementById("inNumber").value;
let testo = document.getElementById("inNumber2").value;

console.log(numero);
console.log(testo);

if (numero < 0 || numero > 255 || numero === "") {
document.getElementById("error").innerHTML = "Il valore inserito non è corretto (0-255)";
return;
} else {
document.getElementById("error").innerHTML = "";
}

colori.push(numero);
console.log(colori);

document.getElementById("outText").innerHTML =
"Valori RGB inseriti: " + colori.join(", ");

if (colori.length === 3) {
let newColor = `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`;
document.getElementById("outText").innerHTML = testo;
document.getElementById("outText").style.color = newColor;
}
}

function annulla() {
document.getElementById("inNumber").value = "";
document.getElementById("inNumber2").value = "";
document.getElementById("outText").innerHTML = "";
document.getElementById("error").innerHTML = "";
colori = [];
}
