<template>
  <div>
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      {{ settingWord }}
    </p>
    <div class="flex flex-auto">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            {{ languageSetting }}
          </label>
        </div>

        <div class="inline-block relative w-64">
          <select
            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            :value="language"
            @input="onChangeLanguage"
          >
            <option value="en-US">English</option>
            <option value="th-TH">ภาษาไทย</option>
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
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    language() {
      return this.$store.state.calendarLocale;
    },
    settingWord() {
      return this.$store.state.locale.setting;
    },
    languageSetting() {
      return this.$store.state.locale.language;
    }
  },
  methods: {
    onChangeLanguage(e) {
      this.$store.commit("changeLanguage", e.target.value);
    }
  }
};
</script>
