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
            {{ localeText.vaccineName }}
          </label>
          <input
            class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            autocomplete="off"
            type="text"
            v-model="vaccineName"
            :placeholder="localeText.vaccineName"
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
            id="name"
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
            id="name"
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
            id="name"
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
            id="name"
            autocomplete="off"
            type="text"
            v-model="freetext"
            :placeholder="localeText.freetext"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.recordTo }}
          </label>
          <select
            class="appearance-none bg-white border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            autocomplete="off"
            type="text"
            v-model="recordTo"
            :placeholder="localeText.recordTo"
          >
            <option class="bg-white"
              v-for="(family, index) in listFamilies"
              :key="`${family.fullname}-${index}`"
              >{{ family.fullname }}</option
            >
          </select>
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

        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block ml-auto"
        >
          {{ localeText.submitBtn }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vaccineName: "",
      batchNO: "",
      receivingDate: new Date(),
      hostpitalName: "",
      doctorInfo: "",
      freetext: "",
      recordTo: "",
      url: null,
    };
  },
  computed: {
    localeText: function() {
      return this.$store.state.locale.recordVaccinePage;
    },
    calendarLocale() {
      return this.$store.state.calendarLocale;
    },
    listFamilies() {
      return this.$store.state.listFamilies;
    },
  },
  methods: {
      onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    }
  },
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
