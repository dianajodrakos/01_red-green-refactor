
export function capitalizeAndFilter(array) {
  return array
    .filter(item => item.charAt(0) !== 'f' && item.charAt(0) !== 'F')
    .map(item => item.toUpperCase()
    );
}
