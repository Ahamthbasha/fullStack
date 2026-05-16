// // 1.wildcard matching

// let text = 'baaabab'
// let pattern = '*****ba*****ab'
// //output: true

// function isMatching(text,pattern){
//     let dp = []

//     for(let i=0;i<=text.length;i++){
//         dp[i] = []
//     }

//     dp[0][0] = true

//     for(let i=1;i<=text.length;i++){
//         dp[i][0] = false
//     }

//     for(let j=1;j<=pattern.length;j++){
//         if(pattern[j-1] == '*'){
//             dp[0][j] = dp[0][j-1]
//         }else{
//             dp[0][j] = false
//         }
//     }

//     for(let i=1;i<=text.length;i++){
//         for(let j=1;j<=pattern.length;j++){
//             if(text[i-1] == pattern[j-1] || pattern[j-1] == '?'){
//                 dp[i][j] = dp[i-1][j-1]
//             }else if(pattern[j-1] == '*'){
//                 dp[i][j] = dp[i][j-1] || dp[i-1][j]
//             }
//             else{
//                 dp[i][j] = false
//             }
//         }
//     }

//     return dp[text.length][pattern.length]
// }

// console.log('wildCard Matching result is',isMatching(text,pattern))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Catalans number
 
// function catalansNumber(n){
//     if(n == 0 || n == 1){
//         return 1
//     }

//     let ans = 0

//     for(let i=0;i<=n-1;i++){
//         ans += catalansNumber(i) * catalansNumber(n-i-1)
//     }

//     return ans
// }

// console.log('catalanNumber',catalansNumber(4))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3.catalans number memoization based

// function catalanNumberRec(n,cache={}){
//     if(n==0 || n==1){
//         return 1
//     }

//     if(cache[n]){
//         return cache[n]
//     }


//     let ans = 0

//     for(let i=0;i<=n-1;i++){
//         ans += catalanNumberRec(i,cache) * catalanNumberRec(n-i-1,cache)
//     }

//     cache[n] = ans

//     return cache[n]
// }

// console.log("catalans memoization",catalanNumberRec(4))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4.catalans number table based

// function catalanTable(n){
//     let dp = []

//     dp[0] = 1
//     dp[1] = 1

//     for(let i=2;i<=n;i++){
//         dp[i] = 0
//         for(let j=0;j<i;j++){
//             dp[i] += dp[j]*dp[i-j-1]
//         }
//     } 

//     return dp[n]
// }

// console.log('catalan table',catalanTable(4))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. counting bst is a kind og catalan

let n = 3
let arr = [10,20,30]

function countBst(n){
    let dp = []

    dp[0] = 1
    dp[1] = 1

    for(let i=2;i<=n;i++){
        dp[i] = 0
        for(let j=0;j<i;j++){
            let left = dp[j]
            let right = dp[i-j-1]
            dp[i] += left * right
        }
    }

    return dp[n]
}

console.log('countBst',countBst(4))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Mountain Ranges

let pairs = 4

function mountainRanges(n){
    let dp = []

    dp[0] = 1
    dp[1] = 1

    for(let i=2;i<=n;i++){
        dp[i] = 0
        for(let j=0;j<i;j++){
            let inside = dp[j]
            let outside = dp[i-j-1]
            dp[i] += inside * outside
        }
    }

    return dp[n]
}

console.log("mountainRanges of the given Pair",mountainRanges(pairs))