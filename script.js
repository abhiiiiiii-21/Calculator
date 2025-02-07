const buttonValues = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
]

const rightSymbols = ["÷", "×", "-", "+", "="]
const topSymbold = ["AC", "+/-", "%"]

const display = document.getElementById("display");

let A = 0;
let operator = null;
let B = null;

function clearAll() {
    A = 0;
    operator = null;
    B = null;
}



for (let i = 0; i < buttonValues.length; i++) {
    
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;

    if (value === "0") {
        button.style.width = "12vw";
        button.style.gridColumn = "span 2";
    }

    if (rightSymbols.includes(value)) {
        button.style.backgroundColor = "#FF9900";
    }

    if (topSymbold.includes(value)) {
        button.style.backgroundColor = "#A6A6A6";
        button.style.color = "black";
    }

    const clickSound = new Audio('click.mp3');
    clickSound.volume = 0.1;


    //button Clicking
    button.addEventListener("click", function() {
        clickSound.currentTime = 0; 
        clickSound.play();

        if (rightSymbols.includes(value)) {

            if (value == "="){

                if (A != null){
                    
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);

                    if (operator == "÷") {
                        display.value = numA / numB;
                    }

                    else if (operator == "×") {
                        display.value = numA * numB;
                    }

                    else if (operator == "-") { 
                        display.value = numA - numB;
                    }

                    else if (operator == "+") {
                        display.value = numA + numB;
                    }

                    clearAll();
                }
            }

            else{
                operator = value;
                A = (display.value);
                display.value = "";
            }
        }

        else if (topSymbold.includes(value)) {
            if (value === "AC") {
                clearAll();
                display.value = "";

            }

            else if (value === "+/-") {
                if (display.value != "" && display.value != "0") {
                    if (display.value[0] == "-") {
                        display.value = display.value.slice(1);
                    }

                    else{
                        display.value = "-" + display.value;
                    }
                }
            }

            else if (value === "%") {
                display.value = Number(display.value) / 100;
            }
            
        }

        else{
            if (value === "."){
                if (display.value !== "0" && !display.value.includes(".")) {
                    display.value += value;
                }
            }

            else if (display.value === "0") {
                display.value = value;
            }
            else{
                display.value += value;
            }
        }
    });   


    document.getElementById("buttons").appendChild(button);
}


