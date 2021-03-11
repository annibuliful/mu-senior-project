<template>
  <div>
    <p class="text-2xl mb-10 border-b-2 border-orange-700" style="width: auto;">
      {{ localeText.backup }}
    </p>
    <!-- Search Area -->
    <div class="flex flex-col">
      <button
        class="w-3/12 mx-auto border-2 border-gray-800 p-2 mt-2"
        @click="onClickBackup"
      >
        Backup
      </button>

      <input
        class="mx-auto  mt-2"
        type="file"
        accept="text/json"
        @change="uploadFile($event)"
      />
      <button
        class="border-2 border-gray-800 p-2 w-3/12 mx-auto  mt-2"
        @click="deleteIDB"
      >
        Delete
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
import { exportDB, importDB } from "dexie-export-import";
export default {
  data() {
    return {
      uploadedFile: null,
      exportBlob: null,
    };
  },
  computed: {
    localeText: function() {
      return this.$store.state.locale;
    },
  },
  methods: {
    async onClickBackup() {
      //   await db.delete();
      console.log("click1");
      try {
        const blob = await exportDB(db, { prettyJson: true });
        this.exportBlob = blob;
        // this.download(blob, "dexie-export.json", "application/json");
        console.log("click2", blob);
        this.$store.commit("setExportFileBlob", this.exportBlob);
        console.log("test", this.$store.state.exportFileBlob);
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "test.json";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.log("click3");
        console.error("" + error);
      }
    },
    async onClickImport() {
      const importDb = await importDB(this.exportBlob);
      console.log("import clicked");
      console.log(this.uploadedFile);
      console.log(importDb);
    },
    uploadFile(file) {
      //   console.log("uploading...");
      //   const blober = new Blob([JSON.stringify(file)], {
      //     type: "application/json",
      //   });
      console.log("file", file);
      //   console.log("blober", blober);
      //   this.uploadedFile = blober;
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
  },
};
</script>
<style scoped></style>
