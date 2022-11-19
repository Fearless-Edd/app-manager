<template>
  <div
    class="relative block p-6 overflow-hidden border bg-white border-slate-100 rounded-lg shadow hover:shadow-xl transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear mb-3"
  >
    <div class="justify-between sm:flex">
      <div>
        <h5 class="text-xl font-bold text-slate-900">Anesthesia Machine</h5>
        <p class="mt-1 text-xs font-medium text-slate-600">
          Equipment Management # - 20
        </p>
      </div>
      <div class="flex gap-2">
        <button
          class="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center"
          @click="store.currentPage = MaintenanceDetail"
        >
          <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
        </button>
        <button
          class="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center"
        >
          <i class="fa-solid fa-xmark text-xs"></i>
        </button>
      </div>
    </div>

    <div class="mt-4 sm:pr-8">
      <p class="text-sm text-slate-500">
        Equipment should be included in your equipment inventory scheduled for
        Planned Preventive Maintenance with an Inspection Frequency three (T)
        times yearly.
      </p>
    </div>

    <dl class="flex mt-6">
      <div class="flex flex-col-reverse">
        <dt class="text-sm font-medium text-slate-600">Included(I)</dt>
        <dd class="text-xs text-slate-500">Equipment Class</dd>
      </div>

      <div class="flex flex-col-reverse ml-3 sm:ml-6">
        <dt class="text-sm font-medium text-slate-600">Three-yearly(T)</dt>
        <dd class="text-xs text-slate-500">Inspection Frequency</dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import MaintenanceDetail from "../../pages/maintenance/MaintenanceDetail.vue";
import { usePageUpdateStore } from "../../../stores/pageUpdate";

const store = usePageUpdateStore();
</script>

<style lang="scss" scoped></style>
