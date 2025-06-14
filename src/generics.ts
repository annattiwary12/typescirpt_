function identity<T>(value:T):T{
    return value;
}
const str = identity<string>("hello");
const num = identity<number>(42);

//

function getFirstElemnet<T>(arr:T[]){
    return arr[0];
}
const  first  = getFirstElemnet([1,2,3]);
const second = getFirstElemnet(["a","b","c"]);
//

interface Box<T>{
     value:T;
}
const  stringBox :Box<string> = {value:"anant"};
const numberBox  :Box<number>  = {value:100};

class DataHolder<T>{
     private data:T;
     constructor(inital :T){
        this.data = inital;
         }
         getData():T{
            return this.data;
         }
}
const holder  = new DataHolder<number>(123);
//

function printLength<T extends{length:number}>(item:T):void{
    console.log(item.length);
}
printLength("hello");
printLength([1,2,3]);
