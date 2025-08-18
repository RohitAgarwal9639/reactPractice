type User1={
    name:string,
    age?:number, // ? means optional properties
    location:string
}

const user1:User1={
    name:"aman",
    location:"mtr",
    age:30
}

const user2:User1={
    name:"aman",
    location:"mtr",
}


//readonly property

type User2={
    name:string,
    age?:number, // ? means optional properties
    readonly location:string
}

const user3:User2={
    name:"aman",
    location:"mtr",
    age:30
}
// user3.location="hy" //error because real only