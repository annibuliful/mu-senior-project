export function orderBy(type, field) {
  return (a, b) => {
    if (type === "asc") {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    }

    if (a[field] < b[field]) {
      return 1;
    }
    if (a[field] > b[field]) {
      return -1;
    }
    return 0;
  };
}
