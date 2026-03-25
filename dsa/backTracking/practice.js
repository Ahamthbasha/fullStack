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

// function subsets(str,index,ans='',result=[]){
//     if(index == str.length){
//         result.push(ans)
//         return
//     }

//     //yes choice 

//     subsets(str,index+1,ans+str[index],result)

//     //no choice
//     subsets(str,index+1,ans,result)

//     return result
// }
// console.log(subsets('abc',0))
 

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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// n queens.

//create the chess board

// let n = 4

// let chess  =[]

// for(let i=0;i<n;i++){
//     let temp = []
//     for(let j=0;j<n;j++){
//         temp[j] = 'X'
//     }
//     chess.push(temp)
// }

// place nQueens without checking the attack

// function nQueens(board,row){
//     if(row == board.length){
//         console.log("----chessboard----")
//         console.log(board)
//         return
//     }

//     for(let j=0;j<board.length;j++){
//         board[row][j] = 'Q'
//         nQueens(board,row+1)
//         board[row][j] = 'X'
//     }
// }

// nQueens(chess,0)

//place nQueens with check attack condition

// function isSafe(board,row,col){
//     //vertical up

//     for(let i=row-1;i>=0;i--){
//         if(board[i][col] == 'Q'){
//             return false
//         }
//     }

//     //diagonal left up
//     for(let i=row-1,j=col-1;i>=0 && j>=0;i--,j--){
//         if(board[i][j] == 'Q'){
//             return false
//         }
//     }

//     //diagonal right up

//     for(let i=row-1,j=col+1;i>=0 && j<board.length;i--,j++){
//         if(board[i][j] == 'Q'){
//             return false
//         }
//     }

//     return true
// }

// function nQueens(board,row){
//     if(row == board.length){
//         console.log(board.map(row => row.join(' ')).join('\n'))
//         console.log('------')
//         return
//     }

//     for(let j=0;j<board.length;j++){
//         if(isSafe(board,row,j)){
//             board[row][j] = 'Q'
//             nQueens(board,row+1)
//             board[row][j] = 'X'
//         }
//     }
// }

// nQueens(chess,0)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. FIND TOTAL NO OF SOLUTIONS

// let count = 0

// function nQueens2(board,row){
//     if(row == board.length){
//         count++
//     }

//     for(let j=0;j<board.length;j++){
//         if(isSafe(board,row,j)){
//             board[row][j] = 'Q'
//             nQueens2(board,row+1)
//             board[row][j] = 'X'
//         }
//     }
// }

// nQueens2(chess,0)

// console.log(count)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3.NQUEENS PRINT ONE SOLUTION

// function nQueenPrintOneSolution(board,row){
//     if(row == board.length){
//         return true
//     }

//     for(let j=0;j<board.length;j++){
//         if(isSafe(board,row,j)){
//             board[row][j] = 'Q'
//             if(nQueenPrintOneSolution(board,row+1)){
//                 return true
//             }
//             board[row][j] = 'X'
//         }
//     }

//     return false
// }

// if(nQueenPrintOneSolution(chess,0)){
//     console.log(chess.map(row => row.join(' ')).join('\n'))
// } else {
//     console.log("No solution")
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////