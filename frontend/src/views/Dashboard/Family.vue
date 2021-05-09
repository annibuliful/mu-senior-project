<template>
  <div class="w-full ">
    <p class="text-2xl mb-10 border-b-2 border-orange-700">
      {{ familyword }}
    </p>
    <div class="mt-4">
      <button
        @click="onOpenAddFamilyForm"
        class="block bg-white hover:bg-gray-100 text-black-800 py-2 px-4 border border-gray-900 rounded shadow ml-auto mr-4"
      >
        <img src="@/assets/icons/plus.svg" class="w-4 inline mr-2" />{{
          buttonLabel.add
        }}
      </button>
      <div
        class="w-full max-w-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 ml-auto mr-auto sm:mb-16"
        v-if="isOpenAddForm"
      >
        <div class="mb-4">
          <div>
            <label for="file-input">
              <img
                v-if="!base64Url"
                src="../../assets/boy.png"
                class="block mx-auto"
              />
              <img v-else :src="base64Url" class="block mx-auto" />
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
          <p
            class="text-xs text-red-600"
            v-if="!$v.fullname.required && $v.fullname.$error && isSubmitted"
          >
            {{
              localeText.labelError.required.replace(
                "{}",
                localeText.label.name
              )
            }}
          </p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ labelAddFamily.birthDate }}
          </label>
          <!-- <v-date-picker v-model="birthDate" :locale="calendarLocale" /> -->
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

        <!-- <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ labelAddFamily.vaccine }}
          </label>
          <TagInput
            :placeholder="labelAddFamily.vaccine"
            :listTags="listVaccines"
            :selectedTags="selectedVaccines"
            v-on:on-enter="onAddNewVaccine"
            v-on:on-remove="onDeleteVaccine"
          />
        </div> -->
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block ml-auto"
          @click="submit"
        >
          {{ buttonLabel.next }}
        </button>
      </div>
    </div>
    <div class="mt-4 w-full sm:mb-20 lg:mb-4">
      <div
        class="flex flex-wrap"
        v-for="(family, index) in listFamilies"
        :key="`${family.fullname}-${index}`"
      >
        <FamilyCard
          class="card flex-initial"
          :id="family.familyId"
          :name="family.fullname"
          :birthDate="family.birthDate"
          :diseases="family.diseases"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import FamilyCard from "@/components/FamilyCard.vue";
import TagInput from "@/components/input/TagInput.vue";
import service from "@/services";
export default {
  components: {
    FamilyCard,
    TagInput
  },
  created() {
    this.$store.commit("listFamilies");
    const user = localStorage.getItem("userInfo");
    const { userId } = JSON.parse(user);
    const language = this.$store.state.calendarLocale;
    service()
      .family.list(userId, language)
      .then(data => {
        this.listFamilies = data;
      });
  },
  data() {
    return {
      isSubmitted: false,
      isOpenAddForm: false,
      fullname: "",
      birthDate: new Date(),
      inputDisease: "",
      inputVaccine: "",
      profileImg: "",
      selectedDiseases: [],
      selectedVaccines: [],
      base64Url: null,
      listFamilies: []
    };
  },
  validations: {
    fullname: {
      required
    }
  },
  computed: {
    localeText() {
      return this.$store.state.locale;
    },
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
    familyword() {
      return this.$store.state.locale.family;
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
    onOpenAddFamilyForm() {
      this.isOpenAddForm = !this.isOpenAddForm;
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
      const todayDate = new Date();
      if (!this.fullname) {
        this.$fire({
          title: this.localeText.nameRequired,
          type: "error",
          timer: 3000
        });
      } else if (this.birthDate > todayDate) {
        this.$fire({
          title: this.localeText.bthRequired,
          type: "error",
          timer: 3000
        });
      } else {
        this.isSubmitted = true;
        this.$v.$reset();
        this.$v.$touch();

        if (!this.$v.$invalid) {
          const data = {
            fullname: this.fullname,
            birthDate: this.birthDate,
            diseases: this.selectedDiseases.map(el => el.id),
            receivedVaccines: [],
            profileImg: this.base64Url,
            userId: this.$store.state.userInfo.userId,
            isParent: false
          };
          this.$store.commit("setTempFamilyInfo", data);
          this.$router.push({
            name: "appointment-child-suggestion"
          });
        }
      }
    },
    resetForm() {
      this.fullname = "";
      this.birthDate = new Date();
      this.inputDisease = "";
      this.inputVaccine = "";
      this.selectedDiseases = [];
      this.selectedVaccines = [];
    }
  }
};
</script>
<style scoped>
.card {
  width: 30vw;
  margin: auto;
}
.vue-tags-input {
  background: #324652;
}
/* .vue-tags-input .ti-input {
  padding: 4px 10px;
  transition: border-bottom 200ms ease;
} */
@media only screen and (max-width: 900px) {
  .card {
    width: 100vw;
    margin: auto;
    border-top: 1px solid #718096;
  }

  .card:last-child {
    border-bottom: 1px solid #718096;
  }
}
</style>
