<template>
  <button
    @click="setIsOpen(true)"
    type="button"
    class="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
  >
    <span class="sr-only">Navigation</span>

    <Bars3Icon class="w-5 h-5" />
  </button>
  <div>
    <TransitionRoot appear as="template" :show="isOpen">
      <Dialog
        class="overflow-y-auto fixed inset-0 z-50 lg:hidden"
        :open="isOpen"
        @close="setIsOpen"
      >
        <TransitionChild
          enter="transition-opacity ease-in-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-in-out duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
          as="template"
        >
          <DialogOverlay
            class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
          />
        </TransitionChild>

        <TransitionChild
          enter="transition  ease-in-out transform  duration-300"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition  ease-in-out transform  duration-300"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
          as="template"
        >
          <div class="flex fixed inset-y-0 left-0 w-full max-w-sm">
            <div
              class="bg-white w-80 max-w-[calc(100%-3rem)] p-6 dark:bg-slate-800"
            >
              <button
                @click="setIsOpen(false)"
                type="button"
                class="absolute z-10 top-5 right-16 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                tabindex="0"
              >
                <span class="sr-only">Close navigation</span>
                <XMarkIcon class="w-6 h-6 overflow-visible" />
              </button>
              <nav class="lg:text-sm lg:leading-6 relative">
                <ul>
                  <SidebarItems />
                </ul>
              </nav>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SidebarItems from "./Sidebar-Items.vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon, Bars3Icon } from "@heroicons/vue/24/outline";



let isOpen = ref(false);

function setIsOpen(value) {
  isOpen.value = value;
}
</script>

<style lang="scss" scoped></style>
