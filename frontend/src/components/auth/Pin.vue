<template>
  <div>
    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2 text-center text-2xl mb-4"
        for="password"
      >
        {{ pinLabel }}
      </label>
      <input
        class="input-primary focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="PIN"
        v-model="pinPassword"
      />
      <p
        class="text-xs text-red-600"
        v-if="!$v.pinPassword.required && $v.pinPassword.$error && isSubmitted"
      >
        {{
          requireLabel.labelError.required.replace(
            "{}",
            ` ${requireLabel.label.pin}`
          )
        }}
      </p>
    </div>
    <button class="btn-primary" @click="onSubmitPassword">Login</button>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
export default {
  validations: {
    pinPassword: {
      required
    }
  },
  data() {
    return {
      isSubmitted: false,
      pinPassword: ""
    };
  },
  computed: {
    pinLabel: function() {
      return this.$store.state.locale.pin.label;
    },
    requireLabel: function() {
      return this.$store.state.locale;
    }
  },
  methods: {
    onSubmitPassword: function() {
      this.isSubmitted = true;
      this.$v.$reset();
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$emit("submit-password", this.pinPassword);
      }
    }
  }
};
</script>
<style scoped></style>
