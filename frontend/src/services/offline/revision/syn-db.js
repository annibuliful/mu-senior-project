import { exportDB, importDB } from "dexie-export-import";
import db, { restore } from "../db";
import { API_URL, STAIC_PATH_URL, FETCH_API_OPTION } from "../../constants";

export const exportDb = async userId => {
  const blob = await exportDB(db, { prettyJson: true });

  const formData = new FormData();
  const file = new File([blob], "backup.json");
  formData.append("file", file);

  const uploadResponse = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData
  });

  const uploadFilePath = (await uploadResponse.json()).filename;

  const updateRevisionData = {
    filePath: uploadFilePath
  };

  const updateRevision = await fetch(`${API_URL}/users/${userId}/revision`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateRevisionData)
  });
  restore();
  console.log("updateRevision", updateRevision);
};

export const importDb = async (userId, isDelete = true) => {
  console.log("aaaa", isDelete);
  const response = await fetch(
    `${API_URL}/users/${userId}/revision/lastest`,
    FETCH_API_OPTION
  );
  const data = await response.json();
  const filePath = data.filePath;

  const filePathResponse = await fetch(
    `${STAIC_PATH_URL}/${filePath}`,
    FETCH_API_OPTION
  );

  const revisionData = await filePathResponse.text();

  const blobData = new Blob([revisionData], { type: "text/json" });
  console.log("blobData", blobData);
  if (isDelete) {
    await db.delete();
    restore();
  }

  await importDB(blobData);
};
