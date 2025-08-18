const matrix:number[][]=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// Accessing elements
console.log(matrix[0][0]);
console.log(matrix[1][2]);

// Modifying elements
matrix[0][0] = 10;
console.log(matrix[0][0]);
matrix.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
        console.log(`Row ${rowIndex}, Column ${colIndex}: ${value}`);
    })
})