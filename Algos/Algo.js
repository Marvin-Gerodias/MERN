// function bubble_sort(arr){
//     var len = arr.length;
//     for (var i = 0; i < arr.length; i++){
//         for (var j = 0; j < arr.length; j++){
//         if (arr[j] > arr[j+1]){
//             var temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
//     return arr;
// }

// console.log(bubble_sort([1, 5, 2, 8, 3, 4]));


// function bubbleSort(Arr) {
//     var len = Arr.length;
//     for (var i = 0; i < len; i++) {
//         for (var j = 0; j < len; j++) {
//             if (Arr[j] > Arr[j + 1]) {
//                 var temp = Arr[j];
//                 Arr[j] = Arr[j + 1];
//                 Arr[j + 1] = temp;
//             }
//         }
//     }
//     return Arr;
// }

// console.log(bubbleSort([12, 3, 4, 6, 2, 8, ]));

// funtion selection_sort(arr){
//     for(var i = 0; i < arr.length; i++){
        
//     }
// }



function combineSorted(arr1, arr2){
    let newArr = [];
    let counter1 = 0;
    let counter2 = 0;


    while (counter1 < arr1.length && counter2 < arr2.length){
        if (arr1[counter1] < arr2[counter2]){
            newArr.push(arr1[counter1]);
            counter1++;
        }
        else {
            newArr.push(arr2[counter2]);
            counter2++;
        }
        
    }
    while (counter1 < arr1.length){
        newArr.push(arr1[counter1]);
        counter1++;
    }
    while (counter2 < arr2.length){
        newArr.push(arr2[counter2]);
        counter2++;
    }
    return newArr;
}

console.log(combineSorted([2, 4, 6], [1, 3, 5]));