<template>
  <div>
    <div class="flex">
      <SideBar :isCancelLink="isCancelLink" />
      <MobileBar :isCancelLink="isCancelLink" />
      <div class="flex-auto mt-10 mb-24 lg:mb-0 lg:mr-10 lg:ml-4">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/Sidebar.vue";
import MobileBar from "@/components/Mobilebar.vue";
export default {
  components: { SideBar, MobileBar },
  computed: {
    isCancelLink: function() {
      return this.$store.state.isFirstTime;
    }
  }
};
</script>
