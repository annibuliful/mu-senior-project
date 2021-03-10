<template>
  <div class="container w-10/12 md:w-9/12 lg:w-9/12">
    <p class="text-center text-4xl mb-4">{{ childInfo.fullname }}</p>
    <p class="text-center">{{ currentIndex + 1 }}/{{ listVaccines.length }}</p>

    <p class="text-center text-2xl">{{ vaccineName }}</p>
    <div>
      <img
        :src="require(`../../assets/vaccine-img/${vaccineId}.png`)"
        class="block mx-auto w-4/12 lg:w-48"
      />
    </div>
    <div class="w-full flex mx-auto md:w-2/4 lg:w-2/4 justify-evenly my-8">
      <div
        :class="[
          receiveStatus === 'received' ? 'border-orange-600' : 'border-gray-400',
        ]"
        class="p-6 m-2 border-2 pointer language-box"
        @click="onChangeReceiveStatus('received')"
      >
        <p class="text-gray-700 text-center my-6">{{ locale.receievedQA }}</p>
      </div>
      <div
        @click="onChangeReceiveStatus('never')"
        :class="[
          receiveStatus === 'never' ? 'border-orange-600' : 'border-gray-400',
        ]"
        class="p-6 m-2 border-2 pointer language-box"
      >
        <p class="text-gray-700 text-center my-6">
          {{ locale.notReceievedQA }}
        </p>
      </div>
    </div>
    <div class="my-4">
      <div v-if="receiveStatus === 'received'">
        <div
          class="my-4 flex flex-col"
          v-for="(receiveDate, index) in listReceiveDates"
          :key="`${index}`"
        >
          <label class="block text-gray-700 text-sm font-bold mb-2 mx-6">
            {{ locale.recordVaccinePage.receivingDate }} ({{
              locale.recordVaccinePage.doseNumber
            }}
            {{ receiveDate.doseNumber }})
          </label>
          <v-date-picker v-model="receiveDate.date" :locale="calendarLocale" />
          <button
            class="btn-danger mt-2"
            v-if="
              listReceiveDates.length === receiveDate.doseNumber &&
                listReceiveDates.length !== 1
            "
            @click="removeReceiveDate(index)"
          >
            {{ locale.button.delete }}
          </button>
        </div>
        <button
          :class="
            listReceiveDates.length !== limitDose
              ? 'btn-primary'
              : 'btn-disabled'
          "
          :disabled="listReceiveDates.length === limitDose"
          @click="onAddNewReceiveDate"
        >
          {{ locale.button.add }}
        </button>
      </div>
    </div>
    <div class="flex justify-between my-4">
      <div>
        <img
          src="@/assets/icons/arrow-left2.svg"
          @click="onDecrease"
          v-if="currentIndex !== 0"
        />
      </div>
      <div>
        <img
          src="@/assets/icons/arrow-right.svg"
          @click="onIncrease"
          v-if="currentIndex !== listVaccines.length - 1"
        />
      </div>
    </div>
    <button
      class="btn-primary bg-green-600"
      v-if="currentIndex === listVaccines.length - 1"
      @click="submitAll"
    >
      {{ locale.recordVaccinePage.submitBtn }}
    </button>
  </div>
