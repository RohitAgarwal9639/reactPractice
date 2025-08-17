// Type Inference in TypeScript

// TypeScript can infer types based on the assigned value
let inferredString = "This is a string"; // inferred as string
let inferredNumber = 42; // inferred as number
let inferredBoolean = false; // inferred as boolean

console.log(inferredString); // Output: This is a string
console.log(inferredNumber); // Output: 42
console.log(inferredBoolean); // Output: false

console.log(typeof inferredString); // Output: string
console.log(typeof inferredNumber); // Output: number
console.log(typeof inferredBoolean); // Output: boolean

// inferredString=12; // This will cause a TypeScript error because 12 is not a string
//but above expression will not cause an error in JavaScript



//any type in TypeScript
let anyValue: any = "This can be anything";
console.log(anyValue); // Output: This can be anything
anyValue = 100; // Now it's a number
console.log(anyValue); // Output: 100
anyValue = true; // Now it's a boolean
console.log(anyValue); // Output: true