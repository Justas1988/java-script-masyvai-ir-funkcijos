//1. Sukurkite funkciją, kurią iškvietus masyvą galima papildyti norimu elementu.
//Informacija paimama iš input laukelio. Funkcija iškviečiama paspaudus mygtuką.

"use strict"



function elementGenerator() {
    let elementas = document.getElementById("ivestis").value;
        // console.log("Įvestas elementas: " + elementas);
    const masyvas = ["avokadas ", "persikas ", "arbuzas "];    
    let i = masyvas.length;
        // console.log("masyvo ilgis: " + masyvas.length);
    document.getElementById("masyvas1").innerHTML = "Pradinis masyvas: " + masyvas;
    masyvas[i] = elementas;    
        // console.log("Masyvas: " + masyvas);
    document.getElementById("masyvas").innerHTML = "Masyvas gautas: " + masyvas;
    return masyvas;
}





