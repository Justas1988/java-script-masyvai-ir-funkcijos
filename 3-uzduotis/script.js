"use strict"

function divGenerator() {
        let kiekis = parseInt(document.getElementById("elm").value);
    for (let i=0; i<kiekis; i++) {
        let divElement = document.createElement("div");
        let klass = "elementas-" + (i+1);
        divElement.classList.add(klass);
        divElement.innerText = i + 1;
        document.querySelector(".container").append(divElement);

    }
} 