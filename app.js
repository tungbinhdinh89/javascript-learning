// let button = document.getElementById('btn');
// let firstNumber = document.getElementById('firstNumber');
// let secondNumber = document.getElementById('secondNumber');
// let thirdNumber = document.getElementById('thirdNumber');
// let result = document.getElementById('result');

// // result.innerText = Number(firsNumber.value) + Number(secondNumber.value);

// function add(){
//     result.innerText = Number(firstNumber.value) + Number(secondNumber.value) + Number(thirdNumber.value);
//     console.log('button.onclick')
// }
// function multiply(){
//     result.innerText = Number(firstNumber.value) * Number(secondNumber.value) * Number(thirdNumber.value);
// }

// function divide(){
//     result.innerText = Number(firstNumber.value) / Number(secondNumber.value) / Number(thirdNumber.value);
// }

// function subtract(){
//     result.innerText = Number(firstNumber.value) - Number(secondNumber.value) - Number(thirdNumber.value);
// }
// console.log('button.onclick')

var button = document.getElementById('addButton')
      console.log('first time')

      button.addEventListener('click', collectInformation)
      function collectInformation() {
        console.log('collectInformation')

        var nameInput = document.getElementById('name')
        var ageInput = document.getElementById('age')
        var result = document.getElementById('result')

        var studenHtml = `
        <li>name: ${nameInput.value}</li>
        <li>name: ${ageInput.value} year old</li>
        `
        result.innerHTML += studenHtml
        nanmeInput.value = ''
        ageInput.value = ''
        nameInput.focus()
        
      }