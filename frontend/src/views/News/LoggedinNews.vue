<template>
  <div>
    <TopBar></TopBar>
    <p class="text-2xl mb-10 border-b-2 border-orange-700" style="width: auto;">
      {{ locale.news }}
    </p>
    <CovidStat
      :confirmed="covidStat.confirmed"
      :recovered="covidStat.recovered"
      :hospitalized="covidStat.hospitalized"
      :death="covidStat.death"
      :newConfirmed="covidStat.newConfirmed"
      :newRecovered="covidStat.newRecovered"
      :newHospitalized="covidStat.newHospitalized"
      :newDeath="covidStat.newDeath"
      v-if="networkMode === 'online'"
    />
    <div v-for="item in listNews" :key="item.newsId" class="my-4">
      <NewsCard
        :newsId="item.newsId"
        :newsTitle="item.newsTitle"
        :exampleContent="item.exampleContent"
        :newsContent="item.newsContent"
        :newsReference="item.newsReference"
        v-on:on-click="onSelectNews"
      />
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import NewsCard from "../../components/NewsCard.vue";
import CovidStat from "@/components/Covid/Stat";
export default {
  components: {
    NewsCard,
    TopBar,
    CovidStat
  },

  methods: {
    onSelectNews(newsId) {
      //   alert(newsId);
      this.$router.push({ name: "logged-news-info", params: { newsId } });
    }
  },
  computed: {
    listNews: function() {
      return this.$store.state.locale.newsData;
    },
    locale: function() {
      return this.$store.state.locale;
    },
    covidStat: function() {
      return this.$store.state.covidStat;
    },
    networkMode: function() {
      return this.$store.state.networkMode;
    }
  }
};
</script>
