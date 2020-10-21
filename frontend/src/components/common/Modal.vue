<script>
export default {
  name: "modal",
  data() {
    return {
      vaccineDetails: {},
    };
  },
  props: {
    vaccineId: {
      type: String,
      required: true,
    },
  },
  computed: {
    localeText: function() {
      return this.$store.state.locale.vaccineDetailsPage;
    },
  },
  methods: {
    close() {
      console.log("CLOSSEEEEEEEEE");
      this.$emit("close");
    },
  },
  created() {
    this.$store.commit("getVaccineDetail", this.vaccineId);
    console.log("this.vaccineId 2", this.vaccineId);
    this.vaccineDetails = this.$store.state.selectedVaccineDetails;
    console.log("vaccineDetails 3", this.vaccineDetails);
  },
};
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal w-10/12"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header flex flex-row" id="modalTitle">
          <!-- This is {{ vaccineDetails.vaccineNameNormal }} -->
          <div
            class="mt-2 text-blue-800 p-2 font-bold text-center text-lg lg:text-xl "
          >
            {{ vaccineDetails.vaccineNameNormal }}
          </div>

          <div>
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </div>
        </header>
        <section class="modal-body" id="modalDescription">
          <div class="mt-2 text-blue-800 p-2 font-bold ">
            {{ localeText.description }}
          </div>
          <div class="ml-2">{{ vaccineDetails.shortDes }}</div>
          <div class=" text-blue-800 p-2 font-bold">
            {{ localeText.suggestedAge }}
          </div>
          <div
            class="lg:text-center"
            v-html="vaccineDetails.displayedSuggestAge"
          ></div>
          <div class=" text-blue-800 p-2 font-bold">
            {{ localeText.warning }}
          </div>
          <div v-html="vaccineDetails.warning"></div>
        </section>
      </div>
    </div>
  </transition>
</template>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  /* width: 300px; */
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  /* padding: 20px; */
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
