<template>
  <div class="flex shadow mobile-bar sm-hidden bg-gray-200">
    <!-- <img src="@/assets/people.png" class="ml-auto mr-auto ml-auto mt-8" /> -->
    <div class="flex pb-2 pt-2 flex-auto justify-center">
      <div class="mb-auto cursor-pointer flex-auto">
        <router-link :to="{ name: 'dashboard-home' }">
          <img class="inline w-8" src="@/assets/icons/home.svg" />
        </router-link>
      </div>
      <div class="m-auto cursor-pointer flex-auto">
        <div class="ml-10">
          <img class="inline w-8" src="@/assets/icons/vaccine.svg" />
        </div>
      </div>
      <div class="m-auto cursor-pointer flex-auto">
        <div class="ml-10">
          <img class="inline w-8" src="@/assets/icons/family.svg" />
        </div>
      </div>
      <div class="m-auto cursor-pointer flex-auto">
        <div class="ml-10">
          <img class="inline w-8" src="@/assets/icons/packager.svg" />
        </div>
      </div>
      <div class="m-auto cursor-pointer flex-auto">
        <div class="ml-10">
          <img class="inline w-8" src="@/assets/icons/setting.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    listItem() {
      return this.$store.state.locale;
    },
    currentPath() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
.link-active {
  /* border-bottom: 2px solid #2b6cb0; */
  background-color: #2b6cb0;
}

.mobile-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
}

@media only screen and (min-width: 900px) {
  .sm-hidden {
    display: none;
  }
}
</style>
