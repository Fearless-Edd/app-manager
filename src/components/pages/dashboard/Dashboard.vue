<template>
  <LayoutHeader
    pageTitle="Dashboard"
    subTitle="Summary of the state of your medical equipment"
  />
  <div
    class="relative mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 z-20 gap-3 mt-12"
  >
    <div
      class="bg-white px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear mb-3"
    >
      <div class="w-full flex items-center justify-between">
        <span class="font-medium text-sm text-slate-400"
          >Anesthesia Machine</span
        >
        <button
          class="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center"
        >
          <i class="fa fa-close text-xs"></i>
        </button>
      </div>
      <div class="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
        <div class="ml-3">
          <span class="font-semibold tracking-tight text-xs"
            >Planned Preventive Maintenance
          </span>
          <span class="text-xs leading-none opacity-50"
            >should be scheduled for a six months interval</span
          >
          <p class="text-xs leading-4 pt-2 italic opacity-70">
            "Assigned to ..."
          </p>
          <span
            class="text-[10px] text-blue-500 font-medium leading-4 opacity-75"
            >a few seconds ago</span
          >
        </div>
      </div>
    </div>
    <div
      class="bg-white px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear mb-3"
    >
      <div class="w-full flex items-center justify-between">
        <span class="font-medium text-sm text-slate-400"
          >Anesthesia Machine</span
        >
        <button
          class="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center"
        >
          <i class="fa fa-close text-xs"></i>
        </button>
      </div>
      <div class="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
        <div class="ml-3">
          <span class="font-semibold tracking-tight text-xs"
            >Planned Preventive Maintenance
          </span>
          <span class="text-xs leading-none opacity-50"
            >should be scheduled for a six months interval</span
          >
          <p class="text-xs leading-4 pt-2 italic opacity-70">
            "Assigned to ..."
          </p>
          <span
            class="text-[10px] text-blue-500 font-medium leading-4 opacity-75"
            >a few seconds ago</span
          >
        </div>
      </div>
    </div>
    <div
      class="bg-white px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear mb-3"
    >
      <div class="w-full flex items-center justify-between">
        <span class="font-medium text-sm text-slate-400"
          >Anesthesia Machine</span
        >
        <button
          class="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center"
        >
          <i class="fa fa-close text-xs"></i>
        </button>
      </div>
      <div class="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
        <div class="ml-3">
          <span class="font-semibold tracking-tight text-xs"
            >Planned Preventive Maintenance
          </span>
          <span class="text-xs leading-none opacity-50"
            >should be scheduled for a six months interval</span
          >
          <p class="text-xs leading-4 pt-2 italic opacity-70">
            "Assigned to ..."
          </p>
          <span
            class="text-[10px] text-blue-500 font-medium leading-4 opacity-75"
            >a few seconds ago</span
          >
        </div>
      </div>
    </div>
    <LayoutRightSidenav>
      <li>
        <a
          href="#settingUpWebDev"
          class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          >About the Maintenance Calculator</a
        >
      </li>
      <li class="ml-4">
        <a
          href="#settingUpCodeEditor"
          class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          ><svg
            width="3"
            height="24"
            viewBox="0 -9 3 24"
            class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path></svg
          >Equipment Function</a
        >
      </li>
    </LayoutRightSidenav>
  </div>
</template>

<script setup>
import LayoutHeader from "../../layout/Layout-Header.vue";
import LayoutRightSidenav from "../../layout/Layout-RightSidenav.vue";
</script>

<style lang="scss" scoped></style>
