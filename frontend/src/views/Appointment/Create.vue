<template>
  <div class="w-full">
    <div class="border-b-2 border-blue-700 mb-4">
      <p class="text-2xl" style="width: auto;">
        {{ titleText }}
      </p>
    </div>
    <div
      class="w-full max-w-xl bg-white px-8 ml-auto mr-auto sm:mb-16"
      v-if="!!listFamilies.length"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 ">
          {{ label.child }}
        </label>
        <div class="inline-block relative w-full">
          <select
            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            v-model="chilIndex"
          >
            <option
              :value="index"
              v-for="({ fullname }, index) in listFamilies"
              :key="`${index}`"
              >{{ fullname }}</option
            >
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 ">
          {{ label.date }}
        </label>

        <v-date-picker
          v-model="selectedDate"
          :locale="calendarLocale"
          class="block"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <input
              class="bg-white border px-2 py-1 rounded w-full"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </v-date-picker>
        <!-- <v-date-picker v-model="selectedDate" :locale="calendarLocale" /> -->
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 ">
          {{ label.time }}
        </label>
        <input
          type="time"
          v-model="time"
          class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 ">
          {{ label.vaccineList }}
        </label>
        <TagInput
          :placeholder="label.vaccineList"
          :listTags="listVaccines"
          :selectedTags="selectedVaccines"
          v-on:on-enter="onAddNewVaccine"
          v-on:on-remove="onDeleteVaccine"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 ">
          {{ label.note }}
        </label>
        <textarea
          class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          autocomplete="off"
          type="text"
          v-model="note"
          :placeholder="label.note"
        />
      </div>
      <div class="flex">
        <button
          class="font-bold py-2 px-4 rounded block border hover:border-red-600"
          @click="cancel"
        >
          {{ localeText.cancelBtn }}
        </button>
        <button
          @click="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block ml-auto"
        >
          {{ buttonLabel.save }}
        </button>
      </div>
    </div>

    <div class="w-full" v-if="!listFamilies.length">
      <img src="../../assets/doctor-stand.png" class="w-48 mx-auto" alt="" />
      <div class="my-2 cursor-pointer">
        <div
          @click="onClickLink({ name: 'dashboard-family' })"
          class=" pb-4  mx-auto text-center mt-2 link-item w-8/12"
        >
          <div>{{ locale.addMemberWarning }}</div>
          <div>{{ locale.addMemberWarning2 }}</div>
          <img class="inline w-8" src="@/assets/icons/family.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TagInput from "@/components/input/TagInput.vue";
import service from "../../services";
import add from "date-fns/add";
export default {
  components: { TagInput },
  data: function() {
    return {
      chilIndex: "",
      date: "",
      selectedVaccines: [],
      note: "",
      listChildren: [],
      time: ""
    };
  },
  created: function() {
    this.$store.commit("listFamilies");
    this.selectedVaccines = this.$store.state.baseRecordVaccine.selectedVaccines.map(
      el => ({ tag: el })
    );
  },
  methods: {
    submit: async function() {
      const { familyId, fullname } = this.$store.state.listFamilies[
        this.chilIndex
      ];

      const listAppointments = [];
      for (let i = 0; i < this.selectedVaccines.length; i++) {
        const vaccineId = this.selectedVaccines[i].id;
        const vaccineInfo = service().vaccine.getVaccineById(vaccineId);
        const injectionPeriodTime = vaccineInfo.injectionPeriodTime;
        console.log("injectionPeriodTime", injectionPeriodTime);
        let sumDay = 0;
        for (let j = 0; j < injectionPeriodTime.length; j++) {
          const nextDay = injectionPeriodTime[j];
          sumDay += nextDay;
          const data = {
            dates: add(this.selectedDate, { days: sumDay }),
            dot: "gray",
            key: this.selectedDate.toString(),
            status: "in-progress",
            customData: {
              selectedVaccines: [vaccineId],
              note: this.note,
              childname: fullname,
              childId: familyId,
              time: this.time,
              doseNumber: j + 1
            }
          };
          console.log("data", data);
          listAppointments.push(
            service().appointment.create(data, this.calendarLocale)
          );
        }
      }

      await Promise.all(listAppointments);
      this.$router.push({ name: "dashboard-index" });
    },
    onAddNewVaccine: function(vaccine) {
      this.selectedVaccines.push(vaccine);
    },
    onDeleteVaccine(index) {
      this.selectedVaccines.splice(index, 1);
    },
    cancel() {
      this.$router.go(-1);
    },
    onClickLink: function(link) {
      this.$router.push(link);
    }
  },
  computed: {
    locale() {
      return this.$store.state.locale;
    },
    listFamilies() {
      return this.$store.state.listFamilies;
    },
    listVaccines() {
      return this.$store.state.locale.vaccines?.map(el => ({
        tag: el.vaccineNameNormal,
        id: el.vaccineId
      }));
    },
    titleText() {
      return this.$store.state.locale.labelAddAppointment.addAppointment;
    },
    localeText: function() {
      return this.$store.state.locale.recordVaccinePage;
    },
    buttonLabel() {
      return this.$store.state.locale.button;
    },
    label() {
      return this.$store.state.locale.labelAddAppointment;
    },
    calendarLocale() {
      return this.$store.state.calendarLocale;
    },
    selectedDate: {
      get: function() {
        return new Date(this.$store.state.selectedCalendarDate);
      },
      set: function(date) {
        this.$store.commit("changeSelectedCalendarDate", date);
      }
    }
  }
};
</script>

<style scoped>
.link-item {
  border: 2px dashed #503605;
  border-radius: 10px;
  padding: 20px 10px 20px 10px;
  /* text-decoration: underline; */
  background-color: cornsilk;
  font-weight: bold;
}
</style>
