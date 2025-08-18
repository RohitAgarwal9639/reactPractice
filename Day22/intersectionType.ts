type UserInfo1={
    first:string,
    age:number,
    last:string
}

type AccountDetails={
    email:string,
    password:string
}

type combine=UserInfo1 &AccountDetails

const rohit:combine={
    first:"rohit",
    last:"agr",
    age:30,
    email:"rohit@gmail.com",
    password:"123"
}