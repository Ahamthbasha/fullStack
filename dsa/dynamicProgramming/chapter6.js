// // 1. matrix chain multiplication

// function mcm(arr,i,j){
//     if(i == j){
//         return 0
//     }

//     let ans = Infinity

//     for(let k=i;k<=j-1;k++){
//         let cost1 = mcm(arr,i,k)
//         let cost2 = mcm(arr,k+1,j)
//         let cost3 = arr[i-1] * arr[k] * arr[j]
//         let final = cost1 + cost2 + cost3
//         ans = Math.min(ans,final)
//     }

//     return ans
// }

// let arr = [1,2,3,4,3]

// console.log(mcm(arr,1,arr.length-1))

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // mcm memoization

// function mcmMemo(arr,i,j,dp=[]){
//     if(!dp[i]){
//         dp[i] = []
//     }

//     if(i == j){
//         return 0
//     }

//     if(dp[i][j] != undefined){
//         return dp[i][j]
//     }

//     let ans = Infinity

//     for(let k=i;k<=j-1;k++){
//         let cost1 = mcmMemo(arr,i,k)
//         let cost2 = mcmMemo(arr,k+1,j)
//         let cost3 = arr[i-1] * arr[k] * arr[j]

//         ans = Math.min(cost1+cost2+cost3,ans)
//     }

//     dp[i][j] = ans

//     return ans
// }

// let arr2 = [1,2,3,4,3]

// console.log('mcm memoization',mcm(arr2,1,arr2.length-1))

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 3. tabulation

// function mcmTable(arr){
//     let dp = []

//     for(let i=0;i<arr.length;i++){
//         dp[i] = []
//         dp[i][i] = 0
//     }

//     for(let length = 2;length <= arr.length-1;length++){
//         for(let i=1;i<=arr.length-length;i++){
//             let j = i+length-1
//             dp[i][j] = Infinity
//             for(let k=i;k<=j-1;k++){
//                 let cost1 = dp[i][k] 
//                 let cost2 = dp[k+1][j]
//                 let cost3 = arr[i-1] * arr[k] * arr[j]
//                 dp[i][j] = Math.min(dp[i][j],cost1+cost2+cost3)
//             }
//         }
//     }

//     return dp[1][arr.length-1]
// }

// console.log('mcmTable',mcmTable([1,2,3,4,3]))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. minimum partitioning

// let numbers = [1,6,11,5]
// let minDiff = 1

// function minimumPartitioning(arr){
//     let sum = arr.reduce((acc,cur)=>acc+cur,0)

//     let dp = []

//     let w = Math.floor(sum/2)

//     for(let i=0;i<=arr.length;i++){
//         dp[i] = []
//         dp[i][0] = 0
//     }

//     for(let k=0;k<=w;k++){
//         dp[0][k] = 0
//     }

//     for(let i=1;i<=arr.length;i++){
//         for(let j=1;j<=w;j++){
//             if(arr[i-1] <= j){
//                 dp[i][j] = Math.max(arr[i-1]+dp[i-1][j-arr[i-1]],dp[i-1][j])
//             }
//             else{
//                 dp[i][j] = dp[i-1][j]
//             }
//         }
//     }

//     let sum1 = dp[arr.length][w]
//     let sum2 = sum - sum1
//     return Math.abs(sum1-sum2)
// }

// console.log(minimumPartitioning(numbers))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. minimum array jumps

let arr = [2,3,1,1,4]
//output 2


function minimumJumps(arr){
    let dp = []

    for(let i=0;i<=arr.length;i++){
        dp[i] = -1
    }

    dp[arr.length-1] = 0

    for(let i=arr.length-2;i>=0;i--){
        let steps = arr[i]
        let ans = Infinity
        for(let j=i+1;j<=i+steps && j < arr.length;j++){
            if(dp[j] != -1){
                ans = Math.min(ans,dp[j]+1)
            }
        }
        if(ans != Infinity){
            dp[i] = ans
        }
    }

    return dp[0]

}

console.log('minimum jumps',minimumJumps(arr))
