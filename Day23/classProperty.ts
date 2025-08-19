class Person{
    name:string;
    age:number;
    constructor(name:string){
        this.name=name
    }
}

const person=new Person("Rohit");
console.log(person);

//Access modifiers only 3 -public private protected


class Person1{
    public first:string;
    private last:string;//only accessible in this class only
    constructor(first:string,last:string){
        this.first=first;
        this.last=last
    }

    getName():string{
        return `${this.first} ${this.last}`
    }
}

let p1=new Person1("Rohit","Agarwal");
console.log(p1.first);
// console.log(p1.last);// error
console.log(p1.getName());