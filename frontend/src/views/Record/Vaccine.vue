<template>
  <div class="overflow-scroll">
    <Modal
      :isActive="activeModal"
      v-on:close="onCloseModal"
      :title="label.nextAppointMent"
    >
      <div class="my-4">
        <div class="grid grid-flow-col" style="grid-template-columns: 60% 30%">
          <p class="text-base md:text-2xl text-center font-bold">
            {{ label.vcName }}
          </p>
          <p class="text-base md:text-2xl  text-center font-bold">
            {{ label.nextAppointMent }}
          </p>
        </div>
        <div
          v-for="({ name, nextDay, isComplete }, index) in listNextAppointments"
          :key="`${index}`"
          class="grid"
          style="grid-template-columns: 60% 30%"
        >
          <p class="text-sm md:text-xl text-center mt-2">{{ name }}</p>
          <p class="text-sm md:text-xl text-center mt-2" v-if="isComplete">
            {{ label.complete }}
          </p>
          <p class="text-sm md:text-xl text-center mt-2" v-if="!isComplete">
            {{ nextDay }} {{ label.day }}
          </p>
        </div>
      </div>
      <button
        @click="createNextAppointment"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto"
      >
        {{ localeText.submitBtn }}
      </button>
    </Modal>
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      {{ localeText.title }}
    </p>
    <div class="mt-4">
      <div
        class="w-full max-w-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 ml-auto mr-auto sm:mb-16"
      >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.recordTo }}
          </label>
          <select
            class="appearance-none bg-white border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="recordTo"
            autocomplete="off"
            type="text"
            v-model="recordTo"
            :placeholder="localeText.recordTo"
          >
            <option
              class="bg-white"
              v-for="(family, index) in listFamilies"
              :key="`${family.fullname}-${index}`"
              >{{ family.fullname }}</option
            >
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.vaccineName }}
          </label>
          <TagInput
            :placeholder="label.vaccineList"
            :listTags="listVaccines"
            :selectedTags="selectedVaccines"
            v-on:on-enter="onAddNewVaccine"
            v-on:on-remove="onDeleteVaccine"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.receivingDate }}
          </label>
          <v-date-picker v-model="receivingDate" :locale="calendarLocale" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.batchNO }}
          </label>
          <input
            class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="batchNO"
            autocomplete="off"
            type="text"
            v-model="batchNO"
            :placeholder="localeText.batchNO"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.hostpitalName }}
          </label>
          <input
            class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="hostpitalName"
            autocomplete="off"
            type="text"
            v-model="hostpitalName"
            :placeholder="localeText.hostpitalName"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.doctorInfo }}
          </label>
          <input
            class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="doctorInfo"
            autocomplete="off"
            type="text"
            v-model="doctorInfo"
            :placeholder="localeText.doctorInfo"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.freetext }}
          </label>
          <input
            class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="freetext"
            autocomplete="off"
            type="text"
            v-model="freetext"
            :placeholder="localeText.freetext"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ">
            {{ localeText.uploadImage }}
          </label>
          <input type="file" @change="onFileChange" />
          <div id="preview">
            <img v-if="base64Url" :src="base64Url" class="preview-image" />
          </div>
          <Camera v-on:on-capture="onCapture" />
        </div>
        <div class="flex">
          <button
            class="font-bold py-2 px-4 rounded block border hover:border-red-600"
            @click="cancel"
          >
            {{ localeText.cancelBtn }}
          </button>
          <button
            @click="onOpenModal"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block ml-auto"
          >
            {{ localeText.submitBtn }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { format, add } from "date-fns";
import Modal from "@/components/common/Modal.vue";
import TagInput from "@/components/input/TagInput.vue";
import Camera from "@/components/Camera.vue";
import service from "@/services";
export default {
  components: {
    TagInput,
    Camera,
    Modal,
  },
  data() {
    return {
      activeModal: false,
      vaccineName: "",
      batchNO: "",
      receivingDate: new Date(),
      hostpitalName: "",
      doctorInfo: "",
      freetext: "",
      recordTo: "",
      selectedVaccines: [],
      url: null,
      base64Url: null,
      baseInfo: null,
      listNextAppointments: [],
    };
  },
  created() {
    const eventId = this.$route.params.id;
    service()
      .appointment.getById(eventId)
      .then((data) => {
        this.baseInfo = data[0];
        this.recordTo = this.baseInfo.customData.childname;
        this.selectedVaccines = this.baseInfo.customData.selectedVaccines.map(
          (el) => ({ tag: el })
        );
        this.receivingDate = this.baseInfo.dates;
      });
    this.$store.commit("listFamilies");
  },
  filters: {
    dateFormat: function(val) {
      return format(new Date(val), "MM/dd/yyyy");
    },
  },
  computed: {
    localeText: function() {
      return this.$store.state.locale.recordVaccinePage;
    },
    listVaccines() {
      return this.$store.state.locale.vaccines.map((el) => ({
        tag: el.vaccineNameNormal,
      }));
    },
    calendarLocale() {
      return this.$store.state.calendarLocale;
    },
    listFamilies() {
      return this.$store.state.listFamilies;
    },
    label() {
      return this.$store.state.locale.labelAddAppointment;
    },
  },
  methods: {
    async createNextAppointment() {
      const childname = this.baseInfo.customData.childname;
      const childId = this.baseInfo.customData.childId;

      const listVaccinesForNextTime = this.listNextAppointments.filter(
        ({ isComplete }) => !isComplete
      );

      const nextDate = (duration) => add(new Date(), { days: duration });
      const mapData = listVaccinesForNextTime.map((el) => ({
        dates: nextDate(el.nextDay),
        dot: "red",
        key: nextDate(el.nextDay).toString(),
        customData: {
          selectedVaccines: [el.name],
          note: "",
          childname,
          childId,
          time: "09:30",
        },
      }));

      const listCallCreate = mapData.map((el) =>
        service().appointment.create(el)
      );
      await Promise.all(listCallCreate);
      await this.submit();
      this.$router.push({ name: "dashboard-index" });
    },
    async generateNextAppointment() {
      const childId = this.baseInfo.customData.childId;
      const listVaccines = this.selectedVaccines.map((el) => el.tag);
      const listNextAppointments = await service().util.checkRemainTime(
        childId,
        listVaccines
      );
      this.listNextAppointments = listNextAppointments;
    },
    onOpenModal() {
      this.activeModal = true;
      this.generateNextAppointment();
    },
    onCloseModal() {
      this.activeModal = false;
    },
    async submit() {
      const { childId, childname } = this.baseInfo.customData;
      const data = {
        childId,
        childname,
        selectedVaccines: this.selectedVaccines,
        receivingDate: this.receivingDate,
        batchNO: this.batchNO,
        hostpitalName: this.hostpitalName,
        doctorInfo: this.doctorInfo,
        freetext: this.freetext,
        recordImage: this.base64Url,
      };
      await service().record.create(data);
      const childInfo = (await service().family.getByChildId(childId))[0];
      childInfo.receivedVaccines = [
        ...childInfo.receivedVaccines,
        ...this.selectedVaccines.map((el) => el.tag),
      ];
      await service().family.update(childId, childInfo);
      this.$router.push("/");
    },
    cancel() {
      this.$router.go(-1);
    },
    onCapture(data) {
      this.base64Url = data;
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64Url = reader.result;
      };
    },
    onAddNewVaccine: function(vaccine) {
      this.selectedVaccines.push(vaccine);
    },
    onDeleteVaccine(index) {
      this.selectedVaccines.splice(index, 1);
    },
  },
};
</script>
<style scoped>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}
.preview-image {
  width: 450px;
  height: 300px;
}
#preview img {
  /* max-width: 50%; */
  /* max-height: 500px; */
}
.vue-tags-input {
  background: #324652;
}
</style>
