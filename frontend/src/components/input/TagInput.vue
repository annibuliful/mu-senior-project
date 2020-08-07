<template>
  <div
    class="flex flex-col appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none"
  >
    <input
      :placeholder="placeholder"
      class="w-full outline-none"
      v-model="input"
      v-on:keyup.enter="onEnterInput"
    />
    <div
      class="py-1 px-1 m-1 flex"
      v-for="(tag, index) in selectedTags"
      :key="tag"
    >
      <img
        class="w-3 cursor-pointer"
        src="@/assets/icons/close.svg"
        @click="onClickRemove(index)"
      />
      <p class="ml-2">{{ tag }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "placeholder"
    },
    selectedTags: {
      type: Array,
      default: function() {
        return ["1", "2", "3"];
      }
    },
    listTags: {
      type: Array,
      default: function() {
        return ["1", "2", "3"];
      }
    }
  },
  data() {
    return {
      input: ""
    };
  },
  methods: {
    onEnterInput() {
      this.$emit("on-enter", this.input);
      this.input = "";
    },
    onClickRemove(index) {
      this.$emit("on-remove", index);
    }
  }
};
</script>
<style scoped></style>
