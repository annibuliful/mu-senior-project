<template>
  <div class="lg:w-1/2 w-11/12 mx-auto">
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
        <div v-for="item in listNews" :key="item.newsId" class="my-4">
          <NewsCard
            :id="item.newsId"
            :title="item.title"
            :description="item.description"
            v-on:on-click="onSelectVaccine"
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
      class="btn-primary hover:bg-blue-700 w-full lg:w-1/2 mx-auto my-8"
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

export default {
  components: {
    VaccineCard,
    NewsCard,
  },
  data() {
    return {
      limit: 3,
      offset: 0,
      selectedAction: "news", // vaccines | news
      listVaccines: [],
      listNews: [
        {
          title: "Covid",
          newsId: "news1",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
      ],
    };
  },
  created: function() {
    const language = this.$store.state.calendarLocale;
    this.listVaccines = services().util.getVaccineInfoByQuery(
      { limit: this.limit, offset: this.offset },
      language
    );
  },
  methods: {
    loadMore() {
      this.offset += 3;
      const language = this.$store.state.calendarLocale;
      this.listVaccines = this.listVaccines.concat(
        services().util.getVaccineInfoByQuery(
          { limit: this.limit, offset: this.offset },
          language
        )
      );
    },
    onChangeAction: function(action) {
      this.selectedAction = action;
    },
    onSelectVaccine: function(id) {
      this.$router.push({ name: "vaccine-info", params: { id } });
    },
    onLinkToLogin: function() {
      this.$router.push("/");
    },
  },
  computed: {
    locale: function() {
      return this.$store.state.locale;
    },
  },
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
  @apply border-b-2 border-blue-700 text-2xl text-center cursor-pointer px-8 py-2;
}
</style>
