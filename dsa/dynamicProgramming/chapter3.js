// coin change

let coins = [2,5,3,6]
let sum = 10

function coinChange(coins,sum){
    let dp = []

    for(let i=0;i<=coins.length;i++){
        dp[i] = []
    }

    for(let j=0;j<=coins.length;j++){
        dp[j][0] = 1
    }

    for(let k=0;k<=sum;k++){
        dp[0][k] = 0
    }

    for(let i=1;i<=coins.length;i++){
        for(let j=1;j<=sum;j++){
            if(coins[i-1] <= j){
                let include = dp[i][j-coins[i-1]]
                let exclude = dp[i-1][j]
                dp[i][j] = include + exclude
            }else{
                dp[i][j] = dp[i-1][j]
            }
        }
    }

    return dp[coins.length][sum]
}

console.log(coinChange(coins,sum))