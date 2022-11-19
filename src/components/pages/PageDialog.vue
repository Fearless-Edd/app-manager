<template>
  <div>
    <button
      type="button"
      @click="openModal"
      class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
    >
      About the Maintenance Calculator
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                About the Maintenance Calculator
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Equipment inclusion criteria have been developed to evaluate
                  each piece of equipment in use at a hospital or health
                  facility. The following details a modifi ed version of the
                  Fennigkoh and Smith model (see reference 6) where a numerical
                  value has been assigned to each device type by classifying its
                  equipment function, clinical application and required
                  maintenance. Adding the number from each subgroup and adding
                  or subtracting a factor based on equipment failure history
                  yields an equipment management (EM) number.
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>
