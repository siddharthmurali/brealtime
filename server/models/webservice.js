WebService = {
    solvePuzzle: function(body, callback){

        //helper functions - mostly found on stackoverflow
        function listToMatrix(list, elementsPerSubArray) {
            var matrix = [], i, k;
      
            for (i = 0, k = -1; i < list.length; i++) {
                if (i % elementsPerSubArray === 0) {
                    k++;
                    matrix[k] = [];
                }
      
                matrix[k].push(list[i]);
            }
      
            return matrix;
          }
        function arraymove(arr, fromIndex, toIndex) {
            var element = arr[fromIndex];
            arr.splice(fromIndex, 1);
            arr.splice(toIndex, 0, element);
        } 
    
        function chunk(str, n) {
            var ret = [];
            var i;
            var len;
        
            for(i = 0, len = str.length; i < len; i += n) {
                ret.push(str.substr(i, n))
            }
        
            return ret
        };

        //initial order of 4 letters - A B C D. This will be used later on to store the order in descending order of greatness.
        var order = ['A','B','C','D'];

        //split puzzle from leading text
        var puzzle = body.split(':')[1];

        //split, filter out new line characters and make it a matrix with 5 columns
        var puzzleArray = puzzle.split('');
        puzzleArray = puzzleArray.filter(a => a !== '\n')
        var puzzleMatrix = listToMatrix(puzzleArray, 5);

        //loop through the matrix and run some conditions
        for(var i = 0; i < puzzleMatrix.length; i++) {
          var row = puzzleMatrix[i];
          for(var j = 0; j < row.length; j++) {
            var y = puzzleMatrix[i][0];
            var x = puzzleMatrix[0][j];
            //off the bat we know A=A, etc. so we can add '='
            if(i == j && i!=0){
              puzzleMatrix[i][j] = "=";
            }
            //if we have a '>' or '<' move the character around in order array to create an array with descending order of greatness
            if(puzzleMatrix[i][j] == ">"){
              if(order.indexOf(y) > order.indexOf(x)){
                arraymove(order, order.indexOf(y), order.indexOf(x))
              }
              console.log(y + ">" + x)
            }

            if(puzzleMatrix[i][j] == "<"){
              if(order.indexOf(y) < order.indexOf(x)){
                arraymove(order, order.indexOf(y), order.indexOf(x))
              }
              console.log(y + "<" + x)
            }
          }
        }

        /*
            now that we have created the order array above, go through the matrix and 'solve' the puzzle
            by adding '>' and "<" in the appropriate cells by referencing order array
        */
        for(var i = 0; i < puzzleMatrix.length; i++) {
          var row = puzzleMatrix[i];
          for(var j = 0; j < row.length; j++) {
            var y = puzzleMatrix[i][0];
            var x = puzzleMatrix[0][j];

            if(puzzleMatrix[i][j] == "-"){
              if(order.indexOf(x) > order.indexOf(y)){
                puzzleMatrix[i][j]=">";
              }
              else{
                puzzleMatrix[i][j]="<";
              }
            }
          }
        }

        //join the matrix, add the newline characters and return the result to the router
        var puzzleMatrixString = puzzleMatrix.map(e => e.join('')).join('');
        var puzzleMatrixStringFormat=chunk(puzzleMatrixString, 5).join("\n");
        console.log("final order of greatness: " + order);
        console.log("solved puzzle: \n" + puzzleMatrixStringFormat); 
        callback(null, puzzleMatrixStringFormat);
    }
    
}

module.exports = WebService;