function printNumber(item:number,defaultValue:number):[number,number]{
    return [item,defaultValue];
}

const num1=printNumber(12,23);
console.log(num1);


//with generics

function prnt<T,E>(item:T , dv:E):[T,E]{
    return [item,dv]
}

const num2=prnt<number,number>(12,23);
console.log(num2);

const num3=prnt<number,string>(12,"vz");
console.log(num3);

function printIn<T>(x:T):T{
    return x;
}

const str=printIn<string>("Hello");
const  num=printIn<number>(23);
console.log(str);
console.log(num);


//interface

function prnt1<T>(item:T , dv:T):[T,T]{
    return [item,dv]
}

interface Dog{
    name:string;
    breed:string;
}
const dog1=prnt1<Dog>(
    {name:"Buddy",breed:"Labrador"},
    {name:"Default",breed:"unknown"}
)

console.log(dog1);


function getRandomKeyValuePair<T>(obj:{[key:string] :T}):{
    key:string;
    value:T;
}{
    const keys=Object.keys(obj);
    // console.log(keys);//[ 'a', 'b', 'c' ]
    const randKey=keys[Math.floor(Math.random()*keys.length)]

    return {key:randKey,value:obj[randKey]};
}

const strObject={a:'apple',b:'banana',c:'cherry'}
const res=getRandomKeyValuePair<string>(strObject);

console.log(res);


function filterArray<T>(array:T[],condition:(item:T)=>boolean):T[]{
    return array.filter((item)=>condition(item))
}

const numberArray=[1,2,3,4,5,6,7,8,9,10];
const evenNumber=filterArray<number>(numberArray,(num)=>num%2==0);


console.log(evenNumber)


const stringArr=["apple","banana","cherry","date"]
const shortWords=filterArray<string>(stringArr,(word)=>word.length<6);
console.log(shortWords);

interface Fruit{
    name:string;
    color:string;
}

const fruitArray:Fruit[]=[
    {name:"Apple",color:"Red"},
    {name:"Banana",color:"Yellow"},
    {name:"Cherry",color:"Red"},
]

const redFruits=filterArray<Fruit>(fruitArray,(fruit)=>fruit.color==="Red");

console.log(redFruits);


function reversePair<T,U>(val1:T, Val2:U):[U,T]{
    return [Val2,val1]
}

const revese=reversePair<number,string>(12,"hellow");
console.log(revese);


class Box<T>{
    private content:T;
    constructor(initialContent:T){
        this.content=initialContent;
    }
    getContent():T{
        return this.content
    }
    setContent(newContent:T):void{
        this.content=newContent;
    }
}

const b=new Box<string>("Hello Genric Class");
console.log(b.getContent());