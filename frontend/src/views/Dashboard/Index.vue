<template>
  <div>
    <div class="flex">
      <SideBar />
      <div
        class="flex-auto mt-10"
        style="margin-left: 30px; margin-right: 30px;"
      >
        <!-- <p class="mt-"></p> -->
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/Sidebar.vue";

export default {
  components: { SideBar }
};
</script>
