<template>
  <div>
    <p
      class="text-2xl mb-10 border-b-2 border-blue-700 lg:px-0 px-4"
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
      <div class="ml-auto">
        <button
          class="hidden sm:block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded block ml-auto mr-6"
          @click="onLogout"
        >
          {{ buttonLabel.logout }}
        </button>
      </div>
    </div>

    <div class="mb-10 mt-10">
      <p class="text-md mb-10 border-b-2 border-blue-700 lg:px-0 px-4">
        {{ locale.accountSetting }}
      </p>

      <div class="flex items-center mb-6 ml-2">
        <div class="w-32">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="fullname"
          >
            {{ label.name }}
          </label>
        </div>

        <div class="inline-block relative w-auto">
          <input
            type="text"
            v-model="fullname"
            class=" w-full text-base shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullname"
            :placeholder="label.name"
            autocomplete="off"
          />
          <p
            class="text-xs text-red-600"
            v-if="!$v.fullname.required && $v.fullname.$error && isSubmitted"
          >
            {{ locale.labelError.required.replace("{}", label.name) }}
          </p>
        </div>
      </div>

      <div class="flex items-center mb-6 ml-2">
        <div class="w-32">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="pin"
          >
            {{ label.pin }}
          </label>
        </div>

        <div class="inline-block relative w-auto">
          <input
            type="password"
            v-model="pinPassword"
            class=" w-full text-base shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pin"
            :placeholder="label.pin"
            autocomplete="off"
          />
          <p
            class="text-xs text-red-600"
            v-if="
              !$v.pinPassword.required && $v.pinPassword.$error && isSubmitted
            "
          >
            {{ locale.labelError.required.replace("{}", ` ${label.pin}`) }}
          </p>
        </div>
      </div>

      <div class="flex items-center mb-6 ml-2">
        <div class="w-32">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            {{ label.birthDate }}
          </label>
        </div>

        <div class="inline-block relative w-auto">
          <v-date-picker v-model="birthDate" :locale="calendarLocale" />
          <p
            class="text-xs text-red-600"
            v-if="!$v.birthDate.required && $v.birthDate.$error && isSubmitted"
          >
            {{ locale.labelError.required.replace("{}", label.birthDate) }}
          </p>
        </div>
      </div>

      <div class="flex items-center mb-6 ml-2">
        <div class="w-32">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            {{ label.disease }}
          </label>
        </div>

        <div class="inline-block relative w-auto">
          <TagInput
            :placeholder="label.disease"
            :listTags="listDiseases"
            :selectedTags="selectedDiseases"
            v-on:on-enter="onAddNewDisease"
            v-on:on-remove="onDeleteDisease"
          />
        </div>
      </div>

      <div class="flex items-center ml-2">
        <!-- <div class="w-32">
          <label
            class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            {{ label.vaccine }}
          </label>
        </div> -->

        <!-- <div class="inline-block relative w-auto">
          <TagInput
            :placeholder="label.vaccine"
            :listTags="listVaccines"
            :selectedTags="selectedVaccines"
            v-on:on-enter="onAddNewVaccine"
            v-on:on-remove="onDeleteVaccine"
          />
        </div> -->
      </div>
      <div class="lg:w-2/3 md:w-2/3 sm:w-full">
        <p
          v-if="errorMessage !== ''"
          class="text-red-500 text-center text-xl m-2"
        >
          {{ errorMessage }}
        </p>
      </div>
      <div class="w-full">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto w-6/12"
          @click="submit"
        >
          {{ buttonLabel.save }}
        </button>
      </div>
    </div>

    <button
      class="block sm:hidden bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-auto w-9/12"
      @click="onLogout"
    >
      {{ buttonLabel.logout }}
    </button>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import CaretIcon from "@/components/icons/Caret.vue";
import TagInput from "@/components/input/TagInput.vue";
import service from "@/services";
export default {
  components: {
    CaretIcon,
    TagInput
  },
  validations: {
    fullname: {
      required
    },
    birthDate: {
      required
    },
    pinPassword: {
      required
    }
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
    }
  },
  data() {
    return {
      versionNumber: "",
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
      userInfo: {}
    };
  },
  created() {
    this.versionNumber = localStorage.getItem("version");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.userInfo = userInfo;
    this.$store.commit("setUserInfo", userInfo);

    const isFirstTime = this.userInfo.fullname === "";
    if (isFirstTime) {
      this.isFirstTime = true;
      this.$fire({
        title: this.locale.label.notifyToEdit,
        type: "warning",
        timer: 3000
      });
      this.$store.commit("setFirstTime", true);
    }
    this.fullname = this.userInfo.fullname;
    this.birthDate = new Date(this.userInfo.birthDate);
    this.selectedVaccines = this.userInfo.diseases;
    this.selectedDiseases = this.userInfo.receivedVaccines;
    this.pinPassword = this.userInfo.pin;
  },
  methods: {
    refreshApp() {
      window.location.reload();
    },
    checkUpdate() {
      this.$fire({
        title: this.label.updateVersion,
        showCancelButton: true,
        confirmButtonText: this.label.yes,
        cancelButtonText: this.label.no
      }).then(r => {
        if (r.value) {
          // Load function
          if (this.versionFromServer !== this.versionNumber) {
            localStorage.setItem("version", this.versionFromServer);
            this.$fire({
              title: this.locale.label.updateSuccess,
              type: "success",
              timer: 3000
            });
            this.refreshApp();
          } else {
            this.$fire({
              title: this.locale.label.useNewestVersion,
              type: "info",
              timer: 3000
            });
          }
        }
      });
    },
    onLogout() {
      this.$fire({
        title: this.locale.label.confirmLogout,
        showCancelButton: true,
        confirmButtonText: this.locale.label.yes,
        cancelButtonText: this.locale.label.no
      }).then(r => {
        if (r.value) {
          localStorage.removeItem("userInfo");
          this.$router.push("/");
          this.$fire({
            title: this.locale.label.logoutSuccess,
            type: "success",
            timer: 3000
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
          pin: this.pinPassword
        };

        this.$fire({
          title: this.locale.label.confirmEdit,
          showCancelButton: true,
          confirmButtonText: this.locale.label.yes,
          cancelButtonText: this.locale.label.no
        }).then(async r => {
          if (r.value) {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            const newUserInfo = Object.assign(userInfo, data);

            this.$store.commit("setUserInfo", newUserInfo);

            localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
            this.$fire({
              title: this.locale.label.saveInfo,
              type: "success",
              timer: 3000
            });

            if (this.isFirstTime) {
              const data = {
                fullname: this.fullname,
                birthDate: this.birthDate,
                diseases: this.selectedDiseases?.map(el => el.id) ?? [],
                receivedVaccines: this.selectedVaccines?.map(el => el.id) ?? [],
                profileImg: "",
                userId: this.$store.state.userInfo.userId,
                isParent: true,
                pin: this.pinPassword
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
                el =>
                  el.fullname === this.userInfo.fullname &&
                  el.userId === this.userInfo.userId
              )?.familyId;
              const data = {
                fullname: this.fullname,
                birthDate: this.birthDate,
                diseases: this.selectedDiseases.map(el => el.id),
                receivedVaccines: this.selectedVaccines.map(el => el.id),
                profileImg: "",
                userId: this.$store.state.userInfo.userId,
                pin: this.pinPassword,
                isParent: true
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
    }
  }
};
</script>
