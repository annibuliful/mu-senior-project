import listVaccines from "../../../locale/EN/vaccines";
import listByChildId from "./list-child-id";
// import differenceInDays from "date-fns/differenceInDays";
export default async ({ search, filter, sort, childId }, language) => {
  const isEmpty = search === "" && filter === "" && sort === "";
  let listDefault = await listByChildId(childId, language);
  if (isEmpty) {
    return listDefault;
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
  } else if (filter === "vaccinated") {
    listDefault = listDefault.filter(el => el.status === "vaccinated");
  } else if (filter === "overdue") {
    // listDefault = listDefault.filter(el => {
    //   const result = differenceInDays(new Date(el.dates), new Date());
    //   return result + 7 <= 0;
    // });
    listDefault = listDefault.filter(el => el.status === "overdue");
  } else if (filter === "vaccinating") {
    // listDefault = listDefault.filter(el => {
    //   const result = differenceInDays(new Date(el.dates), new Date());
    //   return result < 7 && result >= 0;
    // });

    listDefault = listDefault.filter(el => el.status === "vaccinating");
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
    listDefault.sort((a, b) => {
      if (a.customData.selectedVaccines[0] < b.customData.selectedVaccines[0]) {
        return -1;
      }
      if (a.customData.selectedVaccines[0] > b.customData.selectedVaccines[0]) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "date") {
    listDefault.sort((a, b) => new Date(a.dates) - new Date(b.dates));
  }

  if (search) {
    listDefault = listDefault.filter(
      el =>
        el.customData.selectedVaccines[0].toLowerCase().search(search) !== -1
    );
  }

  return listDefault;
};
