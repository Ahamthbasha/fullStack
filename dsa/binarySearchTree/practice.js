class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Bst{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root == null
    }

    insert(node){
        const newNode = new Node(node)

        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,node){
        if(node.data < root.data){
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }
            else{
                this.insertNode(root.right,node)
            }
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data)
            this.inOrder(root.right)
        }
    }

    search(root,key){
        if(root == null){
            return -1
        }
        else if(root.data == key){
            return true
        }
        else if(key < root.data){
            return this.search(root.left,key)
        }
        else{
            return this.search(root.right,key)
        }
    }

    delete(root,key){
        this.root = this.deleteNode(root,key)
    }

    min(root){
        while(root.left){
            root = root.left
        }
        return root.data
    }

    deleteNode(root,key){
        if(root == null){
            return null
        }

        if(key < root.data){
            root.left = this.deleteNode(root.left,key)
        }
        else if(key > root.data){
            root.right = this.deleteNode(root.right,key)
        }
        else{
            if(!root.left && !root.right){
                return null
            }
    
            if(!root.left){
                return root.right
            }
    
            if(!root.right){
                return root.left
            }
    
            let min = this.min(root.right)
            root.data = min
            root.right = this.deleteNode(root.right,min)
        }
        return root 
    }

    printInRange(root,k1,k2,result=[]){
        if(root == null){
            return result
        }

        if(k1 < root.data){
            this.printInRange(root.left,k1,k2,result)
        }

        if(root.data >= k1 && root.data <= k2){
            result.push(root.data)
        }

        if(k2 > root.data){
            this.printInRange(root.right,k1,k2,result)
        }

        return result
    }

    rootToLeafPaths(root,result=[],temp=[]){
        if(root == null){
            return result
        }
            temp.push(root.data)
            if(!root.left && !root.right){
                result.push([...temp])
            }else{
                this.rootToLeafPaths(root.left,result,temp)
                this.rootToLeafPaths(root.right,result,temp)
            }

        temp.pop()

        return result
    }

    isValidBst(root,min=null,max=null){
        if(!root){
            return true
        }

        if(min != null && root.data <= min){
            return false
        }

        if(max != null && root.data >= max){
            return false
        }

        return this.isValidBst(root.left,min,root.data) && this.isValidBst(root.right,root.data,max)
    }

    mirrorBst(root){
        if(root == null){
            return null
        }

        let leftSubtree = this.mirrorBst(root.left)
        let rightSubtree = this.mirrorBst(root.right)

        root.left = rightSubtree
        root.right = leftSubtree

        return root
    }

    preOrder(root){
        if(root){
            console.log(root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    sortedArrayToBalancedBst(arr,s,e){
        if(s > e){
            return null
        }

        let mid = Math.floor((s+e)/2)
        let root = new Node(arr[mid])
        root.left = this.sortedArrayToBalancedBst(arr,s,mid-1)
        root.right = this.sortedArrayToBalancedBst(arr,mid+1,e)

        return root
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data)
            this.inOrder(root.right)
        }
    }

    convertBstToBalancedTree(root,result=[]){
        if(root){
            this.convertBstToBalancedTree(root.left,result)
            result.push(root.data)
            this.convertBstToBalancedTree(root.right,result)
        }

        return this.sortedArrayToBalancedBst(result,0,result.length-1)
    }

    sizeOfLargestBstInBst(root){
        let maxSize = 0

        function helper(node){
            if(!node){
                return {
                    isBst : true,
                    size : 0,
                    min : Infinity,
                    max : -Infinity
                }
            }

            let left = helper(node.left)
            let right = helper(node.right)

            if(left.isBst && right.isBst && node.data > left.max && node.data < right.min){
                let size = left.size + right.size + 1

                maxSize = Math.max(maxSize,size)

                return {
                    isBst:true,
                    size:size,
                    min:Math.min(node.data,left.min),
                    max:Math.max(node.data,right.max)
                }
            }

            return {
                isBst : false,
                size : 0,
                min : 0,
                max : 0
            }
        }
        helper(root)
        return maxSize
    }

    inOrderResult(root,result=[]){
        if(root){
            this.inOrderResult(root.left,result)
            result.push(root.data)
            this.inOrderResult(root.right,result)
        }
        return result
    }

    merge2Bst(root1,root2){
        let arr1 = this.inOrderResult(root1)
        let arr2 = this.inOrderResult(root2)

        let result = [...arr1,...arr2]
        result.sort((a,b)=>a-b)

        function helper(arr,start,end){
            if(start > end){
                return null
            }

            let mid = Math.floor((start+end)/2)
            let root = new Node(arr[mid])
            root.left = helper(arr,start,mid-1)
            root.right = helper(arr,mid+1,end)

            return root
        }

        return helper(result,0,result.length-1)
    }
}

// const b = new Bst()

// let val = [8,5,3,6,10,11,14]

// for(let value of val){
//     b.insert(value)
// }

// b.inOrder(b.root)

// console.log(b.search(b.root,3))

// b.delete(b.root,3)

// b.inOrder(b.root)

// b.delete(b.root,10)

// b.inOrder(b.root)

// console.log(b.printInRange(b.root,5,12))

// console.log(b.rootToLeafPaths(b.root))

// console.log(b.isValidBst(b.root))

// console.log("Before mirroring")

// b.preOrder(b.root)

// console.log("After mirroring")

// b.mirrorBst(b.root)

// b.preOrder(b.root)

// const r = new Bst()

// const root = r.sortedArrayToBalancedBst([3,5,6,8,10,11,12],0,6)

// r.inOrder(root)

////////////////////////////////////////////////
//  bst without balanced
////////////////////////////////////////////

// let root = new Node(8)

// root.left = new Node(6)
// root.left.left = new Node(5)
// root.left.left.left = new Node(3)

// root.right = new Node(10)
// root.right.right = new Node(11)
// root.right.right.right = new Node(12)

// const b = new Bst()

// b.inOrder(root)

// root = b.convertBstToBalancedTree(root)

// b.inOrder(root)

/////////////////////////////////////////////////
// Find the size of largest bst in given bst
////////////////////////////////////////////////

// let root = new Node(50)
// root.left = new Node(30)
// root.left.left = new Node(5)
// root.left.right = new Node(20)

// root.right = new Node(60)
// root.right.left = new Node(45)
// root.right.right = new Node(70)
// root.right.right.left = new Node(65)
// root.right.right.right = new Node(80)

// const b = new Bst(root)

//  console.log(b.sizeOfLargestBstInBst(root))

/////////////////////////////////////////////////
// MERGE 2 BSTS
////////////////////////////////////////////////

let root1 = new Node(2)
root1.left = new Node(1)
root1.right = new Node(4)

let root2 = new Node(9)
root2.left = new Node(3)
root2.right = new Node(12)

const b = new Bst()

const root = b.merge2Bst(root1,root2)

b.inOrder(root)