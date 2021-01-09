//while n+1 < n ... swap.
//arr.length = 5

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        for(var j = i-1; j >= 0; j--){
            if (tempI < arr[j]){
                arr[j+1] = arr[j];
            }
            else {
                break;
            }
        }
    }
    return(arr);
}
console.log(insertionSort([12, 3, 16, 2, 80]));
console.log(insertionSort([7, 6, 5, 4, 3, 2, 1]));

/**
   * Sorts an array of objects according to an array of keys.
   * 
   * @param {Object[]} arr an UNSORTED array of objects
   * @param {string[]} keys an array of keys to sort by
   * 
   * Use any of the sorting algos we've covered thus far.
   */
  
  function multiKeySort(arr, keys) {
    // your code here
    //sort first names,
    newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i].firstName === arr[i+1].firstName){
            if (arr[i].lastName < arr[i+1].lastName)
        }
        newArr.push(arr[i].firstName);
    }
    insertionSort(newArr);
    console.log(newArr);
  }
  
  console.log(multiKeySort([
    {
      firstName: 'Lee',
      lastName: 'Babba'
    },
    {
      firstName: 'Lee',
      lastName: 'Abba'
    },
    {
      firstName: 'Adam',
      lastName: 'Smith'
    }
  ], ['firstName', 'lastName']));
  
  // should log [
  //   {
  //     firstName: 'Adam',
  //     lastName: 'Smith'
  //   },
  //   {
  //     firstName: 'Lee',
  //     lastName: 'Abba' },
  //   {
  //     firstName: 'Lee',
  //     lastName: 'Babba'
  //   }
  // ]
