
/*
Properties:
O(n) extra space
O(n^2) time (for few unique keys), but typically O(n·log(n)) if recursion is balanced
not stable
not adaptive
Use cases:
Quicksort is in place and has low overhead. If a stable sort is not necessary. It has a higher worstcase time complexity than merge sort (if pivot is not in center of array)
*/
var quickSort = function(array,start,stop){
    if(start === undefined){
      start = 0;
    }
    if(stop === undefined){
      stop = array.length-1;
    }
    if(start < stop){
      let partitionElt = partition(array,start,stop);
      quickSort(array,start,partitionElt-1);
      quickSort(array,partitionElt+1,stop);
    }
    if((stop-start) === array.length-1){
      return array;
    }
  }
  
  var partition = function(array,start,stop){
    let pivot = array[stop];
    let pivotLoc = start;
    for(let i=start;i<stop;i++){
      if(array[i]<=pivot){
        swap(array,pivotLoc,i);
        pivotLoc++;
      }
    }
    swap(array,pivotLoc,stop);
    return pivotLoc;
  }
  
  function swap(arr,i1,i2){
    if(i1 === i2){
      return;
    }
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
  }
  quickSort([5,3,1,4,6,2]);