/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length, tmp = 0, tmpArr = [];
    for (let i=0; i<Math.floor(n/2); i++) {
        tmpArr = matrix[i];
        matrix[i] = matrix[n-i-1];
        matrix[n-i-1] = tmpArr;
    }
    for (let i=0; i<n-1; i++) {
        for (let j=i+1; j<n; j++) {
            tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
};

