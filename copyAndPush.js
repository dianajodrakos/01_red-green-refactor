
export function copyAndPush(array, item) {
  const newArray = [...array];
  newArray.push(item);
  return newArray;
}
