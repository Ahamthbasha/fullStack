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

// class Pen{
//     colour = ''
//     tipSize = null

//     constructor(obj){
//         if(obj instanceof Pen){
//             this.colour = obj.colour
//             this.tipSize = obj.tipSize
//         }
//     }
// }


// const p1 = new Pen()

// p1.colour = 'blue'
// p1.tipSize = 10

// const p2 = new Pen(p1)

// console.log(p2)


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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//inheritance

//a.single level inheritance
// class Animal{
//     colour

//     eat(){
//         console.log('eats')
//     }

//     breathe(){
//         console.log('breathes')
//     }
// }

// class Fish extends Animal{
//     fins

//     swim(){
//         console.log("swim in water")
//     }
// }

// const shark = new Fish()
// shark.eat()
  

//b. multi level inheritance

// class Animal{
//     eat(){
//         console.log("eats")
//     }

//     breathe(){
//         console.log("breathes")
//     }
// }

// class Mammal extends Animal{
//     noOfLegs = null
// }

// class Dog extends Mammal{
//     breed = ''
// }

// const dobby = new Dog()
// dobby.breed = "labrador"
// dobby.noOfLegs = 4

// dobby.eat()
// dobby.breathe()

// console.log(dobby)

//c.Hierarchial inheritance

// class Animal{
//     eat(){
//         console.log("eats")
//     }

//     breathe(){
//         console.log("breathes")
//     }
// }

// class Bird extends Animal{
//     fly(){
//         console.log("fly")
//     }
// }

// class Fish extends Animal{
//     swim(){
//         console.log("swim")
//     }
// }

// class Mammal extends Animal{
//     walk(){
//         console.log("Walk")
//     }
// }

// const nemo = new Fish()
// nemo.swim()

// const ostrich = new Mammal()
// ostrich.walk()

//d.hybrid inheritance

// class Animal{
//     eat(){
//         console.log("eats")
//     }

//     breathe(){
//         console.log("breathes")
//     }
// }

// class Fish extends Animal{
//     swim(){
//         console.log('swim')
//     }
// }

// class Bird extends Animal{
//     fly(){
//         console.log("fly")
//     }
// }

// class Mammal extends Animal{
//     walk(){
//         console.log("walk")
//     }
// }


// class Shark extends Fish{
//     danger(){
//         console.log("I will eat you")
//     }
// }

// const shark = new Shark()
// shark.danger()
// shark.eat()
// shark.breathe()

//e.multiple inheritance

// class Animal{
//     eat(){
//         console.log("eats")
//     }
// }

// class Bird extends Animal{}

// const flyMixins = {
//     fly(){
//         console.log("fly")
//     }
// }

// Object.assign(Bird.prototype,flyMixins)

// const peaCock = new Bird()

// peaCock.fly()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// POLYMORPHISM

//Method overloading

//1. argument check
//  class Calculator{
//     add(a,b,c){
//         if(c == undefined){
//             return a+b
//         }
//         return a+b+c
//     }
//  }

// const calc = new Calculator()

// console.log(calc.add(2,3))
// console.log(calc.add(2,3,4))


// 2. rest

// class Calculator{
//     add(...nums){
//         return nums.reduce((acc,cur)=>acc+cur)
//     }
// }

// const calc = new Calculator()

// console.log(calc.add(2,3))
// console.log(calc.add(2,3,4))
// console.log(calc.add(2,3,4,5))

//3. arguments

// class Calculator{
//     add(){
//         if(arguments.length == 2){
//             return arguments[0] + arguments[1]
//         }

//         if(arguments.length == 3){
//             return arguments[0] + arguments[1] + arguments[2]
//         }
//     }
// }

// const calc = new Calculator()

// console.log(calc.add(2,3))
// console.log(calc.add(2,3,4))


// METHOD OVERRIDING:

// class Animal{
//     eat(){
//         console.log("eats anything")
//     }
// }

