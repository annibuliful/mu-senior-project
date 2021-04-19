<template>
  <div class="w-full">
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      {{ labelAddFamily.updateChildInfoTitle }}
    </p>
    <div class="mx-12">
      <div class="mb-4">
        <div>
          <label for="file-input">
            <img class="mx-auto" v-if="!base64Url" src="../../assets/boy.png" />
            <img class="mx-auto" v-else :src="base64Url" />
          </label>

          <input
            id="file-input"
            @change="onFileChange"
            type="file"
            class="hidden"
          />
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 ">
          {{ labelAddFamily.name }}
        </label>

        <input
          class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          autocomplete="off"
          type="text"
          v-model="fullname"
          :placeholder="labelAddFamily.name"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 ">
          {{ labelAddFamily.birthDate }}
        </label>
        <v-date-picker
          v-model="birthDate"
          :locale="calendarLocale"
          class="block"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <input
              class="bg-white border px-2 py-1 rounded w-full"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </v-date-picker>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 ">
          {{ labelAddFamily.disease }}
        </label>
        <TagInput
          :placeholder="labelAddFamily.disease"
          :listTags="listDiseases"
          :selectedTags="selectedDiseases"
          v-on:on-enter="onAddNewDisease"
          v-on:on-remove="onDeleteDisease"
        />
      </div>

      <div class="flex flex-row md:mt-8">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block ml-auto mr-auto w-20 md:w-3/12"
          @click="submit"
        >
          {{ buttonLabel.update }}
        </button>

        <button
          @click="deleteFamily()"
          class="bg-red-500 text-white font-bold py-2 px-4  rounded block ml-auto mr-auto w-20 md:w-3/12"
        >
          {{ labelAddFamily.deleteFamily }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TagInput from "@/components/input/TagInput.vue";
import service from "@/services";

export default {
  components: {
    TagInput
  },
  async created() {
    this.$store.commit("listFamilies");
    const language = this.$store.state.calendarLocale;

    const initChildInfo = (
      await service().family.getByChildId(this.$route.params.id, language)
    )[0];

    this.childInfo = initChildInfo;
    console.log("this.childInfo", this.childInfo);
    this.fullname = this.childInfo.fullname;
    this.birthDate = this.childInfo.birthDate;
    this.base64Url = this.childInfo.profileImg;
    this.selectedDiseases = this.childInfo.diseases;
    this.selectedVaccines = this.childInfo.receivedVaccines;
  },
  data() {
    return {
      fullname: "",
      birthDate: new Date(),
      inputDisease: "",
      inputVaccine: "",
      selectedDiseases: [],
      selectedVaccines: [],
      childInfo: "",
      profileImgSrc: "",
      base64Url: null
    };
  },
  computed: {
    listVaccines() {
      return this.$store.state.locale.vaccines.map(el => ({
        id: el.vaccineId,
        tag: el.vaccineNameNormal
      }));
    },
    listDiseases() {
      return this.$store.state.locale.diseases.map(el => ({
        id: el.diseaseId,
        tag: el.diseaseName
      }));
    },
    listFamilies() {
      return this.$store.state.listFamilies;
    },
    buttonLabel() {
      return this.$store.state.locale.button;
    },
    labelAddFamily() {
      return this.$store.state.locale.label;
    },
    calendarLocale() {
      return this.$store.state.calendarLocale;
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64Url = reader.result;
      };
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

    async submit() {
      this.childInfo.fullname = this.fullname;
      this.childInfo.birthDate = this.birthDate;
      this.childInfo.profileImg = this.base64Url;
      this.childInfo.diseases = this.selectedDiseases.map(el => el.id);
      this.childInfo.receivedVaccines = this.selectedVaccines.map(el => el.id);

      try {
        this.$fire({
          title: this.labelAddFamily.confirmEdit,
          showCancelButton: true,
          confirmButtonText: this.labelAddFamily.yes,
          cancelButtonText: this.labelAddFamily.no
        }).then(async r => {
          if (r.value) {
            this.$fire({
              title: this.labelAddFamily.saveInfo,
              type: "success",
              timer: 3000
            });
            await service().family.update(
              Number(this.$route.params.id),
              this.childInfo
            );

            this.$router.push({
              name: "dashboard-family"
            });
          }
        });
      } catch (e) {
        this.errorMessage = e.message;
      }
    },
    resetForm() {
      this.fullname = "";
      this.birthDate = new Date();
      this.inputDisease = "";
      this.inputVaccine = "";
      this.selectedDiseases = [];
      this.selectedVaccines = [];
    },
    async deleteFamily() {
      this.childInfo.isDelete = true;
      try {
        this.$fire({
          title: this.labelAddFamily.confirmDelete,
          showCancelButton: true,
          confirmButtonText: this.labelAddFamily.yes,
          cancelButtonText: this.labelAddFamily.no
        }).then(async r => {
          if (r.value) {
            this.$fire({
              title: this.labelAddFamily.deleteSuccess,
              type: "success",
              timer: 3000
            });
            await service().family.update(
              Number(this.$route.params.id),
              this.childInfo
            );
            this.$router.push({
              name: "dashboard-family"
            });
          }
        });
      } catch (e) {
        this.errorMessage = e.message;
      }
    }
  }
};
</script>
