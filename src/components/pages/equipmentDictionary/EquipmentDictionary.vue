<template>
  <LayoutHeader
    pageTitle="Equipment Dictionary Form"
    subTitle="Create dictionary list with this form"
  />
  <EquipmentDictionaryForm />
  <div class="relative mx-auto mt-8">
    <div>
      <EquipmentDataTable />
    </div>
  </div>
</template>

<script setup>
import EquipmentDictionaryForm from "./EquipmentDictionaryForm.vue";
import LayoutHeader from "../../layout/Layout-Header.vue";
import EquipmentDataTable from "../../layout/global/EquipmentDataTable.vue"
</script>

<style lang="scss" scoped></style>
