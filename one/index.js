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

// 2. You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
//Write a program that returns the girl's age (0-9) as an integer.
//Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
      // Extract(parseInt) the frist character from the input string and convert it to an integer
      const age = parseInt(inputString[0])
      
      // Return the extracted age as an integer
      return age
    }

    // 3. Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
    function solution(a) {
      // create a set to store seen elements
    const seen = new Set();
    
    for(let i = 0; i < a.length; i++) {
      // if element is already in the set, return it
      if(seen.has(a[i])) {
        return a[i]
      }
      //Add element to the set
      seen.add(a[i])
    }
    // if no duplicate is found, return -1
    return -1;
    }