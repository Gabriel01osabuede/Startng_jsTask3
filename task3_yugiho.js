'use strict'

let data_array = [];

function datainput(data){

  for (var i = 1; i <= data; i++){
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0){
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


var input = +prompt("Put in a number: ");
datainput(input);
console.log(data_array);
