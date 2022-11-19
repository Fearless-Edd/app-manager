<template>
  <a
    href="#"
    class="ml-4 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
    ><span class="sr-only">{{ name }}</span>
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
