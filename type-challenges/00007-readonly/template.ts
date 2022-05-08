type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**JS写法 */
// function readonly(obj) {
//   const result = {};
//   for (const key in obj) {
//     result['readonly' + key] = obj[key];
//   }
//   return result;
// }
