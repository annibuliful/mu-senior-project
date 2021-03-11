<template>
  <div
    :class="classMenuIcon"
  >
    <img src="@/assets/icons/menu.svg" class="ml-auto img-menu relative mr-2 p-2 overflow-x-scroll " @click="onClickMenu"/>
    <div class="flex flex-col h-full bg-orange-300 pr-4" v-if="isClicked">
      <div class="mt-auto mb-auto cursor-pointer pb-2 pt-2">
        <div
          @click="onClickLink({ name: 'dashboard-home' })"
          class="ml-6 pb-4 "
          :class="[currentPath === '/dashboard/home' ? 'link-active':'link-item']"
        >
          <img class="inline w-8" src="@/assets/icons/home.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.home }}</p>
        </div>
      </div>
      <div class=" mb-auto cursor-pointer">
        <div
          @click="onClickLink({ name: 'dashboard-vaccine' })"
          class="ml-6 pb-4 "
          :class="[currentPath === '/dashboard/vaccine' ? 'link-active':'link-item']"
        >
          <img class="inline w-8" src="@/assets/icons/vaccine.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.vaccine }}</p>
        </div>
      </div>
      <div class="mb-auto cursor-pointer">
        <div
          @click="onClickLink({ name: 'dashboard-family' })"
          class="ml-6 pb-4 "
          :class="[currentPath === '/dashboard/family' ? 'link-active':'link-item']"
        >
          <img class="inline w-8" src="@/assets/icons/family.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.family }}</p>
        </div>
      </div>
      <div class=" mb-auto cursor-pointer">
        <div
          @click="onClickLink({ name: 'dashboard-packager' })"
          class="ml-6 pb-4 "
          :class="[
            currentPath === '/dashboard/vaccinepackager' ? 'link-active':'link-item',
          ]"
        >
          <img class="inline w-8" src="@/assets/icons/packager.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.packager }}</p>
        </div>
      </div>
      <div class=" mb-auto cursor-pointer">
        <div
          @click="onClickLink({ name: 'dashboard-backup' })"
          class="ml-6"
          :class="[currentPath === '/dashboard/backup' ? 'link-active':'link-item']"
        >
          <img class="inline w-8" src="@/assets/icons/sync-cloud.svg" />
          <p class="inline mt-2 pl-3">{{ listItem.backup }}</p>
        </div>
      </div>
           <div class=" mb-auto cursor-pointer">
        <div
          @click="onClickLink({ name: 'dashboard-setting' })"
          class="ml-6"
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
  data() {
    return {
      isClicked: false,
      classMenuIcon: 'flex flex-col h-screen lg:hidden md:hidden sm:visible fixed z-10'
    };
  },
  props: ["isCancelLink"],
  methods: {
    onClickLink: function(link) {
      if (this.isCancelLink) {
        return;
      }
      this.$router.push(link);
    },
    onClickMenu(){
      this.isClicked = !this.isClicked;
      if(this.isClicked){
        this.classMenuIcon = 'flex flex-col h-screen lg:hidden md:hidden sm:visible fixed z-10 bg-orange-300'
      }
      else{
         this.classMenuIcon = 'flex flex-col h-screen lg:hidden md:hidden sm:visible fixed z-10'
      }
    }
  },
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
  border: 2px dashed  #050300;
  border-radius: 10px;
   padding: 20px 10px 20px 10px;
  /* text-decoration: underline; */
  background-color: rgb(245, 221, 127);
  font-weight: bolder;
  
}


.link-item {
  border: 2px dashed  #503605;
  border-radius: 10px;
  padding: 20px 10px 20px 10px;
  /* text-decoration: underline; */
  background-color: cornsilk;
  font-weight: bold;
}
.img-menu{
  width: 50px;
  height: 50px;
}

@media only screen and (max-width: 1000px) {
  .sm-hidden {
    display: none;
  }
}
</style>
