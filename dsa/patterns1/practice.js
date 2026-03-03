//pattern1

// for(let i=1;i<=4;i++){
//     let str = ''
//     for(let j=1;j<=i;j++){
//         str += '*' + ' '
//     }
//     console.log(str)
// }

// hollow rectangle

// for(let i=1;i<=4;i++){
//     let str = ''
//     for(let j=1;j<=4;j++){
//         if(i==1 || i==4){
//             str += '*' + ' '
//         }
//         else if(j ==1 || j == 4){
//             str += '*' + ' '
//         }else{
//             str += ' ' + ' '
//         }
//     }
//     console.log(str)
// }


//3.inverted pyramid

// for(let i=5;i>=1;i--){
//     let str = ''
//     for(let j=1;j<=i;j++){
//         str += '*' + ' '
//     }
//     console.log(str)
// }

//4.inverted half pyramid

// for(let i=1;i<=5;i++){
//     let str = ''
//     for(let j=1;j<=5;j++){
//         let gap = 5-i
//         if(j > gap){
//             str += '*' + ' '
//         }else{
//             str += ' ' + ' '
//         }
//     }
//     console.log(str)
// }

//5.Reversed pyramid

// for(let i=5;i>=1;i--){
//     let str = ''
//     for(let j=1;j<=5;j++){
//         let gap = 5 - i
//         if(j > gap){
//             str += '*' + ' '
//         }
//         else{
//             str += ' ' + ' '
//         }
//     }
//     console.log(str)
// }

//6.start half pyramid

// for(let i=1;i<=5;i++){
//     let str = ''
//     for(let j=1;j<=i;j++){
//         str += j + ' '
//     }
//     console.log(str)
// }

//7.inverted half pyramid

// for(let i=5;i>=1;i--){
//     let str = ''
//     for(let j=1;j<=i;j++){
//         str += j + ' '
//     }
//     console.log(str)
// }

//8.floyds triangle

// let sum = 0
// for(let i=1;i<=5;i++){
//     let str = ''
//     for(let j=1;j<=i;j++){
//         sum += 1
//         str += sum + ' '
//     }
//     console.log(str)
// }

//9.zero-one triangle

// let start = 1

// for(let i=1;i<=5;i++){
//     let str = ''
//     if(i % 2 == 0){
//         start = 0
//     }else{
//         start = 1
//     }
//     for(let j=1;j<=i;j++){
//         str += start + ' '
//         if(start == 1){
//             start = 0
//         }else{
//             start = 1
//         }
//     }
    
//     console.log(str)
// }

//10.butterfly pattern

// for(let i=1;i<=4;i++){
//     let str = ''
//     let count = 0
//     for(let j=1;j<=8;j++){
//         let gap = 8 - i * 2
//         if(j <= i){
//             str += '*' + ' '
//         }
//         else if(j > i && count != gap){
//             str += ' ' + ' '
//             count++
//         }
//         else{
//             str += '*' + ' '
//         }
//     }
//     console.log(str)
// }


// for(let i=4;i>=1;i--){
//     let str = ''
//     let count = 0
//     for(let j=1;j<=8;j++){
//         let gap = 8 - i * 2
//         if(j <= i){
//             str += '*' + ' '
//         }
//         else if(j > i && count != gap){
//             str += ' ' + ' '
//             count++
//         }
//         else{
//             str += '*' + ' '
//         }
//     }
//     console.log(str)
// }

// 11.solid rhombus

// let gap = 5-1
// for(let i=5;i>=1;i--){
//     let str = ''
//     for(let j=1;j<=9;j++){
//         let limit = gap + 5
//         if(j > gap && j <= limit){
//             str += '*' + ' '
//         }else{
//             str += ' ' + ' '
//         }
//     }
//     gap--
//     console.log(str)
// }

//12.hollow rhombus

// let gap = 5-1

// for(let i=5;i>=1;i--){
//     let str = ''
//     for(let j=1;j<=9;j++){
//         let limit = gap + 5
//         if(i == 1 || i == 5){
//             if(j > gap && j <= limit){
//                 str += '*' + ' '
//             }else{
//                 str += ' ' + ' '
//             }
//         }else{
//             if(j == gap || j == limit){
//                 str += '*' + ' '
//             }else{
//                 str += ' ' + ' '
//             }
//         }
//     }
//     gap--
//     console.log(str)
// }

// 13 . diamond pattern

let row = 4

for(let line=1;line<=row;line++){
    let str = ''
    for(let space=1;space<=row-line;space++){
        str += ' ' + ' '
    }

    for(let star=1;star<=(2*line)-1;star++){
        str += '*' + ' '
    }

    console.log(str)
}

for(let line = row;line>=1;line--){
    let str= ''
    for(let space =1 ;space<= row-line;space++){
        str += ' ' + ' '
    }

    for(let star=1;star<=(2*line)-1;star++){
        str += '*' + ' '
    }
    console.log(str)
}
