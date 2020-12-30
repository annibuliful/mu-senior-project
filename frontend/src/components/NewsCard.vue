<template>
  <div>
    <div
      class="w-full mx-auto lg:w-11/12 mt-2 shadow-md p-2 hover:border-gray-200 cursor-pointer"
      @click="onCardClicked"
    >
      <div class="flex flex-row items-center">
        <img
          class="p-2 w-24 h-24 lg:w-48 lg:h-48"
          src="https://via.placeholder.com/150"
        />
        <div class="flex flex-col content-container p-8 description">
          <div class="text-xl ml-5 mt-4 text-blue-800 font-bold my-4">
            {{ title }}
          </div>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "title", "description"],
  methods: {
    onCardClicked() {
      this.$emit("on-click", this.id);
    }
  }
};
</script>
<style scoped>
.content-container {
  @apply w-11/12 mx-auto;
}
.description {
  overflow-y: scroll;
  height: 192px;
}
</style>
