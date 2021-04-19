<template>
  <div>
    <div
      class="pl-2 pr-2 py-4 flex flex-row shadow-xs bg-gray-200 mt-0 md:justify-center"
    >
      <!-- Check if there is profile image or not -->
      <div class="flex flex-col">
        <img
          class="w-24 md:w-48"
          v-if="childObject.profileImg"
          :src="childObject.profileImg"
          alt=""
        />
        <img class="w-24 md:w-48" v-else src="../assets/boy.png" alt="" />
      </div>

      <!-- Show this family's member info in a column-->

      <div class="flex flex-col my-auto ml-2">
        <div class="font-bold text-blue-800 text-lg md:text-2xl md:ml-4">
          {{ childObject.fullname }}
        </div>
        <div class="text-sm md:ml-4 md:text-lg">
          {{ localeText.age }}: {{ ageInYear }} {{ locale.year }}
          {{ ageRemainingMonth }} {{ locale.month }}
        </div>
      </div>
      <div class="col my-auto ml-6">
        <router-link
          :to="{
            name: 'edit-family-profile',
            params: { id: $route.params.id }
          }"
        >
          <img class="h-6" src="../assets/icons/edit-icon.svg" alt="" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDistanceToNow } from "date-fns";
import { differenceInYears, differenceInMonths } from "date-fns";

import service from "@/services";
export default {
  data() {
    return {
      childInfo: {}
    };
  },
  computed: {
    locale() {
      return this.$store.state.locale;
    },
    localeText: function() {
      return this.$store.state.locale.label;
    },
    localeHistory: function() {
      return this.$store.state.locale.historyPage;
    },

    currentAge() {
      return formatDistanceToNow(new Date(this.childObject.birthDate));
    },
    ageRemainingMonth() {
      const totalMonth = differenceInMonths(
        new Date(),
        this.childObject.birthDate
      );
      return totalMonth % 12;
    },
    ageInYear() {
      return differenceInYears(new Date(), this.childObject.birthDate);
    }
  },

  async created() {
    this.$store.commit("listFamilies");
    const language = this.$store.state.calendarLocale;
    console.log("childObject", this.$route.params.id);

    this.childInfo = (
      await service().family.getByChildId(this.$route.params.id, language)
    )[0];
  },
  props: {
    childObject: {
      type: Object,
      required: true
    }
  },
  methods: {
    async deleteFamily() {
      this.childInfo.isDelete = true;

      try {
        this.$fire({
          title: this.localeText.confirmDelete,
          showCancelButton: true,
          confirmButtonText: this.localeText.yes,
          cancelButtonText: this.localeText.no
        }).then(async r => {
          if (r.value) {
            this.$fire({
              title: this.localeText.deleteSuccess,
              type: "success",
              timer: 3000
            });
            await service().user.update(this.$route.params.id, this.childInfo);
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
