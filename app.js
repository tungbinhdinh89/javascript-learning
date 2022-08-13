let button = document.getElementById('btn');
let firsNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let result = document.getElementById('result');

// result.innerText = Number(firsNumber.value) + Number(secondNumber.value);

function add(){
    result.innerText = Number(firsNumber.value) + Number(secondNumber.value);
    console.log('button.onclick')
}