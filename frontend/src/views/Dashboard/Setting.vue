<template>
  <div>
    <p
      class="text-2xl mb-10 border-b-2 border-blue-700 lg:px-0 px-4"
      style="width: auto;"
    >
      {{ locale.setting }}
    </p>
    <div class="flex md:items-center mb-6 ml-2">
      <div class="w-32">
        <label
          class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          {{ locale.language }}
        </label>
      </div>

      <div class="inline-block relative w-auto">
        <select
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          :value="calendarLocale"
          @input="onChangeLanguage"
        >
          <option value="en-US">English</option>
          <option value="th-TH">ภาษาไทย</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <CaretIcon />
        </div>
      </div>
    </div>

    <div class="mb-10 mt-10">
      <p class="text-md mb-10 border-b-2 border-blue-700 lg:px-0 px-4">
        {{ locale.accountSetting }}
      </p>

      <div class="flex items-center mb-6 ml-2">
        <div class="w-32">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            {{ label.name }}
          </label>
        </div>

        <div class="inline-block relative w-auto">
          <input
            type="text"
            v-model="fullname"
            class=" w-full text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            placeholder="Full name"
            autocomplete="off"
          />
        </div>
      </div>

      <div class="flex items-center mb-6 ml-2">
        <div class="w-32">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            {{ label.birthDate }}
          </label>
        </div>

        <div class="inline-block relative w-auto">
          <v-date-picker v-model="birthDate" :locale="calendarLocale" />
        </div>
      </div>

      <div class="flex items-center mb-6 ml-2">
        <div class="w-32">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            {{ label.disease }}
          </label>
        </div>

        <div class="inline-block relative w-auto">
          <TagInput
            :placeholder="label.disease"
            :listTags="listDiseases"
            :selectedTags="selectedDiseases"
            v-on:on-enter="onAddNewDisease"
            v-on:on-remove="onDeleteDisease"
          />
        </div>
      </div>

      <div class="flex items-center mb-6 ml-2">
        <div class="w-32">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            {{ label.vaccine }}
          </label>
        </div>

        <div class="inline-block relative w-auto">
          <TagInput
            :placeholder="label.vaccine"
            :listTags="listVaccines"
            :selectedTags="selectedVaccines"
            v-on:on-enter="onAddNewVaccine"
            v-on:on-remove="onDeleteVaccine"
          />
        </div>
      </div>
      <div class="lg:w-2/3 md:w-2/3 sm:w-full">
        <p
          v-if="errorMessage !== ''"
          class="text-red-500 text-center text-xl m-2"
        >
          {{ errorMessage }}
        </p>
      </div>
      <div class="w-11/12">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block ml-auto mr-6"
          @click="submit"
        >
          {{ buttonLabel.save }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import CaretIcon from "@/components/icons/Caret.vue";
import TagInput from "@/components/input/TagInput.vue";
import service from "@/services";
export default {
  components: {
    CaretIcon,
    TagInput,
  },
  computed: {
    listVaccines() {
      return this.$store.state.listVaccines;
    },
    listDiseases() {
      return this.$store.state.listDiseases;
    },
    calendarLocale() {
      return this.$store.state.calendarLocale;
    },
    locale() {
      return this.$store.state.locale;
    },
    label() {
      return this.$store.state.locale.label;
    },
    buttonLabel() {
      return this.$store.state.locale.button;
    },
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  data() {
    return {
      fullname: "",
      birthDate: new Date(),
      selectedVaccines: [],
      selectedDiseases: [],
      errorMessage: "",
    };
  },
  created() {
    this.fullname = this.userInfo.fullname;
    this.birthDate = new Date(this.userInfo.birthDate);
    this.selectedVaccines = this.userInfo.diseases;
    this.selectedDiseases = this.userInfo.receivedVaccines;
  },
  methods: {
    async submit() {
      try {
        const data = {
          fullname: this.fullname,
          birthDate: this.birthDate,
          receivedVaccines: this.selectedVaccines,
          diseases: this.selectedDiseases,
        };
        this.$store.commit("setUserInfo", { ...this.userInfo, ...data });
        localStorage.setItem("userInfo", JSON.stringify(data));

        await service().user.update(this.userInfo.userId, data);
      } catch (e) {
        this.errorMessage = e.message;
      }
    },
    onChangeLanguage(e) {
      this.$store.commit("changeLanguage", e.target.value);
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
  },
};
</script>
