window.addEventListener("DOMContentLoaded", domLoaded);

// global variables
let celcuis;
let farhenheit;

// Functions
function domLoaded() {
    celcuis = document.getElementById("cInput");
    celcuis.addEventListener("keydown", clearFInput);
    farhenheit = document.getElementById("fInput");
    farhenheit.addEventListener("keydown", clearCInput);
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

function imageChange(number) {
    let img = document.getElementById("weatherImage");
    if (number > 50) {
        img.src = "warm.png";
        img.alt = "warm";
    }
    else if (number >= 32) {
        img.src = "cool.png";
        img.alt = "cool";
    }
    else {
        img.src = "cold.png";
        img.alt = "cold";
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