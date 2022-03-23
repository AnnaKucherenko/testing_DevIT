const matrix = [
 [5, 3, 6], 
 [7, 11, 2],
 [15, 9, 4]
]

function newMatrix(matrix) {
    const newArray = matrix.flat();
    const minNumber = Math.min(...newArray);
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j]%2!==0) {
                matrix[i][j]=matrix[i][j]*minNumber;   
            }
        } 
    }

    console.log(matrix);
}

newMatrix(matrix);   
