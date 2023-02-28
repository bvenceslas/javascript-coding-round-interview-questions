`
This problem was posed by Google. 
Given a space-delimited string of words, reverse the words in the string. 
For example, given "hello world here", 
return "here world hello" Follow-up: 
given a mutable string representation, 
can you perform this in-place?
`
const sentence = "hello world here";

// we can do it in one line like this:
const result = sentence.split(" ").reverse().join(" ");
console.log('result :>> ', result);