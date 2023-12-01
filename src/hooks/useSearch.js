// Custom Hook to search in any array of objects by passing the (selected array , field name  , the wanted value as string or a regex )
export default function useSearch(array, filterField, value) {
  const regex = new RegExp(`${value}`, "i");
  if (filterField && value) {
    return array.filter((item) => item[filterField].match(regex));
  } else {
    return array || null;
  }
}
