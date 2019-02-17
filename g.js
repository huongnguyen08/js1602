// function getData(){
//     // return console.log
//     function sum(a,b){
//         console.log(a+b)
//     }
//     return sum
// }
// getData()(1,3)

function getData(name){
    // return console.log
    function getName(){
        console.log(`My name is ${name}`)
    }
    return getName;
}
getData('Nam')
console.log(getData('Nam'))

