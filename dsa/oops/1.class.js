// class Pen{
//     colour = ''
//     tip = 0

//     setColour(colour){
//         this.colour = colour
//     }

//     setTip(tipSize){
//         this.tip = tipSize
//     }

//     getColourAndTip(){
//         return `colur is ${this.colour} and tip size is ${this.tip}`
//     }
// }


// const bluePen = new Pen()
// bluePen.setColour('blue')
// bluePen.setTip(5)

// console.log(bluePen.getColourAndTip())

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//access modifiers
//typescript version

// class BankAccount{
//     public username = ''
//     private password = ''

//     public setPassword(pwd){
//         this.password = pwd
//     }
// }  


//js version

// class BankAccount{
//     username = ''
//     #password = '' //js private field will be hashtag

//     setPassword(pwd){
//         this.#password = pwd
//     }
// }
// const iB = new BankAccount()

// iB.username = "ahamathbasha"

// iB.setPassword("abc123")

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3 .getters and setters

// class Pen{
//     #color = ''
//     #size = ''

//     get colour(){
//         return this.#color
//     }

//     set colour(colourName){
//     this.#color = colourName
//     }

//     get size(){
//         return this.#size
//     }

//     set size(tipSize){
//         this.#size=tipSize
//     }
// }

// const bluePen = new Pen()

// bluePen.colour="blue"

// console.log(bluePen.colour)

// bluePen.size = '10'

// console.log('pen tip size is',bluePen.size)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. encapsulation

 // class Pen{
//     #color = ''
//     #size = ''

//     get colour(){
//         return this.#color
//     }

//     set colour(colourName){
//     this.#color = colourName
//     }

//     get size(){
//         return this.#size
//     }

//     set size(tipSize){
//         this.#size=tipSize
//     }
// }

// const bluePen = new Pen()

// bluePen.colour="blue"

// console.log(bluePen.colour)

// bluePen.size = '10'

// console.log('pen tip size is',bluePen.size)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.constructor

//  class Pen{
//     colour = ''
//     tipSize = ''

//     constructor(colour,tipSize){
//         this.colour = colour
//         this.tipSize = tipSize
//     }
//  }

// const bluePen = new Pen("red","5")

// console.log(bluePen.colour)
// console.log(bluePen.tipSize)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6.Types of constructor

//Non parameterized

// class Pen {
//     colour = ''

//     constructor(){
//         console.log("consturctur called")
//     }
// }

// const Blue = new Pen()

//Parameterized

// class Pen{
//     colour = ''

//     constructor(colourName){
//         this.colour = colourName
//     }
// }

// const Blue = new Pen("Blue")
// console.log(Blue)

//Copy constructor




//constructor overloading:

// js does not support constructor overloading. java and c only support constructor overloading.

// class Pen{
//     color = ''
//     tipSize = null
//     constructor(){
//         console.log("non parameterized constructor called")
//     }

//     constructor(colourName){
//         this.color = colourName
//     }

//     constructor(tipSize){
//         this.tipSize = tipSize
//     }

//     constructor(colourName,tipSize){
//         this.color = colourName
//         this.tipSize = tipSize
//     }
// }

// const b = new Pen()
// const r = new Pen("red")
// const t = new Pen(10)
// const bluePen = new Pen("blue",20)


//but we can achieve similar behaviour by checking the arguments or parameters.

// class Pen{
//     color = ''
//     tipSize = null
    
//     constructor(color,tipSize){
//         if(typeof color == 'string'){
//             this.color = color
//             console.log("parameterized called")
//         }

//         if(typeof tipSize == 'number'){
//             this.tipSize = tipSize
//             console.log("parameterized called")
//         }

//         if(typeof color == 'string' && typeof tipSize == 'number'){
//             this.color = color
//             this.tipSize = tipSize
//             console.log("parameterized called")
//         }

//         if(color == undefined && tipSize == undefined){
//             console.log("non parameterized constructor called")
//         }
//     }
// }

// const b = new Pen()
// const r = new Pen("red")
// const t = new Pen(10)
// const bluePen = new Pen("blue",20)
