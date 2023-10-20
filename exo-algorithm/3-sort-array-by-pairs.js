`given an array, sort its elements by pair

eg: arr = [12, 50, 20, 2, 1, 30, 5, 3, 5, 6, 7, 9, 3, 20] should be sorted
and become [ 12, 50, 2, 20, 1, 30, 3, 5, 5, 6, 7, 9, 3, 20 ]
`;
const arr = [12, 50, 20, 2, 1, 30, 5, 3, 5, 6, 7, 9, 3, 20];

let pairs = [];
for (let i = 0; i < arr.length - 1; i += 2) {
  // assign sorted array
  pairs.push(...[arr[i], arr[i + 1]].sort((a, b) => a - b));
}

console.log(pairs);