// class Deer{
//     eat(){
//         console.log("eats grass")
//     }
// }

// const d = new Deer()

// d.eat()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Abstraction

// js

// abstract class Animal{

//     colour = ''

//     constructor(colour){
//         this.colour = colour
//     }

//     eat(){
//         console.log("animal eat")
//     }

//     abstract walk(){}
// }

// class Horse extends Animal{

//     constructor(){
//         this.colour = "brown"
//     }

//     walk(){
//         console.log("walks on 4 legs")
//     }
// }

// class Chicken extends Animal{

//     constructor(){
//         this.colour = "white"
//     }

//     walk(){
//         console.log("walks on 2 legs")
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//only abstract method based

// class Animal{
//     constructor(colour){
//         if(new.target == Animal){
//             throw new Error("cannot create a instance for the abstract class")
//         }
//         this.colour = colour
//     }

//     eat(){
//         throw new Error("eat() must be implement in subcalss")
//     }
// }

// class Dog extends Animal{
//     constructor(){
//         super("brown")
//     }
// }

// const puppy = new Dog()
// console.log(puppy)


//clear cut example of abstract class implementation

// When we extend a class, we must call super() so the parent constructor initializes the object before the child class uses this.

// class Animal{
//     constructor(colour){
//         if(new.target == Animal){
//             throw new Error("abstract class cannot create instance")
//         }

//         if(this.eat == Animal.prototype.eat){
//             throw new Error("eat() method must be implement in derived class")
//         }

//         this.colour = colour
//     }

//     eat(){
//         throw new Error("eat() method must be implement in derived class")
//     }
// }

// class Dog extends Animal{
//     constructor(colour){
//         super(colour)
//     }

//     eat(){
//         console.log("dog eats bones")
//     }
// }

// const d = new Dog("brown")
// console.log(d)


// another method to achieve abstraction : INTERFACE

//js does not have interface we use in typescript but we can achieve this behaviour using abstract base class and method check.
// interface ChessPlayer{
//     moves()
// }

// class Queen implements ChessPlayer{
//     moves(){
//         console.log("up,down,left,right and diagonal and moves in all 4 directions")
//     }
// }

// class Rook implements ChessPlayer{
//     moves(){
//         console.log("up,down,left and right")
//     }
// }

// const r = new Rook()
// r.moves()

//Based on abstract base class

// class ChessPlayer{
//     constructor(){
//         if(new.target == ChessPlayer){
//             throw new Error("abstract class can not create instance")
//         }

//         if(this.moves == ChessPlayer.prototype.moves){
//             throw new Error("moves() must be implements in derived class")
//         }
//     }

//     moves(){
//         throw new Error("moves() must be implements in derived class")
//     }
// }

// class Queen extends ChessPlayer{
//     moves(){
//         console.log("up,down,right,left and diagonal")
//     }
// }

// const q = new Queen()
// q.moves()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// static keyword

// class Student{
//     static schoolName = ''

//     constructor(studentName, currentClass){
//         this.studentName = studentName
//         this.currentClass = currentClass
//     }

//     static setName(schoolName){
//         Student.schoolName = schoolName
//     }

//     static getName(){
//         return Student.schoolName
//     }
// }

// Student.setName("svm")

// const s1 = new Student("John",10)
// const s2 = new Student("Mike",9)

// console.log(Student.getName())
// console.log(s1)
// console.log(s2)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// super keyword

// class Animal{
//     constructor(){
//         console.log("Animal constructror is called")
//     }
// }

// class Horse extends Animal{
//     constructor(){
//         super()
//         console.log("Horse constructor is called")
//     }
// }

// const h = new Horse()

// assigning value by using super

// class Animal{
//     constructor(colour){
//         this.colour = colour
//         console.log("animal constructor called")
//     }
// }

// class Horse extends Animal{
//     constructor(colour){
//         super(colour)
//         console.log("Horse constructor called")
//     }
// }

// const h = new Horse("brown")

