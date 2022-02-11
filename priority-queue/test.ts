
import PriorityQueue from './priority-queue'

const arrs = [9, 2, 4, 5, 1, 7, 3, 6, 0, 8];

function xxx (a:number,b:number):number{
    return a-b
}

const heap =new PriorityQueue({comparator:xxx,initialValues:arrs})

// const len=heap.legnth
console.log(arrs);
while(heap.legnth){
    console.log(heap.dequeue())
}
// console.log(arrs);
