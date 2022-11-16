<template>
  <button
    @click="open = true"
    type="button"
    class="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
  >
    <span class="sr-only">Navigation</span>

    <Bars3Icon class="w-5 h-5" />
  </button>
  <div>
    <TransitionRoot appear as="template" :show="open">
      <Dialog
        class="overflow-y-auto fixed inset-0 z-50 lg:hidden"
        @close="open = false"
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
          as="template"
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <DialogPanel class="pointer-events-auto relative w-screen max-w-sm">
            <TransitionChild
              as="template"
              enter="ease-in-out duration-500"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-500"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="flex fixed inset-y-0 left-0 w-screen max-w-sm">
                <div
                  class="bg-white w-80 max-w-[calc(100%-3rem)] p-6 dark:bg-slate-800"
                >
                  <button
                    @click="open = false"
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
            <div class="flex h-full flex-col overflow-y-scroll py-6">
              <div class="px-4 sm:px-6">
                <DialogTitle class="text-lg font-medium text-gray-900"
                  >Application Manager</DialogTitle
                >
              </div>
              <div class="relative mt-6 flex-1 px-4 sm:px-6">
                <!-- Replace with your content -->
                <div class="absolute inset-0 px-4 sm:px-6">
                  <div class="h-full">
                    <SidebarItems />
                  </div>
                </div>
                <!-- /End replace -->
              </div>
            </div>
          </DialogPanel>
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

let open = ref(false);
</script>

<style lang="scss" scoped></style>
