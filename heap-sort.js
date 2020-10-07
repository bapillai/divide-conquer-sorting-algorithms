function heapSort(array){
    buildMaxHeap(array);
    for(let endIdx=array.length-1;endIdx>0;endIdx--){
        swap(0,endIdx,array);
        shiftDown(0,endIdx-1,array);
    }
    return array;
}

function buildMaxHeap(array){
    let firstParentIdx = Math.floor((array.length-1)/2);
    for(let currentIdx=firstParentIdx;currentIdx>=0;currentIdx--){
        shiftDown(currentIdx,array.length-1,array);
    }
}

function shiftDown(currentIdx,endIdx,heap) {
    let childOneIdx = 2 * currentIdx + 1;
    while(childOneIdx <= endIdx){
        let childTwoIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
        let idxToSwap;
        if(heap[childTwoIdx] > heap[childOneIdx]){
            idxToSwap = childTwoIdx;
        } else {
            idxToSwap = childOneIdx;
        }
        if(heap[idxToSwap] > heap[currentIdx]){
            swap(idxToSwap,currentIdx,heap);
            currentIdx = idxToSwap;
            childOneIdx = 2 * currentIdx + 1;
        } else {
          return;
        }
    }
}

function swap(i1,i2,arr){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

console.log(heapSort([5,3,1,4,6,2]));