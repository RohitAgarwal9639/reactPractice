//never usage in TypeScript
//function that always throws an error
//function that has an infinite loop
//variable that can never have a value

function throwError(msg:string):never{
    throw new Error(msg);
}

function infiniteLoop():never{
    while(true) {
        // do something forever
    }
}

let x:never;

function neverReturn():never {
    while (true) {
        // This function will never return
    }
}

x=neverReturn(); // This will cause an error if you try to assign it to a variable