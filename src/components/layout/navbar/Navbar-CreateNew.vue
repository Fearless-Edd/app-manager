<template>
  <Menu as="div" class="relative ml-3">
    <div>
      <button
        @click="setIsOpen(true)"
        type="button"
        class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
      >
        <span class="sr-only">Create New</span>
        <i class="fa fa-plus"></i>
      </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog
        as="div"
        :open="isOpen"
        @close="setIsOpen"
        class="fixed inset-0 z-50"
      >
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
          />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <div
            class="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5"
          >
            <button
              @click="setIsOpen(false)"
              type="button"
              class="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              tabindex="0"
            >
              <span class="sr-only">Close navigation</span>
              <XMarkIcon class="w-6 h-6 overflow-visible" />
            </button>
            <ul class="space-y-6">
              <li v-for="link in links" :key="link.name">
                <a
                  class="hover:text-sky-500 dark:hover:text-sky-400"
                  :href="link.href"
                  >{{ link.name }}</a
                >
              </li>
            </ul>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </Menu>
</template>

<script setup>
import { ref } from "vue";
import {
  Menu,
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const links = ref([
  { name: "Create Maintenance Number", href: "#" },
  { name: "Create PPM Schedule", href: "#" },
  { name: "Coming Soon", href: "#" },
]);

let isOpen = ref(false);

function setIsOpen(value) {
  isOpen.value = value;
}
</script>

<style lang="scss" scoped></style>
