let input = document.createElement('input')
let button = document.createElement('button')

button.innerText = "click Me!"

document.querySelector('body').append(input)
document.querySelector('body').append(button)

input.placeholder = "username"

button.setAttribute('id','btn')
