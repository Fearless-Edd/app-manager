<template>
  <LayoutHeader
    pageTitle="Equipment Category Form"
    subTitle="Create category list with this form"
  />
  <CategoryForm />
  <div
    class="relative mx-auto mt-8"
  >
    <div>
      <CategoryCard />
    
    </div>
  </div>
</template>

<script setup>
import CategoryCard from './CategoryCard.vue'
import CategoryForm from './CategoryForm.vue'
import LayoutHeader from '../../layout/Layout-Header.vue';


</script>

<style lang="scss" scoped>

</style>