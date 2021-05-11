<template>
  <div class="shadow rounded p-6 my-2" :class="hasRecord ? 'bg-green-200' : ''">
    <div class="flex flex-row items-center">
      <div class="w-2/12">
        <input
          type="checkbox"
          class="form-radio w-8 h-8"
          :value="hasRecord"
          v-model="hasRecord"
          @change="onChangeCheckbox"
        />
      </div>
      <div class="w-8/12 md:w-6/12 lg:w-6/12">
        <p>
          {{ vaccineName }}
        </p>
        <!-- ถ้าฉีดแล้ว บอกว่า ฉีดไปแล้ววันที่ ถ้ายัง แนะนำให้ฉีดวันที่ -->
        <div class="text-gray-500 text-sm">
          <span v-if="!hasRecord">{{ locale.suggestDate }}</span>
          <span class="text-green-700 font-bold" v-else>{{
            locale.receivedVac
          }}</span>

          <span class="text-gray-800" v-if="!hasRecord"> {{ dateFormat }}</span>
          <span class="text-green-700 font-bold" v-else>
            {{ receivingDateFormat }}</span
          >
        </div>
        <div
          class="text-gray-500 text-sm"
          :class="hasRecord ? 'text-green-700 font-bold' : ''"
        >
          ({{ locale.recordVaccinePage.doseNumber }} {{ doseNumber }})
        </div>

        <!-- <p v-if="receiveDate">receive date: {{ dateFormat(receiveDate) }}</p> -->
      </div>

      <div @click="toggleEditForm" class="cursor-pointer">
        <img
          class="opacity-50"
          v-if="!isEdited && hasRecord"
          src="../assets/icons/down.svg"
          alt=""
        /><img
          v-if="isEdited && hasRecord"
          class="opacity-50"
          src="../assets/icons/up.svg"
          alt=""
        />
      </div>
    </div>

    <Modal
      :isActive="isEdited"
      v-on:close="onCloseModal"
      :title="locale.recordVaccinePage.title"
    >
      <div v-if="isEdited">
        <div class="mb-4 mt-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            {{ locale.recordVaccinePage.receivingDate }}
          </label>
          <v-date-picker
            v-model="receivingDate"
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
          <!-- <v-date-picker v-model="receivingDate" :locale="calendarLocale" /> -->
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            {{ locale.recordVaccinePage.batchNO }}
          </label>
          <input
            class="input-primary"
            id="username"
            type="text"
            v-model="newBatchNumber"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            {{ locale.recordVaccinePage.sideEffect }}
          </label>
          <textarea
            class="input-primary"
            id="username"
            type="text"
            v-model="newSideEffect"
          />
        </div>

        <div class="my-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            {{ locale.recordVaccinePage.sideEffectImg }}
          </label>
          <div class="input-primary text-center">
            <label for="upload-side-effect">{{
              locale.recordVaccinePage.uploadFile
            }}</label>
          </div>
          <input
            class="input-primary hidden"
            id="upload-side-effect"
            type="file"
            accept="image/*"
            @change="onFileSideEffectChange"
          />
        </div>
        <img
          class="mx-auto w-1/2"
          v-if="base64UrlSideEffect"
          :src="base64UrlSideEffect"
        />
        <button
          class="bg-red-500 text-white p-2 mx-auto block mt-2"
          @click="clearImg('effect')"
          v-if="base64UrlSideEffect"
        >
          ลบภาพ
        </button>

        <div class="my-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            {{ locale.recordVaccinePage.evidenceImg }}
          </label>
          <div class="input-primary text-center">
            <label for="upload-evidence">{{
              locale.recordVaccinePage.uploadFile
            }}</label>
          </div>
          <div class="flex">
            <input
              class="hidden"
              id="upload-evidence"
              type="file"
              accept="image/*"
              @change="onFileEvidenceChange"
            />
          </div>
        </div>
        <img
          class="mx-auto w-1/4"
          v-if="base64UrlEvidence"
          :src="base64UrlEvidence"
        />

        <button
          class="bg-red-500 text-white p-2 mx-auto block mt-2"
          @click="clearImg('evidence')"
          v-if="base64UrlEvidence"
        >
          ลบภาพ
        </button>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            {{ locale.recordVaccinePage.hostpitalName }}
          </label>
          <input
            class="input-primary"
            id="hospitalName"
            type="text"
            v-model="newHospitalName"
          />
        </div>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            {{ locale.recordVaccinePage.doctorInfo }}
          </label>
          <input
            class="input-primary"
            id="doctorName"
            type="text"
            v-model="newMedicalStaff"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            {{ locale.recordVaccinePage.freetext }}
          </label>
          <textarea
            class="input-primary"
            id="username"
            type="text"
            v-model="newNoteMessage"
          />
        </div>

        <button class="btn-primary" @click="submit">
          {{ locale.button.save }}
        </button>
      </div>
    </Modal>
  </div>
