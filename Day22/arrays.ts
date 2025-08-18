const nums:number[] = [1, 2, 3, 4, 5];

// Accessing elements
console.log(nums[0]); // Output: 1
console.log(nums[2]); // Output: 3
console.log(nums);

const str:string[] = ['apple', 'banana', 'cherry'];

// Accessing elements
console.log(str[0]); // Output: apple
console.log(str[1]); // Output: banana

const items:string[]=[];
// Adding elements
items.push('item1');
items.push('item2');
console.log(items); // Output: ['item1', 'item2']
// items.push(12); // TypeScript will throw an error here since 12 is not a string

// Removing elements
items.pop();
console.log(items); // Output: ['item1']

const numList:number[]=[];
// Adding elements
numList.push(10);
numList.push(20);
console.log(numList); // Output: [10, 20]
// numList.push('30'); // TypeScript will throw an error here since '30' is not a number


//alternative way to declare an array

const items1:Array<string>=["itemA", "itemB", "itemC"];

