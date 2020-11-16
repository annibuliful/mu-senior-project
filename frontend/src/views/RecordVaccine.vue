<template>
  <div class="overflow-scroll">
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      {{ localeText.title }}
    </p>
    <div class="mt-4">
      <div
        class="w-full max-w-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 ml-auto mr-auto sm:mb-16"
      >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.recordTo }}
          </label>
          <select
            class="appearance-none bg-white border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="recordTo"
            autocomplete="off"
            type="text"
            v-model="recordTo"
            :placeholder="localeText.recordTo"
          >
            <option
              class="bg-white"
              :value="family.familyId"
              v-for="(family, index) in listFamilies"
              :key="`${family.fullname}-${index}`"
              >{{ family.fullname }}</option
            >
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.vaccineName }}
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
            {{ localeText.receivingDate }}
          </label>
          <v-date-picker v-model="receivingDate" :locale="calendarLocale" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.batchNO }}
          </label>
          <input
            class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="batchNO"
            autocomplete="off"
            type="text"
            v-model="batchNO"
            :placeholder="localeText.batchNO"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.hostpitalName }}
          </label>
          <input
            class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="hostpitalName"
            autocomplete="off"
            type="text"
            v-model="hostpitalName"
            :placeholder="localeText.hostpitalName"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.doctorInfo }}
          </label>
          <input
            class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="doctorInfo"
            autocomplete="off"
            type="text"
            v-model="doctorInfo"
            :placeholder="localeText.doctorInfo"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.freetext }}
          </label>
          <input
            class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="freetext"
            autocomplete="off"
            type="text"
            v-model="freetext"
            :placeholder="localeText.freetext"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.uploadImage }}
          </label>
          <input type="file" @change="onFileChange" />

          <div id="preview">
            <img v-if="url" :src="url" />
          </div>
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
            {{ localeText.submitBtn }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TagInput from "@/components/input/TagInput.vue";
import service from "@/services";
export default {
  components: {
    TagInput
  },
  data() {
    return {
      vaccineName: "",
      batchNO: "",
      receivingDate: new Date(),
      hostpitalName: "",
      doctorInfo: "",
      freetext: "",
      recordTo: "",
      selectedVaccines: [],
      url: null,
      base64Url: null,
      baseInfo: null
    };
  },
  created() {
    this.selectedVaccines = this.$store.state.baseRecordVaccine.selectedVaccines.map(
      el => ({ tag: el })
    );
    this.$store.commit("listFamilies");
  },
  computed: {
    localeText: function() {
      return this.$store.state.locale.recordVaccinePage;
    },
    listVaccines() {
      return this.$store.state.locale.vaccines.map(el => ({
        tag: el.vaccineNameNormal,
        vaccineId: el.vaccineId
      }));
    },
    calendarLocale() {
      return this.$store.state.calendarLocale;
    },
    listFamilies() {
      return this.$store.state.listFamilies;
    },
    label() {
      return this.$store.state.locale.labelAddAppointment;
    }
  },
  methods: {
    async submit() {
      const childInfo = (await service().family.getByChildId(this.recordTo))[0];

      childInfo.receivedVaccines = [
        ...childInfo.receivedVaccines,
        ...this.selectedVaccines.map(el => el.vaccineId)
      ];
      await service().family.update(childInfo.familyId, childInfo);
      const data = {
        childId: childInfo.familyId,
        childname: childInfo.fullname,
        selectedVaccines: this.selectedVaccines,
        receivingDate: this.receivingDate,
        batchNO: this.batchNO,
        hostpitalName: this.hostpitalName,
        doctorInfo: this.doctorInfo,
        freetext: this.freetext,
        recordImage: this.base64Url
      };
      await service().record.create(data);

      this.$router.push("/");
    },

    async createNextAppointment() {},
    cancel() {
      this.$router.go(-1);
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64Url = reader.result;
      };
    },
    onAddNewVaccine(vaccine) {
      this.selectedVaccines.push(vaccine);
    },
    onDeleteVaccine(index) {
      this.selectedVaccines.splice(index, 1);
    }
  }
};
</script>
<style scoped>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 50%;
  /* max-height: 500px; */
}
.vue-tags-input {
  background: #324652;
}
</style>
