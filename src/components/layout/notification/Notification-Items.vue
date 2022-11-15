<template>
  <div
    class="bg-white px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear"
  >
    <div class="w-full flex items-center justify-between">
      <span class="font-medium text-sm text-slate-400">New Notification</span>
      <button
        class="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center"
      >
        <svg class="h-2 w-2 fill-current items-center" viewBox="0 0 20 20">
          <path
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
          />
        </svg>
      </button>
    </div>
    <div class="flex items-center mt-2 rounded-lg px-1 py-1 cursor-pointer">
      <div class="relative flex flex-shrink-0 items-end">
        <img class="h-16 w-16 rounded-full" src="https://i.pravatar.cc/300" />
        <span
          class="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"
        ></span>
      </div>
      <div class="ml-3">
        <span class="font-semibold tracking-tight text-xs">John Doe </span>
        <span class="text-xs leading-none opacity-50"
          >created a new PPM Schedule</span
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

  <!-- <span
    tabindex="0"
    class="focus:outline-none text-sm block leading-normal pb-2 border-gray-300 dark:text-gray-50 text-gray-600"
  >
    Unread
  </span>
  <div class="mt-6 p-3 bg-white rounded shadow flex">
    <div>
      <p tabindex="0" class="focus:outline-none text-sm leading-none">
        <span class="text-indigo-700">James Doe</span> favourited an
        <span class="text-indigo-700">item with model number 12234</span>
      </p>
      <p
        tabindex="0"
        class="focus:outline-none text-xs leading-3 pt-1 text-gray-500"
      >
        2 hours ago
      </p>
    </div>
  </div> -->
</template>

<script setup></script>

<style scoped>
li {
  list-style: none;
}
</style>
