import BinaryHeapStrategy from "./BinaryHeapStrategy";

export declare type Comparator<T>=(a:T,b:T)=> number

export interface Options<T>{
    comparator:Comparator<T>;
    initialValues?:T[];

}

// 可以根据不同堆类型 定义不同策略。如 BinaryHeap 、 B Heap 等
export interface QueueStrategy<T>{
    queue(value:T):void;
    dequeue():T;
    peek():T;
    clear():void;
}

export default class PriorityQueue<T>{

    private _length=0
    
    public get legnth(){
        return this._length
    }
    private strategey :QueueStrategy<T>;

    constructor(options:Options<T>){

        this._length=options?.initialValues?.length ?? 0;
        this.strategey = new BinaryHeapStrategy(options);
        
    }
    queue(value:T):void{
        this._length++;
        this.strategey.queue(value);
    }
    dequeue():T{
        if(!this._length) throw new Error('Empty queue');
        this._length--;
        return  this.strategey.dequeue();
    }

    peek():T{
        if(!this._length) throw new Error('Empty queue');
        return this.strategey.peek();
    }

    clear():void{
        this._length=0;
        this.strategey.clear()
    }
}
