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
import services from "../services";
import db from "../services/offline/db";

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
    localeText: function() {
      return this.$store.state.locale;
    },
    locale() {
      return this.$store.state.locale;
    },
    errorText: function() {
      return this.$store.state.locale.labelError;
    },
    labelText: function() {
      return this.$store.state.locale.label;
    }
  },
  methods: {
    onChangeFormMode(mode) {
      this.mode = mode;
      this.error = "";
    },
    async onClickImport() {
      try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        await services().revisionOnline.importDb(userInfo.onlineUserId);
        await db.open();

        const listUsers = await services().user.get();
        console.log("listUsers", { ...userInfo, ...(listUsers[0] ?? {}) });
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ ...userInfo, ...(listUsers[0] ?? {}) })
        );
        localStorage.setItem(
          "login-info",
          JSON.stringify({ ...userInfo, ...(listUsers[0] ?? {}) })
        );
      } catch (e) {
        console.error(e);
      }
    },
    async onLogin({ username, password }) {
      try {
        const result = await services().authOnline.login(username, password);
        this.$store.commit("setUserInfo", result);

        const oldUserInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log("oldUserInfo", oldUserInfo);
        const loginInfo = await result.json();

        const mergeInfo = {
          ...oldUserInfo,
          onlineUserId: loginInfo.userInfo.userId,
          onlineInfo: { ...loginInfo.userInfo, username, password: "" }
        };
        localStorage.setItem("userInfo", JSON.stringify(mergeInfo));
        localStorage.setItem("login-info", JSON.stringify(mergeInfo));

        console.log("loginInfo.userInfo", mergeInfo);
        console.log("mergeInfo.onlineUserId", mergeInfo.onlineUserId);
        this.$store.commit("setUserInfo", mergeInfo);
        await this.onClickImport();
        // this.deleteIDB();
        // await services().revisionOnline.importDb(mergeInfo.onlineUserId);
        // await db.open();

        this.$router.push({ name: "dashboard-family" });
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
    async onRegister({ username, password }) {
      try {
        await services().authOnline.register(username, password);

        this.$fire({
          title: this.labelText.regisSuccess,
          type: "success",
          timer: 3000
        });
        this.mode = "login";
      } catch (e) {
        this.error = this.errorText.duplicate.replace(
          "{}",
          this.labelText.username
        );
        this.$fire({
          title: "สมัครสมาชิกไม่สำเร็จ",
          type: "error",
          timer: 3000
        });
      }
    }
  }
};
</script>
