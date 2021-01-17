<template>
  <div>
    <div class="flex flex-col items-center">
      <div v-if="listRecords.length != 0">
        <div v-for="record in listRecords" :key="`${record.recordId}`">
          <HistoryCard :recordObject="record" />
        </div>
      </div>
      <div v-else>
        <div class=" text-center mx-4">
          {{ childInfo.fullname }} {{ localText.nohistory }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryCard from "../../components/HistoryCard.vue";

export default {
  components: {
    HistoryCard
  },
  created() {
    this.childId = Number(this.$route.params.id);
    this.childInfo = this.$store.state.listFamilies.find(
      el => el.familyId === this.childId
    );

    this.$store.commit("listRecordsByChildId", this.childId);
  },
  data() {
    return {
      childId: "",
      childInfo: {}
    };
  },
  computed: {
    listRecords() {
      return this.$store.state.listRecords;
    },
    localText() {
      return this.$store.state.locale.historyPage;
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64Url = reader.result;
      };
    }
  }
};
</script>
