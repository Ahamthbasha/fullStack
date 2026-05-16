// // 1.longest common substring

// let s1 = 'ABCDE'
// let s2 = 'ABGCE'

// function longestCommonSubstring(s1,s2,arr=[]){
//     let max = 0
//     for(let i=1;i<=s1.length;i++){
//         for(let j=1;j<=s2.length;j++){
//             if(s1[i-1] == s2[j-1]){
//                 arr[i][j] = arr[i-1][j-1]+1
//                 max = Math.max(arr[i][j],max)
//             }else{
//                 arr[i][j] = 0
//             }
//         }
//     }

//     return max
// }

// let arr = []

// for(let i=0;i<=s1.length;i++){
//     arr[i] = []
// }

// for(let j=0;j<=s1.length;j++){
//     arr[j][0] = 0
// }

// for(let k=0;k<=s2.length;k++){
//     arr[0][k] = 0
// }

// console.log('longest common substring',longestCommonSubstring(s1,s2,arr))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.longest increasing subsequence

// let arr = [50,3,10,7,40,80]
// //output length of lis = 4

// function longestIncreasingSubsequence(arr1,arr2){
//     let dp = []

//     for(let i=0;i<=arr1.length;i++){
//         dp[i] = []
//     }

//     for(let j=0;j<=arr1.length;j++){
//         dp[j][0] = 0
//     }

//     for(let k=0;k<=arr2.length;k++){
//         dp[0][k] = 0
//     }

//     for(let i=1;i<=arr1.length;i++){
//         for(let j=1;j<=arr2.length;j++){
//             if(arr1[i-1] == arr2[j-1]){
//                 dp[i][j] = dp[i-1][j-1]+1
//             }
//             else{
//                 let ans1 = dp[i-1][j]
//                 let ans2 = dp[i][j-1]
//                 dp[i][j] = Math.max(ans1,ans2)
//             }
//         }
//     }

//     return dp[arr1.length][arr2.length]
// }

// let unique = [...new Set(arr)].sort((a,b)=>a-b)
// console.log("Longest Increasing Subsequence",longestIncreasingSubsequence(arr,unique))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. edit distance

// let word1 = 'intention'
// let word2 = 'execution'

// //output : 5

// function editDistance(word1,word2){
//     let dp = []

//     for(let i=0;i<=word1.length;i++){
//         dp[i] = []
//     }

//     for(let j=0;j<=word1.length;j++){
//         dp[j][0] = j
//     }

//     for(let k=0;k<=word2.length;k++){
//         dp[0][k] = k
//     }

//     for(let i=1;i<=word1.length;i++){
//         for(let j=1;j<=word2.length;j++){
//             if(word1[i-1] == word2[j-1]){
//                 dp[i][j] = dp[i-1][j-1]
//             }else{
//                 let add = dp[i][j-1] + 1
//                 let drop = dp[i-1][j] + 1
//                 let replace = dp[i-1][j-1] + 1
//                 dp[i][j] = Math.min(add,drop,replace)
//             }
//         }
//     }

//     return dp[word1.length][word2.length]
// }

// console.log('edit Distance',editDistance(word1,word2))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. string convertion

let str1 = 'pear'
let str2 = 'sea'

function stringConvertion(s1,s2){
    let dp = []

    for(let i=0;i<=s1.length;i++){
        dp[i] = []
        for(let j=0;j<=s2.length;j++){
            dp[i][j] = 0
        }
    }

    for(let i=1;i<=s1.length;i++){
        for(let j=1;j<=s2.length;j++){
            if(s1[i-1] == s2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1
            }else{
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])
            }
        }
    }

    let lcs = dp[s1.length][s2.length]

    let deletion = s1.length -lcs
    let insertion = s2.length - lcs

    return {
        insertion,
        deletion
    }
}

console.log(stringConvertion(str1,str2))