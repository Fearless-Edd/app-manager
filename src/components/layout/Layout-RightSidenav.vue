<template>
  <div
    class="fixed z-20 top-20 bottom-0 right-0 w-[19.5rem] py-10 overflow-y-auto hidden xl:block"
  >
    <div class="px-8">
      <h5
        class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"
      >
        Page Information
      </h5>
      <ul class="text-slate-700 text-sm leading-6">
        <slot />
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
