<template>
  <section class="lg:pl-[19.5rem]">
    <div
      class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16"
    >
      <keep-alive>
        <component :is="store.currentPage" />
      </keep-alive>
    </div>
  </section>
</template>

<script setup>
import { usePageUpdateStore } from "../../stores/pageUpdate";

const store = usePageUpdateStore();
</script>

<style lang="scss" scoped></style>
