// function myLog(){
//     console.log()
// }

// let l = myLog()
// console.log(l)


// let l = console.log
// l('Hello')


// function sum(a,b){
//     return a+b
// }
// console.log(sum(2,5))


// function myLog(fn){
//     fn(44)
// }
// myLog(console.log)


// sum(function(a,b){
//     console.log(a+b)
// })

// sum(2)



// let tinhtong = (a,b)=>{
//     console.log(a+b)
// }
// console.log(tinhtong)

// tinhtong(2,6)  // 8



// let t = function(a,b){
//     console.log(a+b)
// }
// t(2,4)


let n = 100
/**
 * in ra day cac so chia het cho 2
 * in ra day cac so khong chia het cho 2
 * in ra day cac so chia het cho 3 du 1
 */
// function soChan(n){
//     for(let i = 0; i<=n; i++){
//         if(i%2==0) console.log(i)
//     }
// }

// function soChia3Du1(n){
//     for(let i = 0; i<=n; i++){
//         if(i%3==1) console.log(i)
//     }
// }
// soChia3Du1(n)

function inSo(n,dk){
    for(let i = 0; i<=n; i++){
        const check = dk(i) //kiemtraSochan(i)
        if(check) console.log(i)
    }
}
function kiemtraSochan(n){
    return n%2==0
}
function kiemtraSoLe(n){
    return n%2==1
}

inSo(100,kiemtraSoLe)


/**
 * Cho bien h = 5
 * Ve cac hinh sau
    *
    * *
    * * *
    * * * *
    * * * * *
    
    * * * * *
    * * * *
    * * *
    * * 
    *
    
            *
          * *
        * * *
      * * * *
    * * * * *
    
            *
          * *
        *   *
      *     *
    * * * * *

 * 
 * 
 */