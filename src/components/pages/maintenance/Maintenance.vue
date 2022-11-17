<template>
  <LayoutHeader
    pageTitle="Maintenace Calculator"
    subTitle="Risk-based Biomedical Equipment Management Programme"
  />
  <div
    class="relative mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-12"
  >
    <SummaryCard />
  </div>
  <DataTable />
  <LayoutRightSidenav>
    <li>
      <PageDialog />
    </li>
    <li class="ml-4 mb-3">
      <a
        href="#settingUpCodeEditor"
        class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
        ><svg
          width="3"
          height="24"
          viewBox="0 -9 3 24"
          class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
        >
          <path
            d="M0 0L3 3L0 6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path></svg
        >Equipment Function</a
      >
    </li>
    <AdvertSection />
  </LayoutRightSidenav>
  

</template>

<script setup>
import LayoutHeader from "../../layout/Layout-Header.vue";
import LayoutRightSidenav from "../../layout/Layout-RightSidenav.vue";
import PageDialog from "../PageDialog.vue";
import DataTable from "./DataTable.vue";
import SummaryCard from "./SummaryCard.vue";
import AdvertSection from './AdvertSection.vue';
</script>

<style lang="scss" scoped></style>
