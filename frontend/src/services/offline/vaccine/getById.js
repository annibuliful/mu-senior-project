import db from "../db";

export default async id => {
  return (
    await db
      .table("vaccines")
      .where("vaccineId")
      .equals(id)
      .toArray()
  )[0];
};
