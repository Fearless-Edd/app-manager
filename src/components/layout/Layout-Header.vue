<template>
  <header id="header" class="relative">
    <div>
      <div class="flex items-center">
        <h1
          class="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
        >
          {{ pageTitle }}
        </h1>
      </div>
    </div>
    <p class="mt-2 text-md text-slate-700 dark:text-slate-400">
      {{ subTitle }}
    </p>
  </header>
</template>

<script setup>
const props = defineProps({
  pageTitle: {
    type: String,
    default: "Page Title",
  },
  subTitle: {
    type: String,
    default: "Details on page content",
  },
});
</script>

<style lang="scss" scoped></style>
