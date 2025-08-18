//object 

//define a person object
const person:{firstName:string,lastName:string,age:number}={
    firstName:"Rohit",
    lastName:"Agarwal",
    age:22
}

console.log(person);


function printUser():{name:string,age:number,location:string}{
    return {
        name:"rohit",
        age:30,
        location:"bglr"
    }
}

console.log(printUser());