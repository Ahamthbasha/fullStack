// // 0-1 knapsack recursion

// function knapSack01(value,weight,w,i){
//     if(w == 0 || i>= weight.length){
//         return 0
//     }

//     if(weight[i] <= w){
//         let include = value[i]+knapSack01(value,weight,w-weight[i],i+1)
//         let exclude = knapSack01(value,weight,w,i+1)
//         return Math.max(include,exclude)
//     }else{
//         return knapSack01(value,weight,w,i+1)
//     }
// }

// let value = [15,14,10,45,30]
// let weight = [2,5,1,3,4]
// let w = 7

// console.log(knapSack01(value,weight,w,0))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //db memoized knapsack01

// function memoizedKnapSack01(value,weight,bagWeight,index,arr=[]){
//     if(bagWeight == 0 || index >= weight.length){
//         return 0
//     }

//     if(!arr[index]){
//         arr[index] = []
//     }

//     if(arr[index][bagWeight] != undefined){
//         return arr[index][bagWeight]
//     }

//     if(weight[index] <= bagWeight){
//         let include = value[index] + memoizedKnapSack01(value,weight,bagWeight-weight[index],index+1,arr)
//         let exclude = memoizedKnapSack01(value,weight,bagWeight,index+1,arr)
//         arr[index][bagWeight] = Math.max(include,exclude)
//     }
//     else{
//         arr[index][bagWeight] = memoizedKnapSack01(value,weight,bagWeight,index+1,arr)
//     }
//     return arr[index][bagWeight]
// }

// let value = [15,14,10,45,30]
// let weight = [2,5,1,3,4]
// let bagWeight = 7
// let index = 0
// console.log('memoized Version of knapSack',memoizedKnapSack01(value,weight,bagWeight,index))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function tabulationKnapSack01(value,weight,bagWeight,arr=[]){
    
//     for(let i=0;i<=weight.length;i++){
//         arr[i] = []
//         for(let j=0;j<=bagWeight;j++){
//             arr[i][j] = 0
//         }
//     }

//     for(let i=1;i<=weight.length;i++){
//         for(let j=1;j<=bagWeight;j++){
//             if(weight[i-1] <= j){
//                 let inc = value[i-1] + arr[i-1][j - weight[i-1]]
//                 let exc = arr[i-1][j]
//                 arr[i][j] = Math.max(inc,exc)
//             }
//             else{
//                 let exc = arr[i-1][j]
//                 arr[i][j] = exc
//             }
//         }
//     }

//     return arr[weight.length][bagWeight]
// }

// let value = [15,14,10,45,30]
// let weight = [2,5,1,3,4]
// let bagWeight = 7

// console.log('tabulation knapSack',tabulationKnapSack01(value,weight,bagWeight))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function targetSumSubset(numbers,targetSum){
//     let arr = []

//     for(let i=0;i<=numbers.length;i++){
//         arr[i] = []
//         for(let j=0;j<=targetSum;j++){
//             arr[i][j] = false
//         }
//     }

//     for(let i=0;i<=numbers.length;i++){
//         arr[i][0] = true
//     }
    
//     for(let i=1;i<=numbers.length;i++){
//         for(let j=1;j<=targetSum;j++){
//             let v = numbers[i-1]
//             if(v <= j && arr[i-1][j-v] == true){
//                 arr[i][j] = true
//             }
//             else if(arr[i-1][j] == true){
//                 arr[i][j] = true
//             }
//         }
//     }
//     return arr[numbers.length][targetSum]
// }

// let numbers = [4,2,7,1,3]
// let targetSum = 10

// console.log(targetSumSubset(numbers,targetSum))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//unbounded knapSack

function unboundedKnapSack(value,weight,w){
    let dp = []

    for(let i=0;i<=weight.length;i++){
        dp[i] = []
        for(let j=0;j<=w;j++){
            dp[i][j] = 0
        }
    }

    for(let i=1;i<=weight.length;i++){
        for(let j=1;j<=w;j++){
            if(weight[i-1] <= j){
                let inc = value[i-1] + dp[i][j-weight[i-1]]
                let exc = dp[i-1][j]
                dp[i][j] = Math.max(inc,exc)
            }else{
                dp[i][j] = dp[i-1][j]
            }
        }
    }

    return dp[weight.length][w]
}

let value = [15,14,10,45,30]
let weight = [2,5,1,3,4]
let w = 7

console.log(unboundedKnapSack(value,weight,w))