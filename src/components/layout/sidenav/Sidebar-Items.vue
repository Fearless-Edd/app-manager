<template>
  <li>
    <SideNavButtons pageName="Dashboard" @click="store.currentPage = Dashboard">
      <i class="fa fa-dashboard text-2xl text-gray-600 dark:text-gray-300"></i>
    </SideNavButtons>
  </li>
  <li>
    <SideNavButtons
      pageName="Maintenance"
      @click="store.currentPage = Maintenance"
    >
      <i class="fa fa-dashboard text-2xl text-gray-600 dark:text-gray-300"></i>
    </SideNavButtons>
  </li>
  <li>
    <SideNavButtons pageName="Category" @click="store.currentPage = Category">
      <i class="fa fa-dashboard text-2xl text-gray-600 dark:text-gray-300"></i>
    </SideNavButtons>
  </li>
  <li>
    <SideNavButtons
      pageName="Equipment Dictionary"
      @click="store.currentPage = EquipmentDictionary"
    >
      <i class="fa fa-dashboard text-2xl text-gray-600 dark:text-gray-300"></i>
    </SideNavButtons>
  </li>
  <li>
    <SideNavButtons
      pageName="Function Description"
      @click="store.currentPage = FunctionDescription"
    >
      <i class="fa fa-dashboard text-2xl text-gray-600 dark:text-gray-300"></i>
    </SideNavButtons>
  </li>
</template>

<script setup>
import { usePageUpdateStore } from "../../../stores/pageUpdate";
import SideNavButtons from "../../layout/global/SideNavButtons.vue";
import Category from "../../pages/category/Category.vue";
import Dashboard from "../../pages/dashboard/Dashboard.vue";
import EquipmentDictionary from "../../pages/equipmentDictionary/EquipmentDictionary.vue";
import FunctionDescription from "../../pages/functionDescription/FunctionDescription.vue";
import Maintenance from "../../pages/maintenance/Maintenance.vue";

const store = usePageUpdateStore();
</script>

<style lang="scss" scoped></style>
