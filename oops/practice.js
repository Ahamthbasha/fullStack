// class Animal{
//     constructor(name){
//         this.name = name
//     }

//     nameOfTheAnimal(){
//         console.log('name of the animal',this.name)
//     }
// }

// const pet = new Animal('Cat')
// pet.nameOfTheAnimal()

//encapsulation

// class BankAccount{
//     #balance
    
//     constructor(balance){
//         this.#balance = balance
//     }

//     getBalance(){
//         console.log('balance of the account',this.#balance)
//     }

//     deposit(balance){
//         this.#balance += balance
//     }
// }

// const bank = new BankAccount(1000)

// bank.getBalance()

///////////////////////////////////////////////////////////

// abstraction

// class Car{
//     constructor(name){
//         this.name = name
//     }

//     start(){
//         this.#engine()
//         console.log('car started')
//     }

//     #engine(){
//         console.log("engine Started")
//     }
// }

// const C = new Car("toyota")
// C.start()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// inheritance

// class Animal{
//     constructor(name){
//         this.name = name
//     }

//     walk(){
//         console.log("Animal with leg can walk")
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }

//     bark(){
//         console.log("Animals can bark")
//     }
// }

// const d = new Dog('puppy')
// d.bark()
// console.log(d.name)

///////////////////////////////////////////////////////////

// static methods

// class  MathUtils{
//     static add(a,b){
//         console.log(a+b)
//     }
// }

// MathUtils.add(5,5)

//////////////////////////////////////////////////////////

// Getter And Setter

// class Person{
//     constructor(name){
//         this._name = name
//     }

//     get name(){
//         return this._name
//     }

//     set name(value){
//         this._name = value
//     }
// }

// const p = new Person("basha")

// console.log(p.name)

// p.name = "ahamathbasha"

///////////////////////////////////////////////////////////

// 1 . single inheritance

// 2 . multilevel inheritance
//  a - b 
//  c - b 
//  d -c

// 3 . hierarchial inheritance
//   a
//  b - a
//  c - a

// 4 .  Multiple inheriance(not supported in js)
// we achieve it by using mixins. Mixins is a object which gives methods to a class

// class Person{}

// const drive = {
//     canSwim:function(){
//         return 'i can swim'
//     }
// }

// Object.assign(Person.prototype,drive)

// const p = new Person()

// console.log(p.canSwim())

// 5.Hybrid Inheritance
// It is a combination of one or multiple inheritance types.

// Javascript does not support hybrid inheritance directly because it does not support multiple inheritance.


// ----------------------------------------------------------------------------------------------------------------------

// method overloading - same name with different parameters. Javascript which does not support method overloading. But we can achieve it by using default parameters or rest operator

class Math{
    add(a,b,c=0){
        console.log(a+b+c)
    }

    addition(...arg){
        let sum = arg.reduce((acc,cur)=>acc+cur,0)
        console.log(sum)
    }
}


const operation = new Math()
operation.add(1,2)
