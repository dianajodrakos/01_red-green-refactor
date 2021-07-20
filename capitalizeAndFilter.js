
export function capitalizeAndFilter(array) {
  const newArray = [];
  for (const item of array) {
    if (item.charAt(0) !== 'f' && item.charAt(0) !== 'F') {
      newArray.push(item.toUpperCase());
    }
  }
  return newArray;
}
