<template>
  <button
    type="button"
    class="break-inside dark:hover:bg-gray-600 hover:bg-gray-100 p-1 w-full"
    @click="emitClickEvent()"
  >
    <div class="flex items-center space-x-4">
      <slot />

      <span class="text-base font-medium text-gray-600 dark:text-gray-300">{{
        pageName
      }}</span>
    </div>
  </button>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  pageName: {
    type: String,
    default: "Dashboard",
  },
});

const emit = defineEmits(["onUserClick"]);

function emitClickEvent() {
  emit("onUserClick");
}
</script>

<style lang="scss" scoped></style>
