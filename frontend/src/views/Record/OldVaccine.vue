<template>
  <div class="container w-10/12 md:w-9/12 lg:w-9/12">
    <p class="text-center text-4xl my-4">{{ childInfo.fullname }}</p>
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
          receiveStatus === 'received' ? 'border-blue-600' : 'border-gray-400'
        ]"
        class="p-6 m-2 border-2 pointer language-box"
        @click="onChangeReceiveStatus('received')"
      >
        <p class="text-gray-700 text-center my-6">{{ locale.receievedQA }}</p>
      </div>
      <div
        @click="onChangeReceiveStatus('never')"
        :class="[
          receiveStatus === 'never' ? 'border-blue-600' : 'border-gray-400'
        ]"
        class="p-6 m-2 border-2 pointer language-box"
      >
        <p class="text-gray-700 text-center my-6">
          {{ locale.notReceievedQA }}
        </p>
      </div>
    </div>
    <div style="min-height: 67px;" class="my-4">
      <div v-if="receiveStatus === 'received'">
        <div
          class="my-4 date-form"
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
            class="btn-danger"
            v-if="
              listReceiveDates.length === receiveDate.doseNumber &&
                listReceiveDates.length !== 1
            "
            @click="removeReceiveDate(index)"
          >
            {{ locale.button.delete }}
          </button>
        </div>
        <button class="btn-primary" @click="onAddNewReceiveDate">
          {{ locale.button.add }}
        </button>
      </div>
    </div>
    <div class="flex justify-between my-4">
      <img src="@/assets/icons/arrow-left2.svg" @click="onDecrease" />
      <img src="@/assets/icons/arrow-right.svg" @click="onIncrease" />
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
export default {
  data() {
    return {
      currentIndex: 0,
      isComplete: false,
      listVaccines: [],
      childInfo: {},
      receiveStatus: "",
      listReceiveDates: [
        {
          doseNumber: 1,
          date: ""
        }
      ],
      vaccineId: "",
      vaccineName: ""
    };
  },
  computed: {
    calendarLocale() {
      return this.$store.state.calendarLocale;
    },
    locale() {
      return this.$store.state.locale;
    }
  },
  created: function() {
    this.listVaccines = this.$store.state.listOverdueVaccines.map(el => ({
      ...el,
      recordDate: ""
    }));
    this.vaccineId = this.listVaccines[0].vaccineId;
    this.vaccineName = this.listVaccines[0].vaccineNameNormal;
    this.childInfo = this.$store.state.familyInfoForOverdueVaccines;
  },
  methods: {
    onAddNewReceiveDate: function() {
      const doseNumber = this.listReceiveDates.length + 1;
      this.listReceiveDates.push({
        doseNumber,
        date: ""
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
            date: ""
          }
        ];
      }
    },
    onIncrease: function() {
      if (this.currentIndex < this.listVaccines.length - 1) {
        const tempVaccine = this.listVaccines[this.currentIndex];
        this.listVaccines[this.currentIndex] = {
          ...tempVaccine,
          listReceiveDates: this.listReceiveDates
        };

        this.currentIndex++;
        const tempForNextVaccine = this.listVaccines[this.currentIndex];
        this.listReceiveDates = tempForNextVaccine.listReceiveDates ?? [
          {
            doseNumber: 1,
            date: ""
          }
        ];
        this.vaccineId = tempForNextVaccine.vaccineId;
        this.vaccineName = tempForNextVaccine.vaccineNameNormal;

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
          listReceiveDates: this.listReceiveDates
        };
        this.currentIndex--;
        const tempForNextVaccine = this.listVaccines[this.currentIndex];

        this.listReceiveDates = tempForNextVaccine.listReceiveDates ?? [
          {
            doseNumber: 1,
            date: ""
          }
        ];
        this.vaccineId = tempForNextVaccine.vaccineId;
        this.vaccineName = tempForNextVaccine.vaccineNameNormal;

        const isReceivedAtLeastOneDose = this.listReceiveDates[0].date !== "";

        if (isReceivedAtLeastOneDose) {
          this.receiveStatus = "received";
        } else {
          this.receiveStatus = "never";
        }
      }
    },
    submitAll: async function() {
      const listReceiveVaccines = [];
      for (let i = 0; i < this.listVaccines.length; i++) {
        const temp = this.listVaccines[i];
        const vaccine = { id: temp.vaccineId, tag: temp.vaccineNameNormal };
        const receiveDate = temp.recordDate;
        if (
          receiveDate === "" ||
          receiveDate === null ||
          receiveDate === undefined
        ) {
          continue;
        }
        listReceiveVaccines.push(vaccine.id);
        await this.submit(vaccine, receiveDate, temp.eventId);
      }

      const { familyId } = this.childInfo;

      const childInfo = (await service().family.getByChildId(familyId))[0];

      childInfo.receivedVaccines = [
        ...childInfo.receivedVaccines,
        ...listReceiveVaccines
      ];

      await service().family.update(familyId, childInfo);
      this.$fire({
        title: this.locale.label.saveInfo + " " + this.locale.label.success,
        type: "success",
        timer: 3000
      });
      this.$router.push({ name: "dashboard-home" });
    },
    submit: async function(vaccine, receiveDate, eventId) {
      const { familyId, fullname } = this.childInfo;

      if (
        receiveDate === "" ||
        receiveDate === null ||
        receiveDate === undefined
      ) {
        return;
      }

      const recordData = {
        childId: familyId,
        childname: fullname,
        selectedVaccines: [vaccine],
        receivingDate: new Date(receiveDate),
        batchNO: null,
        hostpitalName: null,
        doctorInfo: null,
        freetext: "",
        recordImage: null,
        photoDate: null
      };

      await Promise.all([
        service().record.create(recordData),
        service().appointment.update(Number(eventId), {
          dot: "green",
          status: "vaccinated"
        })
      ]);
      return;
    }
  }
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
