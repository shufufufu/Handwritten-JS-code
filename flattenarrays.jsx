let a = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
// 变成
let b = [1, 2, 3, 1, 2, 3, 1, 2, 3];

function flat(arr = [], result = []) {
  arr.forEach((v) => {
    if (Array.isArray(v)) {
      result = result.concat(flat(v, []));
    } else {
      result.push(v);
    }
  });
  return result;
}
