<template>
  <button
    @click="isOpen = true"
    v-bind="$attrs"
    type="button"
    class="ml-auto w-8 h-8 -my-1 items-center justify-center block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
  >
    <span class="sr-only">Search</span>
    <MagnifyingGlassIcon class="w-5 h-5" />
  </button>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog
      @keydown="navigateResults"
      class="fixed inset-0 z-50 flex justify-center items-start"
      :open="isOpen"
      @close="isOpen = false"
    >
      <TransitionChild
        enter="duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration ease-in"
        leave-from="opacity-100"
        laeve-to="opacity-0"
        as="template"
      >
        <DialogOverlay
          class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
        ></DialogOverlay>
      </TransitionChild>

      <TransitionChild
        enter="duration-200 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration ease-in"
        leave-from="opacity-100 scale-100"
        laeve-to="opacity-0 scale-95"
        as="template"
      >
        <div
          class="flex flex-col overflow-hidden w-full max-w-2xl bg-white rounded-lg mx-4 max-h-[80vh] mt-[10vh] relative"
        >
          <form
            @submit.prevent="onSubmit"
            action=""
            class="relative flex items-center"
          >
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
            >
              <MagnifyingGlassIcon class="h-5 w-5 text-gray-700" />
            </div>

            <input
              @keydown=""
              @input="(e) => search(e.target.value)"
              type="text"
              placeholder="search"
              class="w-full py-4 pl-12 border-b border-gray-100 outline-none placeholder-gray-400"
            />
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                type="button"
                class="flex items-center p-1.5 uppercase font-semibold tracking-wider text-gray-700 rounded-md border border-gray-200 focus:outline-none focus:border-gray-300 text-xxs"
              >
                Esc
              </button>
            </div>
          </form>

          <div class="overflow-auto">
            <ul v-if="results.length > 0" class="divide-y divide-gray-100">
              <li
                class="flex items-center px-4 py-2.5 relative"
                v-for="(item, index) in results"
                :key="index"
                :ref="
                  (el) => {
                    resultsRefs[index] = el;
                  }
                "
                :class="selectedIndex === index ? 'bg-gray-100' : ''"
                @mousemove="selectedIndex = index"
              >
                <img
                  class="h-16 w-16 rounded-full object-cover border-white border-2 shrink-0 bg-gray-200"
                  :src="item.image"
                  alt="item.title"
                />
                <a href="">
                  <span class="absolute inset-0"></span>
                </a>
                <div class="ml-3">
                  <div class="font-semibold text-gray-600">
                    {{ item.title }}
                  </div>
                  <div class="text-xs text-gray-600 mt-1">
                    {{ item.category }}
                  </div>
                </div>
              </li>
            </ul>

            <p
              v-if="results.length === 0"
              class="p-10 text-lg text-center text-gray-400"
            >
              No results
            </p>
          </div>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import axios from "axios";
import { debounce } from "lodash";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import {
  Dialog,
  DialogOverlay,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

const isOpen = ref(false);

const onKeyDown = (event) => {
  if (isOpen.value) return;

  if ((event.metaKey || event.ctrlKey) && event.key === "k") {
    isOpen.value = true;
  }
};

const results = ref([]);
const resultsRefs = ref([]);
const selectedIndex = ref(0);

const search = debounce(async (term) => {
  let { data } = await axios.get("https://fakestoreapi.com/products", {
    params: { term: term },
  });
  results.value = data;
  resultsRefs.value = [];
}, 250);

const navigateResults = (event) => {
  switch (event.code) {
    case "ArrowDown":
      if (selectedIndex.value === results.value.length - 1) {
        selectedIndex.value = 0;
      } else {
        selectedIndex.value += 1;
      }
      break;
    case "ArrowUp":
      if (selectedIndex.value === 0) {
        selectedIndex.value = results.value.length - 1;
      } else {
        selectedIndex.value -= 1;
      }
      break;
  }
  resultsRefs.value[selectedIndex.value]?.scrollIntoView(false);
};

const onTermKeydown = (event) => {
  if (["ArrowUp", "ArrowDown"].includes(event.code)) {
    event.preventDefault();
  }
};

const onSubmit = () => {
  if (results.value[selectedIndex.value]) {
    window.location = results.value[selectedIndex.value].url;
  }
};

onMounted(() => {
  window.addEventListener("keydown", onKeyDown);
  search();
}),
  onUnmounted(() => {
    window.removeEventListener("keydown", onKeyDown);
  });
</script>

<style lang="scss" scoped></style>
