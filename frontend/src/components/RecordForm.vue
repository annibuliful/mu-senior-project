<template>
  <div class="shadow rounded p-6">
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
          กำหนดฉีดวันที่ <span class="text-gray-800">{{ dateFormat }}</span>
        </div>
        <div class="text-gray-500 text-sm">(Dose number {{ doseNumber }})</div>

        <!-- <p v-if="receiveDate">receive date: {{ dateFormat(receiveDate) }}</p> -->
      </div>
      <div @click="toggleEditForm" class="cursor-pointer">Edit</div>
    </div>
    <div v-if="isEdited">
      <div class="mb-4 mt-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Receive date
        </label>
        <v-date-picker v-model="receivingDate" :locale="calendarLocale" />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Batch number
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
          Side effects
        </label>
        <textarea
          class="input-primary"
          id="username"
          type="text"
          v-model="newSideEffect"
        />
      </div>

      <!-- <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Side effects Image
        </label>
        <div class="input-primary text-center">
          <label for="upload-side-effect">Upload File EIEI</label>
        </div>
        <input
          class="input-primary hidden"
          id="upload-side-effect"
          type="file"
          accept="image/*"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Evidence of the vaccination
        </label>
        <div class="input-primary text-center">
          <label for="upload-side-effect">Upload File EIEI</label>
        </div>
        <input
          class="input-primary hidden"
          id="upload-side-effect"
          type="file"
          accept="image/*"
        />
      </div> -->
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Note message
        </label>
        <textarea
          class="input-primary"
          id="username"
          type="text"
          v-model="newNoteMessage"
        />
      </div>
      <button class="btn-primary" @click="submit">Save</button>
    </div>
  </div>
</template>
<script>
import { format, addYears } from "date-fns";
import { th } from "date-fns/locale";
export default {
  data: function() {
    return {
      hasRecord: this.isHasRecord,
      isEdited: false,
      receivingDate: new Date(),
      newSideEffect: "",
      newBatchNumber: "",
      newHospitalName: "",
      newMedicalStaff: "",
      newNoteMessage: "",
    };
  },
  props: {
    recordCustomData: {
      type: Object,
    },
    isHasRecord: {
      type: Boolean,
    },
    doseNumber: {
      type: Number,
    },
    vaccineId: {
      type: String,
      required: true,
    },
    childId: {
      type: Number,
      required: true,
    },
    appointmentId: {
      type: Number,
      required: true,
    },
    recordId: {
      type: Number,
      required: true,
    },
    vaccineName: {
      type: String,
      required: true,
    },
    receiveDate: {
      type: Date,
      required: false,
    },
  },
  mounted() {
    console.log("recordCustomData", this.recordCustomData);
    if (this.recordCustomData) {
      this.newSideEffect = this.recordCustomData.sideEffect;
      this.newBatchNumber = this.recordCustomData.batchNumber;
      this.newHospitalName = this.recordCustomData.hospitalName;
      this.newMedicalStaff = this.recordCustomData.medicalStaff;
      this.newNoteMessage = this.recordCustomData.noteMessage;
    }
  },
  computed: {
    dateFormat: function() {
      let date = "";
      if (this.$store.state.calendarLocale === "th-TH") {
        date = format(
          addYears(new Date(this.receiveDate), 543),
          "dd MMM yyyy",
          {
            locale: th,
          }
        );
      } else {
        date = format(new Date(this.receiveDate), "dd MMM yyyy");
      }
      return date;
    },
    calendarLocale: function() {
      return this.$store.state.calendarLocale;
    },
  },
  methods: {
    toggleEditForm: function() {
      if (!this.hasRecord) return;

      this.isEdited = !this.isEdited;
    },
    // dateFormat: function(dateValue) {
    //   let date = "";
    //   if (this.$store.state.calendarLocale === "th-TH") {
    //     date = format(addYears(new Date(dateValue), 543), "dd MMM yyyy", {
    //       locale: th,
    //     });
    //   } else {
    //     date = format(new Date(dateValue), "dd MMM yyyy");
    //   }
    //   return date;
    // },
    onChangeCheckbox: function(event) {
      const checkBoxValue = event.target.value;
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
        },
      };
      this.isEdited = !this.isEdited;

      this.$emit("on-record", checkBoxValue, data);
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
        },
        recordId: this.recordId,
      };
      this.isEdited = false;
      this.$emit("on-save", data);
    },
  },
};
</script>
