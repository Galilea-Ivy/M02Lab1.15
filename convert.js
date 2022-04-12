// Global Variables
let celcuis = document.getElementById("cInput");
let farhenheit = document.getElementById("fInput");

// Functions
window.addEventListener("DOMContentLoaded", domLoaded);

function convertCtoF(cel) {
    let fahren = cel * (9/5) + 32;
    return fahren;
}

function convertFtoC(fahren) {
    let cel = (fahren - 32) * (5/9);
    return cel;
}

function imageChange(float) {
    let img = document.getElementById("weatherImage");
    if (float > 50) {
        img.src = "img/warm.png";
    }
    else if (float >= 32) {
        img.src = "img/cool.png";
    }
    else {
        img.src = "img/cold.png";
    }
}

function domLoaded() {
    celcuis.addEventListener("keypress", clearFInput);
    farhenheit.addEventListener("keypress", clearCInput);
    let convertBtn = document.getElementById("convertButton");
    convertBtn.addEventListener("click", convertHandler);
}

function clearCInput(event) {
    celcuis.value = '';
}

function clearFInput(event) {
    farhenheit.value = '';
}

function convertHandler(event) {
    if (celcuis.value) {
        let f = convertCtoF(parseFloat(celcuis.value));
        if (isNaN(f)) {
            document.getElementById("errorMessage").innerHTML = celcuis.value + " is not a number";
        } else {
            document.getElementById("errorMessage").innerHTML = "";
            farhenheit.value = f;
            imageChange(f);
        }
    }
    else if (farhenheit.value) {
        let c = convertFtoC(parseFloat(farhenheit.value));
        if (isNaN(c)) {
            document.getElementById("errorMessage").innerHTML = farhenheit.value + " is not a number";
        } else {
            document.getElementById("errorMessage").innerHTML = "";
            celcuis.value = c;
            imageChange(parseFloat(farhenheit.value));
        }
        
    }
}