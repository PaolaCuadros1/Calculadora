/**
 * Estructura de los nombres variables y funciones.
 * nombreVariable
 * nombre_variable
 */



function sumarDosNumero() {
    let numero1 = 2;
    let numero2 = 5;
}

document.getElementById('divTest').innerHTML = "Hola a todos"
swal("Hello world!");






/**
 * La función permite mostrar un número.
 * La función hace el llamado a updateInput().
 * @param {*} data => Recibe los datos que se quieren mostrar.
 */
function printNumber(data) {
    updateInput(data.value);
}


function printOperator(data) {
    updateInput(` ${data.value} `);
}

function updateInput(newValue, clear = false) {
    var div = document.getElementById('data');
    div.value = clear ? newValue : `${div.value}${newValue}`;
}

function printOperation() {
    var data = document.getElementById('data').value;
    var result = validateOperator(data.split(' '));
    updateInput(result, true)
}

function validateOperator(arrayData) {
    var result;
    var number1 = Number(arrayData[0]);
    var number2 = Number(arrayData[2]);
    switch (arrayData[1]) {
        case '+':
            result = number1 + number2;
            break
        case '-':
            result = number1 - number2;
            break
        case '*':
            result = number1 * number2;
            break
        case '/':
            result = number1 / number2;
            break
    }
    return result;
}

function clearInput() {
    updateInput('', true)
}