// import db from "../db";

// unspecified
// overdue
// vaccinated
// vaccinating
// all
import listVaccines from "../../../locale/EN/vaccines";
import listByChildId from "./list-child-id";
import recordByChildId from "../record/getByChildId";
export default async ({ search, filter, sort, childId }) => {
  const isEmpty = search === "" && filter === "" && sort === "";
  let listDefault = await listByChildId(childId);

  if (isEmpty) {
    return listDefault;
  }

  if (search) {
    console.log("search keyword", search);
    listDefault = listDefault.filter(
      el =>
        el.customData.selectedVaccines[0].toLowerCase().search(search) !== -1
    );

    console.log("result from search", listDefault);
  }

  if (filter === "unspecified") {
    // listDefault = listDefault.filter(
    //   el => !listVaccines.find(old => old.vaccineId === el.customData.vaccineId)
    // );

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
    // listDefault = await listByChildId(childId);
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
    // const listRecords = await recordByChildId(childId);
    listDefault = listDefault.filter(el => el.dates > new Date());
  } else if (filter === "vaccinating") {
    // listDefault = listDefault
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
