/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = [], cols = [], blocks = [];
    for (let i=0; i<9; i++) {
        rows[i] = {}; cols[i] = {}; blocks[i] = {};
    }
    for (let i=0; i<9; i++) {
        for (let j=0; j<9; j++) {
            let char = board[i][j];
            if (char !== '.') {
                k = Math.floor(i/3)*3 + Math.floor(j/3);
                if (rows[i][char] || cols[j][char] || blocks[k][char] ) {
                    return false;
                } else {
                    rows[i][char] = true;
                    cols[j][char] = true;
                    blocks[k][char] = true;
                }
            }
        }
    }
    return true;
};

