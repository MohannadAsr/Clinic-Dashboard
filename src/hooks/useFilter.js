// Custom Hook to filter any array of objects by passing the (selected array , field name  , the wanted value )
// Also Can be used instead of find() for users with unique id's
export default function useFilter(array, filterField, value) {
  if (filterField && value) {
    return array.filter((item) => item[filterField] === value);
  } else {
    return array || null;
  }
}
