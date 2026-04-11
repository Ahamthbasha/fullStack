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

console.log(t.heightOfTreeByNodes(root))

console.log(t.heightOfTreeByEdges(root))

console.log(t.countOfNodes(root))

console.log(t.sumOfNodes(root))