import service from "../../";
// import listDiseases from "../../../locale/EN/diseases";
import listVaccines from "../../../locale/EN/vaccines";
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
  const listChildDiseaseIds = childInfo.diseases.map(el => el.id);
  const listChildVaccineIds = childInfo.receivedVaccines.map(el => el.id);
  const vaccineCategory = getVaccineCategoryByDate(childInfo.birthDate);
  return {
    childInfo,
    listChildDiseaseIds,
    listChildVaccineIds,
    vaccineCategory
  };
};

export default async childId => {
  const {
    childInfo,
    listChildDiseaseIds,
    listChildVaccineIds,
    vaccineCategory
  } = await getFactorFromChild(childId);

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
