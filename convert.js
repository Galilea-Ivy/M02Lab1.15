window.addEventListener("DOMContentLoaded", domLoaded);

// global variables
let celcuis;
let farhenheit;

// Functions
function domLoaded() {
    celcuis = document.getElementById("cInput");
    celcuis.addEventListener("keypress", clearFInput);
    farhenheit = document.getElementById("fInput");
    farhenheit.addEventListener("keypress", clearCInput);
    let convertBtn = document.getElementById("convertButton");
    convertBtn.addEventListener("click", convertHandler);
}

function convertCtoF(degreesCelsius) {
    let degreesFahrenheit = degreesCelsius * (9/5) + 32;
    return degreesFahrenheit;
}

function convertFtoC(degreesFahrenheit) {
    let degreesCelsius = (degreesFahrenheit - 32) * (5/9);
    return degreesCelsius;
}

function imageChange(float) {
    let img = document.getElementById("weatherImage");
    if (float > 50) {
        img.src = "warm.png";
    }
    else if (float >= 32) {
        img.src = "cool.png";
    }
    else {
        img.src = "cold.png";
    }
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