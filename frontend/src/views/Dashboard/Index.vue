<template>
  <div>
    <!-- <div class="flex">
      <SideBar :isCancelLink="isCancelLink" />
      <div class="flex-auto mt-5 mb-24 lg:mb-0 lg:ml-64 lg:mr-10">
        <router-view />
      </div>
    </div>
    <MobileBar :isCancelLink="isCancelLink" /> -->
    <div class=" min-h-screen">
      <button @click="isOpen = !isOpen" class="bg-blue-200 p-5">
        <span v-if="isOpen">Open</span>
        <span v-else>Close</span>
      </button>
      <div class="flex flex-row max-w-7xl mx-auto min-h-screen">
        <transition name="slide">
          <div
            class="flex flex-col w-64  shadow-xl sm:rounded-lg bg-orange-400"
            v-if="isOpen"
          >
            <div class="min-h-screen">
              <div class="flex flex-col h-full ">
                <div class="mt-auto mb-auto cursor-pointer pb-2 pt-2">
                  <div
                    @click="onClickLink({ name: 'dashboard-home' })"
                    class="ml-10 pb-4 "
                    :class="[
                      currentPath === '/dashboard/home' ? 'link-active' : ''
                    ]"
                  >
                    <img class="inline w-8" src="@/assets/icons/home.svg" />
                    <p class="inline mt-2 pl-3">{{ listItem.home }}</p>
                  </div>
                </div>
                <div class=" mb-auto cursor-pointer">
                  <div
                    @click="onClickLink({ name: 'dashboard-vaccine' })"
                    class="ml-10 pb-4 "
                    :class="[
                      currentPath === '/dashboard/vaccine' ? 'link-active' : ''
                    ]"
                  >
                    <img class="inline w-8" src="@/assets/icons/vaccine.svg" />
                    <p class="inline mt-2 pl-3">{{ listItem.vaccine }}</p>
                  </div>
                </div>
                <div class="mb-auto cursor-pointer">
                  <div
                    @click="onClickLink({ name: 'dashboard-family' })"
                    class="ml-10 pb-4 "
                    :class="[
                      currentPath === '/dashboard/family' ? 'link-active' : ''
                    ]"
                  >
                    <img class="inline w-8" src="@/assets/icons/family.svg" />
                    <p class="inline mt-2 pl-3">{{ listItem.family }}</p>
                  </div>
                </div>
                <div class=" mb-auto cursor-pointer">
                  <div
                    @click="onClickLink({ name: 'dashboard-packager' })"
                    class="ml-10 pb-4 "
                    :class="[
                      currentPath === '/dashboard/vaccinepackager'
                        ? 'link-active'
                        : ''
                    ]"
                  >
                    <img class="inline w-8" src="@/assets/icons/packager.svg" />
                    <p class="inline mt-2 pl-3">{{ listItem.packager }}</p>
                  </div>
                </div>
                <div class=" mb-auto cursor-pointer">
                  <div
                    @click="onClickLink({ name: 'dashboard-setting' })"
                    class="ml-10"
                    :class="[
                      currentPath === '/dashboard/setting' ? 'link-active' : ''
                    ]"
                  >
                    <img class="inline w-8" src="@/assets/icons/setting.svg" />
                    <p class="inline mt-2 pl-3">{{ listItem.setting }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <div class="flex w-full  min-h-screen bg-red-400">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import SideBar from "@/components/Sidebar.vue";
// import MobileBar from "@/components/Mobilebar.vue";
export default {
  // components: { SideBar, MobileBar },

  data() {
    return {
      isOpen: true
    };
  },
  computed: {
    listItem() {
      return this.$store.state.locale;
    },
    currentPath() {
      return this.$route.path;
    }
  },
  methods: {
    onClickLink: function(link) {
      if (this.isCancelLink) {
        return;
      }
      this.$router.push(link);
    }
  }
};
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: width 1s;
}
.slide-enter,
.slide-leave-to {
  width: 0;
}
.link-active {
  border: 2px solid #2b6cb0;
  border-radius: 20px;
  padding: 20px 10px 20px 10px;
}
</style>
