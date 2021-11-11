// a little bit spaghetti

function factors(int) {
  let smallest;
  let facOne = null;
  let facTwo = null;
  
  for(let i = int-1; i>1; i--){
    
    if(int%i == 0){
      facOne = i
      facTwo = int/i
    } else {
      continue;
    }

    if(facOne > facTwo) {
      if(facOne<smallest || smallest == undefined){
        smallest = facOne
      }
    } else {
      if(facTwo<smallest || smallest == undefined){ smallest = facTwo
      }
    }
  }
   
  return smallest;

}

function stepsToOne(int) {
  let steps = 0
  
  while(int != 1){
    console.log('int: ' + int)
    let factor = factors(int)
    if(factor > 1){
      int = factor;
      steps += 1
    } else {
      int -= 1;
      steps += 1
    }
  }

  console.log(steps)
}

stepsToOne(1000000007)