</template>
<script>
import service from "@/services";
import listAllVaccines from "@/locale/EN/vaccines";
import services from "@/services";
import { add, max } from "date-fns";
import groupBy from "@/utils/groupby";
export default {
  data() {
    return {
      limitDose: 1,
      currentIndex: 0,
      isComplete: false,
      listVaccines: [],
      childInfo: {},
      receiveStatus: "",
      listReceiveDates: [
        {
          doseNumber: 1,
          date: "",
        },
      ],
      vaccineId: "",
      vaccineName: "",
    };
  },
  computed: {
    calendarLocale() {
      return this.$store.state.calendarLocale;
    },
    locale() {
      return this.$store.state.locale;
    },
  },
  created: function() {
    this.listVaccines = this.$store.state.listOverdueVaccines.map((el) => ({
      ...el,
      listReceiveDates: [
        {
          doseNumber: 1,
          date: "",
        },
      ],
    }));
    this.vaccineId = this.listVaccines[0].vaccineId;
    this.limitDose = this.getLimitDoseOfVaccine(this.vaccineId);
    this.vaccineName = this.listVaccines[0].vaccineNameNormal;
    this.childInfo = this.$store.state.familyInfoForOverdueVaccines;
  },
  methods: {
    createAppoinment: async function(
      vaccineId,
      appointmentDate,
      familyId,
      fullname
    ) {
      const data = {
        dates: appointmentDate,
        dot: "gray",
        key: appointmentDate.toString(),
        status: "in-progress",
        customData: {
          selectedVaccines: [vaccineId],
          vaccineId,
          childname: fullname,
          childId: familyId,
          time: "09:30",
          doseNumber: 1,
        },
      };
      return await service().appointment.create(data);
    },
    getLimitDoseOfVaccine: function(vaccineId) {
      return (
        listAllVaccines.find((el) => el.vaccineId === vaccineId)
          ?.injectionPeriodTime?.length ?? 0
      );
    },
    onAddNewReceiveDate: function() {
      const doseNumber = this.listReceiveDates.length + 1;
      this.listReceiveDates.push({
        doseNumber,
        date: "",
      });
    },
    removeReceiveDate: function(index) {
      this.listReceiveDates.splice(index);
    },
    onChangeReceiveStatus: function(status) {
      this.receiveStatus = status;
      if (this.receiveStatus === "never") {
        this.listReceiveDates = [
          {
            doseNumber: 1,
            date: "",
          },
        ];
      }
    },
    onIncrease: function() {
      if (this.currentIndex < this.listVaccines.length - 1) {
        const tempVaccine = this.listVaccines[this.currentIndex];
        this.listVaccines[this.currentIndex] = {
          ...tempVaccine,
          listReceiveDates: this.listReceiveDates,
        };

        this.currentIndex++;
        const tempForNextVaccine = this.listVaccines[this.currentIndex];
        this.listReceiveDates = tempForNextVaccine.listReceiveDates ?? [
          {
            doseNumber: 1,
            date: "",
          },
        ];
        this.vaccineId = tempForNextVaccine.vaccineId;
        this.vaccineName = tempForNextVaccine.vaccineNameNormal;
        this.limitDose = this.getLimitDoseOfVaccine(this.vaccineId);

        const isReceivedAtLeastOneDose = this.listReceiveDates[0].date !== "";

        if (isReceivedAtLeastOneDose) {
          this.receiveStatus = "received";
        } else {
          this.receiveStatus = "never";
        }
        return;
      }

      if (this.currentIndex === this.listVaccines.length - 1) {
        this.isComplete = true;
      }
    },
    onDecrease: function() {
      if (this.currentIndex > 0) {
        const tempVaccine = this.listVaccines[this.currentIndex];
        this.listVaccines[this.currentIndex] = {
          ...tempVaccine,
          listReceiveDates: this.listReceiveDates,
        };
        this.currentIndex--;
        const tempForNextVaccine = this.listVaccines[this.currentIndex];

        this.listReceiveDates = tempForNextVaccine.listReceiveDates ?? [
          {
            doseNumber: 1,
            date: "",
          },
        ];
        this.vaccineId = tempForNextVaccine.vaccineId;
        this.vaccineName = tempForNextVaccine.vaccineNameNormal;
        this.limitDose = this.getLimitDoseOfVaccine(this.vaccineId);

        const isReceivedAtLeastOneDose = this.listReceiveDates[0].date !== "";

        if (isReceivedAtLeastOneDose) {
          this.receiveStatus = "received";
        } else {
          this.receiveStatus = "never";
        }
      }
    },
    submitAll: async function() {
      const { familyId, fullname } = this.childInfo;
      const listReceiveVaccines = [];
      for (let i = 0; i < this.listVaccines.length; i++) {
        const temp = this.listVaccines[i];
        const vaccine = { id: temp.vaccineId, tag: temp.vaccineNameNormal };
        const listReceiveDates = temp.listReceiveDates ?? [];

        const isNeverReceive =
          this.listReceiveDates.length === 0 &&
          this.listReceiveDates[0].date === "";

        if (isNeverReceive) {
          continue;
        }

        for (let j = 0; j < listReceiveDates.length; j++) {
          let eventId = temp.eventId;

          if (listReceiveDates[j].date === "") continue;

          listReceiveVaccines.push({
            vaccineId: vaccine.id,
            receivedDate: listReceiveDates[j].date,
          });

          const filterByDoseData = {
            userId: this.childInfo.familyId,
            language: this.calendarLocale,
            doseNumber: listReceiveDates[j].doseNumber,
            vaccineId: this.vaccineId,
          };

          const doseInfo = await services().appointment.filterByDose(
            filterByDoseData
          );
          if (!doseInfo) {
            eventId = await this.createAppoinment(
              vaccine.id,
              listReceiveDates[j].date,
              familyId,
              fullname
            );
          }

          await this.submit(vaccine, listReceiveDates[j], eventId);
        }
      }

      const childInfo = (await service().family.getByChildId(familyId))[0];

      childInfo.receivedVaccines.push(
        listReceiveVaccines.map((el) => el.vaccineId)
      );

      await service().family.update(familyId, childInfo);
      const listVaccinesForNextTime = [
        ...new Set(listReceiveVaccines.map((el) => el.vaccineId)),
      ];

      const listGroupByVaccinId = groupBy(listReceiveVaccines, "vaccineId");

      for (let k = 0; k < listVaccinesForNextTime.length; k++) {
        const vaccineId = listVaccinesForNextTime[k];
        const listDates = listGroupByVaccinId[vaccineId];
        const lastestDate = max(listDates.map((el) => el.receivedDate));
        await this.createNextAppoinment(vaccineId, lastestDate);
      }

      this.$fire({
        title: this.locale.label.saveInfo + " " + this.locale.label.success,
        type: "success",
        timer: 3000,
      });
      this.$router.push({ name: "dashboard-home" });
    },
    submit: async function(vaccine, receiveDateInfo, eventId) {
      const { familyId, fullname } = this.childInfo;

      if (receiveDateInfo.date === "") return;

      const recordData = {
        childId: familyId,
        childname: fullname,
        selectedVaccines: [vaccine],
        receivingDate: new Date(receiveDateInfo.date),
        batchNO: null,
        hostpitalName: null,
        doctorInfo: null,
        freetext: "",
        recordImage: null,
        photoDate: null,
      };

      await Promise.all([
        service().record.create(recordData),
        service().appointment.update(Number(eventId), {
          dates: new Date(receiveDateInfo.date),
          key: receiveDateInfo.date.toString(),
          dot: "green",
          status: "vaccinated",
        }),
      ]);
      return;
    },

    createNextAppoinment: async function(vaccineId, date) {
      const childInfo = (
        await service().family.getByChildId(
          this.childInfo.familyId,
          this.calendarLocale
        )
      )[0];

      const listNextAppointment =
        (await service().util.checkRemainTime(
          this.childInfo.familyId,
          [vaccineId],
          this.calendarLocale
        )) ?? [];

      const nextDate = (duration) => add(date, { days: duration });
      const mapData = listNextAppointment.map((el) => ({
        dates: nextDate(el.nextDay),
        dot: "gray",
        key: nextDate(el.nextDay).toString(),
        status: "in-progress",
        customData: {
          selectedVaccines: [el.vaccineId],
          note: "",
          childname: childInfo.fullname,
          childId: childInfo.familyId,
          time: "09:30",
        },
      }));

      const listCallCreate = mapData.map((el) =>
        service().appointment.create(el)
      );
      await Promise.all(listCallCreate);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 10vh auto;
}
.language-box {
  width: 8rem;
  height: 8rem;
  border-radius: 10px;
}

.date-form {
  display: grid;
  align-items: center;
  grid-template-columns: 30% 50% auto;
}
</style>
