<template>
  <div class="w-full">
    <p
      class="text-2xl mb-10 border-b-2 border-orange-700 lg:px-0 px-4"
      style="width: auto;"
    >
      {{ locale.setting }}
    </p>
    <div class="flex items-center mb-6 ml-2">
      <div class="w-32">
        <label
          class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          {{ label.version }}
        </label>
      </div>
      <div class="flex flex-row">
        {{ versionNumber }}
        <img
          @click="checkUpdate"
          src="../../assets/icons/refresh.svg"
          class="h-6 ml-2"
        />
      </div>
    </div>
    <div class="flex md:items-center mb-6 ml-2">
      <div class="w-32">
        <label
          class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          {{ locale.language }}
        </label>
      </div>

      <div class="inline-block relative w-auto">
        <select
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          :value="calendarLocale"
          @input="onChangeLanguage"
        >
          <option value="en-US">English</option>
          <option value="th-TH">ภาษาไทย</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <CaretIcon />
        </div>
      </div>
      <!-- <div class="ml-auto">
        <button
          class="hidden sm:block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded block ml-auto mr-6"
          @click="onLogout"
        >
          {{ buttonLabel.logout }}
        </button>
      </div> -->
    </div>

    <div class="mb-10 mt-10">
      <div>
        <p class="text-2xl mb-10 border-b-2 border-orange-700 lg:px-0 px-4">
          {{ locale.privacy }}
        </p>
        <div class="lg:h-64 sm:h-16 px-4">
          {{ locale.privacyDetail }}
        </div>
        <!-- <button
          class=" block mt-4 mb-4 mx-auto bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Confirm
        </button> -->
      </div>

      <div class="flex items-center ml-2"></div>
      <div class="lg:w-2/3 md:w-2/3 sm:w-full">
        <p
          v-if="errorMessage !== ''"
          class="text-red-500 text-center text-xl m-2"
        >
          {{ errorMessage }}
        </p>
      </div>
      <!-- <div class="w-full">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto w-6/12"
          @click="submit"
        >
          {{ buttonLabel.save }}
        </button>
      </div> -->
    </div>

    <button
      class="block  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-auto w-9/12"
      @click="onLogout"
    >
      {{ buttonLabel.logout }}
    </button>
  </div>
</template>
<script>
import db from "../../services/offline/db";
import CaretIcon from "@/components/icons/Caret.vue";
import service from "@/services";
export default {
  components: {
    CaretIcon,
  },

  computed: {
    listVaccines() {
      return this.$store.state.listVaccines;
    },
    listDiseases() {
      return this.$store.state.listDiseases;
    },
    calendarLocale() {
      return this.$store.state.calendarLocale;
    },
    locale() {
      return this.$store.state.locale;
    },
    label() {
      return this.$store.state.locale.label;
    },
    buttonLabel() {
      return this.$store.state.locale.button;
    },
  },
  data() {
    return {
      versionNumber: "1.0.1.0",
      versionFromServer: "1.0.1.0",
      isSubmmitted: false,
      fullname: "",
      pinPassword: "",
      birthDate: new Date(),
      selectedVaccines: [],
      selectedDiseases: [],
      errorMessage: "",
      isFirstTime: false,
      userFamilyId: "",
      userInfo: {},
    };
  },
  created() {
    // this.versionNumber = localStorage.getItem("version");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.userInfo = userInfo;
    this.$store.commit("setUserInfo", userInfo);
  },
  methods: {
    async deleteIDB() {
      try {
        await db.delete();
        console.log("Database successfully deleted");
      } catch (err) {
        console.error("Could not delete database", err);
      }
    },
    refreshApp() {
      window.location.reload();
    },
    checkUpdate() {
      this.$fire({
        title: this.label.updateVersion,
        showCancelButton: true,
        confirmButtonText: this.label.yes,
        cancelButtonText: this.label.no,
      }).then((r) => {
        if (r.value) {
          // Load function
          // if (this.versionFromServer !== this.versionNumber) {
          localStorage.setItem("version", this.versionFromServer);
          this.$fire({
            title: this.locale.label.updateSuccess,
            type: "success",
            timer: 3000,
          });
          this.refreshApp();
          // }
          // else {
          //   this.$fire({
          //     title: this.locale.label.useNewestVersion,
          //     type: "info",
          //     timer: 3000,
          //   });
          // }
        }
      });
    },
    onLogout() {
      this.$fire({
        title: this.locale.label.confirmLogout,
        showCancelButton: true,
        confirmButtonText: this.locale.label.yes,
        cancelButtonText: this.locale.label.no,
      }).then(async (r) => {
        if (r.value) {
          localStorage.removeItem("userInfo");
          localStorage.removeItem("login-info");
          await this.deleteIDB();
          this.$router.push("/login");
          this.$fire({
            title: this.locale.label.logoutSuccess,
            type: "success",
            timer: 3000,
          });
        }
      });
    },
    async submit() {
      this.isSubmitted = true;
      this.$v.$reset();
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      try {
        const data = {
          fullname: this.fullname,
          birthDate: this.birthDate,
          receivedVaccines: [],
          diseases: this.selectedDiseases,
          pin: this.pinPassword,
        };

        this.$fire({
          title: this.locale.label.confirmEdit,
          showCancelButton: true,
          confirmButtonText: this.locale.label.yes,
          cancelButtonText: this.locale.label.no,
        }).then(async (r) => {
          if (r.value) {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            const newUserInfo = Object.assign(userInfo, data);

            this.$store.commit("setUserInfo", newUserInfo);

            localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
            this.$fire({
              title: this.locale.label.saveInfo,
              type: "success",
              timer: 3000,
            });

            if (this.isFirstTime) {
              const data = {
                fullname: this.fullname,
                birthDate: this.birthDate,
                diseases: this.selectedDiseases?.map((el) => el.id) ?? [],
                receivedVaccines:
                  this.selectedVaccines?.map((el) => el.id) ?? [],
                profileImg: "",
                userId: this.$store.state.userInfo.userId,
                isParent: true,
                pin: this.pinPassword,
              };
              await service().family.create(data);
              await service().user.update(
                this.$store.state.userInfo.userId,
                data
              );
              this.$store.commit("setFirstTime", false);
            } else {
              const listFamilies = await service().family.list();
              const userFamilyId = listFamilies.find(
                (el) =>
                  el.fullname === this.userInfo.fullname &&
                  el.userId === this.userInfo.userId
              )?.familyId;
              const data = {
                fullname: this.fullname,
                birthDate: this.birthDate,
                diseases: this.selectedDiseases.map((el) => el.id),
                receivedVaccines: this.selectedVaccines.map((el) => el.id),
                profileImg: "",
                userId: this.$store.state.userInfo.userId,
                pin: this.pinPassword,
                isParent: true,
              };
              await service().family.update(userFamilyId, data);
              await service().user.update(this.userInfo.userId, data);
              this.$store.commit("setFirstTime", false);
            }
          }
        });
      } catch (e) {
        this.errorMessage = e.message;
      }
    },
    onChangeLanguage(e) {
      this.$store.commit("changeLanguage", e.target.value);
    },
    onAddNewDisease(disease) {
      this.selectedDiseases.push(disease);
    },
    onDeleteDisease(index) {
      this.selectedDiseases.splice(index, 1);
    },
    onAddNewVaccine(vaccine) {
      this.selectedVaccines.push(vaccine);
    },
    onDeleteVaccine(index) {
      this.selectedVaccines.splice(index, 1);
    },
  },
};
</script>
