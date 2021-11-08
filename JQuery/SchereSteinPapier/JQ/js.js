'use strict';


let feld = 1;


function delstorage(){

    // erstes besuchen der seite simulieren

    localStorage.clear();



}



function play(){
    
    

    let elemente = document.getElementsByClassName('felder');       // alle felder prüfen, rotes feld speichern

    for(let i = 0; i < 9; i++){

        if(elemente[i].style.backgroundColor == 'gray'){
            feld = i + 1;
        }


    }

    if(frage(feld) == true){                                        // frage(spielstand) aufrufen, bei richtiger antwort wird das nächste feld rot
        if(feld == 9){
            alert("Gratuliere!! Du hast das Spiel geschafft!");
            reset();
        }
        else{
            alert("Richtige Antwort!");
            elemente[feld-1].style.backgroundColor = 'beige';
            elemente[feld].style.backgroundColor = 'gray';
            localStorage.removeItem("feld");
            localStorage.setItem("feld", feld);
            

        }
    }
    else{
        alert("Leider Falsch.");
    }


}


function start(){


    let elemente = document.getElementsByClassName('felder');

    for(let i = 0; i < 9; i++){

        elemente[i].style.backgroundColor = 'beige';

    }


    if (localStorage.getItem("feld") == null) {
        elemente[0].style.backgroundColor = 'gray';
    }
    else{
        let abc = parseInt(localStorage.getItem("feld"));

        elemente[abc].style.backgroundColor = 'gray';

    }

}



function reset(){

    // ist auch startzustand => body.onload
    // alle felder auf beige, feld 1 auf rot

    let elemente = document.getElementsByClassName('felder');

    for(let i = 0; i < 9; i++){

        elemente[i].style.backgroundColor = 'beige';

    }

    elemente[0].style.backgroundColor = 'gray';
    localStorage.clear();


}




function frage(spielstand){



    let zahl1 = 0;
    let zahl2 = 0;
    let zahl3 = 0;


    // Aufgaben je nach spielstand


    switch(spielstand) {

        case 1:
            zahl1 = getRandomInt(50);
            zahl2 = getRandomInt(50);

            if((prompt(zahl1 + "+" + zahl2 + "=")) == (zahl1 + zahl2)){
                return true;
            }
            else{
                return false;
            }
            break;

        case 2:
            zahl1 = getRandomInt(50) + 50;
            zahl2 = getRandomInt(50);

            if((prompt(zahl1 + "-" + zahl2 + "=")) == (zahl1 - zahl2)){
                return true;
            }
            else{
                return false;
            }
            break;
        
        case 3:
            zahl1 = getRandomInt(10);
            zahl2 = getRandomInt(10);

            if((prompt(zahl1 + "*" + zahl2 + "=")) == (zahl1 * zahl2)){
                return true;
            }
            else{
                return false;
            }
            break;

        case 4:
            zahl1 = getRandomInt(17) + 3;
            zahl2 = getRandomInt(9) + 1;       // zahl2 == ergebnis;

            zahl3 = zahl1 * zahl2;              // zahl3 == dividend;



            if((prompt(zahl3 + "/" + zahl1 + "=")) == (zahl2)){
                return true;
            }
            else{
                return false;
            }
            break;

        case 5:
        case 6:
        case 7:
            zahl1 = getRandomInt(50);
            zahl2 = getRandomInt(50);
            zahl3 = getRandomInt(50);

            if((prompt(zahl1 + "+" + zahl2 + "+" + zahl3 + "=")) == (zahl1 + zahl2 + zahl3)){
                return true;
            }
            else{
                return false;
            }
            break;

        case 8:
            zahl1 = getRandomInt(12) + 3;        // ergebnis

            zahl2 = Math.pow(zahl1, 2);


            if((prompt("√" + zahl2 + "=")) == (zahl1)){
                return true;
            }
            else{
                return false;
            }
            break;

        case 9:
            zahl1 = getRandomInt(4) + 1;        // basis
            zahl2 = getRandomInt(3) + 1;        // ergebnis

            zahl3 = Math.pow(zahl1, zahl2);     // numerus


            if((prompt(zahl1 + "^x" + "=" + zahl3 + "  Get x.")) == (zahl2)){
                return true;
            }
            else{
                return false;
            }
            break;
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

























