<template>
  <div class="lg:rounded overflow-hidden border-b">
    <div class="px-4 flex justify-between mb-2 items-center">
      <div>
        <p class="text-md">{{ name }}</p>
        <p class="text-xs">{{ childname }}</p>
        <p class="text-xs text-gray-600">{{ note }}</p>
      </div>
      <div>
        <span class="text-xs text-gray-600 font-normal ">
          {{ time }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "a"
    },
    note: {
      type: String,
      default: "Note Information"
    },
    childname: {
      type: String,
      default: "child A"
    },
    time: {
      type: String,
      default: "13:30"
    }
  }
};
</script>