</template>
<script>
import { format, addYears } from "date-fns";
import { th } from "date-fns/locale";
import Modal from "@/components/common/Modal.vue";

export default {
  components: {
    Modal
  },
  data: function() {
    return {
      activeModal: false,
      hasRecord: false,
      isEdited: false,
      receivingDate: new Date(),
      newSideEffect: "",
      newBatchNumber: "",
      newHospitalName: "",
      newMedicalStaff: "",
      newNoteMessage: "",
      base64UrlEvidence: "",
      base64UrlSideEffect: "",
      hospitalName: ""
    };
  },
  watch: {
    isHasRecord: function(old) {
      this.hasRecord = old;
    }
  },
  props: {
    recordCustomData: {
      type: Object
    },
    isHasRecord: {
      type: Boolean
    },
    doseNumber: {
      type: Number
    },
    vaccineId: {
      type: String,
      required: true
    },
    childId: {
      type: Number,
      required: true
    },
    appointmentId: {
      type: Number,
      required: true
    },
    recordId: {
      type: Number,
      required: true
    },
    vaccineName: {
      type: String,
      required: true
    },
    receiveDate: {
      type: Date,
      required: false
    },
    suggestDate: {
      type: Date,
      require: false
    }
  },
  mounted() {
    console.log(
      "recordCustomData",
      // this.recordCustomData,
      // this.isHasRecord,
      this.receiveDate,
      this.suggestDate
    );
    this.hasRecord = this.isHasRecord;
    if (this.recordCustomData) {
      this.receivingDate = this.receiveDate ?? this.suggestDate;
      this.newSideEffect = this.recordCustomData.sideEffect;
      this.newBatchNumber = this.recordCustomData.batchNumber;
      this.newHospitalName = this.recordCustomData.hospitalName;
      this.newMedicalStaff = this.recordCustomData.medicalStaff;
      this.newNoteMessage = this.recordCustomData.noteMessage;
      this.base64UrlEvidence = this.recordCustomData.base64UrlEvidence;
      this.base64UrlSideEffect = this.recordCustomData.base64UrlSideEffect;
    }
  },
  computed: {
    dateFormat: function() {
      let date = "";
      try {
        if (this.$store.state.calendarLocale === "th-TH") {
          date = format(
            addYears(new Date(this.suggestDate), 543),
            "dd MMM yyyy",
            {
              locale: th
            }
          );
        } else {
          date = format(new Date(this.suggestDate), "dd MMM yyyy");
        }
        return date;
      } catch (e) {
        return date;
      }
    },
    receivingDateFormat() {
      let date = "";
      if (this.$store.state.calendarLocale === "th-TH") {
        date = format(
          addYears(new Date(this.receivingDate), 543),
          "dd MMM yyyy",
          {
            locale: th
          }
        );
      } else {
        date = format(new Date(this.receivingDate), "dd MMM yyyy");
      }
      return date;
    },
    calendarLocale: function() {
      return this.$store.state.calendarLocale;
    },
    locale() {
      return this.$store.state.locale;
    }
  },
  methods: {
    clearImg(type) {
      this.$fire({
        title: this.locale.deleteIMGCon,
        showCancelButton: true,
        confirmButtonText: this.locale.label.yes,
        cancelButtonText: this.locale.label.no
      }).then(r => {
        if (r.value) {
          if (type === "effect") {
            this.base64UrlSideEffect = "";
          } else if (type === "evidence") {
            this.base64UrlEvidence = "";
          }
          this.$fire({
            title: this.locale.deleteIMGSUC,
            type: "success",
            timer: 3000
          });
        }
      });
    },
    onCloseModal() {
      this.activeModal = false;
      this.isEdited = false;
    },
    onFileSideEffectChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64UrlSideEffect = reader.result;
      };
    },
    onFileEvidenceChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64UrlEvidence = reader.result;
      };
    },
    toggleEditForm: function() {
      if (!this.hasRecord) return;

      this.isEdited = !this.isEdited;
    },
    onChangeCheckbox: function(event) {
      const checkBoxValue = event.target.value;
      if (checkBoxValue === "true") {
        this.$fire({
          title: this.locale.deleteRecCon,
          showCancelButton: true,
          confirmButtonText: this.locale.label.yes,
          cancelButtonText: this.locale.label.no
        }).then(r => {
          if (r.value) {
            const data = {
              childId: this.childId,
              appointmentId: this.appointmentId,
              recordId: this.recordId,
              receivingDate: this.receivingDate,
              recordCustomData: {
                receivingDate: this.receivingDate,
                sideEffect: this.newSideEffect,
                batchNumber: this.newBatchNumber,
                hospitalName: this.newHospitalName,
                medicalStaff: this.newMedicalStaff,
                noteMessage: this.newNoteMessage,
                doseNumber: this.doseNumber,
                vaccineId: this.vaccineId,
                base64UrlSideEffect: this.base64UrlSideEffect,
                base64UrlEvidence: this.base64UrlEvidence
              }
            };
            this.isEdited = false;
            this.$emit("on-record", checkBoxValue, data);
            this.$fire({
              title: this.locale.deleteRecSuc,
              type: "success",
              timer: 3000
            });
          } else {
            this.hasRecord = true;
          }
        });
      } else {
        this.hasRecord = true;
        this.isEdited = true;
        const data = {
          receivingDate: this.receivingDate,
          childId: this.childId,
          appointmentId: this.appointmentId,
          recordId: this.recordId,
          recordCustomData: {
            sideEffect: this.newSideEffect,
            batchNumber: this.newBatchNumber,
            hospitalName: this.newHospitalName,
            medicalStaff: this.newMedicalStaff,
            noteMessage: this.newNoteMessage,
            doseNumber: this.doseNumber,
            vaccineId: this.vaccineId,
            base64UrlSideEffect: this.base64UrlSideEffect,
            base64UrlEvidence: this.base64UrlEvidence
          }
        };

        this.$emit("on-record", checkBoxValue, data);
      }
    },
    submit: function() {
      const data = {
        receivingDate: this.receivingDate,
        childId: this.childId,
        appointmentId: this.appointmentId,
        recordCustomData: {
          sideEffect: this.newSideEffect,
          batchNumber: this.newBatchNumber,
          hospitalName: this.newHospitalName,
          medicalStaff: this.newMedicalStaff,
          noteMessage: this.newNoteMessage,
          doseNumber: this.doseNumber,
          vaccineId: this.vaccineId,
          base64UrlSideEffect: this.base64UrlSideEffect,
          base64UrlEvidence: this.base64UrlEvidence
        },
        recordId: this.recordId
      };
      this.isEdited = false;
      this.$emit("on-save", data);

      this.$fire({
        title: this.locale.label.updateRecord,
        type: "success",
        timer: 3000
      });
    }
  }
};
</script>
