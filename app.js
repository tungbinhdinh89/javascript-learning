let button = document.getElementById('btn');
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let thirdNumber = document.getElementById('thirdNumber');
let result = document.getElementById('result');

// result.innerText = Number(firsNumber.value) + Number(secondNumber.value);

function add(){
    result.innerText = Number(firstNumber.value) + Number(secondNumber.value) + Number(thirdNumber.value);
    console.log('button.onclick')
}
function multi(){
    result.innerText = Number(firstNumber.value) * Number(secondNumber.value) * Number(thirdNumber.value);
}

function divide(){
    result.innerText = Number(firstNumber.value) / Number(secondNumber.value) / Number(thirdNumber.value);
}

function minus(){
    result.innerText = Number(firstNumber.value) - Number(secondNumber.value) - Number(thirdNumber.value);
}
console.log('button.onclick')