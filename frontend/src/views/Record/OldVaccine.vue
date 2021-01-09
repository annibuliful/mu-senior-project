<template>
  <div class="container w-10/12 md:w-9/12 lg:w-9/12">
    <p class="text-center text-4xl my-4">{{ childInfo.fullname }}</p>
    <p class="text-center">{{ currentIndex + 1 }}/{{ listVaccines.length }}</p>

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
        <p class="text-gray-700 text-center my-6">เคยฉีด</p>
      </div>
      <div
        @click="onChangeReceiveStatus('never')"
        :class="[
          receiveStatus === 'never' ? 'border-blue-600' : 'border-gray-400'
        ]"
        class="p-6 m-2 border-2 pointer language-box"
      >
        <p class="text-gray-700 text-center my-6">ไม่เคยฉีด</p>
      </div>
    </div>
    <div style="height: 67px;">
      <div class="my-4" v-if="receiveStatus === 'received'">
        <label class="block text-gray-700 text-sm font-bold mb-2 ">
          วันที่ฉีด
        </label>
        <v-date-picker v-model="receiveDate" :locale="calendarLocale" />
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
      Submit
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
      receiveDate: "",
      vaccineId: "",
      vaccineName: ""
    };
  },
  computed: {
    calendarLocale() {
      return this.$store.state.calendarLocale;
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
    onChangeReceiveStatus: function(status) {
      this.receiveStatus = status;
      if (status === "never") {
        this.receiveDate = "";
      }
    },
    onIncrease: function() {
      if (this.currentIndex < this.listVaccines.length - 1) {
        const tempVaccine = this.listVaccines[this.currentIndex];
        this.listVaccines[this.currentIndex] = {
          ...tempVaccine,
          recordDate: this.receiveDate
        };
        this.currentIndex++;
        const tempForNextVaccine = this.listVaccines[this.currentIndex];
        this.receiveDate = tempForNextVaccine.recordDate;
        this.vaccineId = tempForNextVaccine.vaccineId;
        this.vaccineName = tempForNextVaccine.vaccineNameNormal;

        if (this.receiveDate !== "") {
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
          recordDate: this.receiveDate
        };
        this.currentIndex--;
        const tempForNextVaccine = this.listVaccines[this.currentIndex];

        this.receiveDate = tempForNextVaccine.recordDate;
        this.vaccineId = tempForNextVaccine.vaccineId;
        this.vaccineName = tempForNextVaccine.vaccineNameNormal;
        if (this.receiveDate !== "") {
          this.receiveStatus = "received";
        } else {
          this.receiveStatus = "never";
        }
      }
    },
    submitAll: async function() {
      for (let i = 0; i < this.listVaccines.length; i++) {
        const temp = this.listVaccines[i];
        const vaccine = { id: temp.vaccineId, tag: temp.vaccineNameNormal };
        const receiveDate = temp.recordDate;
        await this.submit(vaccine, receiveDate, temp.eventId);
      }

      this.$router.push("/");
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
      const childInfo = (await service().family.getByChildId(familyId))[0];
      childInfo.receivedVaccines = [...childInfo.receivedVaccines, vaccine.id];
      await service().family.update(familyId, childInfo);
      this.$router.push({ name: "dashboard-home" });
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
</style>
