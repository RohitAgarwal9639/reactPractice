// funciton parameter annotation

function addOne(num: number) {
  return num + 1;
}

const res= addOne(10);

console.log(res); // Output: 11


// arrow function with parameter annotation
const double=(x,y)=>x*y;
const result = double(5, 2);

console.log(result); // Output: 10

const temp=double("a","2");
console.log(temp); // Output: NaN (since "a" is not a number)

const temp1=double("a","b");
console.log(temp1); // Output: NaN (since both "a" and "b" are not numbers)

const temp3=double("a",2);
console.log(temp3); // Output: NaN (since "a" is not a number)




function greet(person : string='Anonymous') {
    return `Hello, ${person}!`;
}

const res1= greet();
console.log(res1); // Output: Hello, Anonymous!

const res2= greet("Alice");
console.log(res2); // Output: Hello, Alice!


//return type annotation
function square(num: number): number {
    return num * num;
}

const squareResult = square(4);
console.log(squareResult); // Output: 16

//array funciton parameter annotation

const double2=(x:number): number => x * x;

const result2 = double2(5);
console.log(result2); // Output: 25
