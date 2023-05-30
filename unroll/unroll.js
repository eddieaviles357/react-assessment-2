/** given input 
    const square = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];
    should return one array with all the values in a spiral
    [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
*/

function unroll(squareArray) {
    
    let rowStart = 0;
    let rowEnd = squareArray.length - 1;
    let colStart = 0;
    let colEnd = squareArray[0].length - 1;
    let result = [];
    // check if it's a square ( length and height are the same )
    if(!(rowEnd === colEnd)) return -1;
    /** traverses in a spiral like pattern **
     * starts to traverse from 
     * left to right
     * top to bottom
     * right to left
     * bottom to top
     */
    while( (rowStart <= rowEnd) && (colStart <= colEnd) ) {
        // start from the left and go right
        for(let i = colStart; i <= colEnd; i++) {
            result.push( squareArray[rowStart][i] );
        };
        // shrink towards the bottom since we visited the top
        rowStart++;
        // start from the top and go down
        for(let i = rowStart; i <= rowEnd; i++) {
            result.push(squareArray[i][colEnd])
        };
        // shrink to the left since we visited the right
        colEnd--;
        // start from the right and go left
        for(let i = colEnd; i >= colStart; i--) {
            result.push(squareArray[rowEnd][i])
        };
        // shrink towards top since we visited the bottom
        rowEnd--;
        // start from the bottom and go up
        for(let i = rowEnd; i >= rowStart; i--) {
            result.push(squareArray[i][colStart])
        };
        // shrink to the right since we visited the left
        colStart++;
    };
    return result;
};

module.exports = unroll;