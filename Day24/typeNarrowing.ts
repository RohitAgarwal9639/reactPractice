//1: typeof

type MyType=string|number;


function exampleFun(val: MyType):void{
    if(typeof val==="string"){
        console.log(val.toUpperCase());
    }else{
        console.log(val.toFixed(2));
    }
}

exampleFun("hello");

//2:instanceOf

class Doge{
    bark():void{
        console.log("Woff Woff");
    }
}
class Cat{
    meow():void{
        console.log("meow meow");
    }
}

function animalSound(animal: Doge|Cat):void{
    if(animal instanceof Doge){
        animal.bark();
    }else{
        animal.meow();
    }
}

const dogObj=new Doge();
animalSound(dogObj);
const catObj=new Cat();
animalSound(catObj);


// 3:intersections types

type Employee={
    id:number;
    name:string;
}
type Manager={
    department:string;
    role:string;
}

type ManagerWithEmp=Employee & Manager;

const manager: ManagerWithEmp={
    id:123,
    name:"Rohit Agarwal",
    department:"Cse",
    role:"Team Lead"
}

console.log(manager.id);