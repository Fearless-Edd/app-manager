<template>
  <button
    @click="open = true"
    type="button"
    class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
  >
    <span class="sr-only">Notifications</span>

    <i class="fa fa-bell"></i>
  </button>

  <TransitionRoot appear as="template" :show="open">
    <Dialog class="overflow-y-auto fixed inset-0 z-50" @close="open = false">
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
        enter-from="translate-x-full"
        enter-to="translate-x-0"
        leave="transition  ease-in-out transform  duration-300"
        leave-from="translate-x-0"
        leave-to="translate-x-full"
        as="template"
      >
        <div class="flex fixed inset-y-0 right-0 max-w-full">
          <div class="bg-white w-80 max-w-full dark:bg-slate-800">
            <button
              @click="open = false"
              type="button"
              class="absolute z-10 top-5 right-4 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              tabindex="0"
            >
              <span class="sr-only">Close navigation</span>
              <XMarkIcon class="w-6 h-6 overflow-visible" />
            </button>
            <div
              class="h-full flex-col overflow-y-scroll bg-white dark:bg-slate-800 py-6 shadow-lg"
            >
              <div class="px-4 sm:px-6">
                <DialogTitle
                  class="text-lg font-medium text-gray-900 dark:text-gray-50"
                  >Notifications</DialogTitle
                >
              </div>
              <div class="relative mt-6 flex-1 px-4 sm:px-6">
                <!-- Replace with your content -->
                <div class="sm:px-6">
                  <NotificationItems />
                </div>
                <!-- /End replace -->
              </div>
            </div>
          </div>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import NotificationItems from "./Notification-Items.vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const open = ref(false);
</script>
