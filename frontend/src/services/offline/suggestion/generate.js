import service from "../../";
// import listDiseases from "../../../locale/EN/diseases";
import listThVaccines from "../../../locale/TH/vaccines";
import listEnVaccines from "../../../locale/EN/vaccines";
import constraintVaccines from "../../../locale/constraint-vaccine";
import { add } from "date-fns";

const rangeYearOfCategories = [
  {
    range: {
      min: 0,
      max: 18
    },
    category: "children"
  },
  {
    range: {
      min: 19,
      max: 120
    },
    category: "adult"
  }
];

const getVaccineCategoryByDate = childBirthDate => {
  const now = new Date();
  const childYearOld = childBirthDate.getFullYear() / now.getFullYear() - 1;
  return rangeYearOfCategories.filter(
    el => el.range.min <= childYearOld && childYearOld <= el.range.max
  )[0].category;
};

const getFactorFromChild = async childId => {
  const childInfo = (await service().family.getByChildId(childId))[0];
  const listChildDiseaseIds = childInfo.diseases;
  const listChildVaccineIds = childInfo.receivedVaccines;
  const vaccineCategory = getVaccineCategoryByDate(childInfo.birthDate);
  return {
    childInfo,
    listChildDiseaseIds,
    listChildVaccineIds,
    vaccineCategory
  };
};

export default async (childId, language) => {
  const {
    childInfo,
    listChildDiseaseIds,
    listChildVaccineIds,
    vaccineCategory
  } = await getFactorFromChild(childId);

  let listVaccines = [];
  if (language === "en-US") {
    listVaccines = listEnVaccines;
  } else {
    listVaccines = listThVaccines;
  }

  const filteredVaccineForChild = listVaccines.filter(
    el => el.category === vaccineCategory
  );

  const filterdVaccineChildNotReceived = filteredVaccineForChild.filter(
    el => !listChildVaccineIds.includes(el.vaccineId)
  );

  const listVaccineConstraint = constraintVaccines
    .filter(el => listChildDiseaseIds.some(disease => el.diseaseId === disease))
    .map(el => el.vaccineId);

  return filterdVaccineChildNotReceived
    .filter(el => !listVaccineConstraint.includes(el.vaccineId))
    .map(el => ({
      ...el,
      appointmentDate: add(childInfo.birthDate, {
        days: el.injectionPeriodTime[0]
      })
    }));
};
