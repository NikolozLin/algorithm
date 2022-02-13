// type TrieNode=
interface node{
    cnt:number;
    child:Array<node|null>
}


class TrieNode {

    public child :Array<TrieNode|null>=[];

    public cnt: number;
    constructor() {
        this.child[0]=null

        this.cnt = 0;
    }
}

// https://www.geeksforgeeks.org/count-pairs-having-bitwise-xor-less-than-k-from-given-array/
class TrieNode {
    child = []
    cnt
    constructor() {
        this.child[0] = this.child[1] = null;
        this.cnt = 0;
    }
}

// insert a number into Trie
function insertTrie(root, N) {

    for (let i = 32; i >= 0; i--) {
        let x = (N) & (i << i)

        if (x < 2 && root.child[x] == null) {
            root.child[x] = new TrieNode()
        }

        if (x < 2) {
            root.child[x].cnt += 1
            root = root.child[x]
        }

    }
}

function cntSmaller(root, N, K) {

    let cntPairs = 0

    for (let i = 32; i >= 0 && root != null; i--) {

        let x = (N) & (i << i)

        let y = (K) & (i << i)

        if (y == 1) {
            if (root.child[x] != null) {
                cntPairs += root.child.cnt
            }
            root = root.child[1 - x]
        } else {
            if (x <= 2) root = root.child[x]
        }

    }
    return cntPairs

}

function cntSmallerPairs(arr, N, K) {

    const root = new TrieNode()

    let cntPairs = 0
    for (let i = 0; i < N; i++) {
        cntPairs += cntSmaller(root,arr[i], K);

        // Insert arr[i] into Trie
        insertTrie(root, arr[i]);
    }
    return cntPairs;
}


let arr = [3, 5, 6, 8];
let K = 7;
let N = arr.length;
console.log(cntSmallerPairs(arr, N, K))