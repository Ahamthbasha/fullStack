class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
        this.height = 0
    }
}

class AvlTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root == null
    }

    getHeight(node){
        return node ? node.height : -1
    }


    getBalanceFactor(node){
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0
    }

    rightRotate(y){
        let x = y.left
        let t2 = x.right

        x.right = y
        y.left = t2

        y.height = 1 + Math.max((this.getHeight(y.left)),(this.getHeight(y.right)))
        x.height = 1 + Math.max((this.getHeight(x.left)),(this.getHeight(x.right)))

        return x
    }

    leftRotate(y){
        let x = y.right
        let t2 = x.left

        x.left = y
        y.right = t2

        y.height = 1 + Math.max(this.getHeight(y.left),this.getHeight(y.right))
        x.height = 1 + Math.max((this.getHeight(x.left)),(this.getHeight(x.right)))

        return x
    }

    insert(data){
        this.root = this.insertNode(this.root,data)
    }

    insertNode(root,data){
        if(!root){
            return new Node(data)
        }

        if(data < root.data){
            root.left = this.insertNode(root.left,data)
        }
        else{
            root.right = this.insertNode(root.right,data)
        }

        root.height = 1 + Math.max(this.getHeight(root.left),this.getHeight(root.right))

        let bf = this.getBalanceFactor(root)
//ll
        if(bf > 1 && data < root.left.data){
            return this.rightRotate(root)
        }

        //rr
        if(bf < -1 && data > root.right.data){
            return this.leftRotate(root)
        }

        //lr

        if(bf > 1 && data > root.left.data){
            root.left = this.leftRotate(root.left)
            return this.rightRotate(root)
        }

        //rl

        if(bf < -1 && data <  root.right.data){
            root.right = this.rightRotate(root.right)
            return this.leftRotate(root)
        }

        return root
    }

    preorder(root){
        if(root){
            console.log(root.data)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
}