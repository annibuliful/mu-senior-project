<template>
  <div class="overflow-scroll">
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      {{ familyword }}
    </p>
    <div class="mt-4">
      <button
        @click="onOpenAddFamilyForm"
        class="block bg-white hover:bg-gray-100 text-black-800 py-2 px-4 border border-gray-900 rounded shadow ml-auto mr-4"
      >
        <img src="@/assets/icons/plus.svg" class="w-4 inline mr-2" />{{
          buttonLabel.add
        }}
      </button>
      <div
        class="w-full max-w-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 ml-auto mr-auto sm:mb-16"
        v-if="isOpenAddForm"
      >
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
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block ml-auto"
          @click="submit"
        >
          {{ buttonLabel.save }}
        </button>
      </div>
    </div>
    <div class="mt-4 w-full sm:mb-20 lg:mb-4">
      <div class="flex flex-wrap">
        <FamilyCard
          class="card"
          :name="family.fullname"
          :birthDate="family.birthDate"
          :diseases="family.diseases"
          v-for="(family, index) in listFamilies"
          :key="`${family.fullname}-${index}`"
        />
      </div>
    </div>
  </div>
</template>
<script>
import FamilyCard from "@/components/FamilyCard.vue";
import TagInput from "@/components/input/TagInput.vue";
import service from "@/services";
export default {
  components: {
    FamilyCard,
    TagInput
  },
  created() {
    this.$store.commit("listFamilies");
  },
  data() {
    return {
      isOpenAddForm: false,
      fullname: "",
      birthDate: new Date(),
      inputDisease: "",
      inputVaccine: "",
      selectedDiseases: [],
      selectedVaccines: []
    };
  },
  computed: {
    listVaccines() {
      return this.$store.state.listVaccines;
    },
    listDiseases() {
      return this.$store.state.listDiseases;
    },
    listFamilies() {
      return this.$store.state.listFamilies;
    },
    familyword() {
      return this.$store.state.locale.family;
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
    onOpenAddFamilyForm() {
      this.isOpenAddForm = !this.isOpenAddForm;
    },
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
      const data = {
        fullname: this.fullname,
        birthDate: this.birthDate,
        diseases: this.selectedDiseases,
        receivedVaccines: this.selectedVaccines,
        userId: this.$store.state.userInfo.userId
      };
      await service().family.create(data);
      this.$store.commit("addNewFamilyMember", data);
    }
  }
};
</script>
<style>
.card {
  width: 30vw;
  margin: auto;
}
.vue-tags-input {
  background: #324652;
}
/* .vue-tags-input .ti-input {
  padding: 4px 10px;
  transition: border-bottom 200ms ease;
} */
@media only screen and (max-width: 900px) {
  .card {
    width: 100vw;
    margin: auto;
    border-top: 1px solid #718096;
  }

  .card:last-child {
    border-bottom: 1px solid #718096;
  }
}
</style>