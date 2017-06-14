/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid.length <= 0 || obstacleGrid.length > 0 && obstacleGrid[0].length <= 0) {
        return 0;
    }
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    
    let rows = obstacleGrid.length, columns = obstacleGrid[0].length;
    let path = [[1]];

    for (let i=1; i<columns; i++) {
        path[0][i] = obstacleGrid[0][i] ? 0 : path[0][i-1];
    }

    for (let r=1; r<rows; r++) {
      path[r] = [];
        path[r][0] = obstacleGrid[r][0] ? 0 : path[r-1][0];
        for (let c=1; c<columns; c++) {
            path[r][c] = obstacleGrid[r][c] ? 0 : path[r-1][c] + path[r][c-1];
        }
    }

    return path[rows-1][columns-1];
};

