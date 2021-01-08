<template>
  <div>
    <div
      class="w-full mx-auto lg:w-11/12 mt-2 shadow-md  hover:border-gray-200 cursor-pointer"
      @click="onCardClicked"
    >
      <div class="flex flex-row items-center">
        <img
          class="p-2 w-24 h-24 lg:w-48 lg:h-48 mb-auto mt-2"
          :src="require(`../assets/news/${newsId}.png`)"
          alt=""
        />
        <div
          class="flex flex-col content-container ml-2 description text-sm w-full lg:justify-center"
        >
          <div class="text-blue-800 font-bold mt-2 lg:text-xl">
            {{ newsTitle }}
          </div>
          <div class="font-thin mt-2">{{ exampleContent }} .....</div>
          <!-- <div class="font-light text-xs">
            {{ locale.label.ref }}:{{ newsReference }}...
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "newsId",
    "newsTitle",
    "exampleContent",
    "newsContent",
    "newsReference"
  ],
  methods: {
    onCardClicked() {
      this.$emit("on-click", this.newsId);
    }
  },
  computed: {
    locale: function() {
      return this.$store.state.locale;
    }
  }
};
</script>
<style scoped>
/* .content-container {
  @apply w-11/12 mx-auto;
} */
.description {
  /* overflow-y: scroll; */
  height: 192px;
}
</style>
