<template>
  <div class="flex shadow mobile-bar sm-hidden opacity-100">
    <!-- <img src="@/assets/people.png" class="ml-auto mr-auto ml-auto mt-8" /> -->
    <div class="flex pb-2 pt-2 flex-auto justify-center">
      <div class="mb-auto cursor-pointer flex-auto">
        <router-link :to="{ name: 'dashboard-home' }">
          <img
            class="inline w-8 pb-2"
            src="@/assets/icons/home.svg"
            :class="[currentPath === '/dashboard/home' ? 'link-active' : '']"
          />
        </router-link>
      </div>
      <div class="m-auto cursor-pointer flex-auto">
        <router-link :to="{ name: 'dashboard-vaccine' }" class="ml-10">
          <img
            class="inline w-8 pb-2"
            src="@/assets/icons/vaccine.svg"
            :class="[currentPath === '/dashboard/vaccine' ? 'link-active' : '']"
          />
        </router-link>
      </div>
      <div class="m-auto cursor-pointer flex-auto">
        <router-link :to="{ name: 'dashboard-family' }" class="ml-10">
          <img
            class="inline w-8 pb-2"
            src="@/assets/icons/family.svg"
            :class="[currentPath === '/dashboard/family' ? 'link-active' : '']"
          />
        </router-link>
      </div>
      <div class="m-auto cursor-pointer flex-auto">
        <router-link :to="{ name: 'dashboard-packager' }" class="ml-10">
          <img
            class="inline w-8 pb-2"
            src="@/assets/icons/packager.svg"
            :class="[
              currentPath === '/dashboard/vaccinepackager' ? 'link-active' : '',
            ]"
          />
        </router-link>
      </div>
      <div class="m-auto cursor-pointer flex-auto">
        <router-link :to="{ name: 'dashboard-setting' }" class="ml-10">
          <img
            class="inline w-8 pb-2"
            src="@/assets/icons/setting.svg"
            :class="[currentPath === '/dashboard/setting' ? 'link-active' : '']"
          />
        </router-link>
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
    },
  },
};
</script>

<style scoped>
.link-active {
  border-bottom: 2px solid #2b6cb0;
}

.mobile-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  background-color: #e2e8f0;
}

@media only screen and (min-width: 900px) {
  .sm-hidden {
    display: none;
  }
}
</style>
