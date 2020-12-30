<template>
  <div>
    <div class="flex">
      <SideBar :isCancelLink="isCancelLink" />
      <div class="flex-auto mt-5 mb-24 lg:mb-0 lg:ml-64 lg:mr-10">
        <router-view />
      </div>
    </div>
    <MobileBar :isCancelLink="isCancelLink" />
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
