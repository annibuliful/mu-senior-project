<template>
  <div>
    <div class="mb-4">
      <label
        class="block text-gray-700 text-xs font-bold mb-2 text-sm"
        for="username"
      >
        {{ localeText.username }}
      </label>
      <input
        v-model="username"
        class="text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        :placeholder="localeText.username"
        autocomplete="off"
      />
      <p
        class="text-xs text-red-600"
        v-if="!$v.username.required && $v.username.$error && isSubmitted"
      >
        {{ localeText.usernameRequire }}
      </p>
    </div>
    <div class="mb-4">
      <label
        class="block text-gray-700 text-xs font-bold mb-2 text-sm"
        for="password"
      >
        {{ localeText.password }}
      </label>
      <input
        type="password"
        v-model="password"
        class=" text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        :placeholder="localeText.password"
        autocomplete="off"
      />
      <p
        class="text-xs text-red-600"
        v-if="!$v.password.required && $v.password.$error && isSubmitted"
      >
        {{ localeText.passwordRequire }}
      </p>
      <p
        class="text-xs text-red-600"
        v-if="!$v.password.minLength && $v.password.$error && isSubmitted"
      >
        {{ localeText.passwordAtLeast }} {{ $v.password.$params.minLength.min }}
      </p>
    </div>
    <button
      @click="onLogin"
      style="display: block; margin-left: auto; margin-right: auto;"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
    >
      {{ localeText.login }}
    </button>
  </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      username: "",
      password: "",
      isSubmitted: false
    };
  },
  validations: {
    username: {
      required
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  computed: {
    localeText() {
      return this.$store.state.locale;
    }
  },
  methods: {
    onLogin() {
      this.isSubmitted = true;
      this.$v.$reset();
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const data = {
          username: this.username,
          password: this.password
        };
        this.$emit("on-submit", data);
      }
    }
  }
};
</script>
