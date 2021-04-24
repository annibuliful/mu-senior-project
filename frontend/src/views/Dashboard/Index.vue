<template>
  <div class="flex flex-col h-auto">
    <div class="flex flex-col w-full bg-orange-400">
      <div class="flex flex-row">
        <div
          class="menu-open bg-orange-700  sm:visible lg:invisible text-white"
          @click="isOpen = !isOpen"
          v-if="!isOpen"
        >
          <div class="mt-2">{{ listItem.menu }}</div>
        </div>

        <div
          class="menu-open  bg-orange-700 sm:visible lg:invisible text-white"
          @click="isOpen = !isOpen"
          v-if="isOpen"
        >
          <div class="mt-2">X</div>
        </div>

        <div @click="gotoNews()" class="ml-auto">
          <div class="mr-2  ">
            <img src="../../assets/icons/news.svg" alt="" />
          </div>
        </div>
        <div class="mr-2  ">
          <img src="../../assets/icons/notification.svg" alt="" />
        </div>
      </div>
    </div>

    <!-- Page View Area for SM Mobile -->
    <div class="flex w-full min-h-screen lg:hidden " v-if="!isOpen">
      <router-view />
    </div>

    <!-- Grid nav for SM Mobile -->
    <div class="z-10 bg-orange-700 w-full lg:hidden"></div>
    <div
      class="lg:hidden flex flex-row w-full flex-wrap justify-start md:justify-center md:min-h-screen bg-orange-400"
      v-if="isOpen"
    >
      <div class="w-full">
        <img
          src="../../assets/menu_web_vac.png"
          class="my-4 w-48 mx-auto"
          alt=""
        />
      </div>

      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class="my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-family' })"
            class=" pb-4 "
            :class="[
              currentPath === '/dashboard/family' ? 'link-active' : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/family.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.family }}</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class=" my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-vaccine' })"
            class=" pb-4 "
            :class="[
              currentPath === '/dashboard/vaccine' ? 'link-active' : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/vaccine.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.learnVaccine }}</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class="my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-home' })"
            class=" pb-4 "
            :class="[
              currentPath === '/dashboard/home' ? 'link-active' : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/bi_calendar-date.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.home }}</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class=" my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-packager' })"
            class=" pb-4 "
            :class="[
              currentPath === '/dashboard/vaccinepackager'
                ? 'link-active'
                : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/packager.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.packager }}</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class=" my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-backup' })"
            class=" pb-4 "
            :class="[
              currentPath === '/dashboard/backup' ? 'link-active' : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/sync-cloud.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.backup }}</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class=" my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-setting' })"
            class=" pb-4 "
            :class="[
              currentPath === '/dashboard/setting' ? 'link-active' : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/setting.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.setting }}</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class=" my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-about-us' })"
            class=" pb-4 "
            :class="[
              currentPath === '/dashboard/about-us'
                ? 'link-active'
                : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/aboutus.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.aboutUs }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar for > MD Desktop -->
    <div class="lg:flex lg:flex-row lg:w-full hidden">
      <div
        class="flex flex-col w-full px-2 lg:w-2/12 lg:px-4  shadow-xl  bg-orange-400 overflow-x-hidden  "
      >
        <div class="min-h-screen">
          <div class="flex flex-col h-full ">
            <img src="../../assets/menu_web_vac.png" class="mt-8" alt="" />
            <div class="my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-family' })"
                class=" pb-4 "
                :class="[
                  currentPath === '/dashboard/family'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img class="inline w-8" src="@/assets/icons/family.svg" />
                <p class="inline mt-2 pl-3">{{ listItem.family }}</p>
              </div>
            </div>

            <div class=" my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-vaccine' })"
                class=" pb-4 "
                :class="[
                  currentPath === '/dashboard/vaccine'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img class="inline w-8" src="@/assets/icons/vaccine.svg" />
                <p class="inline mt-2 pl-3">{{ listItem.vaccine }}</p>
              </div>
            </div>

            <div class="mt-4 my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-home' })"
                class=" pb-4 "
                :class="[
                  currentPath === '/dashboard/home'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img
                  class="inline w-8"
                  src="@/assets/icons/bi_calendar-date.svg"
                />
                <p class="inline mt-2 pl-3">{{ listItem.home }}</p>
              </div>
            </div>
            <div class=" my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-packager' })"
                class=" pb-4 "
                :class="[
                  currentPath === '/dashboard/vaccinepackager'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img class="inline w-8" src="@/assets/icons/packager.svg" />
                <p class="inline mt-2 pl-3">{{ listItem.packager }}</p>
              </div>
            </div>

            <div class=" my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-backup' })"
                class=" pb-4 "
                :class="[
                  currentPath === '/dashboard/backup'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img class="inline w-8" src="@/assets/icons/sync-cloud.svg" />
                <p class="inline mt-2 pl-3">{{ listItem.backup }}</p>
              </div>
            </div>
            <div class=" my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-setting' })"
                class=""
                :class="[
                  currentPath === '/dashboard/setting'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img class="inline w-8" src="@/assets/icons/setting.svg" />
                <p class="inline mt-2 pl-3">{{ listItem.setting }}</p>
              </div>
            </div>

            <div class=" my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-about-us' })"
                class=""
                :class="[
                  currentPath === '/dashboard/about-us'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img class="inline w-8" src="@/assets/icons/aboutus.svg" />
                <p class="inline mt-2 pl-3">{{ listItem.aboutUs }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full  min-h-screen">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false
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
      this.isOpen = !this.isOpen;
      if (this.isCancelLink) {
        return;
      }
      this.$router.push(link);
    },
    gotoNews() {
      this.$router.push({ name: "dashboard-news" });
    }
  }
};
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: width 0.8s;
}
.slide-enter,
.slide-leave-to {
  width: 0;
  /* display: none; */
}
.link-active {
  border: 2px dashed #050300;
  border-radius: 10px;
  padding: 20px 15px 20px 15px;
  /* text-decoration: underline; */
  background-color: rgb(245, 221, 127);
  font-weight: bolder;
}

.link-item {
  border: 2px dashed #503605;
  border-radius: 10px;
  padding: 20px 10px 20px 10px;
  /* text-decoration: underline; */
  background-color: cornsilk;
  font-weight: bold;
}

.img-menu {
  width: 250px;
}
.hamburger-menu {
  margin-top: 2px;
  width: 40px;
  height: 7px;
  background-color: black;
  cursor: pointer;
}
.menu-open {
  text-align: center;
  width: 70px;
  height: auto;
  /* padding: 20px; */
}
</style>
