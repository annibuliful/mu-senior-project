<template>
  <div class="flex flex-col h-auto">
    <Modal
      :isActive="activeModal"
      v-on:close="onCloseModal"
      :title="listItem.notify"
    >
      <div v-if="vaccinatingList.length == 0">
        <img
          src="../../assets/doctor-stand.png"
          class="w-32 md:w-48 mx-auto"
          alt=""
        />
        <div class="text-center text-lg">{{ listItem.noNotiNow }}</div>
      </div>
      <div
        v-for="appointment in vaccinatingList"
        :key="appointment.appointmentId"
      >
        <NotificationCard :appointment="appointment"></NotificationCard>
        <!-- <div>{{ appointment.customData.childname }}</div>
        <div>{{ appointment.customData.doseNumber }}</div>
        <div>{{ appointment.customData.selectedVaccines[0] }}</div>
        <div>{{ appointment.dates }}</div> -->
      </div>
    </Modal>
    <div class="flex flex-col w-full bg-orange-400">
      <div class="flex flex-row">
        <div
          class="menu-open bg-orange-700 sm:visible lg:invisible text-white"
          @click="isOpen = !isOpen"
          v-if="!isOpen"
        >
          <div class="mt-2">{{ listItem.menu }}</div>
        </div>

        <div
          class="menu-open bg-orange-700 sm:visible lg:invisible text-white"
          @click="isOpen = !isOpen"
          v-if="isOpen"
        >
          <div class="mt-2">X</div>
        </div>

        <div @click="gotoNews()" class="ml-auto cursor-pointer">
          <div class="mr-2">
            <img src="../../assets/icons/news.svg" alt="" />
          </div>
        </div>
        <div class="mr-2 cursor-pointer">
          <img
            @click="openNotification"
            src="../../assets/icons/notification.svg"
            alt=""
          />
        </div>
        <div class="cursor-pointer">
          <img src="../../assets/logout.svg" class="h-full" @click="logout" />
        </div>
      </div>
    </div>

    <!-- Page View Area for SM Mobile -->
    <div class="flex w-full min-h-screen lg:hidden" v-if="!isOpen">
      <router-view />
    </div>

    <!-- Grid nav for SM Mobile -->
    <div class="z-10 bg-orange-700 w-full lg:hidden"></div>
    <div
      class="lg:hidden flex flex-row w-full flex-wrap justify-start md:justify-center md:min-h-screen bg-orange-400"
      v-if="isOpen"
    >
      <div class="w-full">
        <img
          src="../../assets/menu_web_vac.png"
          class="my-4 w-48 mx-auto"
          alt=""
        />
      </div>

      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class="my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-family' })"
            class="pb-4"
            :class="[
              currentPath === '/dashboard/family' ? 'link-active' : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/family.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.family }}</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class="my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-vaccine' })"
            class="pb-4"
            :class="[
              currentPath === '/dashboard/vaccine' ? 'link-active' : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/vaccine.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.learnVaccine }}</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class="my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-home' })"
            class="pb-4"
            :class="[
              currentPath === '/dashboard/home' ? 'link-active' : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/bi_calendar-date.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.home }}</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class="my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-packager' })"
            class="pb-4"
            :class="[
              currentPath === '/dashboard/vaccinepackager'
                ? 'link-active'
                : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/packager.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.packager }}</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class="my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-backup' })"
            class="pb-4"
            :class="[
              currentPath === '/dashboard/backup' ? 'link-active' : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/sync-cloud.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.backup }}</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class="my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-setting' })"
            class="pb-4"
            :class="[
              currentPath === '/dashboard/setting' ? 'link-active' : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/setting.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.setting }}</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-4/12 mx-2 lg:w-3/12 text-center">
        <div class="my-2 cursor-pointer">
          <div
            @click="onClickLink({ name: 'dashboard-about-us' })"
            class="pb-4"
            :class="[
              currentPath === '/dashboard/about-us'
                ? 'link-active'
                : 'link-item'
            ]"
          >
            <img class="inline w-8" src="@/assets/icons/aboutus.svg" />
            <p class="inline mt-2 pl-3">{{ listItem.aboutUs }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar for > MD Desktop -->
    <div class="lg:flex lg:flex-row lg:w-full hidden">
      <div
        class="flex flex-col w-full px-2 lg:w-2/12 lg:px-4 shadow-xl bg-orange-400 overflow-x-hidden"
      >
        <div class="min-h-screen">
          <div class="flex flex-col h-full">
            <img src="../../assets/menu_web_vac.png" class="mt-8" alt="" />
            <div class="my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-family' })"
                class="pb-4"
                :class="[
                  currentPath === '/dashboard/family'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img class="inline w-8" src="@/assets/icons/family.svg" />
                <p class="inline mt-2 pl-3">{{ listItem.family }}</p>
              </div>
            </div>

            <div class="my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-vaccine' })"
                class="pb-4"
                :class="[
                  currentPath === '/dashboard/vaccine'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img class="inline w-8" src="@/assets/icons/vaccine.svg" />
                <p class="inline mt-2 pl-3">{{ listItem.learnVaccine }}</p>
              </div>
            </div>

            <div class="mt-4 my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-home' })"
                class="pb-4"
                :class="[
                  currentPath === '/dashboard/home'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img
                  class="inline w-8"
                  src="@/assets/icons/bi_calendar-date.svg"
                />
                <p class="inline mt-2 pl-3">{{ listItem.home }}</p>
              </div>
            </div>
            <div class="my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-packager' })"
                class="pb-4"
                :class="[
                  currentPath === '/dashboard/vaccinepackager'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img class="inline w-8" src="@/assets/icons/packager.svg" />
                <p class="inline mt-2 pl-3">{{ listItem.packager }}</p>
              </div>
            </div>

            <div class="my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-backup' })"
                class="pb-4"
                :class="[
                  currentPath === '/dashboard/backup'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img class="inline w-8" src="@/assets/icons/sync-cloud.svg" />
                <p class="inline mt-2 pl-3">{{ listItem.backup }}</p>
              </div>
            </div>
            <div class="my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-setting' })"
                class=""
                :class="[
                  currentPath === '/dashboard/setting'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img class="inline w-8" src="@/assets/icons/setting.svg" />
                <p class="inline mt-2 pl-3">{{ listItem.setting }}</p>
              </div>
            </div>

            <div class="my-2 cursor-pointer">
              <div
                @click="onClickLink({ name: 'dashboard-about-us' })"
                class=""
                :class="[
                  currentPath === '/dashboard/about-us'
                    ? 'link-active'
                    : 'link-item'
                ]"
              >
                <img class="inline w-8" src="@/assets/icons/aboutus.svg" />
                <p class="inline mt-2 pl-3">{{ listItem.aboutUs }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full min-h-screen">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "@/components/common/Modal.vue";
import NotificationCard from "@/components/NotificationCard.vue";
import db from "../../services/offline/db";

import service from "../../services";

export default {
  components: {
    Modal,
    NotificationCard
  },
  async created() {
    this.vaccinatingList = await service().appointment.getVaccinatingStatus(
      this.locale
    );
    console.log("vaccinatingList at create", this.vaccinatingList);
  },
  data() {
    return {
      activeModal: false,
      isOpen: false,
      vaccinatingList: []
    };
  },
  computed: {
    listItem() {
      return this.$store.state.locale;
    },
    currentPath() {
      return this.$route.path;
    },
    locale() {
      return this.$store.state.calendarLocale;
    }
  },
  methods: {
    logout() {
      console.log("called");
      this.$fire({
        title: this.listItem.label.confirmLogout,
        showCancelButton: true,
        confirmButtonText: this.listItem.label.yes,
        cancelButtonText: this.listItem.label.no
      }).then(async r => {
        // console.log("logout");
        if (r.value) {
          await this.onClickBackup();
          localStorage.removeItem("userInfo");
          localStorage.removeItem("login-info");

          await this.deleteIDB();
          this.$fire({
            title: this.listItem.label.logoutSuccess,
            type: "success",
            timer: 3000
          });
          this.$router.push("/login");

          this.refreshApp();
          window.close();
        }
      });
    },

    async onClickBackup() {
      const userId = await JSON.parse(localStorage.getItem("userInfo"))
        .onlineUserId;

      await service().revisionOnline.exportDb(userId);
    },
    refreshApp() {
      window.location.reload();
    },

    async deleteIDB() {
      try {
        await db.delete();
        await db.open();
        console.log("Database successfully deleted");
      } catch (err) {
        console.error("Could not delete database", err);
      }
    },

    async openNotification() {
      this.vaccinatingList = await service().appointment.getVaccinatingStatus(
        this.locale
      );
      console.log("vaccinatingList at method", this.vaccinatingList);
      this.activeModal = !this.activeModal;
    },
    onCloseModal() {
      this.activeModal = false;
    },
    onClickLink: function(link) {
      this.isOpen = !this.isOpen;
      if (this.isCancelLink) {
        return;
      }
      this.$router.push(link);
    },
    gotoNews() {
      this.$router.push({ name: "dashboard-news" });
    }
  }
};
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: width 0.8s;
}
.slide-enter,
.slide-leave-to {
  width: 0;
  /* display: none; */
}
.link-active {
  border: 2px dashed #050300;
  border-radius: 10px;
  padding: 20px 15px 20px 15px;
  /* text-decoration: underline; */
  background-color: rgb(245, 221, 127);
  font-weight: bolder;
}

.link-item {
  border: 2px dashed #503605;
  border-radius: 10px;
  padding: 20px 10px 20px 10px;
  /* text-decoration: underline; */
  background-color: cornsilk;
  font-weight: bold;
}

.img-menu {
  width: 250px;
}
.hamburger-menu {
  margin-top: 2px;
  width: 40px;
  height: 7px;
  background-color: black;
  cursor: pointer;
}
.menu-open {
  text-align: center;
  width: 70px;
  height: auto;
  /* padding: 20px; */
}
</style>
