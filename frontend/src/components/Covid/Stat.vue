<template>
  <div>
    <section class="summary my-4 rounded text-center">
      <p class="text-center text-white my-2">Cases</p>
      <p class="text-white">{{ confirmed }}</p>
      <p class="text-white">[ + {{ newConfirmed }} ]</p>
    </section>
    <div class="grid-cols-3 grid gap-4 rounded">
      <div class="recovery text-center">
        <p class="text-center text-white my-2">Recovered</p>
        <p class="text-white">{{ recovered }}</p>
        <p class="text-white">[ + {{ newRecovered }} ]</p>
      </div>
      <div class="hospitalize rounded text-center">
        <p class="text-center text-white my-2">Hospitalized</p>
        <p class="text-white">{{ hospitalized }}</p>
        <p class="text-white">[ {{ newHospitalized }} ]</p>
      </div>
      <div class="death rounded text-center">
        <p class="text-center text-white my-2">Death</p>
        <p class="text-white">{{ death }}</p>
        <p class="text-white">[ + {{ newDeath }} ]</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    confirmed: {
      type: Number
    },
    recovered: {
      type: Number
    },
    hospitalized: {
      type: Number
    },
    death: {
      type: Number
    },
    newConfirmed: {
      type: Number
    },
    newRecovered: {
      type: Number
    },
    newHospitalized: {
      type: Number
    },
    newDeath: {
      type: Number
    }
  }
};
</script>
<style scoped>
.summary {
  background-color: #e1298e;
  padding: 30px 10px;
}

.recovery {
  background-color: #046034;
  padding: 30px 10px;
}

.hospitalize {
  background-color: #179c9b;
  padding: 30px 10px;
}

.death {
  background-color: #666;
  padding: 30px 10px;
}
</style>
