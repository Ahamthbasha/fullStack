// // recursion

// function fib(n){
//     if(n==0 || n == 1){
//         return n
//     }

//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(5))

// // time complexity will be exponential

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function fibDp(n,arr=[]){
//     if(n == 0||n == 1){
//         return n
//     }

//     if(arr[n] != undefined){
//         return arr[n]
//     }

//     arr[n] = fibDp(n-1,arr) + fibDp(n-2,arr)

//     return arr[n]
// }

// console.log(fibDp(5))

// // time complexity will be linear

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //tabulation way db

// function fibTabulationDp(n,arr=[]){
//     arr[0] = 0
//     arr[1] = 1

//     for(let i=2;i<=n;i++){
//         arr[i] = arr[i-1] + arr[i-2]
//     }

//     return arr[n]
// }

// console.log('fibonacci tabulation db',fibTabulationDp(5))

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //purely recursion

// function climbingStairCountWays(n){
//     if(n == 0){
//         return 1
//     }

//     if(n < 0){
//         return 0
//     }

//     return climbingStairCountWays(n-1) + climbingStairCountWays(n-2)
// }

// console.log('climbing stair count ways',climbingStairCountWays(5))

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //memoized version of climbingStair - top down

// function climStairCountWaysMemo(n,arr=[]){
//     if(n == 0){
//         return 1
//     }

//     if(n < 0){
//         return 0
//     }

//     if(arr[n] != undefined){
//         return arr[n]
//     }

//     arr[n] = climStairCountWaysMemo(n-1,arr) + climStairCountWaysMemo(n-2,arr)

//     return arr[n]
// }

// console.log('memoized version of climbing stair',climStairCountWaysMemo(5))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// climbing stair by tabulation way

function climbingStairTabulation(n,arr=[]){
    arr[0] = 1

    for(let i=1;i<=n;i++){
        arr[i] = (arr[i-1] || 0) + (arr[i-2] || 0)
    }

    return arr[n]
}

console.log('tabulation format of climbing stairs',climbingStairTabulation(5))