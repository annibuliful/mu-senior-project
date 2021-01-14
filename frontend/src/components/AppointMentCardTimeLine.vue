<template>
  <div>
    <div class="flex flex-row py-4" v-if="sortBy == 'name'">
      <div class="w-1/4 relative">
        <img
          class="mx-auto img-area "
          :src="require(`../assets/vaccine-img/${vaccineId}.png`)"
          alt=""
        />
        <div
          style="width:10px;height: 100%;z-index: -1;"
          :class="classVerticleByStatus"
        ></div>
      </div>
      <div class="flex flex-col w-3/4">
        <div class="ml-2 mt-2 lg:text-lg text-blue-800 ">
          {{ vaccines[0] }}
        </div>
        <div class=" ml-2">{{ dateFormat }}</div>
        <div class="ml-2 text-sm lg:text-base">{{ childname }}</div>
      </div>
    </div>

    <div class="flex flex-row" v-if="sortBy == 'date'">
      <div class="w-1/4 relative lg:text-xl">
        <div :class="classDate">
          {{ dateFormat }}
        </div>
        <div
          style="width:10px;height: 100%;z-index: -1;"
          :class="classVerticleByStatus"
        ></div>
      </div>

      <div class="flex flex-col w-3/4 lg:ml-4">
        <div class="ml-2 mt-2 text-sm lg:text-lg">{{ vaccines[0] }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { format, addYears } from "date-fns";
import { th } from "date-fns/locale";
export default {
  created() {
    if (this.status == "in-progress") {
      this.classVerticleByStatus += " bg-gray-400";
      this.classDate += " bg-gray-400";
    } else if (this.status == "vaccinated") {
      this.classVerticleByStatus += " bg-green-400";
      this.classDate += " bg-green-400";
    } else if (this.status == "vaccinating") {
      this.classVerticleByStatus += " bg-yellow-400";
      this.classDate += " bg-yellow-400";
    } else if (this.status == "overdue") {
      this.classVerticleByStatus += " bg-red-400";
      this.classDate += " bg-red-400";
    }
  },
  data() {
    return {
      displayThings: "",
      classDate: "mx-auto text-center rounded-full my-2 py-2",
      classLineByStatus: "",
      classVerticleByStatus: "absolute top-0 left-0 right-0 ml-auto mr-auto"
    };
  },
  computed: {
    dateFormat: function() {
      let date = "";
      if (this.$store.state.calendarLocale === "th-TH") {
        date = format(addYears(new Date(this.date), 543), "dd MMM yyyy", {
          locale: th
        });
      } else {
        date = format(new Date(this.date), "dd MMM yyyy");
      }
      return date;
    },

    vaccineId() {
      let vif = this.$store.state.locale.vaccines.find(
        x => x.vaccineNameNormal === this.vaccines[0]
      );
      return vif.vaccineId;
    }
  },
  props: {
    vaccines: {
      type: Array,
      default: function() {
        return [];
      }
    },
    date: {
      type: Date
    },
    status: {
      type: String,
      default: "default",
      validator: function(val) {
        return ["in-progress", "vaccinated", "vaccinating", "overdue"].includes(
          val
        );
      }
    },
    sortBy: {
      type: String
    },
    note: {
      type: String,
      default: "Note Information"
    },
    childname: {
      type: String,
      default: "child A"
    },
    time: {
      type: String,
      default: "13:30"
    }
  }
};
</script>

<style scoped>
.img-area {
  width: 250px;
}
@media only screen and (max-width: 640px) {
  .img-area {
    width: 200px !important;
  }
}
</style>
