let buttons = document.querySelectorAll('button')

function sayHello(){
    console.log("hello")
}

function rangeInfo(){
    console.log("you entered in the range")
}

for(let btn of buttons){
    btn.onclick = sayHello
    btn.onmouseenter = rangeInfo
}