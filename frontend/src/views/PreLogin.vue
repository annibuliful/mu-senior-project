<template>
  <div class="lg:w-1/2 w-11/12 mx-auto">
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
    <div class="flex justify-evenly">
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
    <div class="list-card">
      <div class="block my-16" v-if="selectedAction === 'vaccines'">
        <div v-for="item in listVaccines" :key="item.vaccineId" class="my-4">
          <VaccineCard
            :vaccineId="item.vaccineId"
            :vaccineMedicalName="item.vaccineMedicalName"
            :vaccineNameNormal="item.vaccineNameNormal"
            :shortDes="item.shortDes"
            v-on:on-click="onSelectVaccine"
          />
        </div>
      </div>

      <div class="block my-16" v-if="selectedAction === 'news'">
        <div v-for="item in loadedListNews" :key="item.newsId" class="my-4">
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
      <button
        class="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded mx-auto block"
        @click="loadMore"
      >
        {{ locale.loadmore }}
      </button>
    </div>
    <button
      class="btn-primary hover:bg-orange-700 w-full lg:w-1/2 mx-auto my-8"
      @click="onLinkToLogin"
    >
      {{ locale.login }}
    </button>
  </div>
</template>

<script>
import services from "@/services";
import VaccineCard from "@/components/VaccineCardPre";
import NewsCard from "@/components/NewsCard";
import CovidStat from "@/components/Covid/Stat";

export default {
  components: {
    VaccineCard,
    NewsCard,
    CovidStat
  },
  data() {
    return {
      limitVaccine: 3,
      limitNews: 3,
      offsetVaccine: 0,
      offsetNews: 0,
      selectedAction: "news", // vaccines | news
      listVaccines: [],
      loadedListNews: []
    };
  },
  created: function() {
    const language = this.$store.state.calendarLocale;
    this.listVaccines = services().util.getVaccineInfoByQuery(
      { limit: this.limitVaccine, offset: this.offsetVaccine },
      language
    );
    this.loadedListNews = services().util.getNewsInfoByQuery(
      { limit: this.limitNews, offset: this.offsetNews },
      language
    );
  },
  methods: {
    loadMore() {
      if (this.selectedAction === "vaccines") {
        this.offsetVaccine += 3;
        if (this.offsetVaccine > this.listVaccines.lenght) {
          this.offsetVaccine = this.listVaccines.lenght;
        }
        const language = this.$store.state.calendarLocale;
        this.listVaccines = this.listVaccines.concat(
          services().util.getVaccineInfoByQuery(
            { limit: this.limitVaccine, offset: this.offsetVaccine },
            language
          )
        );
      } else if (this.selectedAction === "news") {
        this.offsetNews += 3;
        if (this.offsetNews > this.loadedListNews.lenght) {
          this.offsetNews = this.loadedListNews.lenght;
        }
        const language = this.$store.state.calendarLocale;
        this.loadedListNews = this.loadedListNews.concat(
          services().util.getNewsInfoByQuery(
            { limit: this.limitNews, offset: this.offsetNews },
            language
          )
        );
      }
    },
    onChangeAction: function(action) {
      this.selectedAction = action;
    },
    onSelectVaccine: function(id) {
      this.$router.push({ name: "vaccine-info", params: { id } });
    },
    onSelectNews(newsId) {
      this.$router.push({ name: "news-info", params: { newsId } });
    },
    onLinkToLogin: function() {
      this.$router.push("/");
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
<style scoped>
.container {
  margin: 10% auto;
}
.list-card {
  min-height: 68vh;
}
.label-title {
  @apply border-b-2 text-2xl text-center cursor-pointer px-8 py-2;
}
.label-title-active {
  @apply border-b-2 border-orange-700 text-2xl text-center cursor-pointer px-8 py-2;
}
</style>
