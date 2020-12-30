<template>
  <div class="container flex justify-evenly">
    <div @click="onChangeAction('news')">
      <p
        :class="
          selectedAction === 'news' ? 'label-title-active' : 'label-title'
        "
      >
        {{ locale.news }}
      </p>
    </div>
    <div @click="onChangeAction('vaccines')">
      <p
        :class="
          selectedAction === 'vaccines' ? 'label-title-active' : 'label-title'
        "
      >
        {{ locale.vaccine }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedAction: "vaccines" // vaccines | news
    };
  },
  methods: {
    onChangeAction: function(action) {
      this.selectedAction = action;
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
.container {
  width: 50vw;
  margin: 10% auto;
}
.label-title {
  @apply border-b-2 text-2xl text-center cursor-pointer px-8 py-2;
}
.label-title-active {
  @apply border-b-2 border-blue-700 text-2xl text-center cursor-pointer px-8 py-2;
}
</style>
