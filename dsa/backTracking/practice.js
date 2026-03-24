//backtracking array.

// 1.a function should take size of an array for each index increase value by 1 when it hit base case for each index decrease value by 2.


// function backTrack(arr,index,value){
//     if(arr.length == index){
//         return
//     }

//     arr[index] = value
//     let result = backTrack(arr,index+1,value+1)
//     arr[index] = arr[index] - 2
// }

// let arr = new Array(5)
// backTrack(arr,0,1)
// console.log(arr)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.find subsets
// find and print all subsets of a given string
// "abc"
//output : a, b, c, ab, bc, ac, abc

function subsets(str,index,ans='',result=[]){
    if(index == str.length){
        result.push(ans)
        return
    }

    //yes choice 

    subsets(str,index+1,ans+str[index],result)

    //no choice
    subsets(str,index+1,ans,result)

    return result
}
console.log(subsets('abc',0))
 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3.find permutations

//find and arrange the all permutation and combination of the string

// let str = 'abc'

// function permutation(str,ans='',result=[]){
//     if(str.length == 0){
//         result.push(ans)
//         return
//     }

//     for(let i=0;i<str.length;i++){
//         let newStr = str.slice(0,i).concat(str.slice(i+1))
//         permutation(newStr,ans+str[i],result)
//     }

//     return result
// }

// console.log(permutation(str))