console.log("Inizio esecuzione");
let d = new Date();
console.log(d);
document.getElementById("saluto").innerHTML = d;
let colori = [];
let i = 0; // conta il numero dei numeri inseriti 

function elabora(){
    let a = document.getElementById("inNumber").value;
    alert(a);
    //se compreso tra 0 e 255
    if (a>=0 && a<=255){
        //inserire il numero dentro un array di colori
        colori.push(a);
        //visualizzare il numero dentro il div output
        document.getElementById("outText").innerHTML = "Hai inserito il numero " + a;
        //visuasualizzare i numeri inseriti del colore scelto
        console.log(colori);
        document.getElementById("outText").innerHTML += "<br> I numeri inseriti" + colori;
        i++;
        if(i == 3){
            NewColor = `rgb(${colori[0]},${colori[1]},${colori[2]})`;
            document.getElementById("outText").style.color=NewColor;
            return;
        }
    }
}
function annulla(){
    document.getElementById("inNumber").value = " ";
    document.getElementById("inNumber2").value = " ";
    document.getElementById("outText").innerHTML = " ";
    alert(colori);
}