
type User={
    name:string,
    age:number,
    location:string
}

const printUserInfo=(user:User)=>{
    return `Name: (${user.name}) Age: (${user.age})  Loation: (${user.location})) `
}

const res=printUserInfo({name:"Alice",age:30,location:"mtr"});
console.log(res);

function printUser1():User{
    return {
        name:"rohit",
        age:30,
        location:"bglr"
    }
}

console.log(printUser1());