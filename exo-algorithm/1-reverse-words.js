`
This problem was posed by Google. 
Given a space-delimited string of words, reverse the words in the string. 
For example, given "hello world here", 
return "here world hello" Follow-up: 
given a mutable string representation, 
can you perform this in-place?
`
const sentence = "hello world here";

// WAY 1
// we can do it in one line like this:
const result = sentence.split(" ").reverse().join(" ");
console.log('result :>> ', result);

// WAY 2
// in some cases, they can ask to avoid using the function ".reverse()" to see how you can build it.
// Here is how you can do it:

let wordArray = sentence.split(" ");
console.log('wordArray :>> ', wordArray);

let left;
let temp;
let right = wordArray.length - 1;

for (left = 0; left < right; left++, right--) {
    // swapping elements at the left and right indices 
    if (left < right) {
        temp = wordArray[left];
        wordArray[left] = wordArray[right];
        wordArray[right] = temp;
    }
}

// now we can join to form a sentence
const result2 = wordArray.join(' ');
console.log('result2 :>> ', result2);
