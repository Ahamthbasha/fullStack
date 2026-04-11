// //activity 

// let start = [1,3,0,5,8,5]
// let end = [2,4,6,7,9,9]

// function activitySelection(start,end){
//     let count = 0
//     let prev = null
//     let activities = []
//     for(let i=0;i<end.length;i++){
//         if(i == 0){
//             prev = end[i]
//             activities.push(i)
//             count++
//         }else if(start[i] >= prev){
//             prev = end[i]
//             activities.push(i)
//             count++
//         }
//     }

//     return count
// }

// console.log(activitySelection([1,3,0,5,8,5],[2,4,6,7,9,9]))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// if end is not sorted in activitySelection

// let start = [5, 1, 3, 0, 8, 5]
// let end   = [9, 2, 4, 6, 7, 9]

// function activitySelection(start,end){
//     let arr = []

//     for(let i=0;i<start.length;i++){
//         arr.push([start[i],end[i]])
//     }

//     arr.sort((a,b)=>a[1]-b[1])
//     let count = 0
//     let result = ['A0']
//     count = count+1
//     let prev = arr[0][1]

//     for(let i=1;i<arr.length;i++){
//         if(arr[i][0] >= prev){
//             result.push(`A${i}`)
//             prev = arr[i][1]
//             count++
//         }
//     }

//     return {count,result}
// }

// console.log(activitySelection(start,end))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let value = [60,100,120]
// let weight = [10,20,30]
// let w = 50

// function fractionalKnapsack(value,weight,w){
//     let ratio = []
    
//     for(let i=0;i<value.length;i++){
//         ratio.push([Math.floor(value[i]/weight[i]),i])
//     }
    
//     ratio.sort((a,b)=>b[0]-a[0])

//     let capacity = w
//     let profit= 0

//     for(let i=0;i<ratio.length;i++){
//         let [ratioVal,index] = ratio[i]
        
//         if(capacity >= weight[index]){
//             capacity -= weight[index]
//             profit += value[index]
//         }
//         else{
//             profit += ratioVal * capacity
//             capacity = 0
//             break
//         }
//     }

//     return profit
// }

// console.log(fractionalKnapsack(value,weight,w))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// minimum absolute difference

// function minimumAbsoluteDifference(a,b){
//     a.sort((a,b)=>a-b)
//     b.sort((a,b)=>a-b)

//     let sum = 0
//     let diff 
//     for(let i=0;i<a.length;i++){
//         diff = Math.abs(a[i] - b[i])
//         sum += diff
//     }

//     return sum
// }

// let a = [1,2,3]
// let b = [2,1,3]

// console.log(minimumAbsoluteDifference(a,b))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function maxLengthChainPairs(pairs){
//     pairs.sort((a,b)=>a[1]-b[1])

//     let result = []
//     result.push(pairs[0])
//     let end = pairs[0][1]
//     let count = 1

//     for(let i=1;i<pairs.length;i++){
//         if(pairs[i][0] >= end){
//             result.push(pairs[i])
//             end = pairs[i][1]
//             count++
//         }
//     }

//     return {count,result}
// }

// console.log(maxLengthChainPairs([[5,24],[39,60],[5,28],[27,40],[50,90]]))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// indian coins

// let coins = [1,2,5,10,20,50,100,200,500,2000]
// let amount = 590

// function exchangeAmount(coins,amount){
//     coins.sort((a,b)=>b-a)

//     let exchange = []
//     let count = 0

//     for(let i=0;i<coins.length;i++){
//         if(coins[i] <= amount){
//             while(coins[i] <= amount){
//                 amount -= coins[i]
//                 count++
//                 exchange.push(coins[i])
//             }
//         }
//     }

//     return {count,exchange}
// }

// console.log(exchangeAmount(coins,amount))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Job sequencing problem

// function jobSequencingProblem(jobs){
//     jobs.sort((a,b)=>b[1] - a[1])

//     let result = []
//     let profit = 0
//     let time = 0

//     for(let i=0;i<jobs.length;i++){
//         if(jobs[i][0] > time){
//             result.push(jobs[i])
//             profit += jobs[i][1]
//             time++
//         }
//     }

//     return {result,profit}
// }

// console.log(jobSequencingProblem([[4,20],[1,10],[1,40],[1,30]]))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// chocola problem

function chocolaProblem(rows,columns,costHorizontal,costVertical){
    let horizontalIndex = 0
    let verticalIndex = 0
    let horizontalPieces = 1
    let verticalPieces = 1
    let cost = 0

    costHorizontal.sort((a,b)=>b-a)
    costVertical.sort((a,b)=>b-a)

    while(horizontalIndex < costHorizontal.length && verticalIndex < costVertical.length){
        if(costHorizontal[horizontalIndex] <= costVertical[verticalIndex]){
            cost += costVertical[verticalIndex] * horizontalPieces
            verticalPieces++
            verticalIndex++
        }else{
            cost += costHorizontal[horizontalIndex] * verticalPieces
            horizontalPieces++
            horizontalIndex++
        }
    }

    while(horizontalIndex < costHorizontal.length){
        cost += costHorizontal[horizontalIndex] * verticalPieces
        horizontalPieces++
        horizontalIndex++
    }

    while(verticalIndex < costVertical.length){
        cost += costVertical[verticalIndex] * horizontalPieces
        verticalPieces++
        verticalIndex++
    }

    return cost
}

console.log(chocolaProblem(4,6,[4,1,2],[2,1,3,1,4]))