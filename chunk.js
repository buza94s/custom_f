/*
Создает массив элементов, разбитых на группы по длине размера.
Если массив не может быть разделен равномерно, то последним фрагментом будут оставшиеся элементы.
*/
const chunk = (arr, n) => {
  const result = [];
  const newArr = [...arr];
  const f = (arr) => {
    if (arr.length < n) {
      return result.push(arr);
    }
    result.push(arr.splice(0, n));
    return arr.length > 0 && f(arr);
  };
  f(newArr);
  return result;
};
/*
  chunk(['a', 'b', 'c', 'd'], 2);
  => [['a', 'b'], ['c', 'd']]
 
  chunk(['a', 'b', 'c', 'd'], 3);
  => [['a', 'b', 'c'], ['d']]
*/
