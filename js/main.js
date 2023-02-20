const passwordText = document.querySelector('#password-text');
const button = document.querySelector('.btn');

button.addEventListener('click', ()=> {
    const name = prompt('enter your name', '');
    const lastName = prompt ('enter your last name', '');
    const color = prompt('enter your favourite color', '');
    const password = `${name}${lastName}${color}` 
    passwordText.innerText = `Your Password is: \r\n ${password}`
    console.log(`Your Password is: ${password}`)
})