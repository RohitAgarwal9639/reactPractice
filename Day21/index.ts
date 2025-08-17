type Person = {
    name: string;
};

const person: Person = {
    name: "John Doe"
};

console.log(person.name); // Output: John Doe

//learning annotations in TypeScript

//Strings
let greeting: string = "Hello, TypeScript!";
console.log(greeting); // Output: Hello, TypeScript!

greeting = "Hello, World!";
console.log(greeting);

// greeting = 23; // This will cause a TypeScript error because 23 is not a string

//Numbers
let age: number = 30;
console.log(age); // Output: 30

//age="30"; // This will cause a TypeScript error because "30" is not a number

//Booleans
let isActive: boolean = true;
console.log(isActive); // Output: true

//isActive = "yes"; // This will cause a TypeScript error because "yes" is not a boolean