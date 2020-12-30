export const pagination = (limit, offset) => (_, index) =>
  index + 1 > offset && index < offset + limit;
