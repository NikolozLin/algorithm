const arr = [1, 3, 5, 7, 9, 11];
const len = arr.length;
const tree = [];

function initTree(arr, tree, node, start, end) {
    if (start === end) {
        tree[node] = arr[start] ?? 0;
        return;
    }
    const mid = start + end >> 1;
    const leftNode = 2 * node + 1;
    const rightNode = 2 * node + 2;
    initTree(arr, tree, leftNode, start, mid);
    initTree(arr, tree, rightNode, mid + 1, end);
    tree[node] = tree[leftNode] + tree[rightNode];
}
function updateTree(arr, tree, node, start, end, idx, value) {
    if (start === end) {
        arr[idx] = value;
        tree[node] = value;
        return;
    }
    const mid = start + end >> 1;
    const leftNode = 2 * node + 1;
    const rightNode = 2 * node + 2;
    if (idx >= start && idx <= mid) {
        updateTree(arr, tree, leftNode, start, mid, idx, value);
    } else {
        updateTree(arr, tree, rightNode, mid + 1, end, idx, value);
    }

    tree[node] = tree[leftNode] + tree[rightNode];
}
function queryTree(arr, tree, node, start, end, L, R) {
    if (end < L || start > R) {
        return 0;
    }
    if (start >= L && end <= R) return tree[node];
    if (start === end) return tree[start];

    const mid = start + end >> 1;
    const leftNode = 2 * node + 1;
    const rightNode = 2 * node + 2;

    const resultL = queryTree(arr, tree, leftNode, start, mid, L, R);
    const resultR = queryTree(arr, tree, rightNode, mid + 1, end, L, R);

    return resultL + resultR;
}

initTree(arr, tree, 0, 0, len - 1);

updateTree(arr, tree, 0, 0, len - 1, 4, 6);

console.log(queryTree(arr, tree, 0, 0, len - 1, 2, 5));
