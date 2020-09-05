import db from "../db";
import { pagination } from "../../../utils/filter";
export default async ({ limit, offset, name }) => {
  let result = await db.table("vaccines").toArray();

  const isSearchExist = name !== undefined;
  if (isSearchExist) {
    result = result.filter(vaccine => vaccine.search(name) !== -1);
  }

  const isPagination = limit !== undefined && offset !== undefined;
  if (isPagination) {
    result = result.filter(pagination(limit, offset));
  }

  return result;
};
