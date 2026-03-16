//1.find out the correct statement to assign name to object

// class Student{
//     name = ''
//     marks = null
// }

// const s = new Student()
// s.name = 'ahamathbasha'
// s.marks = 100

// console.log(s)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.which variable can the class Person access in the following code?

// class Person{
//     name = ''
//     weight = null
// }

// class Student extends Person{
//     rollNumber  = null
//     schoolName = ''
// }

// answer : name and weight

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Which of the following modifiers are not allowed in front of class.

//a.private b.protected c.public d.default

//answer: private and protected 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. Which of the following is a correct statement?(both classes in same package)


// class Vehicle{}

// class Car extends Vehicle{}

//options:

//a. Car c = new Car()
//b. Vehicle v = new Vehicle()
//c. Vehicle v = new Car()
//d. Car c = new Vehicle() : child does not equal to the parent reference

// vehicle has only x properties and methods but car has x properties and methods and y properties and method it wont the assignable.


//answer:

//a.Car c = new Car()

// Car reference to Car class so no issue

//b.Vehicle v = new Vehicle()

// Vehicle reference to vehicle class no issue

//c.Vehicle v = new Car()

// Vehicle V has both x and y but we assign it to car only so it can access only x.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. What will be output of this code?(both classes in same package)

// class Vehicle{
//     print(){
//         console.log("Base Vehicle")
//     }
// }

// class Car extends Vehicle{
//     print(){
//         console.log("Derived class")
//     }
// }

// const obj1 = new Car()
// obj1.print()

// const obj2 = new Vehicle()
// obj2.print()

//answer:

// derived class
// base class

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. what will be output of this code?(both classes in same package)

// class Vehicle{
//     print(){
//         console.log("Base class Vehicle")
//     }
// }

// class Car extends Vehicle{
//     print1(){
//         console.log("Derived Class Vehicle")
//     }
// }

// const obj1 = new Car()
// obj1.print1() // undefined or error in java when you do like this Vehicle obj1 = new Car() 

// const obj2 = new Vehicle()
// obj2.print() // base class

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Which of the following is not an oops component?

//a.Inheritance
//b.Encapsulation
//c.Polymorphism
//d.Aggregation 

//answer: d.Aggregation

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//8.What will be the output of this code?

// class Book{
//     price = null
//     static count = 0
    
//     constructor(price){
//         this.price = price
//         Book.count++
//     }
// }

// console.log('count is',Book.count)

// const b1 = new Book(150)
// const b2 = new Book(250)

// console.log('count is',Book.count)


//options

// a. Error
// b. 0 2
// c. 1 2
// d. 2 2

//answer:
// b. 0 2

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//9.which line has error??

// class Test{
//     static marks = null

//     set_marks(marks){
//         this.marks = marks
//     }
// }

// const test = new Test()
// test.set_marks(98)
// console.log(Test.marks)

// it has no error because the set_marks will create a new object understand 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//10. What would be the output of the following code?

// class Test{
//     static a = 10
//     static b = null
//     static changeB(){
//         Test.b = Test.a * 3
//     }
// }

// Test.changeB()

// console.log(Test.a+Test.b) 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11.Print the sum ,difference and product of two complex numbers by creating a class named 'Complex' with separate methods for each operation whose real and imaginary parts are entered by the user.

//in case of real and imaginery

//sum

//(a+bi) + (c+di) = (a+c) + (b+d)i

//difference

//(a+bi) - (c+di) = (a-c) + (b-d)i

//product

//(a+bi)(c+di) = (ac-bd)+(ad+bc)i


// class Complex{
//     constructor(real,imag){
//         this.real = real;
//         this.imag = imag
//     }

//     sum(c){
//         let real = this.real + c.real
//         let imag = this.imag + c.imag
//         console.log(`${real} + ${imag}i`)
//     }

//     difference(c){
//         let real = this.real - c.real
//         let imag = this.imag - c.imag
//         console.log(`${real} + ${imag}i`)
//     }

//     product(c){
//         let real = (this.real * c.real) - (this.imag * c.imag)
//         let imag = (this.real * c.imag) + (this.imag * c.real)
//         console.log(`${real} + ${imag}i`) 
//     }
// }

// const c1 = new Complex(1,2)
// const c2 = new Complex(1,3)

// c1.sum(c2)
// c1.difference(c2)
// c1.product(c2)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. what is the ouput of the following program?

// class Automobile {
//     #drive() {
//         return "Driving vehicle";
//     }
// }

// class Car extends Automobile {
//     drive() {
//         return "Driving car";
//     }
// }

// class ElectricCar extends Car {
//     drive() {
//         return "Driving electric car";
//     }
// }

// const car = new ElectricCar()
// console.log(car.drive())

// options:

// a.Driving Vehicle
// b.Driving electric car
// c.Driving car
// d.The code does not compile

//answer:

//Driving electric Car

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//13. Look at the following code and choose the right option for the word

// class Shape{
//     display(){
//         console.log("display-base")
//     }
// }

// class Circle extends Shape{
//     display(){
//         console.log("Display derived")
//     }
// }

//options:

// a. Only protected can be used.
// b. public and protected both can be used.
// c. public,protected and private can be used.
// d. only public can be used.

//answer:

// public and protected both can be used.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 14. What is the output of the following program?

// class Car{
    
//     static start(){
//         process.stdout.write('1')
//     }

//     constructor(){
//         if(new.target == Car){
//             throw new Error("abstract class can not have instance")
//         }

//         Car.start()

//         process.stdout.write('3')

//         process.stdout.write('2')
//     }
// }


// class BlueCar extends Car{
//     constructor(){
//         super()
//         process.stdout.write('4')
//         process.stdout.write('5')
//     }
// }

// const s = new BlueCar()

