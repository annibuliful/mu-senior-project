export const pagination = (limit, offset) => (_, index) =>
  index > offset && index < offset + limit;
