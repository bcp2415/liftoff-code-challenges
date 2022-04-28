Given an array (or list) of integers, find and return the index of the highest value in the array.

// function, input = array of integers, pos / neg, return index (not integer) of highest value
// return first index of greatest value

// for loop
// find highest value
// get index of that value

function findMaxIndex(arr) {
	let max = arr[0];
  let index = 0;
  
  for (let i = 1; i < arr.length; i++) {
  	if (arr[i] > max) {
    	max = arr[i];
      index = i;
    }
  }
  
  return index;
}

const input = [-4, 50, 0, 1];

