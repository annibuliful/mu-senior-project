<template>
  <div class="w-full">
    <p class="text-2xl mb-10 border-b-2 border-blue-700">
      {{ localeText.aboutUs }}
    </p>

    <div class="flex flex-col w-full">
      <div class="flex flex-row border-orange-600 p-4 justify-center">
        <img class="w-32 md:w-48" src="../../assets/profile4.png" alt="" />
      </div>

      <div class="flex flex-row border-orange-600 p-4 justify-center">
        <div class="w-4/12 md:w-2/12">
          <img class="mx-auto" src="../../assets/profile1.png" />
        </div>
        <div class="w-6/12 flex flex-col">
          <div>ชื่อ</div>
          <div>ชื่อ</div>
          <div>ชื่อ</div>
        </div>
      </div>

      <div class="flex flex-row border-orange-600 p-4 justify-center">
        <div class="w-4/12 md:w-2/12">
          <img class="mx-auto" src="../../assets/profile2.png" />
        </div>
        <div class="w-6/12 flex flex-col">
          <div>ชื่อ2</div>
          <div>ชื่อ2</div>
          <div>ชื่อ2</div>
        </div>
      </div>

      <div class="flex flex-row border-orange-600 p-4 justify-center">
        <div class="w-4/12 md:w-2/12">
          <img class="mx-auto" src="../../assets/profile3.png" />
        </div>
        <div class="w-6/12 flex flex-col">
          <div>ชื่อ3</div>
          <div>ชื่อ3</div>
          <div>ชื่อ3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    localeText() {
      return this.$store.state.locale;
    }
  }
};
</script>
