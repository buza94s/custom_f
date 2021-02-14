/*Сравнивает 2 массива и возвращает массив значений из первого массива которых нет во втором*/
const difference = (arr1, arr2) => {
  const result = [];
  arr1.forEach((item) => {
    arr2.indexOf(item, 0) === -1 && result.push(item);
  });
  return result;
};
/*
difference([2, 1], [2, 3]);
// => [1]
*/
