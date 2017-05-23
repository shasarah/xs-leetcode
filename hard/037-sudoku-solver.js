/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
  if (board === null || board.length === 0) {
    return;
  }
  solve(board);
}

function solve(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        for (let c = 1; c <= 9; c++) { //trial. Try 1 through 9
          if (isValid(board, i, j, c + '')) {
            board[i][j] = c + ''; //Put c for this cell
            // board[i] = replaceAt(board[i], j, c+'');

            if (solve(board)) {
              return true; //If it's the solution return true
            } else {
              board[i][j] = '.'; //Otherwise go back
              // board[i] = replaceAt(board[i], j, '.');
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(board, row, col, c) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] !== '.' && board[i][col] === c) {
      return false; //check row
    }
    if (board[row][i] !== '.' && board[row][i] === c) {
      return false; //check column
    }
    let b_r = Math.floor(row / 3) * 3 + Math.floor(i / 3),
      b_c = Math.floor(col / 3) * 3 + i % 3;
    if (board[b_r][b_c] !== '.' && board[b_r][b_c] === c) {
      return false; //check 3*3 block
    }
  }
  return true;
}

var my_board = 
[ [ '.', '.', '9', '7', '4', '8', '.', '.', '.' ],
  [ '7', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '.', '2', '.', '1', '.', '9', '.', '.', '.' ],
  [ '.', '.', '7', '.', '.', '.', '2', '4', '.' ],
  [ '.', '6', '4', '.', '1', '.', '5', '9', '.' ],
  [ '.', '9', '8', '.', '.', '.', '3', '.', '.' ],
  [ '.', '.', '.', '8', '.', '3', '.', '2', '.' ],
  [ '.', '.', '.', '.', '.', '.', '.', '.', '6' ],
  [ '.', '.', '.', '2', '7', '5', '9', '.', '.' ] ];
console.log(solveSudoku(my_board));

