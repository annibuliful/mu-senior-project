<template>
  <div>
    <div class="flex">
      <SideBar />
      <div
        class="flex-auto mt-10"
        style="margin-left: 30px; margin-right: 30px;"
      >
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
