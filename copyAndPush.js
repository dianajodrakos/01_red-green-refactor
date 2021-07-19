
export function copyAndPush(array, item) {
  const newArray = array.slice();
  newArray.push(item);
  return newArray;
}
