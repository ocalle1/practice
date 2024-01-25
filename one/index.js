// 1. In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// A. given a string of numbers seperated by spaces. "1 2 3 4 5"; goal is to find the highest and lowest in the string

function highAndLow(numbers){
  
    // B. splits the input into an array of numbers
  const number = numbers.split(' ').map(Number)
  
  // C. Find the highest/lowest numbers
  const highest = Math.max(...number)
  const lowest = Math.min(...number)
  
  // D. Return the result as a formatted string
  const result = `${highest} ${lowest}`
  return (
    result
    // console.log(result)
         )
         
    
  }

