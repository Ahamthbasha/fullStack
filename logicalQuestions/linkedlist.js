class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LL{
    constructor(){
        this.head = null
        this.size = 0
    }

    getSize(){
        return this.size
    }

    append(val){
        const node = new Node(val)
        if(this.head == null){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    prepend(val){
        const node = new Node(val)
        let temp = this.head

        while(temp.next != null){
            temp = temp.next
        }

        temp.next = node
        this.size++
    }

    print(){
        if(this.getSize() == 0){
            console.log('list is empty')
        }else{
            let temp = this.head
            let list = ''
            while(temp){
                list += temp.data + '->'
                temp = temp.next
            }
            list += 'null'
            console.log(list)
        }
    }

    deleteNodeWithGreateOnRight(root){
        let temp = root
        let val = []
        while(temp){
            val.push(temp.data)
            temp = temp.next
        }

        let greaterRightValues = new Set()

        for(let i=0;i<val.length;i++){
            greaterRightValues.add(Math.max(...val.slice(i)))
        }

        let value = [...greaterRightValues]

        let modifiedHead = new LL()

        for(let i=value.length-1;i>=0;i--){
            modifiedHead.append(value[i])
        }

        modifiedHead.print()
    }
}

const l = new LL()

l.append(3)
l.append(2)
l.append(6)
l.append(5)
l.append(11)
l.append(10)
l.append(15)
l.append(12)

l.print()

l.deleteNodeWithGreateOnRight(l.head)

const l2 = new LL()
l2.append(60)
l2.append(50)
l2.append(40)
l2.append(30)
l2.append(20)
l2.append(10)

l2.deleteNodeWithGreateOnRight(l2.head)