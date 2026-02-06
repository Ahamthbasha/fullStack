let heading = document.getElementById('heading')

heading.innerText = "Ahamathbasa F"

let classImage = document.getElementsByClassName('oldImg')

let temp = classImage[0].src
classImage[0].src = classImage[1].src
classImage[1].src = temp
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let newP = document.createElement('p')
// newP.innerText = "I am the best"
// the element p is created in js but it is not added in html. To add the element we need to select the parent obj and attach with that

// let body = document.querySelector('body')
// body.appendChild(newP) //it will add at the end.

// let box = document.querySelector('.box')

// box.appendChild(newP)

// newP.append(" Hello basha ji")

// let button = document.createElement('button')
// newP.appendChild(button)
// button.innerText = "click me"

//insertAdjacent

// let button = document.createElement('button')

// button.innerText = "Click Me"

// let p = document.querySelector('p')

// p.insertAdjacentElement('beforebegin',button)
// p.insertAdjacentElement('afterbegin',button)
// p.insertAdjacentElement('beforeend',button)
// p.insertAdjacentElement('afterend',button)

