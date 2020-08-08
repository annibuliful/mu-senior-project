<template>
  <div
    class="flex flex-col appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none relative"
  >
    <input
      :placeholder="placeholder"
      class="w-full outline-none"
      v-model="input"
      v-on:keyup.enter="onEnterInput"
    />

    <div
      class="autocomplete-list"
      :class="{ 'autocomplete-list-active': isShowSuggestionList }"
    >
      <div
        v-for="tag in suggestTag"
        :key="tag"
        class="hover:bg-blue-400 hover:text-white border-l border-r border-b"
        @click="onClickSelectTag(tag)"
      >
        {{ tag }}
      </div>
    </div>
    <div
      class="py-1 px-1 m-1"
      v-for="(tag, index) in selectedTags"
      :key="`index-${tag}`"
    >
      <img
        class="w-3 cursor-pointer inline"
        src="@/assets/icons/close.svg"
        @click="onClickRemove(index)"
      />
      <p class="ml-2 inline" style="padding-top: 10px; margin-block-end: 0px;">
        {{ tag }}
      </p>
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
  watch: {
    input: function(val) {
      const isEmpty = val.length === 0;
      if (isEmpty) {
        this.isShowSuggestionList = false;
        return (this.input = val);
      }
      this.onSuggestTag(val);
      this.isShowSuggestionList = true;
      this.input = val;
    }
  },
  data() {
    return {
      input: "",
      isShowSuggestionList: false,
      suggestTag: []
    };
  },
  methods: {
    onEnterInput() {
      this.$emit("on-enter", this.input);
      this.input = "";
    },
    onClickRemove(index) {
      this.$emit("on-remove", index);
    },
    onClickSelectTag(tag) {
      this.$emit("on-enter", tag);
      this.input = "";
    },
    onSuggestTag(val) {
      this.suggestTag = this.listTags.filter(
        tag => tag.search(val) !== -1 && !this.selectedTags.includes(tag)
      );
    }
  }
};
</script>
<style scoped>
.autocomplete-list-active {
  display: block !important;
}
.autocomplete-list {
  display: none;
  background-color: white;
  position: absolute;
  /* border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray; */

  top: 2.3rem;
  left: 0;
  right: 0;
  z-index: 10;
}
.autocomplete-list > div {
  padding: 5px;
  cursor: pointer;
  left: 10px;
}
</style>
