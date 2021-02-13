/*
Создает массив со всеми удаленными значениями false.
Значения false, null, 0, "", undefined и NaN являются ложными.
*/
compact = (arr) => {
  const result = [];
  arr.forEach((item) => {
    item && result.push(item);
  });
  return result;
};
/*
compact([0, 1, false, 2, "", 3, NaN, null, undefined]);
// => [1, 2, 3] 
*/
