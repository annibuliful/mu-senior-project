// import db from "../db";

// unspecified
// overdue
// vaccinated
// vaccinating
// all
import listVaccines from "../../../locale/EN/vaccines";
import listByChildId from "./list-child-id";
import recordByChildId from "../record/getByChildId";
import differenceInDays from "date-fns/differenceInDays";
export default async ({ search, filter, sort, childId }) => {
  const isEmpty = search === "" && filter === "" && sort === "";
  let listDefault = await listByChildId(childId);

  if (isEmpty) {
    return listDefault;
  }

  if (search) {
    listDefault = listDefault.filter(
      el =>
        el.customData.selectedVaccines[0].toLowerCase().search(search) !== -1
    );
  }

  if (filter === "unspecified") {
    listDefault = listVaccines
      .filter(
        el =>
          !listDefault.find(old => el.vaccineId === old.customData.vaccineId)
      )
      .map(el => ({
        date: new Date(),
        customData: {
          note: "",
          time: "",
          selectedVaccines: [el.vaccineNameNormal],
          childname: el.vaccineMedicalName
        }
      }));
  } else if (filter === "all") {
    return listDefault;
  } else if (filter === "vaccinated") {
    const listRecords = await recordByChildId(childId);
    listDefault = listRecords.map(el => ({
      date: new Date(),
      customData: {
        note: "",
        time: "",
        selectedVaccines: el.selectedVaccines.map(el => el.tag),
        childname: el.childname
      }
    }));
    if (search !== "") {
      listDefault = listDefault.filter(
        el =>
          el.customData.selectedVaccines[0]
            .toLowerCase()
            .search(search.toLowerCase()) !== -1
      );
    }
  } else if (filter === "overdue") {
    listDefault = listDefault.filter(el => {
      const result = differenceInDays(new Date(el.dates), new Date());
      return result + 7 <= 0;
    });
  } else if (filter === "vaccinating") {
    listDefault = listDefault.filter(el => {
      const result = differenceInDays(new Date(el.dates), new Date());
      return result < 7 && result >= 0;
    });
  }

  if (sort === "name") {
    listDefault = listDefault.sort((a, b) => {
      if (a.customData.selectedVaccines[0] < b.customData.selectedVaccines[0]) {
        return -1;
      }
      if (a.customData.selectedVaccines[0] > b.customData.selectedVaccines[0]) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "disease") {
    listDefault = listDefault.sort((a, b) => {
      if (a.customData.selectedVaccines[0] < b.customData.selectedVaccines[0]) {
        return -1;
      }
      if (a.customData.selectedVaccines[0] > b.customData.selectedVaccines[0]) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "date") {
    listDefault = listDefault.sort(
      (a, b) => new Date(b.dates) - new Date(a.dates)
    );
  }

  return listDefault;
};
