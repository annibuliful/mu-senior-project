<template>
  <div class="w-full">
    <p class="text-2xl mb-10 border-b-2 border-orange-700" style="width: auto;">
      {{ localeText.backup }}
    </p>
    <img src="@/assets/people.png" class="mx-auto mt-2" />

    <div
      class="max-w-xs max-w-lg rounded bg-white pt-6 shadow p-8"
      style="margin-top: 2vh; margin-left: auto; margin-right: auto; "
      v-if="!isAlreadyLogin"
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
        <LoginForm v-if="mode === 'login'" v-on:on-submit="onLogin" />
        <RegisterForm v-if="mode === 'register'" v-on:on-submit="onRegister" />
        <p v-if="error !== ''" class="text-red-500 text-center text-xs m-2">
          {{ error }}
        </p>
      </div>
    </div>

    <!-- Search Area -->
    <div class="flex flex-col">
      <button
        class="w-3/12 mx-auto border-2 border-gray-800 p-2 mt-2"
        @click="onClickBackup"
      >
        Backup
      </button>

      <button
        class="border-2 border-gray-800 p-2 w-3/12 mx-auto  mt-2"
        @click="onClickImport"
      >
        Import
      </button>
    </div>
  </div>
</template>
<script>
import "dexie-export-import";
import db from "../../services/offline/db";
// import { exportDB } from "dexie-export-import";
import services from "../../services";
import LoginForm from "@/components/auth/Login.vue";
import RegisterForm from "@/components/auth/Register.vue";

export default {
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      isAlreadyLogin: false,
      uploadedFile: null,
      exportBlob: null,
      file: null,
      error: "",
      mode: "register",
      userInputData: {
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassWord: "",
      },
    };
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
    },
  },
  created() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) return;
    if (userInfo.onlineUserId) this.isAlreadyLogin = true;
  },
  methods: {
    onChangeFormMode(mode) {
      this.mode = mode;
      this.error = "";
    },
    async onClickBackup() {
      const userId = JSON.parse(localStorage.getItem("userInfo")).onlineUserId;
      await services().revisionOnline.exportDb(userId);
    },
    async onClickImport() {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      this.deleteIDB();
      await services().revisionOnline.importDb(userInfo.onlineUserId);
    },

    deleteIDB() {
      db.delete()
        .then(() => {
          console.log("Database successfully deleted");
        })
        .catch((err) => {
          console.error("Could not delete database", err);
        })
        .finally(() => {
          // Do what should be done next...
        });
    },
    async onLogin({ username, password }) {
      try {
        const result = await services().authOnline.login(username, password);
        this.$store.commit("setUserInfo", result);

        const oldUserInfo = JSON.parse(localStorage.getItem("userInfo"));
        const loginInfo = await result.json();

        const mergeInfo = {
          ...oldUserInfo,
          onlineUserId: loginInfo.userInfo.userId,
        };
        localStorage.setItem("userInfo", JSON.stringify(mergeInfo));
        console.log("loginInfo.userInfo", mergeInfo);
        // this.onClickImport();
        // this.$router.push({ name: "dashboard-family" });
        this.$fire({
          title: "เข้าสู่ระบบสำเร็จ",
          type: "success",
          timer: 3000,
        });
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
          title: "สมัครสมาชิกสำเร็จ",
          type: "success",
          timer: 3000,
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
          timer: 3000,
        });
      }
    },
  },
};
</script>
<style scoped></style>
