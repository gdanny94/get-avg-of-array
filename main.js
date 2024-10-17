function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    
    return Math.floor(marks.reduce((a,b)=> a + b,0) / marks.length)
  }
  
  // Explanation:
  // The reduce method sums up all elements in the array.
  // The average is calculated by dividing the sum by the array’s length.
  // Math.floor is used to round the result down to the nearest integer.