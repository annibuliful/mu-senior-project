<template>
  <div id="app">
    <div
      class="w-full max-w-xs my-8 rounded bg-white pt-6 shadow p-8"
      style="margin-top: 10vh; margin-left: auto; margin-right: auto;"
    >
      <div class="inline-flex justify-center w-full pb-8">
        <h4
          class=" text-center text-sm ml-2 mr-2 mt-1 cursor-pointer"
          :class="[state.mode === 'register' ? 'active' : 'text-gray-600']"
          @click="formMode('register')"
        >
          Register
        </h4>
        <p class="text-lg">|</p>
        <p></p>
        <h4
          class="text-center text-sm ml-2 mr-2 mt-1 cursor-pointer"
          :class="[state.mode === 'login' ? 'active' : 'text-gray-600']"
          @click="formMode('login')"
        >
          Login
        </h4>
      </div>

      <div class="mb-4">
        <label
          class="block text-gray-700 text-xs font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          v-model="state.username"
          class="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          autocomplete="off"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-xs font-bold mb-2"
          for="username"
        >
          Password
        </label>
        <input
          type="password"
          v-model="state.password"
          class=" text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          placeholder="Password"
          autocomplete="off"
        />
      </div>
      <div class="mb-4" v-if="state.mode === 'register'">
        <label
          class="block text-gray-700 text-xs font-bold mb-2"
          for="username"
        >
          Repeat Password
        </label>
        <input
          type="password"
          v-model="state.repeatPassword"
          class="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="repeat-password"
          placeholder="Repeat Password"
          autocomplete="off"
        />
      </div>
      <button
        v-if="state.mode === 'register'"
        @click="onRegister"
        style="display: block; margin-left: auto; margin-right: auto;"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
      >
        Register
      </button>
      <button
        v-if="state.mode === 'login'"
        @click="onLogin"
        style="display: block; margin-left: auto; margin-right: auto;"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
      >
        Login
      </button>
      <p v-if="state.error !== ''" class="text-red-500 text-center text-xs m-2">
        {{ state.error }}
      </p>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const formMode = mode => {
      state.mode = mode;
    };

    const state = reactive({
      mode: "register",
      username: "",
      password: ""
    });

    return {
      state,
      formMode
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
