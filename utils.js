function matrixProduct(mat1, mat2) {
    let result = [];
    for (let i = 0; i < mat1.length; i++) {
        result[i] = [];
        for(let j = 0; j < mat2.length; j++) {
            let sum = 0;
            for(let k = 0; k < mat1.length; k++) {
                sum += mat1[i][k] * mat2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;

    

}

function beautyLog(matrixProduct){
    for(let i = 0; i < matrixProduct.length; i++){
        console.log(matrixProduct[i]);
    }
}



let mat1 = [
    [1, 2],
    [3, 4]

]

let mat2 = [
    [5, 6],
    [7, 8]
]

beautyLog(matrixProduct(mat1, mat2));


// 1st




function sumOfMatrcies(A, B){
    if(A.length !== B.length || A[0].length !== B[0].length){
        console.log("error");
        return;
    }
    for(let row = 0; row < A.length; row++){
    for(let col = 0; col < A[0].length; col++){
        A[row][col] += B[row][col]

    }
}
return A;

}
 function beautyLog(sumOfMatrcies){
     for(let i = 0; i < sumOfMatrcies.length; i++){
         console.log(sumOfMatrcies[i]);
     }
 }


let A = [
    [1, 2],
    [3, 4]
]

let B = [
    [5, 6],
    [7, 8]
]

beautyLog(sumOfMatrcies(A, B));

// // // 2nd



function sumOfEachRow(matrix = []) {
    let result = [];
    for(let row = 0; row < A.length; row++) {
      let sum = 0;
      for(let col = 0; col < A[i].length; col++) {
        sum += matrix[row][col]
      }
      result.push(sum)
    }
    return result;
  }
   
  
  let matrix = [
    [10, 15],
    [20, 25],
    [30, 35]
  ]
  console.log(sumOfEachRow);

// // 3rd



module.exports = [
    beautyLog,
    sumOfMatrcies,
    matrixProduct,
    sumOfEachRow

]