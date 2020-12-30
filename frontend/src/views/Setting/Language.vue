<template>
  <div class="container">
    <p class="text-center text-2xl">{{ localeText.welcomeLanguage }}</p>
    <img src="/images/welcome.svg" class="block mx-auto" />
    <div class="flex mx-auto w-2/4 justify-evenly my-8">
      <div
        :class="[
          language === 'th-TH' ? 'border-blue-600' : 'border-transparent',
        ]"
        class="p-6 border-2 pointer language-box"
        @click="onChangeLanguage('th-TH')"
      >
        <img src="/images/thailand.png" class="block mx-auto" />
        <p class="text-gray-700 text-center my-4">ภาษาไทย</p>
      </div>
      <div
        @click="onChangeLanguage('en-US')"
        :class="[
          language === 'en-US' ? 'border-blue-600' : 'border-transparent',
        ]"
        class="p-6 border-2 pointer language-box"
      >
        <img src="/images/united-states-of-america.png" class="block mx-auto" />
        <p class="text-gray-700 text-center my-4">English</p>
      </div>
    </div>
    <button
      @click="onSubmitLanguage"
      class=" text-white font-bold py-4 px-8 rounded mx-auto block"
      :class="[
        language === ''
          ? 'bg-gray-500 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-700 ',
      ]"
    >
      {{ localeText.welcomeContinue }}
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      language: "",
    };
  },
  methods: {
    onChangeLanguage(language) {
      this.language = language;
      this.$store.commit("changeLanguage", this.language);
      localStorage.setItem("language", this.language);
    },
    onSubmitLanguage() {
      if (this.language === "") {
        return;
      }

      this.$store.commit("changeLanguage", this.language);
      localStorage.setItem("language", this.language);
      this.$router.push({ name: "pre-login" });
    },
  },
  computed: {
    locale() {
      return this.$store.state.calendarLocale;
    },
    localeText() {
      return this.$store.state.locale;
    },
  },
};
</script>
<style scoped>
.language-box {
  @apply w-48 h-48;
  border-radius: 10px;
}

.container {
  margin: 15vh auto;
}
</style>
