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
}

const b = new Bst()

let val = [8,5,3,6,10,11,14]

for(let value of val){
    b.insert(value)
}

// b.inOrder(b.root)

// console.log(b.search(b.root,3))

// b.delete(b.root,3)

// b.inOrder(b.root)

// b.delete(b.root,10)

// b.inOrder(b.root)

// console.log(b.printInRange(b.root,5,12))

// console.log(b.rootToLeafPaths(b.root))

// console.log(b.isValidBst(b.root))

console.log("Before mirroring")

b.preOrder(b.root)

console.log("After mirroring")

b.mirrorBst(b.root)

b.preOrder(b.root)