const teo = {
    name : 'Teo',
    age : 20,
    getName:function (){
        console.log(this.name)
    }
}
const ti = {
    name : 'Ti',
    age : 20,
    getName:function (){
        console.log(this.name)
    }
}
const arrPerson = [ {teo:teo}, ti ]
console.log(arrPerson[1].name)
console.log(arrPerson[0].teo.name)


// teo.getName() //Teo
// console.log(console.log())

// function Person(){
//     this.name = 'Teo'
// }

// function getname(){

// }


// // class Person{
// //     // this.name = 'Teo'
// // }
// console.log(Person)
// console.log(Person.name)

// let p = new Person
// console.log(p)

