/*
Properties:
O(n) extra space for iterative solution
O(n·log(n)) time (for worst and best)
stable - the only stable O(n·log(n)) sorting algorithm
not adaptive
Use cases:
If stabilty is a requirement and using extra space is no concern, merge sort is great because it's simple to implement, it's the only stable O(nlog(n)) sorting algorithm.
*/
var mergeSortRecursive = function(array){
    if(array.length <= 1){
      return array;
    }
    let leftArray = array.slice(0,array.length/2);
    let rightArray = array.slice(array.length/2);
    let leftSorted = mergeSortRecursive(leftArray);
    let rightSorted = mergeSortRecursive(rightArray);
    return merge(leftSorted,rightSorted);
  }
  
  var mergeSortIterative = function(array){
    let splitArr = array.map(function(element){ return [element]});
    while(splitArr.length > 1){
      let result = [];
      for(let i=0;i<splitArr.length;i+=2){
        if(splitArr[i+1]){
          result.push(merge(splitArr[i],splitArr[i+1]));
        }else{
          result.push(splitArr[i]);
        }
      }
      splitArr = result;
    }
    return splitArr[0];
  }
  
  function merge(left,right){
    let result = [],iLeft=0,iRight=0;
    while(result.length < (left.length+right.length)){
      if(iLeft === left.length){
        result = result.concat(right.slice(iRight));
      }else if(iRight === right.length){
        result = result.concat(left.slice(iLeft));
      }else if(left[iLeft] < right[iRight]){
        result.push(left[iLeft++]);
      }else{
        result.push(right[iRight++]);
      }
    }
    return result;
  }
  
  console.log(mergeSortRecursive([9,3,2,6,8,7,4]));
  console.log(mergeSortIterative([9,3,2,6,8,7,4]));
  