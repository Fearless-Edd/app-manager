<template>
  <Menu as="div" class="relative ml-3">
    <div>
      <button
        @click="setIsOpen(true)"
        type="button"
        class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
      >
        <span class="sr-only">Navigation</span>
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <!-- <svg width="24" height="24" fill="none" aria-hidden="true">
      <path
        d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg> -->
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

            <div
              class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10"
            >
              <div class="flex items-center justify-between">
                <!-- <label
                for="theme"
                class="text-slate-700 font-normal dark:text-slate-400"
                >Switch theme</label
              > -->
                <div
                  class="relative flex items-center mx-auto pl-0 border-slate-300"
                >
                  <NavbarToggleDark />
                  <NavbarActionButtons name="notification">
                    <i class="fa fa-bell h-5 w-5"></i>
                  </NavbarActionButtons>
                  <NavbarActionButtons name="notification">
                    <i class="fa fa-sign-out h-5 w-5"></i>
                  </NavbarActionButtons>
                </div>
              </div>
            </div>
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
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
} from "@headlessui/vue";

const links = ref([
  { name: "Profile", href: "#" },
  { name: "Manage Account", href: "#" },
  { name: "Sign out", href: "#" },
]);

let isOpen = ref(false);

function setIsOpen(value) {
  isOpen.value = value;
}
</script>

<style lang="scss" scoped></style>
