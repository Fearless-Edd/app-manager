<template>
  <div
    class="bg-white dark:bg-gray-800 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear mb-3"
  >
    <div class="w-full flex items-center justify-between">
      <span class="font-medium text-sm text-slate-400 dark:text-gray-300">Anesthesia Machine</span>
      <button
        class="-mr-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-400 dark:text-gray-300 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center"
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
        <span class="text-[10px] text-blue-500 font-medium leading-4 opacity-75"
          >a few seconds ago</span
        >
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
