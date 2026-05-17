// 1. matrix chain multiplication

function mcm(arr,i,j){
    if(i == j){
        return 0
    }

    let ans = Infinity

    for(let k=i;k<=j-1;k++){
        let cost1 = mcm(arr,i,k)
        let cost2 = mcm(arr,k+1,j)
        let cost3 = arr[i-1] * arr[k] * arr[j]
        let final = cost1 + cost2 + cost3
        ans = Math.min(ans,final)
    }

    return ans
}

let arr = [1,2,3,4,3]

console.log(mcm(arr,1,arr.length-1))