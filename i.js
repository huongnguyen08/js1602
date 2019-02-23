// const ti = {
//     name : 'Ti',
//     age : 20,
//     getName:function (){
//         console.log(this.name)
//     }
// }
// const teo = {
//     name : 'Teo',
//     age : 20,
//     getName:function (){
//         console.log(this.name)
//     }
// }

class Person{
    constructor(ten, tuoi){
        this.name = ten
        this.age = tuoi
        // this.getName = function(){
        //     console.log(this.name)
        // }
    }
    getName(){
        console.log(this.name)
    }
}
const ti = new Person('Ti Nguyen',20)
const teo = new Person('Teo Nguyen',22)
ti.name = 'Ti'
ti.getName()
// console.log(ti.age)

// console.log(ti, teo)