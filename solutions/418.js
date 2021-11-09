function bonusFinder(linesOfCode) {
  
  let bonuses = new Array(linesOfCode.length).fill(1) 
  //set minimum bonus of 1 for each coder
  
  for(i=0; i<linesOfCode.length; i++){
    
    if(linesOfCode[i] > linesOfCode[i-1]){
        bonuses[i] += bonuses[i-1];
        continue; 
        //we must continue if this check passes to prevent adding
        //double bonuses
      }
    
      if(linesOfCode[i] > linesOfCode[i+1]){
      bonuses[i] += bonuses[i+1];
    }

  }

  console.log(bonuses);

}

bonusFinder([10, 40, 200, 1000, 60, 30]) //test