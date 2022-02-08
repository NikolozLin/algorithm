export declare type Comparator<T>=(a:T,b:T)=> number

export interface Option<T>{
    comparator:Comparator<T>;
    initialValues?:T[];

}
export interface QueueStrategey<T>{
    queue(value:T):void;
    queue():T;
    peek():T;
    clear():void;v
}

export default class PriorityQueue<T>{

    private _length;
    readonly length:number;
    private strategey;

    constructor(option:Option);
    queue(value:T):void;
    queue():T;
    peek():T;
    clear():void;
}