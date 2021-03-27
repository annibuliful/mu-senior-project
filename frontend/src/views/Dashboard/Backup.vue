<template>
  <div>
    <p class="text-2xl mb-10 border-b-2 border-orange-700" style="width: auto;">
      {{ localeText.backup }}
    </p>

    <div>
      <div class="flex flex-col items-start bg-gray-700" v-if="mode == 'regis'">
        <div>อีเมล</div>
        <input
          type="text"
          v-model="userInputData.email"
          class="border-black border-solid border-2"
        />
        <div>รหัสผ่าน</div>
        <input
          type="password"
          v-model="userInputData.password"
          class="border-black border-solid border-2"
        />
        <button
          @click="onClickRegis"
          class="border-black border-solid border-2 mt-2"
        >
          สมัครสมาชิก
        </button>
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

      <!-- <input
        class="mx-auto  mt-2"
        type="file"
        accept="text/json"
        @change="uploadFile($event)"
      /> -->
      <!-- <button
        class="border-2 border-gray-800 p-2 w-3/12 mx-auto  mt-2"
        @click="deleteIDB"
      >
        Delete
      </button> -->
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

export default {
  data() {
    return {
      uploadedFile: null,
      exportBlob: null,
      file: null,
      mode: "regis",
      userInputData: {
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassWord: ""
      }
    };
  },
  computed: {
    localeText: function() {
      return this.$store.state.locale;
    }
  },
  methods: {
    async onClickRegis() {
      const userInfo = await services().authOnline.register(
        this.userInputData.email,
        this.userInputData.password
      );
      const userInfoJson = await userInfo.json();
      //   await db.delete();
      console.log("userInfo", userInfoJson.userId);

      if (userInfoJson.userId) {
        this.$fire({
          title: "สมัครสมาชิกสำเร็จ",
          type: "success",
          timer: 3000
        });
        localStorage.setItem();
      }
    },
    async onClickBackup() {
      await services().revisionOnline.exportDb("1");

      // try {
      //   const blob = await exportDB(db, { prettyJson: true });
      //   console.log("blob Info", blob);
      //   this.exportBlob = blob;
      //   // this.download(blob, "dexie-export.json", "application/json");
      //   console.log("click2", blob);
      //   // this.$store.commit("setExportFileBlob", this.exportBlob);
      //   console.log("test", this.$store.state.exportFileBlob);
      //   let link = document.createElement("a");
      //   link.href = window.URL.createObjectURL(blob);
      //   link.download = "test.json";

      //   document.body.appendChild(link);
      //   link.click();
      //   document.body.removeChild(link);
      // } catch (error) {
      //   console.log("click3");
      //   console.error("" + error);
      // }
    },
    async onClickImport() {
      this.deleteIDB();
      // // const importDb = await importDB(this.exportBlob);
      // console.log("import file", this.file);
      // const importDb = await importDB(this.file);
      // console.log("import clicked");
      // console.log(this.uploadedFile);
      // console.log(importDb);
      await services().revisionOnline.importDb("1");
      // await services().authOnline.login(
      //   "Talia.Altenwerth66@gmail.com",
      //   "1234567"
      // );
    },
    uploadFile(file) {
      this.file = file;
      console.log("upload file", file);
      // console.log("file", file);
    },
    deleteIDB() {
      db.delete()
        .then(() => {
          console.log("Database successfully deleted");
        })
        .catch(err => {
          console.error("Could not delete database", err);
        })
        .finally(() => {
          // Do what should be done next...
        });
    }
  }
};
</script>
<style scoped></style>
