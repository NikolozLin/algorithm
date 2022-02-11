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

    private _length;
    readonly length:number;
    private strategey;

    constructor(option:Options<T>);
    queue(value:T):void;
    dequeue():T;
    peek():T;
    clear():void;
}