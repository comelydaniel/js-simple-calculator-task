let numOne = parseInt(prompt(`Enter your first number`))
let operator = prompt(`Enter the operator e.g +, -. /. *, %, **`)
let numTwo = parseInt(prompt(`Enter your second number`))

let result = ""

if(isNaN(numOne) || isNaN(numTwo) ) {
    alert(`Refresh page and enter a real number`)
} else {
    if(operator === '+') {
        result = numOne + numTwo;
    } else if (operator === '-') {
        result = numOne - numTwo;
    } else if (operator === '/') {
        result = numOne / numTwo;
    } else if (operator === '*') {
        result = numOne * numTwo;
    } else if (operator === '%') {
        result = numOne % numTwo;
    } else if (operator === '**') {
        result = numOne ** numTwo;
    } else {
        result = `Opps. Operator not found`
    }
    alert(`Answer: ${result}`);
}