<template>
  <div id="app">
    <img src="@/assets/people.png" style="margin:auto" />
    <div
      class="max-w-xs max-w-lg my-8 rounded bg-white pt-6 shadow p-8"
      style="margin-top: 10vh; margin-left: auto; margin-right: auto; width: 80vw;"
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
import { required, minLength } from "vuelidate/lib/validators";

export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      username: "",
      password: "",
      repeatPassword: "",
      error: "",
      mode: "register"
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(8)
    },
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      minLength: minLength(8)
    }
  },
  methods: {
    onChangeFormMode(mode) {
      this.mode = mode;
    },
    onLogin({ username, password }) {
      console.log(username, password);
      this.$router.push({ name: "dashboard" });
    },
    onRegister({ username, password }) {
      console.log(username, password);
    }
  }
};
</script>
