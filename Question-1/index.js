// Question-1
// lowerCaseWords: returns a Promise that filters non-strings and lowercases the rest
const lowerCaseWords = (arr) =>
  new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) return reject(new Error('Input must be an array'));
    const result = arr.filter((x) => typeof x === 'string').map((s) => s.toLowerCase());
    resolve(result);
  });

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then((out) => console.log(out))       //['pizza', 'wings']
  .catch((err) => console.error(err.message));
