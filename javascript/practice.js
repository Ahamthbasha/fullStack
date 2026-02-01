function bubbleSort(arr){
    let swapped = true
    while(swapped){
        swapped = false

        for(let i=0;i<arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swapped = true
            }
        }
    }

    return arr
}

console.log(bubbleSort([19,100,0,-1,10,2800,133]))