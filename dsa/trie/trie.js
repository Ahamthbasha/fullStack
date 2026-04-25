class Node{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}

class Node2{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
        this.frequency = 0
    }
}

class Trie{
    constructor(){
        this.root = new Node()
        this.root2 = new Node2()
    }

    // time complexity will be o(l)
    insert(word){
        let root = this.root

        for(let val of word){
            if(!root.children[val]){
                root.children[val] = new Node()
            }
            root = root.children[val]
        }
        root.isEndOfWord = true
    }

    // O(L) - length of the largest word
    search(key){
        let root = this.root

        for(let val of key){
            if(!root.children[val]){
                return false
            }

            root = root.children[val]
        }

        return root.isEndOfWord == true
    }

    wordBreakSearch(key){
        if(key.length == 0){
            return true
        }

        for(let i=1;i<=key.length;i++){
            if(this.search(key.slice(0,i)) && this.wordBreakSearch(key.slice(i))){
                return true
            }
        }

        return false
    }

    wordBreakProblem(words,key){

        for(let val of words){
            this.insert(val)
        }

        return this.wordBreakSearch(key)
        
    }

    insertWithFreq(word){
        let root = this.root2

        for(let val of word){
            if(!root.children[val]){
                root.children[val] = new Node2()
            }

            root = root.children[val]
            root.frequency++
        }

        root.isEndOfWord = true
    }

    searchPrefixProblem(word){
        let root = this.root2
        let temp = ''

        for(let val of word){
            if(!root.children[val]){
                break
            }
            temp += val
            root = root.children[val]
            if(root.frequency == 1){
                break
            }
        }
        return temp
    }

    prefixProblem(words){
        for(let val of words){
            this.insertWithFreq(val)
        }

        let result = []

        for(let val of words){
            result.push(this.searchPrefixProblem(val))
        }

        return result
    }

    startsWith(words,prefix){
        for(let val of words){
            this.insert(val)
        }

        let root = this.root

        for(let val of prefix){
            if(!root.children[val]){
                return false
            }

            root = root.children[val]
        }

        return true
    }

    countNodes(root){
        if(root == null){
            return 0
        }
        let count = 0
        for(let val in root.children){
            count += this.countNodes(root.children[val])
        }

        return count+1
    }

    longestWord(){
       let ans = ''

       const dfs = (node,str)=>{
        for(let ch in node.children){
            let child = node.children[ch]

            if(child.isEndOfWord){
                let temp = str + ch

                if((temp.length > ans.length) || (temp.length == ans.length && temp < ans)){
                    ans = temp
                }

                dfs(child,temp)
            }
        }
       }

       dfs(this.root,"")

       return ans
    }
}

const t = new Trie()

// let words = ['the','a','their','any','thee']

// for(let val of words){
//     t.insert(val)
// }

// console.log(t.search('the'))

// console.log(t.search('shivaji'))

// console.log(t.wordBreakProblem(['i','like','sam','samsung','mobile','ice'],'ilikesamsung'))


// console.log(t.prefixProblem(['zebra','dog','duck','dove']))

// console.log(t.startsWith(['apple','app','mango','man','woman'],"app"))

// let str = 'ababa'

// for(let i=0;i<str.length;i++){
//     let suffix = str.slice(i)
//     t.insert(suffix)
// }

// console.log(t.countNodes(t.root))

let words = ['a','banana','app','appl','ap','apply','apple']

for(let val of words){
    t.insert(val)
}

console.log(t.longestWord(t.root))