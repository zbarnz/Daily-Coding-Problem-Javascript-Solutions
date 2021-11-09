function patternsInString(string, pattern) {
  
  let PatternReg = new RegExp(pattern, "g");
  let indexArray = new Array

  while((match = PatternReg.exec(string)) != null) {
    indexArray.push(match.index)
  }

  console.log(indexArray)
}

patternsInString("abracadabra", "abr");