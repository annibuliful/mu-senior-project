<template>
  <div>
    <div class="flex">
      <SideBar />
      <div class="flex-auto mt-10 mb-24 lg:mb-0 lg:ml-64 lg:mr-10">
        <router-view />
      </div>
    </div>
    <MobileBar />
  </div>
</template>
<script>
import SideBar from "@/components/Sidebar.vue";
import MobileBar from "@/components/Mobilebar.vue";
export default {
  components: { SideBar, MobileBar }
};
</script>
