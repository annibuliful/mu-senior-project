import db from "../db";

export default ({
  fullname,
  birthDate,
  profileImg,
  diseases,
  receivedVaccines,
  congenitalDisease,
  userId,
}) => {
  return db.table("families").add({
    fullname,
    userId,
    birthDate,
    profileImg,
    diseases,
    congenitalDisease,
    receivedVaccines,
    isSync: false,
    isDelete: false,
  });
};
