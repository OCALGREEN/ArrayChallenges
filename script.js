function alwaysHungry(arr) {
    // your code here 
    for(var i = 0; i < arr.length; i++)
    {
        if (arr[i] == "food")
        {
            console.log("yummy"); 
        }
        else 
        {
            console.log("I'm hungry"); 
        }
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] > cutoff)
        {
            filteredArr.push(arr[i]); 
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(var i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    sum = sum / arr.length;
    var count = 0
    // count how many values are greated than the average
    for(var j = 0; j < arr.length; j++)
    {
        if(arr[j] > sum)
        {
            count++; 
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function reverse(arr) {
    // your code here
    var newArr = []; 

    for(var i = arr.length-1; i >= 0; i--)
    {
        newArr.push(arr[i]); 
    }
    return newArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here 
    var x = 0; 
    var y = 1; 
    for(var i = 0; i < n-2; i++)
    {
        fibArr.push(fibArr[x] + fibArr[y]); 
        x++; 
        y++;  
    }

    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
