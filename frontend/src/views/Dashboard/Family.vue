<template>
  <div>
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      {{ familyword }}
    </p>
    <div class="mt-4">
      <button
        @click="onOpenAddFamilyForm"
        class="block bg-white hover:bg-gray-100 text-black-800 py-2 px-4 border border-gray-900 rounded shadow ml-auto"
      >
        <img src="@/assets/icons/plus.svg" class="w-4 inline mr-2" />{{
          addWord
        }}
      </button>
      <div
        class="w-full max-w-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 ml-auto mr-auto sm:mb-16"
        v-if="isOpenAddForm"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 "
            for="username"
          >
            {{ labelAddFamily.name }}
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            :placeholder="labelAddFamily.name"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 "
            for="username"
          >
            {{ labelAddFamily.birthDate }}
          </label>
          <v-date-picker v-model="birthDate" :locale="calendarLocale" />
        </div>
      </div>
    </div>
    <div class="mt-4 w-full sm:mb-20">
      <div class="flex">
        <FamilyCard
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
export default {
  components: {
    FamilyCard
  },
  data() {
    return {
      isOpenAddForm: false,
      name: "",
      birthDate: new Date(),
      diseases: []
    };
  },
  computed: {
    listFamilies() {
      return this.$store.state.listFamilies;
    },
    familyword() {
      return this.$store.state.locale.family;
    },
    addWord() {
      return this.$store.state.locale.button.add;
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
    }
  }
};
</script>
