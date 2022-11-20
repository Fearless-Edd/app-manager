<template>
  <LayoutHeader
    pageTitle="Equipment Dictionary Form"
    subTitle="Create dictionary list with this form"
  />
  <EquipmentDictionaryForm />
  <div class="relative mx-auto mt-8">
    <div>
      <EquipmentDictionaryCard />
    </div>
  </div>
</template>

<script setup>
import EquipmentDictionaryCard from "./EquipmentDictionaryCard.vue";
import EquipmentDictionaryForm from "./EquipmentDictionaryForm.vue";
import LayoutHeader from "../../layout/Layout-Header.vue";
</script>

<style lang="scss" scoped></style>
