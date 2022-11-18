<template>
  <header id="header" class="relative">
    <div>
      <div class="flex items-center justify-between">
        <h1
          class="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
        >
          {{ pageTitle }}
        </h1>
        <div v-if="buttonName">
          <button
            class="inline-flex justify-center rounded-md border border-transparent bg-gray-700 py-1 px-3 text-sm font-medium text-white shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            type="button"
            @click="emitClickEvent()"
          >
            {{ buttonName }}
          </button>
        </div>
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
  buttonName: {
    type: String,
  },
});

const emit = defineEmits(["onUserClick"]);

function emitClickEvent() {
  emit("onUserClick");
}
</script>

<style lang="scss" scoped></style>
