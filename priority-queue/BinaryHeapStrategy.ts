



import { QueueStrategy, Options, Comparator } from './priority-queue';

export default class BinaryHeapStrategy<T> implements QueueStrategy<T>{

    private comparator: Comparator<T>
    private data: T[]

    constructor(options: Options<T>) {

        this.comparator = options.comparator;
        this.data = options.initialValues ?? [];
        this._heapify()

    }


    // 整体调整堆
    private _heapify() {
        if (this.data.length > 0) {
            for (let i = 0; i < this.data.length; i++) {
                this._bubbleUp(i)
            }
        }

    }


    //
    private _bubbleUp(pos: number) {
        while (pos > 0) {
            const parent = (pos - 1) >>> 1;
            if (this.comparator(this.data[pos], this.data[parent]) < 0) {
                [this.data[pos], this.data[parent]] = [this.data[parent], this.data[pos]]
                pos =parent
            } else {
                break
            }
        }
    }

    // 
    private _bubbleDown(pos: number) {
        const last = this.data.length ;
        let left = (pos << 1 )+ 1;
        while (left < last) {

            const right = left + 1;
            let minIndex = pos;
            if (left <= last && this.comparator(this.data[left], this.data[minIndex]) < 0) {
                minIndex = left;
            }
            if (right <= last && this.comparator(this.data[right], this.data[minIndex]) < 0) {
                minIndex = right;
            }
            if (minIndex != pos) {

                [this.data[pos], this.data[minIndex]] = [this.data[minIndex], this.data[pos]]
                pos = minIndex;
                left = (pos << 1) + 1;

            } else {
                break;
            }
        }
    }
    queue(value: T): void {
        this.data.push(value)
        this._bubbleUp(this.data.length - 1)
    }

    dequeue(): T{
        [this.data[0],this.data[this.data.length-1]]= [this.data[this.data.length-1],this.data[0]];
        const value =this.data.pop() as T
        this._bubbleDown(0)
        return value
    }
    peek(): T{
        return this.data[0];
    }

    clear(): void{
        this.data.length=0
    }

}