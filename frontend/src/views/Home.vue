<template>
  <div id="app">
    <img src="@/assets/people.png" class="mx-auto mt-2" />
    <div
      class="max-w-xs max-w-lg rounded bg-white pt-6 shadow p-8"
      style="margin-top: 2vh; margin-left: auto; margin-right: auto; width: 80vw;"
    >
      <div class="inline-flex justify-center w-full pb-8">
        <h4
          class=" text-center text-xl ml-2 mr-2 mt-1 cursor-pointer"
          :class="[mode === 'register' ? 'active' : 'text-gray-600']"
          @click="onChangeFormMode('register')"
        >
          {{ locale.register }}
        </h4>
        <p class="text-2xl">|</p>
        <p></p>
        <h4
          class="text-center text-xl ml-2 mr-2 mt-1 cursor-pointer"
          :class="[mode === 'login' ? 'active' : 'text-gray-600']"
          @click="onChangeFormMode('login')"
        >
          {{ locale.login }}
        </h4>
      </div>

      <LoginForm v-if="mode === 'login'" v-on:on-submit="onLogin" />
      <RegisterForm v-if="mode === 'register'" v-on:on-submit="onRegister" />
      <p v-if="error !== ''" class="text-red-500 text-center text-xs m-2">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/auth/Login.vue";
import RegisterForm from "@/components/auth/Register.vue";
import services from "@/services";
export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      error: "",
      mode: "register"
    };
  },
  created: function() {
    const userInfo = localStorage.getItem("userInfo");
    const isUserInfoExist = userInfo !== null;
    if (isUserInfoExist) {
      this.$store.commit("setUserInfo", JSON.parse(userInfo));
      // this.$router.push({ name: "Pin" });
    }
  },
  computed: {
    errorText: function() {
      return this.$store.state.locale.labelError;
    },
    labelText: function() {
      return this.$store.state.locale.label;
    },
    locale() {
      return this.$store.state.locale;
    }
  },
  methods: {
    onChangeFormMode(mode) {
      this.mode = mode;
      this.error = "";
    },
    async onLogin({ username, password }) {
      try {
        const result = await services().auth.login({ username, password });
        this.$store.commit("setUserInfo", result);
        localStorage.setItem("userInfo", JSON.stringify(result));

        const isFirstTime = result.fullname === "";
        if (isFirstTime) {
          this.$router.push({ name: "dashboard-setting" });
          return;
        }
        this.$store.commit("setFirstTime", false);
        this.$router.push({ name: "dashboard-home" });
      } catch (e) {
        const message = e.message;
        if (message === "notFound") {
          this.error = this.errorText.notFound.replace(
            "{}",
            this.labelText.username
          );
        } else if (message === "incorrect") {
          this.error = this.errorText.incorrect.replace(
            "{}",
            this.labelText.password
          );
        }
      }
    },
    async onRegister({ username, password, pin }) {
      try {
        await services().auth.register({ username, password, pin });
        this.mode = "login";
      } catch (e) {
        this.error = this.errorText.duplicate.replace(
          "{}",
          this.labelText.username
        );
      }
    }
  }
};
</script>
