/*
Создает новый массив, объединяющий массив с любыми дополнительными массивами и/или значениями.
*/
const concat = (...arr) => {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) result.push(...item);
    else result.push(item);
  });
  return result;
};
/*
let array = [1];
let other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
*/
console.log(concat([1, 2, 3], 333, [[5]]));
