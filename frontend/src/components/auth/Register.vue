<template>
  <div>
    <div class="mb-4">
      <label
        class="block text-gray-700 text-xs font-bold mb-2 text-sm"
        for="username"
      >
        Username
      </label>
      <input
        v-model="username"
        class="text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
        autocomplete="off"
      />
      <p
        class="text-xs text-red-600"
        v-if="!$v.username.required && $v.username.$error && isSubmitted"
      >
        Username is required
      </p>
    </div>
    <div class="mb-4">
      <label
        class="block text-gray-700 text-xs font-bold mb-2 text-sm"
        for="password"
      >
        Password
      </label>
      <input
        type="password"
        v-model="password"
        class=" text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        placeholder="Password"
        autocomplete="off"
      />
      <p
        class="text-xs text-red-600"
        v-if="!$v.password.required && $v.password.$error && isSubmitted"
      >
        Password is required
      </p>
      <p
        class="text-xs text-red-600"
        v-if="!$v.username.minLength && $v.password.$error && isSubmitted"
      >
        Password must have at least {{ $v.username.$params.minLength.min }}
      </p>
    </div>
    <div class="mb-4">
      <label
        class="block text-gray-700 font-bold mb-2 text-sm"
        for="repeat-password"
      >
        Repeat Password
      </label>
      <input
        type="password"
        v-model="repeatPassword"
        class="text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="repeat-password"
        placeholder="Repeat Password"
        autocomplete="off"
      />
      <p
        class="text-xs text-red-600"
        v-if="
          !$v.repeatPassword.required && $v.repeatPassword.$error && isSubmitted
        "
      >
        Repeat password is required
      </p>
      <p
        class="text-xs text-red-600"
        v-if="!$v.repeatPassword.sameAsPassword && isSubmitted"
      >
        Repeat password is mismatch
      </p>
    </div>
    <button
      @click="onRegister"
      style="display: block; margin-left: auto; margin-right: auto;"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
    >
      Register
    </button>
  </div>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      username: "",
      password: "",
      repeatPassword: "",
      isSubmitted: false,
    };
  },
  validations: {
    username: {
      required,
    },
    password: {
      required,
      minLength: minLength(8),
    },
    repeatPassword: {
      required,
      minLength: minLength(8),
      sameAsPassword: sameAs("password"),
    },
  },
  methods: {
    onRegister() {
      this.isSubmitted = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const data = {
          username: this.username,
          password: this.password,
        };
        this.$emit("on-submit", data);
      }
    },
  },
};
</script>
