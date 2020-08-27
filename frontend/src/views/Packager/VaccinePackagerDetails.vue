<template>
  <div class="mx-8">
    <div class="text-blue-800 p-2 font-bold text-center text-lg lg:text-xl">
      {{ packagerDetails.packageTitle }}
    </div>

    <div v-for="item in listOfVaccineInPackage" :key="item.vaccineId">
      <VaccineStatusCard class="mb-4"
        :vaccineId="item.vaccineId"
        :vaccineNameMedical="item.vaccineNameMedical"
        :vaccineNameNormal="item.vaccineNameNormal"
      ></VaccineStatusCard>
    </div>
  </div>
</template>

<script>
import VaccineStatusCard from "../../components/VaccineStatusCard";
export default {
  components: {
    VaccineStatusCard,
  },
  data() {
    return {
      packagerDetails: {},
      listOfVaccineInPackage: [],
    };
  },

  created() {
    this.$store.commit("getPackagerDetail", this.$route.params.id);
    this.packagerDetails = this.$store.state.selectedPackagerDetails;
    this.listOfVaccineInPackage = this.packagerDetails.vaccineInPackage;
    // console.log("in pack",this.packagerDetails.vaccineInPackage)
  },
};
</script>

vaccinePackages: [ { packageId: "pk0001", packageTitle:
"วัคซีนแนะนำสำหรับผู้เดินทางไปประเทศออสเตรเรีย", packageSubTitle: "",
vaccineInPackage: [ { vaccineId: "vc0028", vaccineNameMedical: "Cholera",
vaccineNameNormal: "[ENG]อหิวาตกโรค", shortDes:
"โดยทั่วไปวัคซีนป้องกันอหิวาตกโรค ไม่มีที่ใช้ในกรณีทั่วไป
การเดินทางไปในพื้นที่ที่มีโรคนี้เป็น โรคประจําถิ่น
ถ้าระมัดระวังเรื่องอาหารและน้ําดื่มจะมีโอกาสเสี่ยงต่อโรคนี้น้อยมาก ดังนั้น
จึงควร
พิจารณาให้วัคซีนเฉพาะเมื่อจะเดินทางไปในพื้นที่ที่มีการระบาดที่มีการสุขาภิบาลต่ํา
หรือต้องเดินทางไป ในสถานการณ์เฉพาะที่มีความเสี่ยงต่อการระบาด
เช่นภายหลังภัยธรรมชาติครั้งใหญ่แม้จะได้วัคซีนอนามัย ส่วนบุคคล
ยังมีความจําเป็นเพราะยังสามารถเกิดโรคได้ แม้จะได้รับวัคซีน
องค์การอนามัยโลกแนะนํา
ให้พิจารณาใช้วัคซีนอหิวาตกโรคชนิดรับประทานเพื่อการป้องกันและควบคุมอหิวาตกโรค
ในพื้นที่ที่เกิด
การระบาดหรือเป็นโรคประจําถิ่นควบคู่ไปกับมาตรการป้องกันควบคุมโรคอื่นๆ", }, {
vaccineId: "vc0029", vaccineNameMedical: "Typhoid", vaccineNameNormal:
"[ENG]โรคทัยฟอยด์", shortDes: "เนื่องจากโรคนี้พบน้อยลงมากในประเทศไทย
รวมทั้งประสิทธิภาพของวัคซีนมีจํากัดและป้องกัน
ได้ระยะสั้นจึงไม่แนะนําให้ในเด็กปกติทั่วๆ ไป แต่แนะนําให้เฉพาะผู้ที่มีความเสี่ยง
เช่น ผู้ที่จะเดินทางไป ในพื้นที่ที่มีการระบาด หรือพื้นที่ที่มีความชุกของโรคสูง
เช่น ประเทศในแถบเอเชียใต้ เช่น อินเดีย เนปาล บังกลาเทศ
และไม่มั่นใจว่าจะหลีกเลี่ยงน้ําหรืออาหารที่อาจปนเปื้อนเชื้อได้
หรือผู้ที่ต้องปฏิบัติงานใน ห้องปฏิบัติการเกี่ยวกับเชื้อทัยฟอยด์", }, ], },
