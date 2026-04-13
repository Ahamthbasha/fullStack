  class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
  }

  class BinaryTree{
    buildTree(nodes){
        let index = -1

        function helper(){
            index++

            if(nodes[index] ==  -1){
                return null
            }

            const node = new Node(nodes[index])
            node.left = helper()
            node.right = helper()

            return node
        }

        return helper()
    }

    preorder(root){
        if(root){
            console.log(root.data)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data)
        }
    }

    levelOrder(root){
        if(!root){
            return
        }

        let queue = []
        queue.push(root)

        while(queue.length){
            let cur = queue.shift()

            console.log(cur.data)

            if(cur.left){
                queue.push(cur.left)
            }

            if(cur.right){
                queue.push(cur.right)
            }
        }
    }

    heightOfTreeByNodes(root){
        if(root == null){
            return 0
        }

        let left = this.heightOfTreeByNodes(root.left)
        let right = this.heightOfTreeByNodes(root.right)

        return Math.max(left,right)+1
    }

    heightOfTreeByEdges(root){
        if(root == null){
            return -1
        }

        let left = this.heightOfTreeByEdges(root.left)
        let right = this.heightOfTreeByEdges(root.right)
        return Math.max(left,right) + 1
    }

    countOfNodes(root){
      if(root == null){
        return 0
      }

      let leftCount = this.countOfNodes(root.left)
      let rightCount = this.countOfNodes(root.right)
      return leftCount+rightCount+1
    }

    sumOfNodes(root){
        if(root == null){
            return 0
        }

        let left = this.sumOfNodes(root.left)
        let right = this.sumOfNodes(root.right)
        return left + right + root.data
    }

    diameterOfATree(root){
        if(root == null){
            return  0
        }

        let leftDiameter = this.diameterOfATree(root.left)
        let leftHeight = this.heightOfTreeByNodes(root.left)
        let rightDiameter = this.diameterOfATree(root.right)
        let rightHeight = this.heightOfTreeByNodes(root.right)

        let selfDiameter = leftHeight + rightHeight + 1

        return Math.max(Math.max(leftDiameter,rightDiameter),selfDiameter)
    }

    diameterOfATree2(root){
        if(root == null){
            return {diameter:0,height:0}
        }

        let leftDiameter = this.diameterOfATree2(root.left)
        let rightDiameter = this.diameterOfATree2(root.right)

        let height = Math.max(leftDiameter.height,rightDiameter.height) + 1

        let selfDiameter = leftDiameter.height + rightDiameter.height + 1

        let diameter = Math.max(selfDiameter,leftDiameter.diameter,rightDiameter.diameter)

        return {diameter:diameter,height}
    }

    isIdentical(root1,root2){
        if(root1 == null && root2 == null){
            return true
        }
        else if((root1 == null || root2 == null) || (root1.data != root2.data)){
            return false
        }


        if(!this.isIdentical(root1.left,root2.left)){
            return false
        }

        if(!this.isIdentical(root1.right,root2.right)){
            return false
        }

        return true
    }

    isSubtree(root,subRoot){
        if(root == null){
            return false
        }

        if(root.data == subRoot.data){
            if(this.isIdentical(root,subRoot)){
                return true
            }
        }

        return this.isSubtree(root.left,subRoot) || this.isSubtree(root.right,subRoot)
    }

    topViewOfATree(root){
        let queue = []
        queue.push({root,hd:0})
        let freqMap = {}

        let min = 0
        let max = 0

        while(queue.length){
            let {root,hd} = queue.shift()

            if(!freqMap[hd]){
                freqMap[hd] = root.data
            }

            if(root.left){
                queue.push({root:root.left,hd:hd-1})
                min = Math.min(min,hd-1)
            }

            if(root.right){
                queue.push({root:root.right,hd:hd+1})
                max = Math.max(max,hd+1)
            }
        }

        let result = []

        for(let i=min;i<=max;i++){
            result.push(freqMap[i])
        }

        return result
    }
  }


//   const t = new BinaryTree()
//   const root = t.buildTree([1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1])
//   console.log('preorder')
//   t.preorder(root)
//   console.log('inOrder')
//   t.inOrder(root)
//   console.log('postOrder')
//   t.postOrder(root)
//   console.log('inOrder')
//   t.inOrder(root)

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

const t = new BinaryTree()

// console.log(t.heightOfTreeByNodes(root))

// console.log(t.heightOfTreeByEdges(root))

// console.log(t.countOfNodes(root))

// console.log(t.sumOfNodes(root))

// console.log(t.diameterOfATree(root))

// console.log(t.diameterOfATree2(root))

// const subRoot = new Node(2)
// subRoot.left = new Node(4)
// subRoot.right = new Node(5)

// console.log(t.isSubtree(root,subRoot))

console.log(t.topViewOfATree(root))