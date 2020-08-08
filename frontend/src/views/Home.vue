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
          Register
        </h4>
        <p class="text-2xl">|</p>
        <p></p>
        <h4
          class="text-center text-xl ml-2 mr-2 mt-1 cursor-pointer"
          :class="[mode === 'login' ? 'active' : 'text-gray-600']"
          @click="onChangeFormMode('login')"
        >
          Login
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
  methods: {
    onChangeFormMode(mode) {
      this.mode = mode;
    },
    async onLogin({ username, password }) {
      try {
        console.log(username);
        const result = await services().auth.login({ username, password });
        console.log(result);
        this.$store.commit("setUserInfo", result);
        localStorage.setItem("userInfo", JSON.stringify(result));

        this.$router.push({ name: "dashboard-home" });
      } catch (e) {
        console.log(e);
        this.error = e.message;
      }
    },
    async onRegister({ username, password }) {
      await services().auth.register({ username, password });
      this.mode = "login";
    }
  }
};
</script>
