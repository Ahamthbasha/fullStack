let container = document.querySelector('.container')

let p = document.createElement('p')
p.innerText = "Hey I'm red!"
p.style.color = 'red'

container.appendChild(p)

let h3 = document.createElement('h3')

h3.innerText = "I am blue h3!"
h3.style.color = 'blue'

p.appendChild(h3)

let div = document.createElement('div')

div.style.border = '2px solid pink'
div.style.width = '200px'
div.style.height = '120px'

h3.append(div)

let h1 = document.createElement('h1')
h1.innerText = "I'm in a div"
div.append(h1)

let newP = document.createElement('p')
newP.innerText = "me too"
div.append(newP)



