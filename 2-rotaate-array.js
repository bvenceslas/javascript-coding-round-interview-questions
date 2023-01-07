`You may have been using JavaScript for a while. Do you think a simple JavaScript array question can be a challenge? 
Let’s use the following problem to test.
Problem: Rotate an array of n elements to the right by k steps. For example, 
with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4]. 
How many different ways do you know to solve this problem?
`
const myArray = [1, 2, 3, 4, 5, 6, 7];

const POSITION = myArray.length - 3;
let firstArray = []
let secondArray = []

let left
let temp
let right = myArray.length - 1;

for (left = 0; left < (myArray.length - 3); left++) {
    console.log('pushing :>> ', myArray[left]);
    firstArray.push(myArray[left]);
}

for (left = POSITION; left < (myArray.length); left++) {
    console.log('pushing :>> ', myArray[left]);
    secondArray.push(myArray[left]);
}


const result = secondArray.concat(firstArray);
console.log('result :>> ', result);
