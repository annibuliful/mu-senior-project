<template>
  <div
    class="flex shadow flex-col h-screen lg:visible md:visible sm-hidden px-8 bg-orange-300 nav-menu"
  >
    <img src="@/assets/menu_web_vac.png" class="ml-auto mr-auto mt-8 img-menu" />
    <div class="flex flex-col h-full ">
      <div class="mt-auto mb-auto cursor-pointer pb-2 pt-2">
        <div
          @click="onClickLink({ name: 'dashboard-home' })"
          class=" pb-4 "
          :class="[currentPath === '/dashboard/home' ? 'link-active':'link-item']"
        >
          <img class="inline w-8" src="@/assets/icons/home.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.home }}</p>
        </div>
      </div>
      <div class=" mb-auto cursor-pointer">
        <div
          @click="onClickLink({ name: 'dashboard-vaccine' })"
          class=" pb-4 "
          :class="[currentPath === '/dashboard/vaccine' ? 'link-active':'link-item']"
        >
          <img class="inline w-8" src="@/assets/icons/vaccine.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.vaccine }}</p>
        </div>
      </div>
      <div class="mb-auto cursor-pointer">
        <div
          @click="onClickLink({ name: 'dashboard-family' })"
          class=" pb-4 "
          :class="[currentPath === '/dashboard/family' ? 'link-active':'link-item']"
        >
          <img class="inline w-8" src="@/assets/icons/family.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.family }}</p>
        </div>
      </div>
      <div class=" mb-auto cursor-pointer">
        <div
          @click="onClickLink({ name: 'dashboard-packager' })"
          class=" pb-4 "
          :class="[
            currentPath === '/dashboard/vaccinepackager' ? 'link-active':'link-item'
          ]"
        >
          <img class="inline w-8" src="@/assets/icons/packager.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.packager }}</p>
        </div>
      </div>
      <div class=" mb-auto cursor-pointer">
        <div
          @click="onClickLink({ name: 'dashboard-setting' })"
          class=""
          :class="[currentPath === '/dashboard/setting' ? 'link-active':'link-item']"
        >
          <img class="inline w-8" src="@/assets/icons/setting.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.setting }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["isCancelLink"],
  methods: {
    onClickLink: function(link) {
      if (this.isCancelLink) {
        return;
      }
      this.$router.push(link);
    }
  },
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

.link-active {
  border: 2px dashed  #050300;
  border-radius: 10px;
  padding: 20px 15px 20px 15px;
  /* text-decoration: underline; */
  background-color: rgb(245, 221, 127);
  font-weight: bolder;
  
}

.img-menu{
  width: 250px;
}

.nav-menu{
  min-width: 300px;
}

.link-item {
  border: 2px dashed  #503605;
  border-radius: 10px;
  padding: 20px 10px 20px 10px;
  /* text-decoration: underline; */
  background-color: cornsilk;
  font-weight: bold;
}

@media only screen and (max-width: 1000px) {
  .sm-hidden {
    display: none;
  }
}
</style>
