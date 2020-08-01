<template>
  <div
    class="flex shadow w-2/12 flex-col h-screen lg:visible md:visible sm-hidden"
  >
    <img src="@/assets/people.png" class="ml-auto mr-auto ml-auto mt-8" />
    <div class="flex flex-col h-full ">
      <div class="mt-auto mb-auto cursor-pointer pb-2 pt-2">
        <router-link
          :to="{ name: 'dashboard-home' }"
          class="ml-10 pb-4 "
          :class="[currentPath === '/dashboard/home' ? 'link-active' : '']"
        >
          <img class="inline w-8" src="@/assets/icons/home.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.home }}</p>
        </router-link>
      </div>
      <div class=" mb-auto cursor-pointer">
        <div class="ml-10">
          <img class="inline w-8" src="@/assets/icons/vaccine.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.vaccine }}</p>
        </div>
      </div>
      <div class="mb-auto cursor-pointer">
        <div class="ml-10">
          <img class="inline w-8" src="@/assets/icons/family.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.family }}</p>
        </div>
      </div>
      <div class=" mb-auto cursor-pointer">
        <div class="ml-10">
          <img class="inline w-8" src="@/assets/icons/packager.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.packager }}</p>
        </div>
      </div>
      <div class=" mb-auto cursor-pointer">
        <router-link
          :to="{ name: 'dashboard-setting' }"
          class="ml-10"
          :class="[currentPath === '/dashboard/setting' ? 'link-active' : '']"
        >
          <img class="inline w-8" src="@/assets/icons/setting.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.setting }}</p>
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
    }
  }
};
</script>

<style scoped>
.link-active {
  border: 2px solid #2b6cb0;
  border-radius: 20px;
  padding: 20px 10px 20px 10px;
}

@media only screen and (max-width: 1000px) {
  .sm-hidden {
    display: none;
  }
}
</style>
