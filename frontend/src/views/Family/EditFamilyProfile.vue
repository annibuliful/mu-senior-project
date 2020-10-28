<template>
  <div>
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      {{ labelAddFamily.updateChildInfoTitle }}
    </p>
    <div class="mx-12">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 ">
          {{ labelAddFamily.name }}
        </label>
        <input
          class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          autocomplete="off"
          type="text"
          v-model="fullname"
          :placeholder="labelAddFamily.name"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 ">
          {{ labelAddFamily.birthDate }}
        </label>
        <v-date-picker v-model="birthDate" :locale="calendarLocale" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 ">
          {{ labelAddFamily.disease }}
        </label>
        <TagInput
          :placeholder="labelAddFamily.disease"
          :listTags="listDiseases"
          :selectedTags="selectedDiseases"
          v-on:on-enter="onAddNewDisease"
          v-on:on-remove="onDeleteDisease"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 ">
          {{ labelAddFamily.vaccine }}
        </label>
        <TagInput
          :placeholder="labelAddFamily.vaccine"
          :listTags="listVaccines"
          :selectedTags="selectedVaccines"
          v-on:on-enter="onAddNewVaccine"
          v-on:on-remove="onDeleteVaccine"
        />
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block ml-auto mr-auto"
        @click="submit"
      >
        {{ buttonLabel.update }}
      </button>
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
  async created() {
    this.$store.commit("listFamilies");
    const initChildInfo = (
      await service().family.getByChildId(this.$route.params.id)
    )[0];
    this.childInfo = initChildInfo;
    this.fullname = this.childInfo.fullname;
    this.birthDate = this.childInfo.birthDate;
    // this.selectedDiseases = this.childInfo.selectedDiseases;
    // this.selectedVaccines = this.childInfo.selectedVaccines;
  },
  data() {
    return {
      fullname: "",
      birthDate: new Date(),
      inputDisease: "",
      inputVaccine: "",
      selectedDiseases: [],
      selectedVaccines: [],
      childInfo: ""
    };
  },
  computed: {
    listVaccines() {
      return this.$store.state.locale.vaccines.map(el => ({
        id: el.vaccineId,
        tag: el.vaccineNameNormal
      }));
    },
    listDiseases() {
      return this.$store.state.locale.diseases.map(el => ({
        id: el.diseaseId,
        tag: el.diseaseName
      }));
    },
    listFamilies() {
      return this.$store.state.listFamilies;
    },
    buttonLabel() {
      return this.$store.state.locale.button;
    },
    labelAddFamily() {
      return this.$store.state.locale.label;
    },
    calendarLocale() {
      return this.$store.state.calendarLocale;
    }
  },
  methods: {
    onAddNewDisease(disease) {
      this.selectedDiseases.push(disease);
    },
    onDeleteDisease(index) {
      this.selectedDiseases.splice(index, 1);
    },
    onAddNewVaccine(vaccine) {
      this.selectedVaccines.push(vaccine);
    },
    onDeleteVaccine(index) {
      this.selectedVaccines.splice(index, 1);
    },

    async submit() {
      this.childInfo.fullname = this.fullname;
      this.childInfo.birthDate = this.birthDate;
      //   this.childInfo.diseases = this.diseases;
      await service().family.update(this.$route.params.id, this.childInfo);

      this.$router.push({
        name: "dashboard-family"
      });
    },
    resetForm() {
      this.fullname = "";
      this.birthDate = new Date();
      this.inputDisease = "";
      this.inputVaccine = "";
      this.selectedDiseases = [];
      this.selectedVaccines = [];
    }
  }
};
</script>
