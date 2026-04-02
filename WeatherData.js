var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];

//Function: print the highest temperature
function findHighestTemp(arr) {
    let highestTemp = arr[0];
    for (let temp of arr) {
        if (temp > highestTemp) {
            highestTemp = temp;
        }
    }
    console.log("Highest temp is:", highestTemp);
}


//Function: print the lowest temperature
function findLowestTemp(arr) {
    let lowestTemp = arr[0];
    for (let temp of arr) {
        if (lowestTemp > temp) {
            lowestTemp = temp;
        }
    } console.log(`Lowest temperature is: ${lowestTemp}`)
}

//function: find the average temperature

function findAverageTemp(arr) {
    let sumTemp = 0;
    for (let temp of arr) {
        sumTemp += temp;
    }
    let averageTemp = (sumTemp / (arr.length)).toFixed(1)
    console.log(`Average temperature is: ${averageTemp}`);

}

//function: find the Median temperature

 function findMedianTemp(arr) {
    //sắp xếp lại mảng
    arr.sort((a,b)=>a-b);
    let midIndex = Math.floor(arr.length/ 2); 
    let medianTemp;
    if (arr.length % 2 === 0) {
        medianTemp = ((arr[midIndex] + arr[midIndex - 1])/2).toFixed(1)
    } else{
        medianTemp =  arr[midIndex]
    }
    console.log(`Median is ${medianTemp}`)
 }

 //executive:
 
findHighestTemp(highTemperatures);
findLowestTemp(lowTemperatures);
findAverageTemp(highTemperatures);
findAverageTemp(lowTemperatures);
findMedianTemp(highTemperatures);
findMedianTemp(lowTemperatures);