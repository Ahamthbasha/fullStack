// coin change

// let coins = [2,5,3,6]
// let sum = 10

// function coinChange(coins,sum){
//     let dp = []

//     for(let i=0;i<=coins.length;i++){
//         dp[i] = []
//     }

//     for(let j=0;j<=coins.length;j++){
//         dp[j][0] = 1
//     }

//     for(let k=0;k<=sum;k++){
//         dp[0][k] = 0
//     }

//     for(let i=1;i<=coins.length;i++){
//         for(let j=1;j<=sum;j++){
//             if(coins[i-1] <= j){
//                 let include = dp[i][j-coins[i-1]]
//                 let exclude = dp[i-1][j]
//                 dp[i][j] = include + exclude
//             }else{
//                 dp[i][j] = dp[i-1][j]
//             }
//         }
//     }

//     return dp[coins.length][sum]
// }

// console.log(coinChange(coins,sum))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.rod cutting (unbounded knapsack)

// let length = [1,2,3,4,5,6,7,8]
// let price = [1,5,8,9,10,17,17,20]
// let totalRod = 8

// function rodCutting(length,price,totalRod){
//     let dp = []

//     for(let i=0;i<=length.length;i++){
//         dp[i] = []
//     }

//     for(let j=0;j<=length.length;j++){
//         dp[0][j] = 0
//     }

//     for(let k=0;k<=totalRod;k++){
//         dp[k][0] = 0
//     }

//     for(let i=1;i<=length.length;i++){
//         for(let j=1;j<=totalRod;j++){
//             if(length[i-1] <= j){
//                 let include = price[i-1] + dp[i][j-length[i-1]]
//                 let exclude = dp[i-1][j]
//                 dp[i][j] = Math.max(include,exclude)
//             }else{
//                 dp[i][j] = dp[i-1][j]
//             }
//         }
//     }

//     return dp[length.length][totalRod]
// }

// console.log(rodCutting(length,price,totalRod))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3.longest common subsequence

// let str1 = 'abcdge'
// let str2 = 'abedg'

// function lcs(str1,str2,n,m){
//     if(n < 0 || m < 0){
//         return 0
//     }

//     if(str1[n] == str2[m]){
//         return lcs(str1,str2,n-1,m-1)+1
//     }
//     else{
//         let nDec = lcs(str1,str2,n-1,m)
//         let mDec = lcs(str1,str2,n,m-1)
//         return Math.max(nDec,mDec)
//     }
// }

// console.log('lcs length is',lcs(str1,str2,str1.length-1,str2.length-1))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function lcsMemoization(str1,str2,n,m,arr=[]){
//     if(n < 0 || m < 0){
//         return 0
//     }

//     if(arr.length == 0){
//         for(let i=0;i<=n;i++){
//             arr[i] = []
//         }
//     }

//     if(arr[n][m] != undefined){
//             return arr[n][m]
//     }

//     if(str1[n] == str2[m]){
//             arr[n][m] = lcsMemoization(str1,str2,n-1,m-1,arr)+1
//             return arr[n][m]
//     }else{
//         let nDec = lcsMemoization(str1,str2,n-1,m,arr)
//         let mDec = lcsMemoization(str1,str2,n,m-1,arr)
//         arr[n][m] = Math.max(nDec,mDec)
//         return arr[n][m]
//     }
// }

// console.log('lcsMemoization',lcsMemoization(str1,str2,str1.length-1,str2.length-1))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function lcsTabulation(str1,str2){
    let dp = []

    for(let i=0;i<=str1.length;i++){
        dp[i] = []
    }

    for(let j=0;j<=str1.length;j++){
        dp[j][0] = 0
    }

    for(let k=0;k<=str2.length;k++){
        dp[0][k] = 0
    }

    for(let i=1;i<=str1.length;i++){
        for(let j=1;j<=str2.length;j++){
            if(str1[i-1] == str2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1
            }else{
                let ans1 = dp[i-1][j]
                let ans2 = dp[i][j-1]
                dp[i][j] = Math.max(ans1,ans2)
            }
        }
    }

    return dp[str1.length][str2.length]
}

console.log('lcsTabulation',lcsTabulation('abcde','ace'))