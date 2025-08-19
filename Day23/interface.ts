interface Computer{
    name:string;
    ram: number;
    hdd:number;
}

const computerExample:Computer={
    name:'i7',
    ram:8,
    hdd:100
}
console.log(computerExample);


interface Movie{
    readonly name:string;
    ratings:number;
    genra?:string
}

const movie1: Movie={
    ratings:7,
    name:"star wars"
}

interface MathOpeartion{
    (x:number,y:number):number;
}

const add: MathOpeartion=(a,b)=>a*b;
console.log(add(2,2));



interface Person10{
    firstName:string;
    lastName:string;
    sayHello():void
}

function greet(person: Person10){
    console.log(`Hello ${person.firstName} ${person.lastName}`);
    person.sayHello();
}

const obj: Person10={
    firstName:"Rohit",
    lastName:"Agarwal",
    sayHello(){
        console.log("hello");
    }
}

greet(obj);