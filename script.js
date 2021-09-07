const input = document.querySelector('#inputValue');
const button = document.querySelector('#submitButton');

button.addEventListener('click', ()=>{
    let password = ''
    let passwordLenght = 16
    let chars = 'abcdefghijlmnpkorstuvxyzABCDEFGHIJLMNPKORSTUVXYZ0123456789"!@#$%¨&*()_+.;/[]()'

    for (var i = 0; i < passwordLenght; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
       password += chars.substring(randomNumber, randomNumber + 1);
        
    }
    input.value = password
})