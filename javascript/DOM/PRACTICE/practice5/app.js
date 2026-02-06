let input = document.createElement('input')
let button = document.createElement('button')

button.innerText = "click Me!"

document.querySelector('body').append(input)
document.querySelector('body').append(button)

input.placeholder = "username"

button.setAttribute('id','btn')

let btn = document.querySelector('#btn')
console.log(btn)

// btn.style.backgroundColor = "blue"
// btn.style.color = "white"

//alternative way

btn.classList.add('button')

let h1 = document.createElement('h1')

h1.innerText = "DOM Practice"

h1.classList.add('heading')

document.querySelector('body').prepend(h1)