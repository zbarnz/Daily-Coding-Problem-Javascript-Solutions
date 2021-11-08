
function initMatrix(string, lines) { 
  //initialize a matrix that will be the grid for zigzag string
  let matrix = new Array
  for(let i=0; i<lines; i++) {
    matrixLine = new Array
    for(let s=0; s<string.length; s++){
      matrixLine.push(' ')
    }
    matrix.push(matrixLine)
  }
  return matrix;
}

function zigzag(string, lines){
  //go through matrix in a zigzag pattern
  
  let matrix = initMatrix(string, lines);
  let lineBounce = 0 /*linebounch is a variable that
  tests if the zigzag pattern has reached the first
  or last line */
  
  for(i=0; i<string.length; i++){
    
    matrix[lineBounce][i] = string[i]
    
    if(lineBounce == 0) {var op = '++';}
    //if the linebounce hits the first line, start
    //moving down the lines
    if(lineBounce == lines-1) {var op = '--';}
    //if the linebounce hits the bottom, start moving
    //up the lines
    if(op == '++') { lineBounce++ }
    if(op == '--') { lineBounce-- }
  }

  for(l=0; l<matrix.length; l++){
    console.log(matrix[l].join('')) 
    //log the matrix as a string in the console
  }
}


zigzag('ThisIsTheSolution', 5);

