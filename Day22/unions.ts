let password:string |number=123;

type UserInfo2={
    first:string,
    age:number,
    last:string
}

type AccountDetails1={
    email:string,
    password:string
}

let User5: UserInfo2 | AccountDetails1={
    first:"rohit",
    last:"agr",
    age:30,
}
const items5:(number | string)[]=[1,5,"jhefo"]