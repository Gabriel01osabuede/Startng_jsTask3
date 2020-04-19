'use strict'

// creating and array to store the data being given
let data_array = [];
// creating a function to do the calculation
function datainput(data){
// using a for loop to iterate through the input given
  for (var i = 1; i <= data; i++){
    // using conditions to manipulate the data passed in.
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0){
      // pushing the manipulated data to the array
      data_array.push('yu-gi-oh');
    }else if (i % 2 == 0 && i % 3 == 0){
      data_array.push('yu-gi');
    }else if (i % 2 == 0 && i % 5 == 0){
      data_array.push('yu-oh');
    }else if (i % 3 == 0 && i % 5 == 0){
      data_array.push('gi-oh');
    }else if (i % 5 == 0){
      data_array.push('oh');
    }else if (i % 3 == 0){
      data_array.push('gi');
    }else if (i % 2 == 0){
      data_array.push('yu');
    }else{
      data_array.push(i);
    }
  }

}

// accepting input from the user
var input = +prompt("Put in a number: ");
// calling the function
datainput(input);
// logging data_array created already
console.log(data_array);
