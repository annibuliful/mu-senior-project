<template>
  <div class="lg:rounded overflow-hidden lg:shadow-lg mx-12 ">
    <div class="flex flex-col items-center">
      <div class="w-3/12  pl-2" @click="navigateToDetails">
        <!-- Check if there is profile image or not -->
        <img
          class="w-full"
          v-if="childInfo.profileImg"
          :src="childInfo.profileImg"
          alt=""
        />
        <img class="w-full" v-else src="../assets/boy.png" alt="" />
      </div>

      <div
        class="flex flex-col my-auto ml-4 w-9/12 py-5"
        @click="navigateToDetails"
      >
        <div class="font-bold text-lg">
          {{ name }}
        </div>
        <div class="text-sm text-gray-800 font-normal text-center">
          {{ lebels.age }}: ({{ age }})
        </div>

        <!-- <li v-if="!diseases.length">{{ lebels.noneCongenitalDisease }}</li> -->
        <!-- </ul> -->
        <ul class="list-disc px-6">
          <li class="text-sm text-gray-600 font-normal">
            {{ lebels.noneCongenitalDisease }}
          </li>
        </ul>
      </div>
      <div class="ml-auto flex flex-row h-auto w-2/12">
        <router-link
          class="my-auto mx-auto "
          :to="{
            name: 'edit-family-profile',
            params: { id: id },
          }"
        >
          <img class="h-8" src="../assets/icons/edit-icon.svg" alt="" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDistanceToNow } from "date-fns";

export default {
  data() {
    return {
      childInfo: null,
    };
  },
  created() {
    this.childInfo = this.$store.state.listFamilies.find(
      (el) => el.familyId === this.id
    );
  },
  computed: {
    lebels: function() {
      return this.$store.state.locale.label;
    },
    age() {
      return formatDistanceToNow(new Date(this.birthDate));
    },
  },
  methods: {
    navigateToDetails() {
      this.$router.push({
        name: "summary-family-member",
        params: { id: this.id },
      });
    },
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    diseases: {
      type: Array,
    },
  },
};
</script>
