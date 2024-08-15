var number1;
var number2;
var operator;
var result = 0;

var temp = "";



function dataAdd(input) {
    var checkNum = Number(input);
    if (checkNum >= 0 && checkNum <= 9 || input == ".") {
        //the number inputted is a number.
        document.getElementById("inputText").value += input;

        if (operator != null) {
            temp += input;
        }

    } else if (input == "=") {
        //when equals is pressed.
        if (operator == null) {
            document.getElementById("inputText").value = document.getElementById("inputText").value;
        } else {
            number2 = temp;
            if (number2 == null) {
                document.getElementById("inputText").value = number1;
            } else {
                calculate();
            }
        }
    } else if (input == "+" || input == "-" || input == "*" || input == "/") {
        //the number inputted is an operator.
        if (number1 == null) {
            number1 = document.getElementById("inputText").value;
        }

        if (operator != null) {
            number2 = temp;

            calculate();
        }

        operator = input;
        document.getElementById("inputText").value += input;
    } else if (input == "Enter") {
        alert("Please use '=' instead of 'Enter'");
    }
}

function calculate() {
    switch (operator) {
        case "+":
            result = Number(number1) + Number(number2);
            break;
        case "-":
            result = Number(number1) - Number(number2);
            break;
        case "*":
            result = Number(number1) * Number(number2);
            break;
        case "/":
            result = Number(number1) / Number(number2);
            break;
    }

    document.getElementById("inputText").value = result;

    number1 = result;
    number2 = null;
    operator = null;
    temp = "";
    result = 0;
}

function allClear() {
    document.getElementById("inputText").value = "";
    number1 = null;
    number2 = null;
    operator = null;
    temp = "";
    result = 0;
}

function del() {

    var input = document.getElementById("inputText").value;

    if (input == "undefined" || input == "null" || input == "Infinity" || input == "NaN") {
        document.getElementById("inputText").value = "";
        number1 = null;
        number2 = null;
        operator = null;
        temp = "";
        result = 0;
    } else {
        document.getElementById("inputText").value = document.getElementById("inputText").value.slice(0, -1);
    }

}


document.onkeydown = function (e) {
    dataAdd(e.key);
}