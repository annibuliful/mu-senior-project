<template>
  <div>
    <TopBar></TopBar>
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      {{ locale.news }}
    </p>
    <div v-for="item in listNews" :key="item.newsId" class="my-4">
      <NewsCard
        :newsId="item.newsId"
        :newsTitle="item.newsTitle"
        :exampleContent="item.exampleContent"
        :newsContent="item.newsContent"
        :newsReference="item.newsReference"
      />
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import NewsCard from "../../components/NewsCard.vue";
export default {
  components: {
    NewsCard,
    TopBar,
  },

  computed: {
    listNews: function() {
      return this.$store.state.locale.newsData;
    },
    locale: function() {
      return this.$store.state.locale;
    },
  },
};
</script>
